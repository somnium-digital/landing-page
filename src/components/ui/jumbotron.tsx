const Jumbotron : React.FC<any> = () => {
    return <div className="h-screen w-full flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="col-span-1 flex justify-center flex-col px-10 gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 ">
                    Tingkatkan Bisnis Anda dengan Solusi Digital Terbaik
                </h1>
                <p>
                    Kami membantu bisnis berkembang dengan strategi digital yang efektif, mulai dari branding, pemasaran online, hingga optimasi konversi, agar Anda dapat menjangkau lebih banyak pelanggan dan meningkatkan penjualan secara berkelanjutan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
                    Konsultasi Sekarang
                </a>
                <a href="#" className="px-6 py-3 bg-gray-900 text-white rounded-full shadow-md hover:bg-gray-800 transition">
                    Portofolio Kami
                </a>
                </div>
            </div>
        </div>
    </div>
}
export default Jumbotron;