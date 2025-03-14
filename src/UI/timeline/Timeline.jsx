import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setCameraToggle } from '@/context/reducer/camera_toggle';
import { setBackgroundToggle } from '@/context/reducer/background_toggle';
import { useFrame } from '@react-three/fiber';
import { useIsVisible } from '@/Hook/useIsVisible';
import LocationPanel from './location_panel';

function Timeline() {
    const dispatch = useDispatch();
    const timelineRef = useRef();
    const isVisible = useIsVisible(timelineRef);
    useEffect(() => {
        if (isVisible) {
            dispatch(setCameraToggle({ key: "zoom_in_right", value: true }));
            dispatch(setBackgroundToggle(false));
        }
    }, [isVisible]);

    const locationPanels = useMemo(() => (
        <>
            <LocationPanel
                location={"My Tho"}
                buttonText={"My Tho, Vietnam"}
                mainText={"Originally from the small city of My Tho, Vietnam, I grew up with a little Windows XP computer passed down from my brother. I remember spending hours playing games and dreaming of the day I could make one myself. Around 8th grade, that dream came true. The school-mandated textbook introduced me to Turbo Pascal, an ancient, forgotten, user-friendly, 1-indexed array language, and I was completely hooked! I even asked my parents to pay for extra classes so I could learn more about programming and attend coding competitions. Even though I no longer have any of the old code I wrote back then, I still hold on to the countless hours of debugging and crafting the perfect Turbo Pascal program."}
            />
            <LocationPanel
                location={"Houston"}
                buttonText={"Houston, TX"}
                mainText={" In late 2019, I traveled to Houston, Texas as an international student. The transition from a small city in Vietnam to Texas during the COVID-19 pandemic was a huge cultural and mental shock. I am grateful for the friends I made in Houston and online who helped me through this tough time."}
                milestones={[
                    { title: "High School", location: "The Village School", date: "2019-2020" },
                    { title: "Second Camera Operator Volunteer", location: "Sky Studio", date: "2019-2021" }
                ]}
            />
            <LocationPanel
                location={"Edmonds"}
                buttonText={"Edmonds, WA"}
                mainText={"After a year in Houston, I moved to Edmonds, Washington to finish high school and start college. I rekindled my love for programming and graphic design, landing a job as a motion graphic designer at Edmonds College while pursuing my associate's degree in Computer Science."}
                milestones={[
                    { title: "High School Degree", location: "Edmonds College", date: "2020-2021" },
                    { title: "Associate in Computer Science", location: "Edmonds College", date: "2021-2023" },
                    { title: "Motion Graphic Designer", location: "Edmonds College", date: "2021-2023" }
                ]}
            />
            <LocationPanel
                location={"Renton"}
                buttonText={"Renton, WA"}
                mainText={"In 2023, I graduated from Edmonds College and transferred to Bellevue College to complete my bachelor's degree. I am excited to graduate in 2025 and apply my knowledge to create elegant and efficient solutions. I am eager to learn, grow, and see what we can build with today's technology!"}
                milestones={[
                    { title: "Bachelor in Computer Science", location: "Bellevue College", date: "2023-2025" },
                    { title: "Newsletter Designer and Editor", location: "Bellevue College", date: "2023-2025" }
                ]}
            />
        </>
    ), []);

    return (
        <div className="w-1/2 max-sm:w-full pointer-events-auto" ref={timelineRef}>
            <div className="relative text-white top-1/4 mx-10">
                <span className="text-7xl font-bold"> Timeline</span>
                <br></br>
                <br></br>
                <div className="text-xl flex-col flex max-sm:w-full gap-10">
                    {locationPanels}
                </div>
            </div>
        </div>
    );
}

export default Timeline;
