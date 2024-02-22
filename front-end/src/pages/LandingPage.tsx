import { FooterComponent } from "../components/FooterComponent.tsx"
import { HeaderComponent } from "../components/HeaderComponent.tsx"

export const LandingPage = () => 
{
    return (
        <div>
            <HeaderComponent />
            <p className="text-cyan-300">Landing page</p>
            <FooterComponent />
        </div>
    )
}