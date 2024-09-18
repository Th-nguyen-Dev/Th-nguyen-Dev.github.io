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
import Triangle from '/readme_assets/Triangle.svg';
import BehanceReact from '@/../public/readme_assets/Behance.svg?react';
import GithubReact from '@/../public/readme_assets/Github.svg?react';
import LinkedInReact from '@/../public/readme_assets/LinkedIn.svg?react';

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
    return (
         <header className='sticky w-full top-0 hover:translate-y-0  transition-all'>
            <div className='absolute w-full h-16 bg-background '></div>
            <Provider store={redux_store}>
                <NavigationMenu className="justify-start select-none border-b-2 flex-shrink">
                    <NavigationMenuList className="mr-5 ">
                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()}
                                    target="_blank"
                                    onFocus={onSelect}>
                                    <div className=" w-60 max-lg:w-40 max-md:w-20 flex-auto h-fit justify-center transition-all">
                                        <h1 className="font-bold text-3xl max-md:text-xl text-center">Home</h1>
                                    </div> 
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()} onFocus={onSelect}>
                                    <div className="w-60 max-lg:w-40 max-md:w-20 flex-auto h-fit justify-center transition-all">
                                        <h1 className="font-bold text-3xl max-md:text-xl text-center">Timeline</h1>
                                    </div> 
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()} onFocus={onSelect}>
                                    <div className="w-60  max-lg:w-40 max-md:w-20 flex-auto h-fit justify-center transition-all">
                                        <h1 className="font-bold text-3xl max-md:text-xl text-center ">Project</h1>
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
                                    <div className="h-fit justify-center">
                                        <GithubReact fill={githubColor} className="w-12 h-auto"></GithubReact>
                                    </div>
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
                                    <LinkedInReact fill={linkedInColor} className="w-12 h-auto"></LinkedInReact>
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
                                    <BehanceReact fill={behanceColor} className="w-12 h-auto"></BehanceReact>
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