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

import '@/index.css';
import Triangle from '/readme_assets/Triangle.svg';
import BehanceReact from '@/../public/readme_assets/Behance.svg?react';
import GithubReact from '@/../public/readme_assets/Github.svg?react';
import LinkedInReact from '@/../public/readme_assets/LinkedIn.svg?react';

function Header() {
const onSelect = (event) => {
    console.log("Before Select", event.target);
    event.target.blur(); 
    console.log("onSelect");
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
    return (
        <header className='sticky top-0 hover:translate-y-0 -translate-y-20 transition-all h-36'>
            <div className='absolute w-full h-20 bg-background '></div>
            <Provider store={redux_store}>
                <NavigationMenu className="justify-start flex-nowrap select-none">
                    <NavigationMenuList className="mr-5 flex-nowrap">
                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()} >
                                    <h1 className="w-60 h-auto text-center font-bold">Home</h1>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()} >
                                    <h1 className="w-60 h-auto text-center font-bold">Timeline</h1>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()} >
                                    <h1 className="w-60 h-auto text-center font-bold">Project</h1>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                    </NavigationMenuList>
                    <div className="w-full"></div>
                    <NavigationMenuList className="mr-5 flex-nowrap">
                        <NavigationMenuItem>
                            <NavigationMenuLink 
                                className={navigationMenuTriggerStyle()} 
                                href="https://github.com/Th-nguyen-Dev" 
                                target="_blank" 
                                onClick={onSelect}
                                onPointerOver={onPointerOver(setGithubColor)}
                                onPointerOut= {onPointerOut(setGithubColor)}
                                >
                                    <div>
                                        <GithubReact fill={githubColor} className="w-14 h-auto"></GithubReact>
                                    </div>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink 
                                className={navigationMenuTriggerStyle()} 
                                href="https://www.linkedin.com/in/hung-nguyen-dev/" 
                                target="_blank" 
                                onClick={onSelect}
                                onPointerOver={onPointerOver(setLinkedInColor)}
                                onPointerOut= {onPointerOut(setLinkedInColor)}>
                                {/* <img src={LinkedIn} className="w-10"></img> */}
                                <LinkedInReact fill={linkedInColor} className="w-14 h-auto"></LinkedInReact>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink 
                                className={navigationMenuTriggerStyle()} 
                                href="https://www.behance.net/ryannguyen35" 
                                target="_blank" 
                                onClick={onSelect}
                                onPointerOver={onPointerOver(setBehanceColor)}
                                onPointerOut= {onPointerOut(setBehanceColor)}>
                                {/* <img src={Behance} className="w-10"></img>  */}
                                <BehanceReact fill={behanceColor} className="w-14 h-auto"></BehanceReact>   
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </Provider>
            <div className="w-full items-center justify-center flex-col flex mt-3">
                <img src={Triangle} className="w-7"></img>
            </div>
        </header>
    );
}

export default Header;