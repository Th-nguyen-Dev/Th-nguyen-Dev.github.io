import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion_visualizer';
import { SliderDirectionalLightRotation } from '../sliders';
import { DirectionalColorPicker } from '../color_picker';
import TabsSubContent from './TabsSubContent';

const DirectionalLightTab = () => {
    return (
        <AccordionItem value="directional_light">
            <AccordionTrigger>
                Directional Light
            </AccordionTrigger>
            <AccordionContent>  
                <div>
                    <TabsSubContent label='Rotation'>
                        <SliderDirectionalLightRotation />
                    </TabsSubContent>
                    <TabsSubContent label='Color'>
                        <DirectionalColorPicker />
                    </TabsSubContent>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
};

export default DirectionalLightTab;