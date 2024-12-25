import React from 'react';
import { TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { SliderDirectionalLightRotation } from '../sliders';
import { DirectionalColorPicker } from '../color_picker';
import TabsSubContent from './TabsSubContent';

const DirectionalLightTab = () => {
    return (
        <div>
            <TabsTrigger className='w-full rounded-full text-lg font-bold' value='directional_light'>Directional Light</TabsTrigger>
            <TabsContent value='directional_light'>
                <hr className='w-full mb-4'/>
                <div>
                    <TabsSubContent label='Rotation'>
                        <SliderDirectionalLightRotation />
                    </TabsSubContent>
                    <TabsSubContent label='Color'>
                        <DirectionalColorPicker />
                    </TabsSubContent>
                </div>
            </TabsContent>
        </div>
    );
};

export default DirectionalLightTab;