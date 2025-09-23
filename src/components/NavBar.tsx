import Image from "next/image";
import React from "react";


const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 md:p-9 p-3">
      <Image src="/images/nav-logo.svg" alt="Logo/nav" width={80} height={80} />
    </nav>
  )
}

export default NavBar;
