import React from 'react';
import { TabsTrigger, TabsContent } from '@/components/ui/tabs';
import TabsSubContent from './TabsSubContent';

const CameraTab = () => {
    return (
        <div>
            <TabsTrigger className='w-full rounded-full text-lg font-bold' value='camera'>Camera</TabsTrigger>
            <TabsContent value='camera'>
                 <hr className='w-full mb-4'/>
                <div className='gap-y-4'>
                    <TabsSubContent label='Camera'>
                        <div className='w-full h-4'></div>
                    </TabsSubContent>
                </div>
            </TabsContent>
        </div>
    );
};

export default CameraTab;