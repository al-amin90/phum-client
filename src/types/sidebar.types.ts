import type { ReactNode } from "react"

export type TUserPath = {
    name: string,
    path?: string,
    element?: ReactNode,
    children?: TUserPath[]
}

export type TSidebarItems = {
    key: string,
    label: ReactNode,
    children?: TSidebarItems[]
}