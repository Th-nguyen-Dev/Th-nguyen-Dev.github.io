import React, { useRef, useEffect } from "react";
import { useIsVisible } from "@/Hook/useIsVisible";
import { useSpring, animated } from "@react-spring/web";
import { Progress } from "@/components/ui/progress";

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

  return (
    <div ref={panelRef}>
      <animated.div style={spring} className="break-inside-avoid">
        <div className="w-full h-auto flex-row flex gap-x-10 max-lg:flex-col max-lg:gap-y-5 items-center ">
          <div className="space-y-3 h-fit w-3/5 max-xl:w-1/2 max-lg:w-full flex flex-col">
            <h1 className="font-bold">
              {tittleLink ? (
                <a
                  href={tittleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h1>
            {/* <h2 className="whitespace-nowrap">{projectType}</h2> */}
            <span className="text-2xl font-semibold">{date}</span>
            {/* <h2 className="whitespace-nowrap">{progress}</h2> */}
            <Progress value={progressValue} className="w-full h-4" />
            <div>{description}</div>
          </div>
          <div className="flex-grow">
            {children ? (
              children
            ) : (
              <div className="w-full aspect-video bg-white text-black text-center text-2xl flex items-center justify-center">
                {" "}
                Coming Soon!
              </div>
            )}
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default ProjectPanelText;
