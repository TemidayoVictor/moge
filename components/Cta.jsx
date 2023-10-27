import Link from "next/link"

const Cta = () => {
    return (
        <div className="text-center px-[10%] py-[3em] bg-blue-900 bg-opacity-20">
            <h2 className="inline-block font-bold text-[2rem] border-b-4 border-slate-500 max-lg:text-[1.6rem]">Get <span className="text-blue-300">SportyBook</span> Now !</h2>
            <p className="mt-2 text-[1.3rem] max-lg:text-[1.1rem]">Discover the Future of Sports Betting</p>
            <div>
                <Link href="#" className='bg-[#0045AD] border border-transparent inline-block my-[1rem] text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-blue-300'>Start Beting Now</Link>
            </div>
        </div>
    )
}

export default Cta