const db = require("../models");
const Themes = db.Themes;

exports.createTheme = async (req, res) => {
    try {
        const theme = await Themes.create(req.body);
        res.status(201).send(theme);
    } catch (error) {
        console.error("Erreur création thème : ", error);
        res.status(500).send({ message: "Impossible de créer le thème." });
    }
};

exports.getAllThemes = async (req, res) => {
    try {
        const themes = await Themes.findAll();
        res.status(200).send(themes);
    } catch (error) {
        console.error("Erreur récupération thèmes : ", error);
        res.status(500).send({ message: "Erreur lors de la récupération des thèmes." });
    }
};

exports.getThemeById = async (req, res) => {
    try {
        const theme = await Themes.findByPk(req.params.id);
        if (theme) {
            res.status(200).send(theme);
        } else {
            res.status(404).send({ message: "Thème non trouvé." });
        }
    } catch (error) {
        console.error("Erreur récupération thème : ", error);
        res.status(500).send({ message: "Erreur lors de la récupération du thème." });
    }
};

exports.updateTheme = async (req, res) => {
    try {
        const result = await Themes.update(req.body, { where: { id: req.params.id } });
        if (result == 1) {
            res.status(200).send({ message: "Thème mis à jour." });
        } else {
            res.status(404).send({ message: "Thème non trouvé." });
        }
    } catch (error) {
        console.error("Erreur mise à jour thème : ", error);
        res.status(500).send({ message: "Erreur lors de la mise à jour du thème." });
    }
};

exports.deleteTheme = async (req, res) => {
    try {
        const result = await Themes.destroy({ where: { id: req.params.id } });
        if (result == 1) {
            res.status(200).send({ message: "Thème supprimé." });
        } else {
            res.status(404).send({ message: "Thème non trouvé." });
        }
    } catch (error) {
        console.error("Erreur suppression thème : ", error);
        res.status(500).send({ message: "Erreur lors de la suppression du thème." });
    }
};