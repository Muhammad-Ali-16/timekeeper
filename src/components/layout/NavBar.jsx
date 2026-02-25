import { useState } from "react"

function OverlayBar({ isOverlayOpen }) {
    const [isProductsOpen, setIsProductsOpen] = useState(false)
    const [isPagesOpen, setIsPagesOpen] = useState(false)

    return (
        <ul className={`nav-links flex-col gap-2 lg:hidden flex overflow-y-scroll transition-all duration-200 ${isOverlayOpen ? 'max-h-[250px] ' : 'max-h-0'}`}>
            <li className="nav-link font-medium transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Home</a></li>
            <li className="nav-link font-medium relative" onClick={() => { setIsProductsOpen(!isProductsOpen) }}>
                <span className=" transition-all duration-150 hover:text-(--text-secondary) select-none">
                    Products <i className={`text-xs ms-1 bi bi-chevron-down before:transition-all before:duration-150 before:transform ${isProductsOpen ? 'before:rotate-180' : 'before:rotate-0'}`}></i>
                </span>
                <div className="dropdown-main w-48 bg-white">
                    <ul className={`dropdown-content px-4 py-1 leading-8 text-sm ${isProductsOpen ? 'block' : 'hidden'}`}>
                        <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Simple Product</a></li>
                        <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Affiliate Product</a></li>
                        <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Variable Product</a></li>
                        <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Soldout Product</a></li>
                        <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Countdown Product</a></li>
                        <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Dropshipping Product</a></li>
                    </ul>
                </div>
            </li>
            <li className="nav-link font-medium relative" onClick={() => { setIsPagesOpen(!isPagesOpen) }}>
                <span className=" transition-all duration-150 hover:text-(--text-secondary) select-none">
                    Pages <i className={`text-xs ms-1 bi bi-chevron-down before:transition-all before:duration-150 before:transform ${isPagesOpen ? 'before:rotate-180' : 'before:rotate-0'}`}></i>
                </span>
                <div className="dropdown-main w-48 bg-white">
                    <ul className={`dropdown-content px-4 py-1 leading-8 text-sm ${isPagesOpen ? 'block' : 'hidden'}`}>
                        <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">About Us</a></li>
                        <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Contact Us</a></li>
                        <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Faq</a></li>
                    </ul>
                </div>
            </li>
            <li className="nav-link font-medium transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Blog</a></li>
            <li className="nav-link font-medium transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Contact</a></li>
        </ul>
    )
}

export default function NavBar() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)

    return (
        <nav className='navbar-main pb-1'>
            <div className="navbar-content-main flex flex-row justify-between items-center py-5 px-2">
                <div className="logo">
                    <img src="/logo.png" alt="logo" className="w-36" />
                </div>
                <ul className="nav-links flex-row gap-12 hidden lg:flex">
                    <li className="nav-link font-medium transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Home</a></li>
                    <li className="nav-link font-medium relative group select-none cursor-pointer">
                        <span className=" transition-all duration-150 group-hover:text-(--text-secondary)">
                            Products <i className="text-xs ms-1 bi bi-chevron-down"></i>
                        </span>
                        <div className="dropdown-main w-48 absolute bg-white top-6.5 hidden group-hover:block">
                            <ul className="dropdown-content p-4 leading-8 text-sm shadow-[0_0_15px_#000]/20">
                                <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Simple Product</a></li>
                                <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Affiliate Product</a></li>
                                <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Variable Product</a></li>
                                <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Soldout Product</a></li>
                                <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Countdown Product</a></li>
                                <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Dropshipping Product</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-link font-medium relative group select-none cursor-pointer">
                        <span className=" transition-all duration-150 group-hover:text-(--text-secondary)">
                            Pages <i className="text-xs ms-1 bi bi-chevron-down"></i>
                        </span>
                        <div className="dropdown-main w-48 absolute bg-white top-6.5 hidden group-hover:block">
                            <ul className="dropdown-content p-4 leading-8 text-sm shadow-[0_0_15px_#000]/20">
                                <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">About Us</a></li>
                                <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Contact Us</a></li>
                                <li className="dropdown-link transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Faq</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-link font-medium transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Blog</a></li>
                    <li className="nav-link font-medium transition-all duration-150 hover:text-(--text-secondary)"><a href="?">Contact</a></li>
                </ul>
                <div className="cart-icon relative cursor-pointer">
                    <i className="bi bi-cart text-2xl"></i>
                    <span className="bg-(--bg-secondary) absolute flex items-center justify-center -top-1.5 left-4.5 text-xs text-white font-semibold w-4 h-4 rounded-full">0</span>
                </div>
                <div className="toggle-icon inline-block lg:hidden cursor-pointer" onClick={() => { setIsOverlayOpen(!isOverlayOpen) }}>
                    <i className={`bi ${isOverlayOpen ? 'bi-x' : 'bi-list'} text-3xl`}></i>
                </div>
            </div>

            <OverlayBar isOverlayOpen={isOverlayOpen}/>

        </nav>
    )
}