import Link from "next/link"
import Image from "next/image"

const Future = () => {
    return (
        <div className="px-[10%] py-[3em] flex items-center justify-between bg-orange-900 bg-opacity-20 max-lg:flex-col-reverse max-lg:px-[5%]">
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
                <h1 className="inline-block font-bold text-[2.5rem] border-b-4 border-orange-300 ">The Future of <span className="text-orange-300">Sports</span> Betting</h1>

                <div className="mt-5 flex flex-col gap-8">
                    <div className="flex gap-2 items-start">
                        <p className="text-[1.2rem] self-start"><strong className="text-[1.3rem]">Revolutionizing Insights: </strong>Sport Book stands at the forefront of the future of 
                            sport's betting by delivering cutting-edge insights and analyses. Our advanced algorithms crunch real-time
                            data, providing users with unparalled predictions and trends
                        </p>
                    </div>

                    <div className="flex gap-2"> 
                        <p className="text-[1.2rem]"><strong className="text-[1.3rem]">User-Centric Experience:</strong> With an intuitive interface that ensures a seamless
                            experience, Sport Book is designed to cater to seasoned bettors and newcomers alike.
                        </p>
                    </div>

                    <div className="flex gap-2">  
                        <p className="text-[1.2rem]"><strong className="text-[1.3rem]">Innovative Snipping Strategies:</strong>  Sport Book doesn't just follow trends; it sets them. 
                            By Introducing innovative sniping strategies, our bot identifies golden opportunities in real-time,
                            allowing users to capitalize on market flunctuations and maximize returns.
                        </p>
                    </div>

                </div>

                <div>
                    <Link href="#" className='bg-[#f1831f] border border-transparent inline-block my-[2rem] text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-orange-300'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default Future
