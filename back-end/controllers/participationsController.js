const db = require("../models");
const Participations = db.Participations;

exports.createParticipation = async (req, res) => {
    try {
        const participation = await Participations.create({
            utilisateur_email: req.body.utilisateur_email,
            atelierId: req.body.atelierId,
            themeId: req.body.themeId,
            statut: req.body.statut, // 'en_attente', 'confirmé', 'annulé'
        });
        res.status(201).send(participation);
    } catch (error) {
        console.error("Erreur création participation : ", error);
        res.status(500).send({ message: "Impossible de créer la participation." });
    }
};

exports.getAllParticipations = async (req, res) => {
    try {
        const participations = await Participations.findAll();
        res.status(200).send(participations);
    } catch (error) {
        console.error("Erreur récupération participations : ", error);
        res.status(500).send({ message: "Erreur lors de la récupération des participations." });
    }
};

exports.getParticipationById = async (req, res) => {
    try {
        const participation = await Participations.findByPk(req.params.id);
        if (participation) {
            res.status(200).send(participation);
        } else {
            res.status(404).send({ message: "Participation non trouvée." });
        }
    } catch (error) {
        console.error("Erreur récupération participation : ", error);
        res.status(500).send({ message: "Erreur lors de la récupération de la participation." });
    }
};

exports.updateParticipation = async (req, res) => {
    try {
        const result = await Participations.update(req.body, { where: { id: req.params.id } });
        if (result == 1) {
            res.status(200).send({ message: "Participation mise à jour." });
        } else {
            res.status(404).send({ message: "Participation non trouvée." });
        }
    } catch (error) {
        console.error("Erreur mise à jour participation : ", error);
        res.status(500).send({ message: "Erreur lors de la mise à jour de la participation." });
    }
};

exports.deleteParticipation = async (req, res) => {
    try {
        const result = await Participations.destroy({ where: { id: req.params.id } });
        if (result == 1) {
            res.status(200).send({ message: "Participation supprimée." });
        } else {
            res.status(404).send({ message: "Participation non trouvée." });
        }
    } catch (error) {
        console.error("Erreur suppression participation : ", error);
        res.status(500).send({ message: "Erreur lors de la suppression de la participation." });
    }
};

exports.confirmParticipation = async (req, res) => {
    try {
        const id = req.params.id;

        // Récupère la participation à confirmer
        const participationToUpdate = await db.Participations.findByPk(id);

        if (!participationToUpdate) {
            return res.status(404).send({ message: "Participation non trouvée." });
        }

        // Mise à jour du statut de la participation
        await db.Participations.update(
            { statut: 'confirmé' },
            { where: { id: id } }
        );

        res.send({ message: "La participation a été confirmée." });
    } catch (error) {
        console.error("Erreur lors de la confirmation de la participation : ", error);
        res.status(500).send({ message: "Erreur lors de la confirmation de la participation." });
    }
};

exports.getParticipationsByUser = async (req, res) => {
    try {
        const utilisateur_email = req.params.utilisateur_email;

        const participations = await db.Participations.findAll({
            where: { utilisateur_email: utilisateur_email },
            include: [{
                model: db.Ateliers,
                as: 'atelier',
                include: [{
                    model: db.Themes,
                    as: 'theme'
                }]
            }]
        });

        if (participations.length > 0) {
            return res.status(200).send(participations);
        } else {
            return res.status(404).send({ message: "Aucune participation trouvée pour cet utilisateur." });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des participations : ", error);
        res.status(500).send({ message: "Erreur lors de la récupération des participations." });
    }
};