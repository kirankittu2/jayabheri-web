"use client";

import { useEffect, useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import Image from "next/image";
import arrowDown from "@/public/arrow-down.svg";
import arrowUp from "@/public/arrow-up.svg";

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const wrapper = useRef(null);

  function handleClick(e) {
    setIndex(e.target.getAttribute("data-id"));
  }

  function handleArrowDown() {
    if (index > 0) {
      setIndex(Number(index) - 1);
    }
  }

  function handleArrowUp() {
    if (index < wrapper.current.children.length - 1) {
      setIndex(Number(index) + 1);
    }
  }

  useEffect(() => {
    let translateValue = -index * 590 + "px";
    wrapper.current.style.transform = `translateY(${translateValue})`;
  }, [index]);

  return (
    <div className="w-full carousel-container">
      <div className="flex h-[581px] overflow-hidden">
        <div
          ref={wrapper}
          className="carousel-wrapper flex flex-col transition-transform">
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </div>
        <div className="flex items-center">
          <div className="w-[115px] flex flex-col items-end">
            <div
              data-id="0"
              className={`w-[20px] h-[20px] rounded-full ${
                index == 0 ? "bg-[#C0AE6F]" : "bg-[#535353]"
              }  mb-[10px] cursor-pointer`}
              onClick={handleClick}></div>
            <div
              data-id="1"
              className={`w-[20px] h-[20px] rounded-full ${
                index == 1 ? "bg-[#C0AE6F]" : "bg-[#535353]"
              } mb-[10px] cursor-pointer`}
              onClick={handleClick}></div>
            <div
              data-id="2"
              className={`w-[20px] h-[20px] rounded-full ${
                index == 2 ? "bg-[#C0AE6F]" : "bg-[#535353]"
              } cursor-pointer`}
              onClick={handleClick}></div>
          </div>
        </div>
      </div>
      <div className="flex justify-end pr-[115px]">
        <div
          className="w-[196px] h-[99px] bg-[#34623F] cursor-pointer flex justify-center items-center"
          onClick={handleArrowDown}>
          <div className="w-[17px]">
            <Image src={arrowDown} alt="Arrow Down" />
          </div>
        </div>
        <div
          className="w-[196px] h-[99px] bg-[#A28D41] cursor-pointer flex justify-center items-center"
          onClick={handleArrowUp}>
          <div className="w-[17px]">
            <Image src={arrowUp} alt="Arrow Up" />
          </div>
        </div>
      </div>
    </div>
  );
}
