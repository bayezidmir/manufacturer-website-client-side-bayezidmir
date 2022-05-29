import React from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../Assets/logo.png";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      <footer className={` ${pathname.includes("dashboard") && "hidden"}`}>
        <div className=" px-20 py-20  bg-[#000000e0] text-neutral  text-lg">
          <div className="grid md:grid-cols-2   grid-cols-1 lg:grid-cols-3  gap-5">
            <div className="mt-[-12px]">
              <Link to={"/"} className="">
                <strong className="text-3xl  text-[#FFC000]">ELECTRIC</strong>
                <strong className="text-3xl text-white">- COLLECTION</strong>
              </Link>
              <p className="mt-4">
                Lukas is the best parts shop for your car accessories. What kind of parts do you
                need you can get here soluta nobis
              </p>
            </div>
            <div>
              <span className=" pb-1 border-b-2 border-white  font-bold uppercase text-xl text-white">
                Information
              </span>
              <p className="link link-hover mt-5">Our companys</p>
              <p className="link link-hover">Contact us</p>
              <p className="link link-hover">Contact us</p>
              <p className="link link-hover">Contact us</p>
              <p className="link link-hover">Careers</p>
            </div>

            <div>
              <span className="pb-1 border-b-2 border-white mb-2 font-bold uppercase text-xl text-white">
                Store Information
              </span>
              <p className="link link-hover mt-5">2007 Stokes Isle Apartment. 43243,</p>
              <p className="link link-hover">Washington 10010, UK</p>
              <p className="link link-hover">https://mir.com</p>
              <p className="link link-hover">(+008) 23424242424</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-[#000000]  text-white">
            <p className="text-center py-6">Copyright &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
