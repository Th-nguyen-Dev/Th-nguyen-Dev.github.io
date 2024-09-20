import {React, useRef, useEffect, useState} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import EarthSleep from '/music/Earth Sleeps.mp3';
import '@/index.css';
function MusicPlayer() {
    const audioRef = useRef(null);
    const [play, setPlay] = useState(false);    
    useEffect(() => {
        if(play){
            audioRef.current.audio.current.play();
        }
        else{
            audioRef.current.audio.current.pause();
        }
    }, [play]);
return (
    <>
        <button
            onClick={() => setPlay(!play)}
            className='z-50 bottom-4 right-1/2 absolute select-none inline-flex items-center justify- whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-black'
        >
        Play
        </button>
        <AudioPlayer
            ref={audioRef}
            src={EarthSleep}
            // autoPlay
            // loop
            volume={0.15}
            className='z-50 absolute hidden'
        />
    </>
);
}

export default MusicPlayer;