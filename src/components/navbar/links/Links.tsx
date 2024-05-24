"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <div className="flex gap-6">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className={`hover:text-primary-600 transition-all ${
            pathName === "/" ? " text-black" : " text-white"
          }`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
