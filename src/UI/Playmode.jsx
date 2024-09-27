import React, {useRef, useEffect} from 'react';
import {useIsVisible} from '@/Hook/useIsVisible';
import {useSelector, useDispatch} from 'react-redux';    
import { setPlaymodeToggle } from '@/context/reducer/playmode_toggle';
function PlayMode(){
    const playModeRef = useRef();
    const isVisible = useIsVisible(playModeRef);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPlaymodeToggle(isVisible));
    }, [isVisible]);
    return (
        <div className=' items-center justify-center flex select-none' ref={playModeRef} style={{width:"200vh", height:"200vh"}}>
        </div>
    )
} 
export default PlayMode;