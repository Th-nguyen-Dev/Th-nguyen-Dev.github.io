import React, { useMemo, useRef, useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import gsap from "gsap";

export default function FakeLoadScreen() {
    const screenRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const temp = { value: progress };
        const tl = gsap.timeline();
        tl.to(temp, {
            value: 100,
            duration: 2.5,
            onUpdate: () => {
                setProgress(temp.value);
            }
        });
        tl.to(screenRef.current, {
            opacity: 0,
            duration: 0.25,
            ease: "sine.inOut",
            onComplete: () => {
                if (screenRef.current) {
                    screenRef.current.style.display = 'none';
                }
            }
        });
    }, []);

    return (
        <div className='absolute top-0 left-0 w-full h-full bg-background' ref={screenRef}>
            <div className='absolute top-1/2 w-full text-center text-4xl flex-col justify-center items-center'>
                <p> 
                    Loading your Earth...
                </p>
                <br></br>
                <div className="justify-center items-center flex">
                     <Progress value={progress} className="w-1/2"/>
                </div>
            </div>
        </div>
    );
}