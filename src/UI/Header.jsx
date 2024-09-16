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


const onSelect = (event) => {
    event.target.blur(); 
}

function Header() {
    return (
        <header className='sticky top-0 hover:translate-y-0 -translate-y-20 transition-all h-36'>
            <div className='absolute w-full h-20 bg-background'></div>
            <Provider store={redux_store}>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="https://github.com/Th-nguyen-Dev" target="_blank" onClick={onSelect}>
                                Github
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="https://www.linkedin.com/in/hung-nguyen-dev/" target="_blank" onClick={onSelect}>
                                LinkedIn
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="https://www.behance.net/ryannguyen35" target="_blank" onClick={onSelect}>
                                Behance
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </Provider>
            <div className="w-full items-center justify-center flex">
                <img src={Triangle} className="w-8"></img>
            </div>
        </header>
    );
}

export default Header;