import Button from "@/app/_ui/Button"
import Link from "next/link"

function Header() {

    const urls = [
        { name: "Acceuil", path: "/" },
        { name: "En savoir plus", path: "/about" },
        { name: "Programme", path: "/programe" },
        { name: "Délégations", path: "/delegations" },
        { name: "Séjour & Voyage", path: "/travel-info" }
    ]

    return (
        <>
            <header className="w-full flex items-center justify-around bg-black/50">
                <div className="w-70 h-20 border">
                    Logo
                </div>
                <nav>
                    <ul className="flex gap-7 py-3 px-8 border border-white/50 rounded-full bg-white/30">
                        {urls.map((url) => (
                            <li key={url.path}><Link href={url.path} className="font-medium text-white"> {url.name} </Link></li>
                        ))}
                    </ul>
                </nav>

                <div className=" flex gap-2">
                    <Button className="px-4 py-2 font-medium bg-white rounded-sm">{"S'inscrire"} </Button>
                    <Button className="px-4 py-2 font-medium rounded-sm bg-blue-500 text-white"> {"Se connecter"} </Button>
                </div>
            </header>
        </>
    )
}

export default Header
