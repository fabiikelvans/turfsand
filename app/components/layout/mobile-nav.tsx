import * as React from "react"
import Link from "next/link"
import { useState } from "react"; // Import useState

import {dashboardConfig, siteConfig} from "@/config/site"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"
import {MainNavItem} from "@/types";

interface MobileNavProps {
    items: MainNavItem[]
    children?: React.ReactNode
    toggleMobileMenu: () => void;
}

export function MobileNav({  children, toggleMobileMenu }: MobileNavProps) {
    useLockBody()
    const items = dashboardConfig.mainNav

    const [menuVisible, setMenuVisible] = useState(true); // Add state for menu visibility

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <div
            className={cn(
                "bg-background/50 backdrop-blur-sm fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden",
                !menuVisible && "hidden" // Conditionally hide the menu based on state
            )}
        >
            <div className="relative z-20 grid gap-6 rounded-md bg-primary text-background p-4 shadow-md">
                <nav className="grid grid-flow-row auto-rows-max text-sm">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                                item.disabled && "cursor-not-allowed opacity-60"
                            )}
                            onClick={() => {
                                toggleMobileMenu(); // Call the toggleMobileMenu function when a link is clicked
                            }}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
                {children}
            </div>
        </div>
    )
}
