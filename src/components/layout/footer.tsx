import Link from "next/link"

const Footer : React.FC<any> = () => {
    return <>
        <div className="w-full bg-slate-800 text-white">
            <div className="max-w-screen-2xl w-full mx-auto p-10 grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="flex flex-col col-span-1">
                    <h2 className="font-bold">Contact Us</h2>
                    <span>Somdigi - Digital Agency Solusi</span>
                    <span>E-mail</span>
                    <span>Phone</span>
                </div>
                <div className="flex flex-col col-span-1">
                    <h2 className="font-bold">Navigation</h2>
                    <Link href={`/`} className="text-sm">Home</Link>
                    <Link href={`/`} className="text-sm">About Us</Link>
                    <Link href={`/`} className="text-sm">Our Services</Link>
                    <Link href={`/`} className="text-sm">Carrier</Link>
                    <Link href={`/`} className="text-sm">Article</Link>
                </div>
                <div className="flex flex-col col-span-1">
                    <h2 className="font-bold">Our Service</h2>
                    <Link href={`/`} className="text-sm">Design Website</Link>
                    <Link href={`/`} className="text-sm">Software Development</Link>
                    <Link href={`/`} className="text-sm">Sosial Media Management</Link>
                    <Link href={`/`} className="text-sm">Digital Marketing</Link>
                    <Link href={`/`} className="text-sm">Ads Management</Link>
                </div>
                <div className="flex flex-col col-span-1">
                    <h2 className="font-bold">Follow Me:</h2>
                </div>
            </div>
        </div>
        <div className="w-full bg-slate-900 text-white">
            <div className="max-w-screen-2xl text-sm w-full mx-auto px-10 py-4">
                &copy; 2025 All right reserved. Somdigi Team
            </div>
        </div>
    </>
}
export default Footer