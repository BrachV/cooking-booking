import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import { FooterComponent } from "../components/FooterComponent.tsx";
import { HeaderComponent } from "../components/HeaderComponent.tsx";
import {useFetchThemes} from "../utils/hooks/useFetchThemes.js";
import {useSubmitWish} from "../utils/hooks/useSubmitWish.js";

interface ItemProps {
    value: string;
}

interface SortableListProps {
    items: string[];
    onSortEnd: ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => void;
}

const SortableItem = SortableElement(({ value }: ItemProps) => (
    // Styling for each sortable item
    <li className="bg-white shadow rounded p-2 cursor-pointer mb-2">{value}</li>
));

const SortableList = SortableContainer(({ items }: SortableListProps) => {
    return (
        // Styling for the list
        <ul className="space-y-2">
            {/* @ts-ignore */}
            {items.map((value, index) => <SortableItem key={`item-${index}`} index={index} value={value} />)}
        </ul>
    );
});

export const ApplyPage = () => {
    const [themesList, setThemesList] = useState<string[]>([]);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [choice, setChoice] = useState<number>(1);

    const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
        setThemesList((themesList) => {
            const newThemes = Array.from(themesList);
            const [removed] = newThemes.splice(oldIndex, 1);
            newThemes.splice(newIndex, 0, removed);
            return newThemes;
        });
    };

    const { themes, loading, error } = useFetchThemes();
    const { submit, response, loading: submitLoading, error: submitError } = useSubmitWish();


    if (loading) return <div>Chargement des thèmes...</div>;
    if (error) return <div>Erreur lors du chargement des thèmes : {error.message}</div>;

    if (submitLoading) return <div>Envoi de la candidature...</div>;
    if (submitError) return <div>Erreur lors de l'envoi de la candidature : {submitError.message}</div>;

    if (themesList.length == 0 && !loading && themes && themes.length > 0) {
        console.log(themes);
        setThemesList(themes.map(
            (theme) => theme.abreviation)
        );
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ firstName, lastName, email, choice, themes: themesList });

        //Pour chaque thème, envoyer une requête pour soumettre le vœu selon l'ordre de priorité (position dans la liste)
        //hook useSubmitWish
        themesList.forEach((theme, index) => {

            const wishData = {
                utilisateur_nom: `${firstName} ${lastName}`,
                utilisateur_email: email,
                ordre_de_preference: index + 1,
                themeId: themes?.find((t) => t.abreviation === theme)?.id,
                nombre_participations_souhaitees: choice
            };

            submit(wishData as any);

        });

        console.log("Inscription envoyée", themesList);

        //rediriger vers la page d'accueil
        //window.location.href = '/';

    };

    return (
        <div className="bg-gray-50 min-h-screen w-full">
            <HeaderComponent />
            <h1 className="m-6 mt-8 text-center font-semibold text-2xl">Postuler</h1>
            <p className="text-center mb-8">Veuillez remplir le formulaire suivant pour postuler à nos ateliers</p>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-4">
                <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
                    <div className='flex flex-col space-y-4'>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 w-72" />
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Prénom" className="input px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500" />
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nom" className="input px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500" />
                        <input type="number" value={choice} onChange={(e) => setChoice(parseInt(e.target.value))} min="1" max="6" placeholder="Nombre de choix" className="input px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500" />
                    </div>
                    
                </div>
                <p className="text-center mb-8">Veuillez organiser votre liste de priorités par glisser-déposer les éléments ci-dessous.<br />Un élément haut dans la liste sera choisi en priorité en fonction des places disponibles.</p>

                <div className='w-72 flex flex-col space-y-4'>
                    {/* @ts-ignore */}
                    <SortableList items={themesList} onSortEnd={onSortEnd} />
                </div>

                <button type="submit" className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Envoyer</button>
            </form>
            <FooterComponent />
        </div>
    )
};
