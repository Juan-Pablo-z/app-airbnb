import React from "react";
import {Switch, cn} from "@nextui-org/react";

export default function SwitchFilter() {
  return (
    <Switch
      classNames={{
        base: cn(
          "inline-flex flex-row-reverse w-full max-w-md bg-content1 items-center",
          "justify-between cursor-pointer rounded-lg gap-2 p-[9px] border-1",
          "data-[selected=true]:border-default",
        ),
        defaultSelected : "p-0 h-4 overflow-visible ",
        thumb: cn("w-6 h-6 border-2 shadow-lg ",
          "group-data-[hover=true]:border-default",
          //selected
          "group-data-[selected=true]:ml-4",
          // pressed
          "group-data-[pressed=true]:w-2 ",
          "group-data-[selected]:group-data-[pressed]:ml-4",
        ),
        
      }}
      
    >
      <div className="flex flex-col gap-1">
        <p className="text-tiny ">
        Precio total sin impuestos
        </p>
      </div>
    </Switch>
  );
}
