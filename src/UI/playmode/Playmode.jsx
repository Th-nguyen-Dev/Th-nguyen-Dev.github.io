import React, {useRef, useEffect} from 'react';
import {useIsVisible} from '@/Hook/useIsVisible';
import {useDispatch} from 'react-redux';    
import { setCameraToggle } from "@/context/reducer/camera_toggle";
import { setBackgroundToggle } from "@/context/reducer/background_toggle";
import { setPlaymodeToggle } from '@/context/reducer/playmode_toggle';

function PlayMode(){
    const playModeRef = useRef();
    const isVisible = useIsVisible(playModeRef);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isVisible){
            dispatch(setCameraToggle({key: "zoom_out_middle", value: true}));
            dispatch(setBackgroundToggle(false));
            dispatch(setPlaymodeToggle(true));
        } else {
            dispatch(setPlaymodeToggle(false));
        }
    }, [isVisible]);

    return (
            <div className='flex w-screen h-screen items-end justify-end' ref={playModeRef}></div>
    )
} 
export default PlayMode;
