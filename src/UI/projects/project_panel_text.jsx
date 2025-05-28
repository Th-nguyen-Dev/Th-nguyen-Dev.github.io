import React, { useRef, useEffect } from "react";
import { useIsVisible } from "@/Hook/useIsVisible";
import { useSpring, animated } from "@react-spring/web";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function ProjectPanelText({
  title,
  projectType,
  date,
  progress,
  description,
  progressValue,
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
        <div className="w-full h-fit">
          <h1 className="font-bold h-40 max-xl:h-56 max-lg:h-32 max-md:h-44 max-sm:h-56 max-xs:h-80 transition-resize">
            {title}
          </h1>
          <br />
          <div className="flex flex-row text-xl max-xl:text-base items-center flex-nowrap">
            <div className="flex flex-row space-x-8 flex-nowrap overflow-hidden">
              <h2 className="whitespace-nowrap">{projectType}</h2>
              <h2 className="whitespace-nowrap">{date}</h2>
              <h2 className="whitespace-nowrap">{progress}</h2>
            </div>
            <div className="flex-grow"></div>
          </div>
          <br />
          <Progress value={progressValue} className="w-full h-4" />
          <br />
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="items-center justify-center h-14 bg-transparent"></AccordionTrigger>
              <AccordionContent className="text-xl font-light mt-6">
                {description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </animated.div>
    </div>
  );
}

export default ProjectPanelText;
