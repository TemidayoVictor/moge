import Link from "next/link"

const Cta = () => {
    return (
        <div className="text-center px-[10%] py-[3em] bg-purple-900 bg-opacity-20">
            <h2 className="inline-block font-bold text-[2rem] border-b-4 border-[#b096f5] max-lg:text-[1.6rem]">Get <span className="text-[#b096f5]">Sport Book</span> Now !</h2>
            <p className="mt-2 text-[1.3rem] max-lg:text-[1.1rem]">Discover the Future of Sports Betting</p>
            <div>
                <Link href="#" className='bg-[#f1831f] border border-transparent inline-block my-[1rem] text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-purple-300'>Start Beting Now</Link>
            </div>
        </div>
    )
}

export default Cta