const db = require("../models");
const Wishes = db.Wishes;

exports.createWish = async (req, res) => {
    try {
        const wish = await Wishes.create({
            utilisateur_email: req.body.utilisateur_email,
            themeId: req.body.themeId,
            nombre_participations_souhaitees: req.body.nombre_participations_souhaitees,
            ordre_de_preference: req.body.ordre_de_preference,
            utilisateur_nom: req.body.utilisateur_nom,
        });
        res.status(201).send(wish);
    } catch (error) {
        console.error("Erreur création vœu : ", error);
        res.status(500).send({ message: "Impossible de créer le vœu." });
    }
};

exports.getAllWishes = async (req, res) => {
    try {
        const wishes = await Wishes.findAll();
        res.status(200).send(wishes);
    } catch (error) {
        console.error("Erreur récupération vœux : ", error);
        res.status(500).send({ message: "Erreur lors de la récupération des vœux." });
    }
};

exports.getWishById = async (req, res) => {
    try {
        const wish = await Wishes.findByPk(req.params.id);
        if (wish) {
            res.status(200).send(wish);
        } else {
            res.status(404).send({ message: "Vœu non trouvé." });
        }
    } catch (error) {
        console.error("Erreur récupération vœu : ", error);
        res.status(500).send({ message: "Erreur lors de la récupération du vœu." });
    }
};

exports.updateWish = async (req, res) => {
    try {
        const result = await Wishes.update(req.body, { where: { id: req.params.id } });
        if (result == 1) {
            res.status(200).send({ message: "Vœu mis à jour." });
        } else {
            res.status(404).send({ message: "Vœu non trouvé." });
        }
    } catch (error) {
        console.error("Erreur mise à jour vœu : ", error);
        res.status(500).send({ message: "Erreur lors de la mise à jour du vœu." });
    }
};

exports.deleteWish = async (req, res) => {
    try {
        const result = await Wishes.destroy({ where: { id: req.params.id } });
        if (result == 1) {
            res.status(200).send({ message: "Vœu supprimé." });
        } else {
            res.status(404).send({ message: "Vœu non trouvé." });
        }
    } catch (error) {
        console.error("Erreur suppression vœu : ", error);
        res.status(500).send({ message: "Erreur lors de la suppression du vœu." });
    }
};