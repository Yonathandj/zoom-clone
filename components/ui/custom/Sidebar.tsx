"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { SIDEBAR_ROUTES } from "@/constants/routes";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {SIDEBAR_ROUTES.map((route) => {
          const isActive =
            pathname === route.url || pathname.startsWith(`${route.url}/`);
          return (
            <Link
              key={route.label}
              href={route.url}
              className={cn(
                "flex items-center justify-start gap-4 rounded-lg p-4",
                { "bg-blue-1": isActive },
              )}
            >
              <Image
                src={route.icon}
                alt={route.label}
                height={24}
                width={24}
              />
              <p className="text-sm font-medium">{route.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
