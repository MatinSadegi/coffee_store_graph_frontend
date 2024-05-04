"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "فروشگاه",
    path: "/",
  },
  {
    title: "وبلاگ",
    path: "/",
  },
  {
    title: "درباره ما",
    path: "/",
  },
  {
    title: "تماس با ما",
    path: "/",
  },
];

const Links = () => {
    const pathName = usePathname();
  return (
    <div className="flex gap-6">
      {links.map((link) => (
        <Link href={link.path} className=" hover:text-primary-600 transition-all">{link.title}</Link>
      ))}
    </div>
  );
};

export default Links;
