import Link from "next/link";
import React from "react";

const Navbar = () => {
    return(
        <>
        <div className=" bg-blue-200 p-2 text-black font-bold text-xl flex justify-between underline ">
            <Link href={"/"}>Home</Link> 
        </div>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
       
        </>
    )
}

export default Navbar;