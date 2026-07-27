import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"
import { UserButton } from "@clerk/react"


export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 md:px-8 border-b py-3 border-gray-300 bg-white transition-all duration-300">
            <Link to={"/"}>
                <img src={assets.logo} alt="logo" className="h-9 invert opacity-80"/>
            </Link>
            <UserButton/>
        </nav>
    )
}
