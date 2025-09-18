"use client"

// import Logo from "@/assets/images/logo.svg"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from "@/contants"
import Button from "@/component/Button"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <nav>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-black/15 rounded-[10px] md:rounded-2xl bg-background/10 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-6 md:pr-2 items-center">
                            <div>
                                EnSpeek
                            </div>
                            <div className="hidden lg:flex justify-center items-center">
                                <nav className="flex gap-6 font-medium">
                                    {
                                        navLinks.map((link) => (
                                            <a key={link.label} href={link.href}>{link.label}</a>
                                        ))
                                    }
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu block md:hidden"
                                    onClick={() => setIsOpen(prev => !prev)}
                                >
                                    <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition", isOpen && 'opacity-0')}></line>
                                    <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition", isOpen && 'rotate-45 -translate-y-1')}></line>
                                    <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition", isOpen && '-rotate-45 translate-y-1')}></line>
                                </svg>
                                <Button variant="secondary" className="hidden md:inline-flex items-center">Log In</Button>
                                <Button variant="primary" className="hidden md:inline-flex items-center">Sign Up</Button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {
                                isOpen && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        className="overflow-hidden">
                                        <div className="flex flex-col items-center gap-4 py-2">
                                            {navLinks.map((link) => (
                                                <a href={link.href} key={link.label} className="">
                                                    {link.label}
                                                </a>
                                            ))}
                                            <Button variant="secondary">Login In</Button>
                                            <Button variant="primary">Sign Up</Button>
                                        </div>
                                    </motion.div>
                                )
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:px-[130px]" />
        </nav>
    )
}

export default Navbar