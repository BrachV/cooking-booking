import axios from 'axios';

// Configurez l'instance axios avec l'URL de base de votre API
const API = axios.create({
    baseURL: 'http://localhost:3080/api/',
});

// Ajoutez des configurations supplémentaires si nécessaire, telles que des headers par défaut
API.defaults.headers.common['Content-Type'] = 'application/json';

// Méthodes pour interagir avec les thèmes
const fetchThemes = () => API.get('themes');
const createTheme = (themeData: {
    nom: string;
    description: string;
    abreviation: string
}) => API.post('themes', themeData);

// Méthodes pour interagir avec les ateliers
const fetchAteliers = () => API.get('ateliers');
const createAtelier = (
    atelierData: {
        nom: string;
        capacite: number;
        date: string;
        description: string;
        themeId: number
    }) => API.post('ateliers', atelierData);

// Méthodes pour soumettre et récupérer les vœux
const submitWish = (wishData: {
    utilisateur_nom: string;
    utilisateur_email: string;
    ordre_de_preference: number;
    themeId: number;
    nombre_participations_souhaitees: number
}) => API.post('wishes', wishData);
const fetchWishesByEmail = (email: string) => API.get(`wishes/byUser/${email}`);

// Méthodes pour gérer les participations
const assignParticipants = () => API.post('ateliers/assign');
const confirmParticipation = (id: number) => API.post(`participations/${id}/confirm`);
const fetchParticipationsByEmail = (email: string) => API.get(`participations/byUser/${email}`);

// Exportez les fonctions pour les utiliser dans les composants de votre front-end
export {
    fetchThemes,
    createTheme,
    fetchAteliers,
    createAtelier,
    submitWish,
    fetchWishesByEmail,
    assignParticipants,
    confirmParticipation,
    fetchParticipationsByEmail,
};