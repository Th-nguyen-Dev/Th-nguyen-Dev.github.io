import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { GrMenu } from "react-icons/gr";
import { Tabs, TabsList } from "@/components/ui/tabs"
import DirectionalLightTab from './tabs/DirectionalLightTab';
import AmbientLightTab from './tabs/AmbientLightTab';
import CameraTab from './tabs/CameraTab';

const TabsSubContent = ({ label, children }) => {
    return (
        <div className='w-full gap-y-4 flex flex-col'>
            <span className='text-base font-normal'>{label}</span>
            <div className='w-full flex justify-center items-center'>
                <div className='w-10/12'>
                    {children}
                </div>
            </div>
            <div className='h-4'></div> 
        </div>
    );
};
const VisualizerConfig = () => {
    return (
        <div className='flex sticky w-full h-full items-end justify-end'>
            <div className='absolute py-6 px-10'>
                <Popover>
                    <PopoverTrigger className='w-16 h-10 rounded-full items-center bg-background ring-1 ring-foreground justify-center flex'>
                        <GrMenu size={28} />
                    </PopoverTrigger>
                    <PopoverContent className='my-4 z-50 w-full transition-all'>
                        <Tabs className='w-full h-fit' defaultValue='directional_light'>
                            <TabsList className='flex-col flex gap-y-4 bg-transparent'>
                                <DirectionalLightTab />
                                <AmbientLightTab />
                                <CameraTab />
                            </TabsList>
                            <div className='h-4'></div>
                        </Tabs>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default VisualizerConfig;