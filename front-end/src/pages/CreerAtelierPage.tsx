import { useState } from "react";
import { FooterComponent } from "../components/FooterComponent.tsx";
import { HeaderComponent } from "../components/HeaderComponent.tsx";

export const CreationAtelierPage = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [nbPlaces, setNbPlaces] = useState(0);
    const [theme, setTheme] = useState("");

    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <HeaderComponent />
                <h1 className="m-6 mt-8 flex justify-center font-semibold text-2xl">Créer un atelier</h1>
                <div className="flex flex-col bg-white rounded-xl p-4 w-80 mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col ">
                            <label className
                                ="m-2 text-left" htmlFor="title">Titre</label>
                            <input className="border border-gray-300 p-2 rounded-lg m-2 w-52" type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label className
                                ="m-2" htmlFor="title">Description</label>
                            <input className="border border-gray-300 p-2 rounded-lg m-2 w-52" type="text" id="title" name="title" value={description} onChange={e => setDescription(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label className
                                ="m-2" htmlFor="title">Date</label>
                            <input className="border border-gray-300 p-2 rounded-lg m-2 w-52" type="text" id="title" name="title" value={date} onChange={e => setDate(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label className
                                ="m-2" htmlFor="title">Nombre de places</label>
                            <input className="border border-gray-300 p-2 rounded-lg m-2 w-52" type="number" id="title" name="title" value={nbPlaces} onChange={e => setNbPlaces(parseInt(e.target.value))} />
                        </div>
                        <div className="flex flex-col">
                            <label className
                                ="m-2" htmlFor="title">Thème</label>
                            <select
                                className="border border-gray-300 p-2 rounded-lg m-2 w-52"
                                id="theme-select"
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}
                            >
                                <option value="fr">France</option>
                                <option value="it">Italie</option>
                                <option value="jp">Japon</option>
                                <option value="mex">Mexique</option>
                                <option value="gr">Grèce</option>
                                <option value="or">Orient</option>
                            </select>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                            <button className="bg-blue-500 text-white p-2 rounded-lg m-2 w-52 text-center">Créer</button>
                        </div>
                    </div>
                </div>
            </div >
            <FooterComponent />
        </>
    )
}
