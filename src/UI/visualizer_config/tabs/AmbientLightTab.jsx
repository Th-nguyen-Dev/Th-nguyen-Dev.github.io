import React from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion_visualizer";
import { SliderAmbientLightIntensity } from "../sliders";
import { AmbientColorPicker } from "../color_picker";
import TabsSubContent from "./TabsSubContent";

const AmbientLightTab = () => {
  return (
    <AccordionItem value="ambient_light">
      <AccordionTrigger className="text-accent">Ambient Light</AccordionTrigger>
      <AccordionContent>
        <div className="gap-y-4">
          <TabsSubContent label="Intensity">
            <SliderAmbientLightIntensity />
          </TabsSubContent>
          <TabsSubContent label="Color">
            <AmbientColorPicker />
          </TabsSubContent>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AmbientLightTab;
