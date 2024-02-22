const db = require("../models");
const Ateliers = db.Ateliers;

exports.createAtelier = async (req, res) => {
    try {
        let atelier = await Ateliers.create(req.body);
        res.status(201).send(atelier);
    } catch (error) {
        console.error("Erreur création atelier : ", error);
        res.status(500).send({ message: "Impossible de créer l'atelier." });
    }
};

exports.getAllAteliers = async (req, res) => {
    try {
        let ateliers = await Ateliers.findAll();
        res.status(200).send(ateliers);
    } catch (error) {
        console.error("Erreur récupération ateliers : ", error);
        res.status(500).send({ message: "Erreur lors de la récupération des ateliers." });
    }
};

exports.getAtelierById = async (req, res) => {
    try {
        let atelier = await Ateliers.findByPk(req.params.id);
        if (atelier) {
            res.status(200).send(atelier);
        } else {
            res.status(404).send({ message: "Atelier non trouvé." });
        }
    } catch (error) {
        console.error("Erreur récupération atelier : ", error);
        res.status(500).send({ message: "Erreur lors de la récupération de l'atelier." });
    }
};

exports.updateAtelier = async (req, res) => {
    try {
        let result = await Ateliers.update(req.body, { where: { id: req.params.id } });
        if (result == 1) {
            res.status(200).send({ message: "Atelier mis à jour." });
        } else {
            res.status(404).send({ message: "Atelier non trouvé." });
        }
    } catch (error) {
        console.error("Erreur mise à jour atelier : ", error);
        res.status(500).send({ message: "Erreur lors de la mise à jour de l'atelier." });
    }
};

exports.deleteAtelier = async (req, res) => {
    try {
        let result = await Ateliers.destroy({ where: { id: req.params.id } });
        if (result == 1) {
            res.status(200).send({ message: "Atelier supprimé." });
        } else {
            res.status(404).send({ message: "Atelier non trouvé." });
        }
    } catch (error) {
        console.error("Erreur suppression atelier : ", error);
        res.status(500).send({ message: "Erreur lors de la suppression de l'atelier." });
    }
};

exports.assignParticipants = async (req, res) => {
    try {
        // Récupérer tous les ateliers avec leurs capacités
        const ateliers = await db.Ateliers.findAll();

        // Récupérer tous les vœux, triés par ordre de préférence
        const wishes = await db.Wishes.findAll({ order: [['ordre_de_preference', 'ASC']] });

        // Initialiser un tableau pour garder trace des affectations
        let assignments = [];

        wishes.forEach(wish => {
            // Identifier le premier atelier disponible qui correspond au thème du vœu
            const eligibleAtelier = ateliers.find(atelier => atelier.themeId === wish.themeId && atelier.capacite > 0);

            if (eligibleAtelier) {
                // Réduire la capacité de l'atelier éligible de 1
                eligibleAtelier.capacite -= 1;

                // Enregistrer l'affectation
                assignments.push({
                    utilisateur_email: wish.utilisateur_email,
                    atelierId: eligibleAtelier.id,
                    themeId: wish.themeId,
                    statut: 'en_attente' // Par défaut, les participations sont en attente de confirmation
                });
            }
        });

        // Sauvegarder les affectations dans la base de données
        for (let assignment of assignments) {
            await db.Participations.create(assignment);
        }

        res.send({ message: `Assignation des participants réussie. ${assignments.length} participants ont été assignés.` });
    } catch (error) {
        console.error("Erreur assignation participants : ", error);
        res.status(500).send({ message: "Erreur lors de l'assignation des participants." });
    }
};