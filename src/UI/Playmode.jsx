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
        <div className='h-screen w-screen items-center justify-center flex select-none' ref={playModeRef}>
        </div>
    )
} 
export default PlayMode;