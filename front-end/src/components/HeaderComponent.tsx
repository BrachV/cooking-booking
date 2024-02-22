export const HeaderComponent = () =>
{
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center mt-0 justify-between px-8" aria-label="Global">
                <div className="flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Cooking Booking</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>

                <div className="flex gap-x-12">
                    <a href="/" className="text-sm font-semibold leading-6 text-gray-900">Accueil</a>
                    <a href="/ateliers" className="text-sm font-semibold leading-6 text-gray-900">Ateliers</a>
                    <a href="/profil" className="text-sm font-semibold leading-6 text-gray-900">Profil</a>
                    <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">A propos</a>
                </div>

                <div className="flex flex-1 justify-end">
                    <a href="/admin" className="text-sm font-semibold leading-6 text-gray-900">Administrateur <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
        </header>
    )
}