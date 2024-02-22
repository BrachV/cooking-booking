export const AtelierComponent = ({ ateliers, admin }: { ateliers: any, admin?: boolean }) => {
	return (

		<div className="flex w-4/6 bg-white p-4 mb-4 border justify-between">
			<div className="flex">
				<img className="h-auto w-44 ml-1 object-contain" src={`/logo/${ateliers.theme.abreviation}.png`} alt="Drapeau" />
				<div className="flex flex-col justify-center ml-6">
					<h2 className="text-xl font-semibold">{ateliers.nom}</h2>
					<p className="text-gray-500">{ateliers.description}</p>
					<p className="text-gray-500">{ateliers.capacite} places disponibles</p>
					<p className="text-gray-500"><i>Le {ateliers.date}</i></p>
				</div>

			</div>
			{admin && <div className="flex flex-col justify-center m-6 w-auto items-center">
				<a href={`/ateliers/${ateliers.id}/edit`} className="text-blue-500">Modifier</a>
				<a href={`/ateliers/${ateliers.id}/delete`} className="text-red-500">Supprimer</a>
			</div>}
		</div>
	)
}