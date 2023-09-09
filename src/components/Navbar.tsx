import React from "react";
import Link from "next/link";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { BsPerson, BsHeart } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="border-b border-zinc-200 pb-2">
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
      <div className="  mx-auto flex  h-7 items-center justify-center gap-x-14  ">
        <div className="">
          <button className="peer relative font-antonio text-sm hover:text-orange focus:text-orange">
            Ropa
          </button>
          <div
            className="absolute right-1/2 mt-[10px]  hidden translate-x-1/2 flex-col border border-zinc-200 bg-creme 
         hover:flex  peer-hover:flex peer-focus:flex md:w-1/2"
          >
            <Link
              className="px-5 py-2 font-quicksand text-xs  font-semibold hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Ver todo
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Abrigos
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
          </div>
        </div>

        <div>
          <button className="p peer font-antonio text-sm hover:text-orange focus:text-orange">
            Deporte
          </button>
          <div
            className="absolute right-1/2  mt-[10px] hidden translate-x-1/2 flex-col border border-zinc-200 bg-creme 
         hover:flex  peer-hover:flex peer-focus:flex md:w-1/2"
          >
            <Link
              className="px-5 py-2 font-quicksand text-xs  font-semibold hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Ver todo
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Abrigos
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
          </div>
        </div>
        <div>
          <button className="peer font-antonio text-sm hover:text-orange focus:text-orange">
            Zapatos
          </button>
          <div
            className="absolute right-1/2 mt-[10px] hidden translate-x-1/2 flex-col border border-zinc-200 bg-creme 
         hover:flex  peer-hover:flex peer-focus:flex md:w-1/2"
          >
            <Link
              className="px-5 py-2 font-quicksand text-xs  font-semibold hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Ver todo
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Abrigos
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
          </div>
        </div>

        <div>
          <button className="peer font-antonio text-sm hover:text-orange focus:text-orange">
            Accesorios
          </button>
          <div
            className="absolute right-1/2 mt-[10px] hidden translate-x-1/2 flex-col border border-zinc-200 
         bg-creme  hover:flex peer-hover:flex peer-focus:flex md:w-1/2"
          >
            <Link
              className="px-5 py-2 font-quicksand text-xs  font-semibold hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Ver todo
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Abrigos
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
            <Link
              className="px-5 py-2 font-quicksand text-xs  hover:-translate-y-[1px] hover:font-semibold hover:text-green"
              href="#"
            >
              Jeans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
