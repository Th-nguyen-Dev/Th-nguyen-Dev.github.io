import React, {useState, Fragment, useEffect} from 'react';
import { useDispatch } from 'react-redux';    
import { setLightRotationValue } from '@/context/reducer/lightrotation_value';
import { Slider } from '@/components/ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { GrMenu } from "react-icons/gr";
import { SketchPicker } from 'react-color';
import { setLightColorValue } from '@/context/reducer/lightcolor_value';
import ColorPicker from 'react-pick-color';
import { Chrome, Wheel, ShadeSlider } from '@uiw/react-color';
import { hsvaToHsla } from '@uiw/color-convert';

const SketchPickerRender = () => {
    const [hsva, setHsva] = useState({ h: 0, s: 0, v: 100, a: 1 });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLightColorValue(hsvaToHsla(hsva)));
    },[hsva]);

    return (
      <Fragment>
        <div className='flex flex-col justify-center items-center gap-y-4'>
            <Wheel
                color={hsva} 
                onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
            />
            <ShadeSlider
            hsva={hsva}
            style={{ width: 210 }}
            onChange={(newShade) => {
                setHsva({ ...hsva, ...newShade });
            }}
            />
        </div>
      </Fragment>
    );
};

const VisualizerConfig = () => {
    const dispatch = useDispatch(); 

    const handleSliderChange = (value) => {   
        dispatch(setLightRotationValue(value / 10));
    }

    return (
        <div className='flex sticky w-full h-full items-end justify-end'>
            <div className='absolute py-6 px-10'>
                <Popover>
                    <PopoverTrigger className='w-16 h-10 rounded-full items-center bg-background ring-1 ring-foreground justify-center flex'>
                        <GrMenu size={28} /> 
                    </PopoverTrigger>
                    <PopoverContent className='my-4 z-50 h-fit w-64'>
                        <div className='relative w-full flex flex-col gap-y-8'>
                            <span className='text-lg font-normal'>Light Rotation</span>
                            <Slider onValueChange={handleSliderChange} />
                            <span className='text-lg font-normal'>Light Color</span>
                            <SketchPickerRender />
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}

export default VisualizerConfig;