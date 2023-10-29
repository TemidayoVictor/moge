import Link from "next/link"
import Image from "next/image"

const Works = () => {
    return (
        <div className="px-[10%] py-[3em] flex items-center justify-between max-lg:px-[5%] max-lg:flex-col">
            
            <div className="right w-[40%] max-lg:w-[80%]">
                <Image 
                    src="/assets/logo1.png"
                    alt="Dyelum Logo"
                    width={250}
                    height={250}
                />
            </div>
            
            <div className="left w-[50%] max-lg:w-[100%]">
                <h1 className="inline-block font-bold text-[2.5rem] border-b-4 border-orange-300 max-lg:text-[1.6rem]">How <span className="text-orange-300">Sport Book</span> Works</h1>

                <div className="mt-5 flex flex-col gap-3">
                    <div className="flex gap-2 items-start">  
                        <p className="flex items-center text-[1.2rem] self-start"><i className="bx bx-border-bottom mr-2"></i> Transfer funds to your Sport Book Wallet</p>
                    </div>

                    <div className="flex gap-2">  
                        <p className="flex items-center text-[1.2rem] self-start"><i className="bx bx-border-bottom mr-2"></i> Bet on upcoming sporting events directly through Telegram</p>
                    </div>

                    <div className="flex gap-2">  
                        <p className="flex items-center text-[1.2rem] self-start"> <i className="bx bx-border-bottom mr-2"></i> Remove funds from your Sport Book wallet at any time</p>
                    </div>

                </div>

                <div>
                    <Link href="#" className='bg-[#f1831f] border border-transparent inline-block my-[2rem] text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-orange-300'>Open Sport Book</Link>
                </div>
            </div>

        </div>
    )
}

export default Works
