import React from "react";
import logo from "../assets/logo.png"; //change file extension

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 w-full">
      <nav className="container mx-auto flex items-center justify-between p-3">
        <div className="flex lg:flex-1">
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
        <div className="md:gap-12 lg:flex lg-items-center lg:justify-center">
          <a className="text-sm" title="Pricing " href="/#pricing">
            Pricing
          </a>
          <a className="xs:ml-8 text-sm" title="How it works" href="/#demo">
            How it works
          </a>
        </div>
        <div className="items-center gap-4 lg:flex lg:flex-1 lg:justify-end">
          <a className="inline-flex items-center justify-center rounded-md text-sm font-medium border h-10 px-4 py-2">
            Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
