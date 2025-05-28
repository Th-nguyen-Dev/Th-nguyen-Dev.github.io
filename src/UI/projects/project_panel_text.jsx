import React, { useRef, useEffect } from "react";
import { useIsVisible } from "@/Hook/useIsVisible";
import { useSpring, animated } from "@react-spring/web";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

function ProjectPanelText({
  title,
  tittleLink,
  projectType,
  date,
  progress,
  description,
  progressValue,
  children,
}) {
  const panelRef = useRef();
  const isVisible = useIsVisible(panelRef);
  const buttonStyle =
    "font-bold max-w-full min-w-6 w-full h-auto rounded-full bg-transparent hover:text-black text-white";

  const [spring, api] = useSpring(
    () => ({
      opacity: 0,
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

  const newButton = useRef();
  const changeTextColor = (color) => (event) => {
    event.target.style.color = color;
  };

  const onClick = (event) => {
    changeTextColor("black")(event);
    if (newButton.current) {
      newButton.current.style.display = "none";
    }

    if (tittleLink) {
      window.open(tittleLink, "_blank");
    }
  };

  return (
    <div ref={panelRef}>
      <animated.div style={spring}>
        <div className="w-full h-auto flex-row flex gap-14 max-lg:flex-col max-lg:gap-y-5 items-center ">
          <div className="gap-y-8 h-fit w-1/2 max-w-1/2 max-xl:w-1/2 max-lg:w-full flex flex-col">
            {/* <div className="flex items-center justify-center">
              <span className="text-2xl font-semibold">{projectType}</span>
            </div> */}
            <div className="relative flex flex-col w-full">
              <div ref={newButton}>
                <div className="absolute top-0 right-0 h-6 w-6 rounded-full bg-green-500"></div>
                <div className="absolute top-0 right-0 h-6 w-6 rounded-full bg-slate-100 animate-ping"></div>
              </div>
              <Button
                variant="outline"
                size={"lg"}
                className={buttonStyle}
                onClick={onClick}
              >
                <span className="text-4xl max-lg:text-2xl max-md:text-lg transition-resize whitespace-normal h-fit py-4 text-left">
                  {title}
                </span>
              </Button>
            </div>
            {/* <h2 className="whitespace-nowrap">{projectType}</h2> */}

            {/* <h2 className="whitespace-nowrap">{progress}</h2> */}
            <Progress value={progressValue} className="w-full h-4" />
            <div className="text-xl font-light">{description}</div>
          </div>
          <div className="w-1/2 max-xl:w-1/2 max-lg:w-full h-auto flex items-center justify-center">
            {children ? (
              children
            ) : (
              <div className="w-full aspect-video bg-white text-black text-center text-2xl flex items-center justify-center opacity-50">
                Demo Coming Soon!
              </div>
            )}
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default ProjectPanelText;
