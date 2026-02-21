import { useState } from "react"


function TobBar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='topbar-main border-b border-black/14 relative'>
            <div className="topbar-content-main flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 py-2.5">
                <div className="social-icons flex flex-row items-center gap-4">
                    <h5 className="text-black/40 text-sm">Follow Us:</h5>
                    <ul className="flex flex-row gap-5 text-sm items-center text-black/60">
                        <li className="transition-all duration-150 hover:text-(--text-secondary)"><a href="?"><i className="bi bi-facebook"></i></a></li>
                        <li className="transition-all duration-150 hover:text-(--text-secondary)"><a href="?"><i className="bi bi-instagram"></i></a></li>
                        <li className="transition-all duration-150 hover:text-(--text-secondary)"><a href="?"><i className="bi bi-twitter-x"></i></a></li>
                        <li className="transition-all duration-150 hover:text-(--text-secondary)"><a href="?"><i className="bi bi-youtube"></i></a></li>
                    </ul>
                </div>
                <div className="account-main flex flex-row gap-1 text-black/50 text-sm">
                    <div className="account relative px-2">
                        <h5 className="transition-all duration-150 hover:text-(--text-secondary) cursor-default select-none" onClick={()=>{setIsOpen(!isOpen)}}>My Account <i class="ms-1 text-xs bi bi-chevron-down"></i></h5>
                        <div className={`dropdown-content absolute p-4 w-36 top-8 -left-10 shadow-[0_0_15px_#000]/20 ${isOpen ? '' : 'hidden'}`}>
                            <h5 className="transition-all duration-150 hover:text-(--text-secondary) pb-3 border-b border-black/20"><a href="?">Log in</a></h5>
                            <h5 className="transition-all duration-150 hover:text-(--text-secondary) pt-3"><a href="?">Create Account</a></h5>
                        </div>
                    </div>
                    <h5 className="px-2 border-s-2 border-black/60">USD</h5>
                </div>
            </div>
        </section>
    )
}

export default TobBar