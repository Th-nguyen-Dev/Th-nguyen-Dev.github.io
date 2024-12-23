import React, {useRef, useEffect} from 'react';
import {useIsVisible} from '@/Hook/useIsVisible';
import {useSelector, useDispatch} from 'react-redux';    
import { setCameraToggle } from "@/context/reducer/camera_toggle";
import { setBackgroundToggle } from "@/context/reducer/background_toggle";
import { setLightRotationValue } from '@/context/reducer/lightrotation_value';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
function PlayMode(){
    const playModeRef = useRef();
    const isVisible = useIsVisible(playModeRef);
    const dispatch = useDispatch();
    useEffect(() => {
        if(isVisible){
            dispatch(setCameraToggle({key: "zoom_out_middle", value: true}));
            dispatch(setBackgroundToggle(false));
        }
    }, [isVisible]);

    const onSliderChange = (value) => {   
        dispatch(setLightRotationValue(value / 10));
    }
    return (
        <div className='items-center justify-center flex w-full h-screen'>
            <div className='flex-col flex w-11/12 h-full' ref={playModeRef} >
                <div className='h-full'></div>
                <div className='relative w-full flex justify-center items-center flex-col gap-y-2'>
                    <span className='text-xl font-semibold'>Light Rotation</span>
                    <Slider onValueChange={onSliderChange}/>
                </div>
                <div className='py-4 flex-row flex gap-x-4'>
                    {/* <Input type="text" placeholder="Longitude" />
                    <Input type="text" placeholder="Latitude" />  */}
                </div>
                <div className='h-2'></div>
            </div>
        </div>
    )
} 
export default PlayMode;