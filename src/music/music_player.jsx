import {React, useRef, useEffect} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import EarthSleep from '/music/Earth Sleeps.mp3';
function MusicPlayer() {
    const audioRef = useRef(null);
return (
    <>
        <button 
            onClick={() => audioRef.current.audio.current.play()} 
            style={{ position: 'fixed', bottom: '0', left: '50%', transform: 'translateX(-50%)', zIndex: '9999', marginBottom: '20px' }}>
            Play
        </button>
        <AudioPlayer
            ref={audioRef}
            src={EarthSleep}
            // autoPlay
            loop
            style={{ display: 'none' }}
        />
    </>
);
}

export default MusicPlayer;