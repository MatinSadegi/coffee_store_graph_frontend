"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/src/context";

const links = [
  {
    title: "صفحه اصلی",
    path: "/",
  },
  {
    title: "فروشگاه",
    path: "/shop",
  },
  {
    title: "وبلاگ",
    path: "/",
  },
  {
    title: "درباره ما",
    path: "/about-us",
  },
  {
    title: "تماس با ما",
    path: "/contact-us",
  },
];

const Links = () => {
  const pathName = usePathname();
  const {setShowNavbar} = useAppContext()
  return (
    <div className="flex lg:w-2/3  h-[450px] lg:px-20 xl:px-28  w-full  justify-between items-center flex-col lg:flex-row lg:h-fit">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          onClick={()=>setShowNavbar(false)}
          className={`hover:text-primary-600 transition-all ${
            pathName === "/" ? " text-white" : " text-white"
          }`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
