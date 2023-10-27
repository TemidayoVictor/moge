import Link from "next/link"
import Image from "next/image"

const Future = () => {
    return (
        <div className="px-[10%] py-[3em] flex items-center justify-between bg-blue-900 bg-opacity-20 max-lg:flex-col-reverse max-lg:px-[5%]">
            <div className="left w-[40%] max-lg:w-[100%]">
                <Image 
                    src="/assets/bet.jpg"
                    alt="Logo"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
            </div>

            <div className="right w-[60%] max-lg:w-[100%]">
                <h1 className="inline-block font-bold text-[2.5rem] border-b-4 border-slate-500 ">The Future of <span className="text-blue-300">Sports</span> Betting</h1>

                <div className="mt-5 flex flex-col gap-8">
                    <div className="flex gap-2 items-start">
                        <p className="text-[1.2rem] self-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolore.Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className="flex gap-2"> 
                        <p className="text-[1.2rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, nisi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cumque quo quis?</p>
                    </div>

                    <div className="flex gap-2">  
                        <p className="text-[1.2rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, rem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cumque quo quis?</p>
                    </div>

                </div>

                <div>
                    <Link href="#" className='bg-[#0045AD] border border-transparent inline-block my-[2rem] text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-blue-300'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default Future
