import Link from "next/link"
import Image from "next/image"

const Works = () => {
    return (
        <div className="px-[10%] py-[3em] flex items-center justify-between max-lg:px-[5%] max-lg:flex-col">
            
            <div className="left w-[60%] max-lg:w-[100%]">
                <h1 className="inline-block font-bold text-[2.5rem] border-b-4 border-[#b096f5] max-lg:text-[1.6rem]"><span className="multicolor">Dogeconomics</span></h1>

                <div className="mt-5 flex flex-col gap-3 border-[3px] p-5">
                    <div className="flex gap-2 justify-between border-b mb-4"> 
                        <p className="text-[1.2rem] text-[#b096f5] ">Token Name:</p> 
                        <p className=" text-[1.2rem] text-[#f1831f]">Madam Doge</p>
                    </div>

                    <div className="flex gap-2 justify-between border-b mb-4"> 
                        <p className="text-[1.2rem] text-[#b096f5] ">Ticker:</p> 
                        <p className=" text-[1.2rem] text-[#f1831f]">$MOGE</p>
                    </div>

                    <div className="flex gap-2 justify-between border-b mb-4"> 
                        <p className="text-[1.2rem] text-[#b096f5] ">Blockchain:</p> 
                        <p className=" text-[1.2rem] text-[#f1831f]">Solana</p>
                    </div>

                    <div className="flex gap-2 justify-between border-b mb-4"> 
                        <p className="text-[1.2rem] text-[#b096f5] ">Max Supply:</p> 
                        <p className=" text-[1.2rem] text-[#f1831f]">100,000,000,000</p>
                    </div>

                </div>

                {/* <div>
                    <Link href="#" className='bg-[#f1831f] border border-transparent inline-block my-[2rem] text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-purple-300'>Open Sport Book</Link>
                </div> */}
            </div>

            <div className="right w-[30%] max-lg:w-[80%] max-lg:mt-5">
                <Image 
                    src="/assets/moge.png"
                    alt="Dyelum Logo"
                    width={250}
                    height={250}
                    className="rounded-md"
                />
            </div>

        </div>
    )
}

export default Works
