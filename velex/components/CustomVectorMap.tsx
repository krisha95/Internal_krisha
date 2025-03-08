"use client";
import { useEffect, useState } from "react";
import "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import "jsvectormap/dist/maps/world-merc";
// import "jsvectormap/dist/maps/us-aea-en";
// import "jsvectormap/dist/maps/canada";
// import "jsvectormap/dist/maps/iraq";
// import "jsvectormap/dist/maps/italy";
// import "jsvectormap/dist/maps/russia";
// import "jsvectormap/dist/maps/spain";

type PropsType = {
  width?: string;
  height?: string;
  options?: any;
  type: string;
};

const CustomVectorMap = ({ width, height, options, type }: PropsType) => {
  const selectorId = type + new Date().getTime();
  const [map, setMap] = useState<any>();

  useEffect(() => {
    if (!map) {
      const map = new (window as any)["jsVectorMap"]({
        selector: "#" + selectorId,
        map: type,
        ...options,
      });

      setMap(map);
    }
  }, [selectorId, map, options, type]);

  return (
    <>
      <div id={selectorId} style={{ width: width, height: height }}></div>
    </>
  );
};

export default CustomVectorMap;
