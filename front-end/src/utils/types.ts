export interface Atelier {
    id: number;
    nom: string;
    capacite: number;
    date: Date | string;
    description: string;
    themeId: number;
    theme?: Theme;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Theme {
    id: number;
    nom: string;
    description: string;
    abreviation: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Wish {
    id?: number;
    utilisateur_nom: string;
    utilisateur_email: string;
    ordre_de_preference: number;
    themeId: number;
    nombre_participations_souhaitees: number;
    createdAt?: Date;
    updatedAt?: Date;
}

//    {
//         "id": 1,
//         "utilisateur_email": "marie.curie@example.com",
//         "atelierId": 1,
//         "themeId": 1,
//         "statut": "confirmé",
//         "createdAt": "2024-02-22T19:11:32.000Z",
//         "updatedAt": "2024-02-22T19:12:43.000Z",
//         "atelier": {
//             "id": 1,
//             "nom": "Atelier Croissant",
//             "capacite": 12,
//             "date": "2023-12-12T09:00:00.000Z",
//             "description": "Apprendre à faire les croissants parfaits.",
//             "themeId": 1,
//             "createdAt": "2024-02-22T19:07:28.000Z",
//             "updatedAt": "2024-02-22T19:07:28.000Z",
//             "theme": {
//                 "id": 1,
//                 "nom": "France",
//                 "abreviation": "fr",
//                 "description": "Explorer la riche cuisine française, de la baguette traditionnelle au coq au vin.",
//                 "createdAt": "2024-02-22T19:05:04.000Z",
//                 "updatedAt": "2024-02-22T19:05:04.000Z"
//             }
//         }
//     }
//export interface Participation {
//     id: number;
//     utilisateur_email: string;
//     atelierId: number;
//     themeId: number;
//     statut: 'en_attente' | 'confirmé' | 'annulé';
//     createdAt?: Date;
//     updatedAt?: Date;
// }

export interface Participation {
    id: number;
    utilisateur_email: string;
    atelierId: number;
    themeId: number;
    statut: 'en_attente' | 'confirmé' | 'annulé';
    createdAt?: Date;
    updatedAt?: Date;
    atelier: Atelier;
}