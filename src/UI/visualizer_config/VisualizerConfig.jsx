import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GrMenu } from "react-icons/gr";
import { Accordion, AccordionItem } from "@/components/ui/accordion_visualizer";
import DirectionalLightTab from "./tabs/DirectionalLightTab";
import AmbientLightTab from "./tabs/AmbientLightTab";
import CameraTab from "./tabs/CameraTab";
import { ScrollArea } from "@/components/ui/scroll-area";

const VisualizerConfig = () => {
  return (
    <header className="sticky w-screen h-full px-8 py-8 flex justify-end items-end">
      <div>
        <Popover>
          <PopoverTrigger className="w-16 h-10 rounded-full items-center bg-transparent hover:bg-foreground ring-1 ring-foreground justify-center flex hover:text-background focus:outline-none">
            <GrMenu size={28} color="" />
          </PopoverTrigger>
          <PopoverContent className="my-5 z-50 w-full transition-all bg-background ">
            <ScrollArea className="h-full overflow-hidden">
              <Accordion
                type="multiple"
                collapsible
                className="flex flex-col gap-y-4 mx-6"
              >
                <AccordionItem>
                  <DirectionalLightTab />
                </AccordionItem>
                <AccordionItem>
                  <AmbientLightTab />
                </AccordionItem>
                <AccordionItem>
                  <CameraTab />
                </AccordionItem>
              </Accordion>
            </ScrollArea>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default VisualizerConfig;
