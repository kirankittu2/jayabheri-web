import Image from "next/image";

export default function WhyJayabheriCard({
  alt,
  title,
  content,
  margin,
  image,
}) {
  return (
    <div
      className="w-[393px] mr-[20px]"
      style={{ marginLeft: `${margin ? margin : 0}px` }}>
      <div className="w-[393px] h-[246px]">
        <Image src={image} alt={alt} />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="heading-30-green my-[15px]">{title}</h2>
        <p className="text-center custom-text-20-green">{content}</p>
      </div>
    </div>
  );
}
