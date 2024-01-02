"use client";

import TestimonialItem from "@/components/TestimonialItem";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import arrowRight from "@/public/arrow-right/arrow-right.png";
import arrowLeft from "@/public/arrow-left/arrow-left.png";

export default function Testimonials() {
  const containerWidth = useRef(null);
  const wrapper = useRef(null);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(containerWidth.current.offsetWidth);
  }, []);

  useEffect(() => {
    let translateValue = -index * Number(width) + "px";
    wrapper.current.style.transform = `translateX(${translateValue})`;
  }, [width, index]);

  function handleNext() {
    if (index < wrapper.current.children.length - 1) {
      setIndex(Number(index) + 1);
    }
  }

  function handlePrev() {
    if (index > 0) {
      setIndex(Number(index) - 1);
    }
  }

  return (
    <section className="px-[114px] mb-[100px] container-p-left-a-right">
      <div className="flex justify-center mb-[60px]">
        <svg
          className=" w-full animated-path"
          xmlns="http://www.w3.org/2000/svg"
          height="200"
          viewBox="0 0 934 200">
          <text
            id="testimonials"
            transform="translate(467 158)"
            fill="rgba(246,244,231,0)"
            stroke="#b39c4d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeDasharray="2 5"
            fontSize="150"
            fontFamily="Clayo-semibold">
            <tspan x="-464" y="0">
              testimonials
            </tspan>
          </text>
        </svg>
      </div>
      <div className=" flex">
        <div
          className="w-[99px] h-[196px] bg-[#B6A156] mt-[50px] cursor-pointer flex justify-center items-center"
          onClick={handlePrev}>
          <div className="w-[32px]">
            <Image src={arrowLeft} alt="Arrow Left" />
          </div>
        </div>
        <div
          ref={containerWidth}
          style={{ width: `${width}px` }}
          className="flex-1 h-auto testimonial-container overflow-hidden">
          <div
            ref={wrapper}
            className="testimonial-wrapper w-full flex transition-transform">
            <TestimonialItem width={width} />
            <TestimonialItem width={width} />
            <TestimonialItem width={width} />
            <TestimonialItem width={width} />
          </div>
        </div>
        <div
          className="w-[99px] h-[196px] bg-[#34623F] mt-[50px] cursor-pointer flex justify-center items-center"
          onClick={handleNext}>
          <div className="w-[32px]">
            <Image src={arrowRight} alt="Arrow Right" />
          </div>
        </div>
      </div>
    </section>
  );
}
