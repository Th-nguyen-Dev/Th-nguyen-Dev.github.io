import React, { useRef, useEffect } from "react";
import { useIsVisible } from "@/Hook/useIsVisible";
import { useDispatch } from "react-redux";
import { setCameraToggle } from "@/context/reducer/camera_toggle";
import { setBackgroundToggle } from "@/context/reducer/background_toggle";
import { setPlaymodeToggle } from "@/context/reducer/playmode_toggle";

function PlayMode() {
  const playModeRef = useRef();
  const isVisible = useIsVisible(playModeRef);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isVisible) {
      dispatch(setCameraToggle("zoom_out_middle"));
      dispatch(setBackgroundToggle(false));
      dispatch(setPlaymodeToggle(true));
    } else {
      dispatch(setPlaymodeToggle(false));
    }
  }, [dispatch, isVisible]);

  return (
    <div
      className="flex w-screen h-screen items-end justify-end pointer-events-none"
      ref={playModeRef}
    ></div>
  );
}
export default PlayMode;
