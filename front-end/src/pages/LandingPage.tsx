import { FooterComponent } from "../components/FooterComponent.tsx"
import { HeaderComponent } from "../components/HeaderComponent.tsx"

export const LandingPage = () => {
	const eventImage = 'https://via.placeholder.com/500';
	const workshopImage = 'https://via.placeholder.com/500';
	const communityImage = 'https://via.placeholder.com/500';

	return (
		<div>
			<HeaderComponent />
			<div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
				<div className="max-w-md text-center">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">Crazy Charly Day 2024</h1>
					<p className="text-lg text-gray-700">
						Rejoignez-nous pour une journée unique dédiée à la cuisine créative et solidaire.
						Découvrez le plaisir de cuisiner en compagnie de nos chefs passionnés et partagez un moment convivial.
					</p>

				</div>
			</div>
			<FooterComponent />
		</div>
	)
}