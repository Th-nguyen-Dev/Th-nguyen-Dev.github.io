import React, { useState, useRef, useCallback, useEffect } from "react";
import ProjectPanel from "./project_panel";
import ProjectPanelText from "./project_panel_text";
import { useDispatch } from "react-redux";
import { setProjectGraphicToggle } from "@/context/reducer/project_graphic_toggle";
import { useIsVisible } from "@/Hook/useIsVisible";
import { Progress } from "@/components/ui/progress";
import gsap from "gsap";

function ProjectGraphic() {
    const projectRef = useRef();
    const isVisible = useIsVisible(projectRef);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProjectGraphicToggle(isVisible));
    }, [isVisible, dispatch]);

    return (
        <>
            <div
                className="relative ml-10 mr-10"
                ref={projectRef}
                style={{ height: "90000rem" }}
            >
                <br /><br />
                <span className="text-7xl font-bold">Graphic Design Projects</span>
                <br /><br /><br />
                <div className="columns-2 space-y-4 max-sm:columns-1 transition-all">
                    <iframe className="rounded-lg w-full transition-resize" height={"500vh"} src="https://www.behance.net/embed/project/147644319?ilo0=1"  allowFullScreen={true} loading="lazy" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    <iframe className="rounded-lg w-full transition-resize" height={"500vh"} src="https://www.behance.net/embed/project/156656643?ilo0=1"  allowFullScreen={true} loading="lazy" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    <iframe className="rounded-lg w-full transition-resize" height={"500vh"} src="https://www.behance.net/embed/project/148772927?ilo0=1"  allowFullScreen={true} loading="lazy" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    <iframe className="rounded-lg w-full transition-resize" height={"500vh"} src="https://www.behance.net/embed/project/163972437?ilo0=1"  allowFullScreen={true} loading="lazy" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
        </div>
        </>
    );
}

export default ProjectGraphic;