"use client"

import * as React from "react"
import Link from "next/link"
import {usePathname, useSelectedLayoutSegment} from "next/navigation"

import { siteConfig, dashboardConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {MainNavItem} from "@/types";
import {MobileNav} from "@/app/components/layout/mobile-nav";
import {LogOut, Menu, XIcon} from "lucide-react";
import {Button} from "@/app/components/ui/button";
import Image from "next/image";
import {useRouter} from "next/router";

interface MainNavProps {
    items?: MainNavItem[]
    children?: React.ReactNode
}


export function MainNav({ children }: MainNavProps) {
    const segment = useSelectedLayoutSegment();
    const pathname = usePathname();
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
    const items = dashboardConfig.mainNav;

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <div className="flex justify-between gap-6 md:gap-10 px-8 md:px-20 py-8 z-20">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                <Image src='/logo.svg' alt='logo' width={160} height={80} className='object-cover'/>
            </Link>
            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                                item.href.startsWith(`/${segment}`)
                                    ? "text-foreground"
                                    : "text-foreground/60",
                                item.disabled && "cursor-not-allowed opacity-80",
                                pathname === item.href ? 'active-link text-primary' : '' // Add this line
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}

                </nav>
            ) : null}

            <Button className='hidden md:block'>Get Started</Button>

            <div className='bg-background/80 backdrop-blur-sm w-full p-8 mx-auto md:hidden fixed top-0 left-0 flex justify-between items-center z-30'>
                <Link href="/" className="">
                    <Image src='/logo.svg' alt='logo' width={100} height={60} className='object-cover'/>
                </Link>

                <button
                    className="flex items-center space-x-2 md:hidden"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    {showMobileMenu ? <XIcon /> : <Menu />}
                </button>
            </div>
            {showMobileMenu && items && (
                <MobileNav items={items} toggleMobileMenu={toggleMobileMenu}>{children}</MobileNav>
            )}
        </div>
    )
}