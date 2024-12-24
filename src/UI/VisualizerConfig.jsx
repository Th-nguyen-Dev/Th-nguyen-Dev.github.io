import React, {useState, Fragment, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';    
import { setLightRotationValue } from '@/context/reducer/lightrotation_value';
import { Slider } from '@/components/ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { GrMenu } from "react-icons/gr";
import { SketchPicker } from 'react-color';
import { setLightColorValue } from '@/context/reducer/lightcolor_value';
import ColorPicker from 'react-pick-color';
import { Chrome, Wheel, ShadeSlider } from '@uiw/react-color';
import { hsvaToHsla, hslaToHsva } from '@uiw/color-convert';

const SketchPickerRender = () => {
    const lightColorValue = useSelector((state) => state.lightColorValue);
    const wheelContainerRef = useRef();
    const [{width, height}, setDimensions] = useState({width: 0, height: 0});
    const [hsva, setHsva] = useState(hslaToHsva(lightColorValue));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLightColorValue(hsvaToHsla(hsva)));
    },[hsva]);

    useEffect(() => {
        if (wheelContainerRef.current) {
            setDimensions({
                width: wheelContainerRef.current.offsetWidth,
                height: wheelContainerRef.current.offsetHeight
            });
        }
    },[]);

    return (
      <Fragment>
        <div className='w-full justify-center items-center flex flex-col gap-3'>
            <div className='w-full aspect-square' ref={wheelContainerRef}>
                <Wheel
                    width = {width}
                    height = {height}
                    color={hsva} 
                    onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
                />
            </div>
            <ShadeSlider
                hsva={hsva}
                className='w-full h-1/2'
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
    const lightRotationValue = useSelector((state) => state.lightRotationValue.value) * 10;
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
                        <div className='relative w-full flex flex-col justify-center items-center gap-y-6'>

                            <div className='w-full gap-y-4 flex flex-col'>
                                <span className='text-lg font-normal'>Light Rotation</span>
                                <div className='w-full flex justify-center items-center'>
                                    <div className='w-10/12'>
                                        <Slider onValueChange={handleSliderChange} value={[lightRotationValue]} />
                                    </div>
                                </div>
                            </div>

                            <hr className='w-full'/>

                            <div className='w-full gap-y-4 flex flex-col'>
                                <span className='text-lg font-normal'>Light Color</span>
                                <div className='w-full flex justify-center items-center'>
                                    <div className='w-10/12'>
                                        <SketchPickerRender />
                                    </div>
                                </div>
                            </div>

                            <div/>
                      </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}

export default VisualizerConfig;