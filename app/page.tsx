"use client";

import Navbar from "./contact/components/Navbar";
import Country from "./country/page";

export default function Home () {
  return(
    <div>
      <h1 className="text-red-500">This is home page</h1>
      <Country/>
    </div>
  )
};
