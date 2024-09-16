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
import Triangle from '/readme_assets/Triangle.svg';
import Behance from '/readme_assets/Behance.svg';
import Github from '/readme_assets/Github.svg';
import LinkedIn from '/readme_assets/LinkedIn.svg';

function Header() {
const onSelect = (event) => {
    event.target.blur(); 
}
    return (
        <header className='sticky top-0 hover:translate-y-0 -translate-y-20 transition-all h-36'>
            <div className='absolute w-full h-20 bg-background'></div>
            <Provider store={redux_store}>
                <NavigationMenu>
                    <NavigationMenuList className="mr-5">
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="https://github.com/Th-nguyen-Dev" target="_blank" onClick={onSelect}>
                                <img src={Github} className="w-10" />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="https://www.linkedin.com/in/hung-nguyen-dev/" target="_blank" onClick={onSelect}>
                                <img src={LinkedIn} className="w-10"></img>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="https://www.behance.net/ryannguyen35" target="_blank" onClick={onSelect}>
                                <img src={Behance} className="w-10"></img> 
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </Provider>
            <div className="w-full items-center justify-center flex-col flex mt-4">
                <img src={Triangle} className="w-9"></img>
            </div>
        </header>
    );
}

export default Header;