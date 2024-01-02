import Image from "next/image";

export default function AboutUsCard({ title, content, image, alt }) {
  return (
    <div className="flex flex-col items-center w-[378px] mx-[30px]">
      <div className="relative mb-[20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 150 150">
          <g
            id="Ellipse_9"
            data-name="Ellipse 9"
            fill="none"
            stroke="#baa65f"
            strokeWidth="1"
            strokeDasharray="3">
            <circle cx="75" cy="75" r="75" stroke="none" />
            <circle cx="75" cy="75" r="74.5" fill="none" />
          </g>
        </svg>
        <div className="rounded-full w-[118px] h-[118px] bg-[#34623F] absolute top-[16px] left-1/2 -translate-x-1/2 flex justify-center items-center">
          <Image className="w-[56px]" src={image} alt={alt} />
        </div>
      </div>
      <div className="mb-[20px]">
        <h2 className="heading-30-green">{title}</h2>
      </div>
      <div>
        <p className="custom-text-20 text-center">{content}</p>
      </div>
    </div>
  );
}
