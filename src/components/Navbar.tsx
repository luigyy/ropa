import React from "react";
import Link from "next/link";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { BsPerson, BsHeart } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="shadow">
      <div className="relative flex h-16 items-center justify-between  px-[7%]">
        <div className="flex items-center gap-x-5">
          <Link href="#_">
            <h1 className="text-lg">Vende</h1>
          </Link>
          <Link href="#_">
            <h1 className="text-lg">Compra</h1>
          </Link>
          <Link href="#_">
            <h1 className="text-lg">Nosotros</h1>
          </Link>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-3xl">Logo</h1>
        </div>
        <div className="flex items-center gap-x-5">
          <Link href="#_">
            <IoSearchOutline className="text-3xl" />
          </Link>
          <Link href="#_">
            <BsHeart className="text-2xl" />
          </Link>
          <Link href="#_">
            <PiHandbagSimpleLight className="text-3xl" />
          </Link>
          <Link href="#_">
            <BsPerson className="text-3xl " />
          </Link>
        </div>
      </div>
      <div className=" mx-auto flex h-7 items-center justify-center gap-x-14  ">
        <button className="font-antonio text-sm">Ropa</button>
        <button className="font-antonio text-sm">Deporte</button>
        <button className="font-antonio text-sm">Zapatos</button>
        <button className="font-antonio text-sm">Accesorios</button>
      </div>
    </div>
  );
};

export default Navbar;
