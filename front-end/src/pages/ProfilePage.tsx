import React, { useState } from 'react';
import { HeaderComponent } from '../components/HeaderComponent.tsx';
import { FooterComponent } from '../components/FooterComponent.tsx';
import {Atelier} from "../utils/types.js";
import {useFetchParticipationsByEmail} from "../utils/hooks/useFetchParticipationsByEmail.js";

// type AteliersResponse = {
//     valid: boolean;
//     ateliers?: string[];
// };

export function ProfilePage() {
    const [email, setEmail] = useState<string>('');
    // const [ateliers, setateliers] = useState<string[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    // Fonction pour mettre à jour l'email à partir de l'input de l'utilisateur
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const [ateliers, setAteliers] = useState<String [] | null>(null);

    const { participations} = useFetchParticipationsByEmail(email);

    const verifyEmail = async () => {
        setLoading(true);
        try {

            if (participations) {
                const ateliers = participations.map((participation) => {
                    return participation.atelier.nom;
                });
                setAteliers(ateliers);
            }

        } catch (error) {
            console.error('Erreur lors de la vérification de l\'email', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <HeaderComponent />
            <div className='bg-gray-50 flex flex-col h-screen'>
                <h1 className="mb-4 mt-8 text-center font-semibold text-2xl">Profil</h1>
                <p className="text-center">Merci d'insérer votre adresse email pour voir votre profil.</p>
                <div className="mx-auto p-8 flex flex-col bg-white m-8 h-36 rounded-md">
                    <input
                        type="email"
                        placeholder="Entrez votre email"
                        value={email}
                        onChange={handleEmailChange}
                        className="input w-full max-lg border px-4 py-2 rounded-md"
                    />
                    <button
                        onClick={verifyEmail}
                        disabled={loading}
                        className="border px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out w-40 mt-4 mx-auto"
                    >
                        {loading ? 'Chargement...' : 'Vérifier'}
                    </button>
                    <div className="mt-4">
                        {ateliers ? (
                            <ul>
                                {ateliers.map((workshop, index) => (
                                    <li key={index}>{workshop}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>Vos ateliers n'ont pas encore été attribués..</p>
                        )}
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>


    );
};
