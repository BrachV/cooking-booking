import { FooterComponent } from "../components/FooterComponent.tsx"
import { HeaderComponent } from "../components/HeaderComponent.tsx"
import { AtelierComponent } from "../components/AtelierComponent.tsx"
import { Atelier } from "../utils/types.ts"
import {useFetchAteliers} from "../utils/hooks/useFetchAteliers.js";
export const AtelierPage = () => {
    const { ateliers, loading, error } = useFetchAteliers();

    console.log(ateliers);

    if (loading) return <div>Chargement des ateliers...</div>;
    if (error) return <div>Erreur lors du chargement des ateliers : {error.message}</div>;

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeaderComponent/>
            <h1 className="m-6 mt-8 flex justify-center font-semibold text-2xl">Nos ateliers</h1>
            <div>
                {ateliers && ateliers.length > 0 ? (
                    <div className="flex flex-col items-center">
                        {ateliers.map((atelier: Atelier) => (
                            <AtelierComponent key={atelier.id} admin ateliers={atelier}/>
                        ))}
                    </div>
                ) : (
                    <div>Aucun atelier disponible pour le moment.</div>
                )}
            </div>

            <FooterComponent/>
        </div>
    )
}