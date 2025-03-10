import Link from "next/link"

const Navbar : React.FC<any> = () => {
    return <div className="flex flex-row absolute top-0 right-0 left-0 px-10 py-5">
        <div className="w-64"></div>
        <div className="flex-auto"></div>
        <div>
            <ul className="hidden sm:inline-flex gap-2 items-center">
                <li><Link className="font-semibold text-lg" href={"/"}>Home</Link></li>
                <li><Link className="font-semibold text-lg" href={"/"}>About Us</Link></li>
                <li><Link className="font-semibold text-lg" href={"/"}>Service</Link></li>
                <li><Link className="font-semibold text-lg" href={"/"}>Article</Link></li>
                <li><Link className="font-semibold text-base px-5 py-1 text-white bg-blue-700 rounded-full" href={"/"}>Contact</Link></li>
            </ul>
        </div>
    </div>
}

export default Navbar