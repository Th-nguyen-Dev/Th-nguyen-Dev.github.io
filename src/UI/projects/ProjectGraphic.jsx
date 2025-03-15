import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCameraToggle } from "@/context/reducer/camera_toggle";
import { setBackgroundToggle } from "@/context/reducer/background_toggle";
import { useIsVisible } from "@/Hook/useIsVisible";

function ProjectGraphic() {
  const projectRef = useRef();
  const isVisible = useIsVisible(projectRef);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isVisible) {
      dispatch(setCameraToggle("zoom_in_middle_down"));
      dispatch(setBackgroundToggle(true));
    }
  }, [isVisible]);

  return (
    <>
      <div className="relative ml-10 mr-10" ref={projectRef}>
        <br />
        <br />
        <span className="text-7xl font-bold">Graphic Design Projects</span>
        <br />
        <br />
        <br />
        <div className="columns-2 space-y-4 max-sm:columns-1 transition-all">
          <iframe
            className="rounded-lg w-full transition-resize"
            height={"500vh"}
            src="https://www.behance.net/embed/project/147644319?ilo0=1"
            allowFullScreen={true}
            loading="lazy"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="rounded-lg w-full transition-resize"
            height={"500vh"}
            src="https://www.behance.net/embed/project/156656643?ilo0=1"
            allowFullScreen={true}
            loading="lazy"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="rounded-lg w-full transition-resize"
            height={"500vh"}
            src="https://www.behance.net/embed/project/148772927?ilo0=1"
            allowFullScreen={true}
            loading="lazy"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            className="rounded-lg w-full transition-resize"
            height={"500vh"}
            src="https://www.behance.net/embed/project/163972437?ilo0=1"
            allowFullScreen={true}
            loading="lazy"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ProjectGraphic;
