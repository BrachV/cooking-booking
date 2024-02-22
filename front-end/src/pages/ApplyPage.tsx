import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import { FooterComponent } from "../components/FooterComponent.tsx";
import { HeaderComponent } from "../components/HeaderComponent.tsx";

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
    const [themes, setThemes] = useState<string[]>(["fr", "jp", "it", "fr", "jp", "it"]);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [choice, setChoice] = useState<number>(1);

    const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number }) => {
        setThemes((themes) => {
            const newThemes = Array.from(themes);
            const [removed] = newThemes.splice(oldIndex, 1);
            newThemes.splice(newIndex, 0, removed);
            return newThemes;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ firstName, lastName, email, choice, themes });
        console.log("Inscription envoyée", themes);
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
                    <SortableList items={themes} onSortEnd={onSortEnd} />
                </div>

                <button type="submit" className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Envoyer</button>
            </form>
            <FooterComponent />
        </div>
    )
};
