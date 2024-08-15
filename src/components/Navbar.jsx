import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 w-full">
      <nav className="container mx-auto flex items-center justify-between p-3">
        <div className="md:flex md:pr-[20px]">
          <a href="/" className="">
            <img
              alt="drippp logo"
              width="100"
              height="100"
              className=""
              src={logo}
            />
          </a>
        </div>
        <div className="xs:hidden gap-12 md:flex lg-items-center md:justify-center">
          <a className="text-sm lg:mr-0 xs:mr-[12px]" title="Pricing " href="/#pricing">
            Pricing
          </a>
          <a className="text-sm" title="How it works" href="/#demo">
            How it works
          </a>
        </div>
        <div className="items-center gap-4 md:flex md:flex-1 md:justify-end">
          <a className="inline-flex items-center justify-center rounded-md text-sm font-medium border h-10 px-4 py-2">
            Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
