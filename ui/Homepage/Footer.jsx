import Image from "next/image";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import linkedin from "@/public/linkedin.svg";

export default function Footer() {
  return (
    <footer className="h-[100px] bg-white px-[114px]">
      <div className="flex h-full justify-between items-center">
        <div>
          <p
            aria-label="Copyright Text of Jayabheri"
            className="copyright-link text-[12px] text-[#00000080] Glancyr-light">
            © Copyright 2023. Jayabheri, All Rights Reserved.
          </p>
        </div>

        <div className="flex">
          <div className="mx-[5px]">
            <a aria-label="Link to facebook" href="">
              <Image
                src={facebook}
                alt="Facebook social link"
                title="Facebook social link"
                loading="lazy"
              />
            </a>
          </div>

          <div className="mx-[5px]">
            <a aria-label="Link to Instagram" href="">
              <Image
                src={instagram}
                alt="Instagram social link"
                title="Instagram social link"
                loading="lazy"
              />
            </a>
          </div>

          <div className="mx-[5px]">
            <a aria-label="Link to Linkedin" href="">
              <Image
                src={linkedin}
                alt="Linkedin social link"
                title="Linkedin social link"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
