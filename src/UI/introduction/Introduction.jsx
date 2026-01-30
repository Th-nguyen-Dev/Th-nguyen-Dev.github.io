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
              Currently, I am working toward a degree in Computer Science at
              Bellevue College in Washington. I have a background in graphic
              design, graphic programming, game development, algorithm, and UI
              design. I grew up with computers and technology, and have always
              been fascinated with the use of technology to create interactive
              experiences. From video games to tools that allows for these
              creative experiences, I have always wanted to be at every step of
              the process.
            </h2>
          </div>
        </animated.div>
      </div>
    );
  }, [spring, introRef]);
}

export default Introduction;
