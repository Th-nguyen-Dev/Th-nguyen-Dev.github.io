import React, {useState, Fragment, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';    
import { setLightRotationValue } from '@/context/reducer/directional_light/light_rotation_value';
import { Slider } from '@/components/ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { GrMenu } from "react-icons/gr";
import { SketchPicker } from 'react-color';
import { setLightColorValue } from '@/context/reducer/directional_light/light_color_value';
import ColorPicker from 'react-pick-color';
import { Chrome, Wheel, ShadeSlider } from '@uiw/react-color';
import { hsvaToHsla, hslaToHsva } from '@uiw/color-convert';
import { setAmbientColorValue } from '@/context/reducer/ambient_light/ambient_color_value';
import { setAmbientIntensityValue } from '@/context/reducer/ambient_light/ambient_intensity_value';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


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

const SketchPickerRenderAmbient = () => {
    const ambientLightValue = useSelector((state) => state.ambientColorValue);
    const ambientWheelRef = useRef();
    const [hsvaAmbient, setHsvaAmbient] = useState(hslaToHsva(ambientLightValue));
    const [{ width, height }, setAmbientDims] = useState({ width: 0, height: 0 });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAmbientColorValue(hsvaToHsla(hsvaAmbient)));
    }, [hsvaAmbient]);

    useEffect(() => {
        if (ambientWheelRef.current) {
            setAmbientDims({
                width: ambientWheelRef.current.offsetWidth,
                height: ambientWheelRef.current.offsetHeight
            });
        }
    }, []);

    return (
        <div className='w-full flex flex-col gap-3 items-center'>
            <div className='w-full aspect-square' ref={ambientWheelRef}>
                <Wheel
                    width={width}
                    height={height}
                    color={hsvaAmbient}
                    onChange={(color) => setHsvaAmbient({ ...hsvaAmbient, ...color.hsva })}
                />
            </div>
            <ShadeSlider
                hsva={hsvaAmbient}
                className='w-full h-1/2'
                onChange={(newShade) => setHsvaAmbient({ ...hsvaAmbient, ...newShade })}
            />
        </div>
    );
};

const VisualizerConfig = () => {
    const dispatch = useDispatch(); 
    const lightRotationValue = useSelector((state) => state.lightRotationValue.value) * 10;
    const ambientIntensityValue = useSelector((state) => state.ambientIntensityValue.value);
    const handleSliderChange_DirectionalLightRotation = (value) => {   
        dispatch(setLightRotationValue(value / 10));
    }

    const handleSliderChange_AmbientLightIntensity = (value) => {
        dispatch(setAmbientIntensityValue(value));
    }

    return (
        <div className='flex sticky w-full h-full items-end justify-end'>
            <div className='absolute py-6 px-10'>
                <Popover>
                    <PopoverTrigger className='w-16 h-10 rounded-full items-center bg-background ring-1 ring-foreground justify-center flex'>
                        <GrMenu size={28} /> 
                    </PopoverTrigger>
                    <PopoverContent className='my-4 z-50 h-fit w-80'>
                        <Tabs className='w-full' defaultValue='directional_light'>
                            <TabsList className='flex justify-center items-center gap-x-2 bg-transparent'>
                                <TabsTrigger className='w-full rounded-2xl' value='directional_light'>Directional Light</TabsTrigger>
                                <TabsTrigger className='w-full rounded-2xl' value='ambient_light'>Ambient Light</TabsTrigger>
                             </TabsList>  
                             <div className='h-4'></div> 
                            <TabsContent className='gap-y-4 flex flex-col' value='directional_light'>
                                <div className='w-full gap-y-4 flex flex-col'>
                                    <span className='text-base font-normal'>Directional Light Rotation</span>
                                    <div className='w-full flex justify-center items-center'>
                                        <div className='w-10/12'>
                                            <Slider onValueChange={handleSliderChange_DirectionalLightRotation} value={[lightRotationValue]} />
                                        </div>
                                    </div>
                                </div>
                                <div className='my-4 w-full' />  
                                <div className='w-full gap-y-4 flex flex-col'>
                                    <span className='text-base font-normal'>Directional Light Color</span>
                                    <div className='w-full flex justify-center items-center'>
                                        <div className='w-10/12'>
                                            <SketchPickerRender />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent className='gap-y-4 flex flex-col' value='ambient_light'>

                                <div className='w-full gap-y-4 flex flex-col'>
                                    <span className='text-base font-normal'>Ambient Light Intensity</span>
                                    <div className='w-full flex justify-center items-center'>
                                        <div className='w-10/12'>
                                            <Slider onValueChange={handleSliderChange_AmbientLightIntensity} value={[ambientIntensityValue]} />
                                        </div>
                                    </div>
                                </div>
                                <div className='my-4 w-full' />  
                                <div className='w-full gap-y-4 flex flex-col'>
                                    <span className='text-base font-normal'>Ambient Light Color</span>
                                    <div className='w-full flex justify-center items-center'>
                                        <div className='w-10/12'>
                                            <SketchPickerRenderAmbient />
                                        </div>
                                    </div>
                                </div>

                            </TabsContent>
                        </Tabs>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}

export default VisualizerConfig;