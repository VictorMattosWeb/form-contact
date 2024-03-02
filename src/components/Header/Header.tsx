import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [headerBackground, setHeaderBackground] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setHeaderBackground("bg-havelock-blue-900t");
      } else {
        setHeaderBackground("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex text-white items-center justify-between w-full px-24 py-5 fixed top-0 left-0 right-0 bg-slate-700 ${headerBackground}`}
    >
      <Image src="/logoDefault.svg" width={150} height={150} alt="Logo" />
      <nav>
        <ul className="flex gap-10">
          <li>
            <Link className="font-semibold" href="/">
              Início
            </Link>
          </li>
          <li>
            <Link className="font-semibold" href="/">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="font-semibold" href="/">
              Serviços
            </Link>
          </li>
          <li>
            <Link className="font-semibold" href="/">
              Contatos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
