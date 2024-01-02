"use client";

import Image from "next/image";
import { useState } from "react";
import chat from "@/public/online-chat.svg";
import tax from "@/public/tax.svg";

export default function OurProcess() {
  const [index, setindex] = useState(0);

  function handleInput(e) {
    setindex(e.target.value);
  }

  function handleClick(e) {
    setindex(e.target.getAttribute("data-id"));
  }

  return (
    <section className="flex mb-[50px]">
      <div className="w-8/12">
        <div className="h-[150px] bg-[#F6F5EE] pl-[114px] container-p-left">
          <h1 className="headings">OUR PROCESS</h1>
        </div>
        <div className="pl-[114px] our-process-input h-[500px] flex items-center my-[80px] container-p-left">
          <div className="vertical-range">
            <input
              type="range"
              min="0"
              max="2"
              value={index}
              onChange={handleInput}
            />
          </div>
          <div className="h-full w-full flex flex-col justify-between">
            <div className="text-[64px] flex">
              <div
                className={`mr-auto cursor-pointer Clayo-medium ${
                  index == 0 ? "text-[#B6A156]" : "text-[#34623F]"
                }`}
                data-id="0"
                onClick={handleClick}>
                plan
              </div>
              {index == 0 ? (
                <div className="flex items-center  ml-[20px] mr-[100px] max-[1590px]:mr-[50px]">
                  <div className="rounded-full bg-[#C0AE6F] w-[11px] h-[11px]"></div>
                  <div className="border-t-2 border-dotted border-t-[#C0AE6F] w-[100px]"></div>
                  <div className="rounded-full bg-[#C0AE6F] w-[16px] h-[16px]"></div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="text-[64px] flex">
              <div
                className={`mr-auto cursor-pointer Clayo-medium ${
                  index == 1 ? "text-[#B6A156]" : "text-[#34623F]"
                }`}
                data-id="1"
                onClick={handleClick}>
                design
              </div>
              {index == 1 ? (
                <div className="flex items-center ml-[20px] mr-[100px] max-[1590px]:mr-[50px]">
                  <div className="rounded-full bg-[#C0AE6F] w-[11px] h-[11px]"></div>
                  <div className="border-t-2 border-dotted border-t-[#C0AE6F] w-[100px]"></div>
                  <div className="rounded-full bg-[#C0AE6F] w-[16px] h-[16px]"></div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="text-[64px] flex">
              <div
                className={`mr-auto cursor-pointer Clayo-medium ${
                  index == 2 ? "text-[#B6A156]" : "text-[#34623F]"
                }`}
                data-id="2"
                onClick={handleClick}>
                build
              </div>
              {index == 2 ? (
                <div className="flex items-center ml-[20px] mr-[100px]  max-[1590px]:mr-[50px]">
                  <div className="rounded-full bg-[#C0AE6F] w-[11px] h-[11px]"></div>
                  <div className="border-t-2 border-dotted border-t-[#C0AE6F] w-[100px]"></div>
                  <div className="rounded-full bg-[#C0AE6F] w-[16px] h-[16px]"></div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#34623F] our-process-clip-path p-[114px] flex flex-col items-center justify-center max-[1450px]:p-[80px]">
        <h1 className="mt-[-30px] mb-[50px] heading-54-white">
          we take immense pride in being the preferred choice for numerous
          clients.
        </h1>
        <div className="flex gap-10">
          <div className="flex-1 ">
            <div className="h-[200px] bg-[#B6A156] bg-opacity-[0.1] flex justify-center items-center py-[50px]">
              <div className="w-[79px] h-[79px]">
                <Image className="w-full" src={chat} alt="Chat" />
              </div>
            </div>
            <div className="bg-[#B6A156] h-auto text-white p-[50px] flex flex-col items-center">
              <h2 className="heading-30-white">consultation</h2>
              <p className="custom-text-20-white">
                Share your project details, vision, and requirements.
              </p>
            </div>
          </div>
          <div className="flex-1 ">
            <div className="h-[200px] bg-[#B6A156] bg-opacity-[0.1] flex justify-center items-center py-[50px]">
              <div className="w-[79px] h-[79px]">
                <Image className="w-full" src={tax} alt="tax" />
              </div>
            </div>
            <div className="bg-[#B6A156] h-auto text-white p-[50px] flex flex-col items-center">
              <h2 className="heading-30-white">project agreement</h2>
              <p className="custom-text-20-white">
                Make the partnership formal with a project agreement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
