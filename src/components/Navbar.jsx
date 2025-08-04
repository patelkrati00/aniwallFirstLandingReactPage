import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="max-w-7xl mx-auto px-4 relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>

                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex space-x-12">
                        <a href="#" className="text-white border rounded-md p-2">Sign In</a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-2 rounded-md">Create Account</a>
                    </div>
                    
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                
                {mobileDrawerOpen && (
                    <div className="lg:hidden flex flex-col items-center p-12 w-full fixed left-0 top-16 bg-neutral-900 z-50">
                        <ul>
                            {navItems.map((item, index) => (
                                <li className="py-4" key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-4 py-6">
                            <a className="px-3 py-2 border rounded-md" href="#">Sign In</a>
                            <a href="#" className="bg-gradient-to-r px-3 py-2 rounded-md from-orange-500 to-orange-800">Create an account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;