import Image from "next/image";
import Link from "next/link";
import logo from "@/public/jayabheri-logo/jayabheri-logo.png";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <section className="bg-white h-[100px] px-[114px] py-[20px] z-[1000] sticky top-0 max-[1230px]:px-[50px]">
      <header className="flex h-full">
        <div className="logo w-[238px] flex items-center" id="logo">
          <Image src={logo} alt="Jayabheri Logo" />
        </div>
        <div
          className="nav-links flex-1 flex justify-around items-center px-[200px] max-[1535px]:px-[100px] max-[1230px]:px-[50px]"
          id="nav-links">
          <ul className="w-full proxima-nova text-[20px] text-[#535353] ">
            <li className="flex justify-around">
              <Link className="dashed-underline" href="#">
                About Us
              </Link>
              <Link className="dashed-underline" href="#">
                Our Services
              </Link>
              <Link className="dashed-underline" href="#">
                Projects
              </Link>
              <Link className="dashed-underline" href="#">
                Why Us?
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact-us flex items-center" id="contact-us">
          <Button>Contact Us</Button>
        </div>
      </header>
    </section>
  );
}
