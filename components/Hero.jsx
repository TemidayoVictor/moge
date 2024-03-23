import Link from "next/link"
import Image from "next/image"

const Hero = () => {
    return (
        <div className="hero hero-bg bg-cover bg-center mt-[3.7rem] relative text-white min-h-[42vw] flex items-center justify-between px-[10%] max-lg:flex-col max-lg:px-[5%]">
            <div className="left w-[50%] flex flex-col gap-3 max-lg:w-[100%]">
                {/* <p className="text-[#b096f5] text-[.9rem]">WELCOME TO SPORTBOOK</p> */}
                <h1 className="font-bold text-[3.2rem] max-lg:text-[2.2rem]">The <span className="multicolor">Madam's</span> Reign Starts on Solana</h1>
                <p className="tracking-wide max-lg:text-justify">
                    From Meme To Monarch, Meet the Queen of Doges and Inus.
                </p>
                <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-2 my-[2em]">
                    <Link href="#" className='bg-[#0157ff] text-center border border-transparent text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-[#b096f5]'>Twitter</Link>
                    <Link href="#" className='bg-[#0157ff] text-center border border-transparent text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-[#b096f5]'>Telegram</Link>
                    <p className='bg-[transparent] text-center border border-[#0157ff] text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-[#b096f5]'>Raydium (soon)</p>
                </div>
                
            </div>
            <div className="right">
               <Image 
                src="/assets/baselogo.jpg"
                alt="Madam Dodge Logo"
                width={300}
                height={300}
                className="rounded-md"
                />
            </div>
        </div>
    )
}

export default Hero