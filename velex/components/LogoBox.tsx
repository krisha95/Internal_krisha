"use client";
import React from "react";
import logoSm from "@/assets/images/logo-sm.png";
import logoDark from "@/assets/images/logo-dark.png";
import logoLight from "@/assets/images/logo-light.png";
import Image from "next/image";
import Link from "next/link";

const LogoBox = () => {
  return (
    <div className="logo-box">
      <Link href="/" className="logo-dark">
        <Image
          src={logoSm}
          className="logo-sm"
          alt="logo-dark"
          height={24}
          width={80}
        />
        <Image
          src={logoDark}
          className="logo-lg"
          alt="logo lg"
          height={24}
          width={80}
        />
      </Link>
      <Link href="/" className="logo-light">
        <Image
          src={logoSm}
          className="logo-sm"
          alt="Logo"
          height={24}
          width={80}
        />
        <Image
          src={logoLight}
          className="logo-lg"
          alt="logo-light"
          height={24}
          width={80}
        />
      </Link>
    </div>
  );
};

export default LogoBox;
