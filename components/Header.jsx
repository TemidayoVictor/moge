import Link from "next/link"

const Header = () => {
    return (
        <div className="bg-black bg-opacity-95 px-[10%] py-3 fixed border-b border-gray-700 top-0 left-0 right-0 flex justify-between items-center z-[1000]">
           <Link href="/" className="text-[1.5rem] font-bold text-blue-300  max-lg:text-[1.1rem]">
                SPORTY<span>BOOK</span>
            </Link>

            <nav className="nav flex gap-4">
                <Link href="/" className="nav-link text-[.9rem] border-b border-transparent hover:text-blue-300 hover:border-blue-300 py-3">ABOUT</Link>
                <Link href="/" className="nav-link text-[.9rem] border-b border-transparent hover:text-blue-300 hover:border-blue-300 py-3">TOKEN</Link>
                <Link href="/" className="nav-link text-[.9rem] border-b border-transparent hover:text-blue-300 hover:border-blue-300 py-3">ETHERSCAN</Link>
                <Link href="/" className="nav-link text-[.9rem] border-b border-transparent hover:text-blue-300 hover:border-blue-300 py-3">DEXTOOLS</Link>
                <Link href="/" className="nav-link text-[.9rem] border-b border-transparent hover:text-blue-300 hover:border-blue-300 py-3">TELEGRAM</Link>
                <Link href="/" className="nav-link text-[.9rem] border-b border-transparent hover:text-blue-300 hover:border-blue-300 py-3">TWITTER</Link>
            </nav> 

            <i className="bx bx-menu text-[1.5rem]"></i>  
                    
        </div>
    )
}

export default Header