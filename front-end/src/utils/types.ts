export interface Atelier {
    id: number;
    nom: string;
    capacite: number;
    date: Date | string;
    description: string;
    themeId: number;
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

export interface Participation {
    id: number;
    utilisateur_email: string;
    atelierId: number;
    themeId: number;
    statut: 'en_attente' | 'confirmé' | 'annulé';
    createdAt?: Date;
    updatedAt?: Date;
}