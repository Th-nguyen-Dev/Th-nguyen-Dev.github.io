import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;
const TabsList = TabsPrimitive.List;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 duration-0 text-sm font-medium ring-1 ring-foreground bg-transparent transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:ring-0 data-[state=active]:bg-background data-[state=active]:text-foreground focus:outline-none hover:bg-foreground hover:text-background",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden opacity-0 translate-y-5 flex flex-col transform transition-all ease-in-out duration-700 ",
      "data-[state=active]:max-h-screen data-[state=active]:opacity-100 data-[state=active]:translate-y-0",
      "data-[state=inactive]:max-h-0 data-[state=inactive]:opacity-0 data-[state=inactive]:translate-y-5",
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "important",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
