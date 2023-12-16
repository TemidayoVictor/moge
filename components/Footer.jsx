import Link from "next/link"

const Footer = () => {
    return (
        <div className="px-[10%] py-[2em] flex justify-between max-lg:flex-col max-lg:gap-4 max-lg:items-center">
            <div>
                <p className="max-lg:text-center">Copyright 2023 <span className="multicolor">MadamDodge</span><span className="text-[#f1831f]"></span> . All Rights Reserved</p>
            </div>

            <div className="flex w-[6%] justify-between max-lg:w-[20%]">
                <div className="social">
                    <Link href="#" className="text-[1.2rem] border flex flex-col p-1 items-center justify-center rounded-sm hover:bg-orange-300 hover:text-black"><i className="bx bxl-telegram"></i></Link>
                </div>
                <div className="social">
                    <Link href="#" className="text-[1.2rem] border flex flex-col p-1 items-center justify-center rounded-sm hover:bg-orange-300 hover:text-black"><i className="bx bxl-twitter"></i></Link>
                </div>
                {/* <div className="social">
                    <Link href="#" className="text-[1.2rem] border flex flex-col p-1 items-center justify-center rounded-sm hover:bg-orange-300 hover:text-black"><i className="bx bxl-instagram-alt"></i></Link>
                </div> */}
            </div>
        </div>
    )
}

export default Footer