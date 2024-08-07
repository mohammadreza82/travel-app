import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map(({ href, key, label }) => (
          <li key={key}>
            <Link
              href={href}
              className="regular-16 font-Dana text-gray-50  flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button type='button' title="ورود" icon="/user.svg" variant="btn_dark_green"/>
      </div>
      <Image src='/menu.svg' alt="menu" width={32} height={32} className="inline-block lg:hidden cursor-pointer"/>
    </nav>
  );
};

export default Navbar;
