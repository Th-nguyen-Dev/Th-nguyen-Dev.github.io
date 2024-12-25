
import React from 'react';
import { TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { SliderAmbientLightIntensity } from '../sliders';
import { AmbientColorPicker } from '../color_picker';
import TabsSubContent from './TabsSubContent';

const AmbientLightTab = () => {
    return (
        <div>
            <TabsTrigger className='w-full rounded-full text-lg font-bold' value='ambient_light'>Ambient Light</TabsTrigger>
            <TabsContent value='ambient_light'>
                <hr className='w-full mb-4'/>
                <div className='gap-y-4'>
                    <TabsSubContent label='Intensity'>
                        <SliderAmbientLightIntensity />
                    </TabsSubContent>
                    <TabsSubContent label='Color'>
                        <AmbientColorPicker />
                    </TabsSubContent>
                </div>
            </TabsContent>
        </div>
    );
};

export default AmbientLightTab;