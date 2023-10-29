import Link from "next/link"
import Image from "next/image"

const Hero = () => {
    return (
        <div className="hero hero-bg bg-cover bg-center mt-[3.7rem] relative text-white min-h-[42vw] flex items-center justify-between px-[10%] max-lg:block max-lg:px-[5%]">
            <div className="left w-[50%] flex flex-col gap-3 max-lg:w-[100%]">
                <p className="text-orange-300 text-[.9rem]">WELCOME TO SPORTBOOK</p>
                <h1 className="font-bold text-[3.2rem] max-lg:text-[2.2rem]">Your All-In-One Crypto Sniping Bot</h1>
                <p className="tracking-wide max-lg:text-justify">Are you ready to take your crypto trading game to the next level? 
                    Introducing Sport Book, the ultimate Crypto Sniping Bot specifically designed 
                    for the Ethereum Blockchain.
                </p>
                <Link href="#" className='bg-[#f1831f] border border-transparent flex self-start my-[2rem] text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-orange-300'>Learn More</Link>
            </div>
            <div className="right">
               <Image 
                src="/assets/logo1.png"
                alt="Sport Book Logo"
                width={300}
                height={300}
                />
            </div>
        </div>
    )
}

export default Hero