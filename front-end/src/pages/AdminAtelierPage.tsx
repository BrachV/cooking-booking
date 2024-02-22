import { FooterComponent } from "../components/FooterComponent.tsx"
import { HeaderComponent } from "../components/HeaderComponent.tsx"
import { AtelierComponent } from "../components/AtelierComponent.tsx"
import { Atelier } from "../utils/types.ts"
export const AdminAtelierPage = () => {
    const ateliers = [
        {
            id: 1,
            title: "Atelier français",
            description: "Apprenez à cuisiner avec un chef professionnel",
            date: "08/03/2024",
            nbPlaces: 10,
            theme: "fr"
        },
        {
            id: 2,
            title: "Atelier japonais",
            description: "Apprenez à pâtisser avec un chef professionnel",
            date: "18/03/2024",
            nbPlaces: 12,
            theme: "jp"
        },
        {
            id: 3,
            title: "Atelier italien",
            description: "Apprenez à faire des cocktails avec un chef professionnel",
            date: "12/03/2024",
            nbPlaces: 8,
            theme: "it"
        }
    ] as Atelier[]
    return (
        <div className="bg-gray-50 min-h-screen">
            <HeaderComponent />
            <h1 className="mt-8 flex justify-center font-semibold text-2xl ">Les ateliers</h1>
            <div className="flex justify-center mb-4">
                <a className="bg-blue-500 text-white p-2 rounded-lg m-2 w-52 text-center" href="/admin/ateliers/creer">Créer un atelier</a>
            </div>
            <div className="flex flex-col items-center">
                {ateliers.map(atelier => (
                    <AtelierComponent key={atelier.id} admin ateliers={atelier} />
                ))}
            </div>
            <FooterComponent />
        </div>
    )
}