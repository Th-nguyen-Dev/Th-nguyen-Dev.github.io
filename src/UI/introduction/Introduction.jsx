import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useIsVisible } from "@/Hook/useIsVisible";
import { setCameraToggle } from "@/context/reducer/camera_toggle";
import { setBackgroundToggle } from "@/context/reducer/background_toggle";
import { useSpring, animated } from "@react-spring/web";

function Introduction() {
  const introRef = useRef();

  const dispatch = useDispatch();
  const isVisible = useIsVisible(introRef);

  useEffect(() => {
    if (isVisible) {
      dispatch(setCameraToggle("zoom_out_right"));
      dispatch(setBackgroundToggle(false));
    }
  }, [dispatch, isVisible]);

  const [spring, api] = useSpring(
    () => ({
      opacity: 1,
      y: 0,
      config: {
        mass: 1,
        tension: 100,
        friction: 50,
      },
    }),
    [],
  );

  useEffect(() => {
    api.start({
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : 100,
    });
  }, [api, isVisible]);

  return React.useMemo(() => {
    const changeTextColor = (color) => (event) => {
      event.target.style.color = color;
    };

    return (
      <div ref={introRef}>
        <animated.div
          style={spring}
          className="relative w-1/2 max-sm:w-full h-fit pointer-events-auto"
        >
          <div className="relative text-white ml-10 mr-10">
            <h1>
              <p className="text-7xl mb-1">
                <strong
                  onPointerOver={changeTextColor("#00ff00")}
                  onPointerLeave={changeTextColor("white")}
                >
                  Hello World!
                </strong>
              </p>
              <p className="text-3xl">My name is Sebastian Nguyen</p>
            </h1>
            <br></br>
            <h2 className="text-xl font-light">
              I am a full stack developer with a passion for designs and all
              things interactive.
              <br />
              <br />
As a recent Computer Science graduate from Bellevue College, I specialize in engineering robust, scalable systems that solve complex user problems. My background in graphic programming and UI design has transitioned into a focus on Application Modernization, Generative AI pipelines, and Simulation Platforms. I am driven by a desire to own every step of the development process—from architecting secure data flows and optimizing database latency to crafting adaptive interfaces that reduce cognitive load for diverse users.
            </h2>
          </div>
        </animated.div>
      </div>
    );
  }, [spring, introRef]);
}

export default Introduction;
