import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setTimelineToggle } from "@/context/reducer/timeline_toggle";

import { Button } from "@/components/ui/button";
import { useIsVisible } from "@/Hook/useIsVisible";
import { useSpring, animated } from "@react-spring/web";

export function MileStonePanel({ title, location, date, link }) {
  const milestonePanelRef = useRef();
  const isVisible = useIsVisible(milestonePanelRef);

  const [spring, api] = useSpring(
    () => ({
      opacity: 0,
      x: 0,
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
      x: isVisible ? 0 : 100,
    });
  }, [api, isVisible]);

  const listItemHeaderStyle = "text-3xl font-bold mb-2";
  const listItemStyle = "text-xl font-normal ml-2";
  return (
    <animated.div
      style={spring}
      className="flex-col flex"
      ref={milestonePanelRef}
    >
      <span className={listItemHeaderStyle}>{title}</span>
      <a href={link} className={listItemStyle}>
        {location}
      </a>
      <span className={listItemStyle}>{date}</span>
      <br></br>
    </animated.div>
  );
}

export function MileStoneList({ milestones }) {
  return (
    <ul className="ml-10 list-disc">
      {milestones.map((milestone, index) => {
        return (
          <li key={index} className="mb-4">
            <MileStonePanel
              title={milestone.title}
              location={milestone.location}
              date={milestone.date}
              link={milestone.link}
            />
          </li>
        );
      })}
    </ul>
  );
}

function LocationPanel({ location, buttonText, mainText, milestones }) {
  const buttonStyle =
    "font-bold max-w-full min-w-6 w-full max-h-28 min-h-20 h-auto text-5xl max-sm:text-2xl transition-resize select-none rounded-full";
  const dispatch = useDispatch();
  const changeTextColor = (color) => (event) => {
    event.target.style.color = color;
  };
  const onPointerEnter = (name) => (event) => {
    dispatch(setTimelineToggle(name));
    changeTextColor("black")(event);
  };
  const onPointerLeave = (event) => {
    dispatch(setTimelineToggle(null));
    changeTextColor("white")(event);
  };

  const mainTextRef = useRef();
  const isVisible = useIsVisible(mainTextRef);
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

  const MemoizedMileStoneList = React.useMemo(() => {
    return milestones && milestones.length > 0 ? (
      <MileStoneList milestones={milestones} />
    ) : null;
  }, [milestones]);

  return (
    <div className="select-none">
      <Button
        variant="outline"
        size={"lg"}
        className={buttonStyle}
        onPointerOver={onPointerEnter(location)}
        onPointerOut={onPointerLeave}
      >
        {buttonText}
      </Button>
      <br></br>
      <br></br>
      <animated.span
        style={spring}
        ref={mainTextRef}
        className="font-extralight"
      >
        {mainText}
      </animated.span>
      <br></br>
      <br></br>
      {MemoizedMileStoneList}
      <br></br>
      <br></br>
    </div>
  );
}
export default LocationPanel;
