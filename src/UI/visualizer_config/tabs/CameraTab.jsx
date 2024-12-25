import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion_visualizer';
import TabsSubContent from './TabsSubContent';

const CameraTab = () => {
    return (
        <AccordionItem value="camera">
            <AccordionTrigger>
                Camera
            </AccordionTrigger>
            <AccordionContent>
                <div className='gap-y-4'>
                    <TabsSubContent label='Camera'>
                        <div className='w-full h-4'></div>
                    </TabsSubContent>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
};

export default CameraTab;