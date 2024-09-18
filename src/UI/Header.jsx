import React, {useState} from "react";
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
import { Input } from "@/components/ui/input";
import '@/index.css';
import Triangle from '/svg/Triangle.svg';
import BehanceReact from '@/../public/svg/Behance.svg?react';
import GithubReact from '@/../public/svg/Github.svg?react';
import LinkedInReact from '@/../public/svg/LinkedIn.svg?react';

function Header() {
const onSelect = (event) => {
    event.target.blur();
}
const [githubColor, setGithubColor] = useState('white');
const [linkedInColor, setLinkedInColor] = useState('white');
const [behanceColor, setBehanceColor] = useState('white');
const onPointerOver = (func) =>(event) => {
    func("black");
}
const onPointerOut = (func) =>(event) => {  
    func("white");
}
const onInput = (event) => {
    console.log(event.target.value);
}
const headerItemStyle = "w-60 max-xl:w-40 max-lg:w-32 max-md:w-20 max-sm:w-14 max-xs:w-6 text-3xl max-md:text-xl max-sm:text-xs max-xs:text-xxs flex-auto h-fit font-bold text-center transition-resize "
const headerItemIconStyle = "w-12 max-md:w-10 max-sm:w-6 h-fit justify-center transition-resize";
    return (
         <header className='sticky w-full top-0 hover:translate-y-0  transition-transform'>
            <div className='absolute w-full h-16 max-sm:h-10 bg-background '></div>
            <Provider store={redux_store}>
                <NavigationMenu className="justify-start select-none border-b-2">
                    <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()}

                                    onFocus={onSelect}>
                                    <div className={headerItemStyle}>
                                        Home
                                    </div> 
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()} onFocus={onSelect}>
                                    <div className={headerItemStyle}>
                                        Timeline
                                    </div> 
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()} onFocus={onSelect}>
                                    <div className={headerItemStyle}>
                                        Projects
                                    </div> 
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                    </NavigationMenuList>
                    <div className="max-w-full min-w-0 w-full"></div>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink 
                                className={navigationMenuTriggerStyle()} 
                                href="https://github.com/Th-nguyen-Dev" 
                                target="_blank" 
                                onFocus={onSelect}
                                onPointerOver={onPointerOver(setGithubColor)}
                                onPointerOut= {onPointerOut(setGithubColor)}
                                >
                                    <GithubReact fill={githubColor} className={headerItemIconStyle}></GithubReact>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink 
                                className={navigationMenuTriggerStyle()} 
                                href="https://www.linkedin.com/in/hung-nguyen-dev/" 
                                target="_blank" 
                                onFocus={onSelect}
                                onPointerOver={onPointerOver(setLinkedInColor)}
                                onPointerOut= {onPointerOut(setLinkedInColor)}>
                                <div className=" h-fit justify-center">
                                    <LinkedInReact fill={linkedInColor} className={headerItemIconStyle}></LinkedInReact>
                                </div>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink 
                                className={navigationMenuTriggerStyle()} 
                                href="https://www.behance.net/ryannguyen35" 
                                target="_blank" 
                                onFocus={onSelect}
                                onPointerOver={onPointerOver(setBehanceColor)}
                                onPointerOut= {onPointerOut(setBehanceColor)}>
                                <div className=" h-fit justify-center">
                                    <BehanceReact fill={behanceColor} className={headerItemIconStyle}></BehanceReact>
                                </div>   
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </Provider>
            <div className="w-full items-center justify-center flex-col flex mt-4 select-none">
                <img src={Triangle} className="w-7"></img>
            </div>
        </header>
    );
}

export default Header;