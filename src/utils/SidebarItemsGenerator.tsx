import { NavLink } from "react-router-dom"
import type { TSidebarItems, TUserPath } from "../types"


export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
     const sidebarItems = items.reduce((acc: TSidebarItems[], item) => {
        if(item.name && item.path){
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
            })
        }
    
        if(item.children){
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map(child => ({
                    key: child.name,
                    label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
                }))
            })
        }
    
        return acc
    }, [])

    return sidebarItems

}