import { useState, useEffect } from "react";
import svgPaths from "@/imports/svg-2gx8maccx0";

function FlameLogo() {
    return (
        <a href="/" className="block w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px]" aria-label="Home">
            <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 189 189">
                <g>
                    <path d={svgPaths.p2d672700} fill="#FF6B35" />
                    <path d={svgPaths.p3f8a1580} fill="#FF6B35" />
                    <path d={svgPaths.p30f6c380} fill="#F91418" />
                    <path d={svgPaths.p3e4cca00} fill="#FE7F25" />
                    <path d={svgPaths.p184b6c80} fill="#F91418" />
                    <path d={svgPaths.p31dff780} fill="#FE9A5B" />
                    <path d={svgPaths.p3f63e80} fill="#F91418" />
                    <path d={svgPaths.p2425d980} fill="#FE9A5B" />
                    <path d={svgPaths.pddd2652} fill="#F91418" />
                    <path d={svgPaths.p34e22700} fill="#F91418" />
                    <path d={svgPaths.pd676d00} fill="#FF973E" />
                    <path d={svgPaths.p3c746880} fill="#F55E1C" />
                    <path d={svgPaths.p24c83100} fill="#F55E1C" />
                    <path d={svgPaths.paa2b900} fill="#F55E1C" />
                    <path d={svgPaths.p1a33bf10} fill="#FE7F25" />
                    <path d={svgPaths.p1ce0f100} fill="#FE7F25" />
                    <path d={svgPaths.p170d5000} fill="#FECBB2" />
                    <path d={svgPaths.p3d57db00} fill="#FECBB2" />
                    <path d={svgPaths.p20ff8a00} fill="#FECBB2" />
                    <path d={svgPaths.p1b994ff0} fill="#F91418" />
                    <path d={svgPaths.p3b883700} fill="#FECBB2" />
                    <path d={svgPaths.p24334c00} fill="black" />
                    <path d={svgPaths.p35e79fb0} fill="#FF6B35" />
                    <path d={svgPaths.p1d2f9b80} fill="#FF6B35" />
                    <path d={svgPaths.p38ae8b80} fill="#FF6B35" />
                    <path d={svgPaths.p2f992180} fill="#FF6B35" />
                    <path d={svgPaths.p38f83600} fill="black" />
                    <path d={svgPaths.p35520c00} fill="#F55E1C" />
                    <path d={svgPaths.p1742c100} fill="#B83B10" />
                    <path d={svgPaths.p1c807a00} fill="black" />
                    <path d={svgPaths.p284c8e00} fill="#B83B10" />
                    <path d={svgPaths.p206fd280} fill="#FF6B35" />
                    <path d={svgPaths.p19698e80} fill="#FF6B35" />
                    <path d={svgPaths.p3c633400} fill="#FF6B35" />
                    <path d={svgPaths.p918480} fill="#FF6B35" />
                    <path d={svgPaths.pb430e00} fill="#FF6B35" />
                    <path d={svgPaths.p2957eb80} fill="#FF6B35" />
                    <path d={svgPaths.p37f65800} fill="#FF6B35" />
                    <path d={svgPaths.pde81100} fill="#FF6B35" />
                    <path d={svgPaths.p1a9c09c0} fill="black" />
                </g>
            </svg>
        </a>
    );
}

function HamburgerIcon() {
    return (
        <div className="h-[34px] w-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 34">
                <path d={svgPaths.p3d352580} fill="#363636" />
                <path d={svgPaths.pdd5fa0} fill="#363636" />
                <path d={svgPaths.p21e34800} fill="#363636" />
            </svg>
        </div>
    );
}

function MenuButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            className="relative bg-white cursor-pointer rounded-full w-[56px] h-[56px] md:w-[68px] md:h-[68px] flex items-center justify-center overflow-hidden transition-transform hover:scale-105 border-none p-0"
            onClick={onClick}
            aria-label="Open menu"
        >
            <HamburgerIcon />
            {/* Border ring */}
            <div
                aria-hidden="true"
                className="absolute border border-[#363636] border-solid inset-0 pointer-events-none rounded-full"
            />
        </button>
    );
}

function SidebarMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Sidebar Drawer */}
            <div
                className={`fixed top-0 left-0 bottom-0 w-[320px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex flex-col h-full p-8 relative">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Close menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Logo in Sidebar */}
                    <div className="mb-12">
                        <div className="w-[80px] h-[80px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 189 189">
                                <g>
                                    <path d={svgPaths.p2d672700} fill="#FF6B35" />
                                    <path d={svgPaths.p3f8a1580} fill="#FF6B35" />
                                    <path d={svgPaths.p30f6c380} fill="#F91418" />
                                    {/* Using simplified logo paths for brevity in sidebar if needed, borrowing key paths */}
                                    <path d="M94.5 189C146.691 189 189 146.691 189 94.5C189 42.3091 146.691 0 94.5 0C42.3091 0 0 42.3091 0 94.5C0 146.691 42.3091 189 94.5 189Z" fill="none" />
                                </g>
                            </svg>
                            {/* Reusing FlameLogo is easier but it has hardcoded classes. Let's just put the text or a simplified version */}
                            <span className="font-bold text-2xl text-[#FF6B35]">GeekPie</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col space-y-6">
                        {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-2xl font-medium text-gray-900 hover:text-[#FF6B35] transition-colors font-['Teko'] uppercase"
                                onClick={onClose}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Sidebar Footer info */}
                    <div className="mt-auto">
                        <p className="text-sm text-gray-500">© 2026 GeekPie Agency</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-10 left-0 right-0 z-50 h-[100px] md:h-[118px] w-full">
            <div className="w-full h-full max-w-[1920px] mx-auto px-4 md:px-[61px] flex items-center justify-between">
                {/* Flame Logo — top left */}
                <FlameLogo />

                {/* Menu Button — top right */}
                <div className="flex items-center pt-2 md:pt-[0px]">
                    <MenuButton onClick={() => setIsMenuOpen(true)} />
                </div>
            </div>

            {/* Sidebar Navigation */}
            <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </header>
    );
}
