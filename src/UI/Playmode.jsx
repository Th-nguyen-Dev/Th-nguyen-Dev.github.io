import React, {useRef, useEffect} from 'react';
import {useIsVisible} from '@/Hook/useIsVisible';
import {useSelector, useDispatch} from 'react-redux';    
import { setCameraToggle } from "@/context/reducer/camera_toggle";
function PlayMode(){
    const playModeRef = useRef();
    const isVisible = useIsVisible(playModeRef);
    const dispatch = useDispatch();
    useEffect(() => {
        if(isVisible){
            dispatch(setCameraToggle({key: "zoom_out_middle", value: true}));
        }
    }, [isVisible]);
    return (
        <div className=' items-center justify-center flex select-none text-center' ref={playModeRef} style={{height:"200vh"}}>
        </div>
    )
} 
export default PlayMode;