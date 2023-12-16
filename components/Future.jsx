import Link from "next/link"
import Image from "next/image"

const Future = () => {
    return (
        <div className="px-[10%] py-[3em] mt-4 flex items-start justify-between bg-purple-900 bg-opacity-20 max-lg:flex-col-reverse max-lg:px-[5%]">
            <div className="left grid grid-cols-2 gap-3 w-[40%] max-lg:w-[100%]">
                <Image 
                    src="/assets/moge.png"
                    alt="Logo"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
                <Image 
                    src="/assets/moge.png"
                    alt="Logo"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
                <Image 
                    src="/assets/moge.png"
                    alt="Logo"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
                <Image 
                    src="/assets/moge.png"
                    alt="Logo"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
            </div>

            <div className="right w-[55%] max-lg:w-[100%]">
                <h1 className="inline-block font-bold text-[2.5rem] border-b-4 border-[#b096f5] multicolor">Mantra</h1>

                <div className="mt-5 flex flex-col gap-8">
                    <div className="flex gap-2 items-start">
                        <p className="text-[1.1rem] self-start"><strong className="text-[1.3rem]"></strong>
                            Madam Doge wasn't always royalty. She rose from humble beginnings, 
                            a mere pup in a litter of viral sensations. 
                            But her Doge spirit burned bright. With wit as sharp as her claws and a 
                            charisma that melted even the iciest diamond paws, she climbed the ranks of the 
                            Dogecoin court.
                        </p>
                    </div>

                    <div className="flex gap-2"> 
                        <p className="text-[1.1rem]"><strong className="text-[1.3rem]"></strong> 
                            One fateful day, the Doge King #DogeCoin, her mischievous grandfather,
                            vanished in a puff of pixelated smoke into the moon. 
                            The Doge and Inu Council, steeped in ancient pup 
                            and meme lore, declared a grand trial.
                        </p>
                    </div>

                    <div className="flex gap-2"> 
                        <p className="text-[1.1rem]"><strong className="text-[1.3rem]"></strong> 
                            Contenders, from the stoic Shinbato the flamboyant Floki, 
                            vied for the crown. But none could match Madam Doge's cunning, 
                            her charm, and her unwavering dedication to the Dogecoin community.
                        </p>
                    </div>

                    <div className="flex gap-2"> 
                        <p className="text-[1.1rem]"><strong className="text-[1.3rem]"></strong> 
                            With a doge-tastic display of smarts and agility, Madam Doge
                            bested them all. The Doge elders, their wrinkled faces split in
                            proud grins, placed the doge-encrusted crown upon her head.
                        </p>
                    </div>

                    <div className="flex gap-2"> 
                        <p className="text-[1.1rem]"><strong className="text-[1.3rem]"></strong> 
                            And so, Madam Doge ascended the throne, the first queen of the Dogecoin Dynasty.
                        </p>
                    </div>

                </div>

                <div>
                    <Link href="#" className='bg-[#f1831f] border border-transparent inline-block my-[2rem] text-white px-5 py-2 rounded-[4px] hover:bg-transparent hover:border-purple-300'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default Future
