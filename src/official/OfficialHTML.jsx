
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import redux_store from '@/context/redux_store.jsx';
import Introduction from '@/UI/introduction/Introduction';
import Timeline from '@/UI/timeline/Timeline';
import Project from '@/UI/projects/Project';
import ProjectGraphic from '@/UI/projects/ProjectGraphic';
import Background from '@/UI/background_buffer/Background';
import Interim from '@/UI/background_buffer/Interim';
import PlayMode from '@/UI/playmode/Playmode';

export default function OfficialHTML({ htmlRef }) {
    return (
        <Provider store={redux_store}>
            <div className='h-auto w-auto' ref={htmlRef}>
                <div className='pointer-events-auto'>
                    <div className='h-56'></div>
                    <Background/>
                    <Introduction/>
                    <Interim text={"The Earth is 4.5 billion year old."} helpText={"Hint: You can hover over the buttons to travel."}/>
                    <Timeline/>
                    <Interim text={"Coral reefs are Earth's largest living structure."}/>
                    <Project/>
                    <Interim text={"The Moon is drifting away from Earth."}/>
                    <ProjectGraphic/>
                    <Interim text={"The Moon helps stabilize the Earth's wobble"}/>
                </div>
                <div className='pointer-events-none'>
                    <PlayMode/>
                </div>
            </div>
        </Provider>
    );
}