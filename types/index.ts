
export type NavItem = {
    title: string
    href: string
    disabled?: boolean
}

export type MainNavItem = NavItem



export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
        twitter: string
        github: string
    }
}

export type DocsConfig = {
    mainNav: MainNavItem[]
}

export type MarketingConfig = {
    mainNav: MainNavItem[]
}

export type DashboardConfig = {
    mainNav: MainNavItem[]
}



