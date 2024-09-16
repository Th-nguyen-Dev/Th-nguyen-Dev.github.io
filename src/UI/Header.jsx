import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import { Provider } from 'react-redux';
import redux_store from '@/context/redux_store.jsx';

import '@/index.css';
import Triangle from '../../public/readme_assets/Triangle.svg';
function Header(){
    return(
        <header className='sticky top-0 hover:translate-y-0 -translate-y-20 transition-all h-36'>
            <div className='absolute w-full h-20 bg-background'></div>
            <Provider store={redux_store}>
                    <NavigationMenu >
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} > Github </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}> LinkedIn </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}> Behance </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
            </Provider>
            <div className=" w-full items-center justify-center flex"> 
                <img src = {Triangle} className="w-8"></img>
            </div>
        </header>
    );
}
export default Header;