const OurService : React.FC<any> = () => {
    return <div className="w-full py-20 px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="col-span-2">
                <h2 className="text-xl text-gray-900 font-semibold">Service Details</h2>
                <h2 className="text-4xl text-gray-900 font-bold">Explore our Service</h2>
                <p>Temukan berbagai layanan terbaik yang dirancang khusus untuk memenuhi kebutuhan Anda. Dari teknologi inovatif hingga pelayanan yang efisien dan personal, kami hadir untuk memberikan pengalaman yang lebih baik</p>
            </div>
            <div className="col-span-1 flex flex-col gap-2">
                <div className="w-full min-h-40 drop-shadow bg-blue-300 rounded-lg"></div>
                <center className="font-semibold text-lg">Software Development</center>
            </div>
            <div className="col-span-1 flex flex-col gap-2">
                <div className="w-full min-h-40 drop-shadow bg-red-300 rounded-lg"></div>
                <center className="font-semibold text-lg">Graphic Design</center>
            </div>
            <div className="col-span-1 flex flex-col gap-2">
                <div className="w-full min-h-40 drop-shadow bg-orange-300 rounded-lg"></div>
                <center className="font-semibold text-lg">Social Media Management</center>
            </div>
            <div className="col-span-1 flex flex-col gap-2">
                <div className="w-full min-h-40 drop-shadow bg-purple-300 rounded-lg"></div>
                <center className="font-semibold text-lg">Ads Management</center>
            </div>
            <div className="col-span-1 flex flex-col gap-2">
                <div className="w-full min-h-40 drop-shadow bg-green-300 rounded-lg"></div>
                <center className="font-semibold text-lg">Digital Markering</center>
            </div>
            <div className="col-span-1 flex flex-col gap-2">
                <div className="w-full min-h-40 drop-shadow bg-amber-300 rounded-lg"></div>
                <center className="font-semibold text-lg">SEO Optimize</center>
            </div>
        </div>
    </div>
}

export default OurService