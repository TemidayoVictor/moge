import Link from "next/link"
import Image from "next/image"

const Hero = () => {
    return (
        <div className="hero hero-bg bg-cover bg-center mt-[3.7rem] relative text-white min-h-[42vw] flex items-center justify-between px-[10%]">
            <div className="left w-[50%] flex flex-col gap-3">
                <p className="text-blue-300 text-[.9rem]">WELCOME TO SPORTYBOOK</p>
                <h1 className="font-bold text-[3.2rem]">Your All-In-One Crypto Sniping Bot</h1>
                <p className="tracking-wide">Are you ready to take your crypto trading game to the next level? 
                    Introducing SportyBook, the ultimate Crypto Sniping Bot specifically designed 
                    for the Ethereum Blockchain.
                </p>
                <Link href="#" className='bg-[#0045AD] border border-transparent flex self-start my-[2rem] text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-blue-300'>Learn More</Link>
            </div>
            <div className="right">
                <Image 
                src="/assets/bot5.webp"
                alt="Dyelum Logo"
                width={300}
                height={300}
                />
            </div>
        </div>
    )
}

export default Hero