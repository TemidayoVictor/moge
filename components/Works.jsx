import Link from "next/link"
import Image from "next/image"

const Works = () => {
    return (
        <div className="px-[10%] py-[3em] flex items-center justify-between max-lg:px-[5%] max-lg:flex-col-reverse">
            <div className="left w-[50%] max-lg:w-[100%]">
                <h1 className="inline-block font-bold text-[2.5rem] border-b-4 border-slate-500 max-lg:text-[1.6rem]">How <span className="text-blue-300">SportyBook</span> Works</h1>

                <div className="mt-5 flex flex-col gap-3">
                    <div className="flex gap-2 items-start">
                        <i className="bx bx-border-bottom text-[1.2rem] self-start"></i>  
                        <p className="text-[1.2rem] self-start">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className="flex gap-2">
                        <i className="bx bx-border-bottom text-[1.2rem]"></i>  
                        <p className="text-[1.2rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cumque quo quis?</p>
                    </div>

                    <div className="flex gap-2">
                        <i className="bx bx-border-bottom text-[1.2rem]"></i>  
                        <p className="text-[1.2rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cumque quo quis?</p>
                    </div>

                </div>

                <div>
                    <Link href="#" className='bg-[#0045AD] border border-transparent inline-block my-[2rem] text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-blue-300'>Open SportyBook</Link>
                </div>
            </div>

            <div className="right w-[40%] max-lg:w-[80%]">
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

export default Works
