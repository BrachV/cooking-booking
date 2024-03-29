import { FooterComponent } from "../components/FooterComponent.tsx"
import { HeaderComponent } from "../components/HeaderComponent.tsx"
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import {assignParticipants} from "../utils/api.js";

export const AdminPage = () => {

	//trier les ateliers call assignParticipants api
	const trierAteliers = async () => {
		await assignParticipants();
	}

	return (
		<>
			<div className="min-h-screen bg-gray-50 ">
				<HeaderComponent />
				<h1 className="m-6 mt-8 flex justify-center font-semibold text-2xl ">Page administrateur</h1>
				{/* <div className="flex flex-row items-center justify-center bg-white p-8 w-3/4 mx-auto rounded-md">
				<div>
					test
				</div>
			</div> */}
				<div className="flex flex-row justify-center items-center">
					<a className="bg-blue-500 text-white p-2 rounded-lg m-2 w-52 text-center" href="/admin/ateliers">Voir les ateliers</a>
					<button onClick={trierAteliers} className="bg-blue-500 text-white p-2 rounded-lg m-2 w-52 text-center">Faire le tirage des souhaits</button>
				</div>
			</div>
			<FooterComponent />
		</>
		

	)
}