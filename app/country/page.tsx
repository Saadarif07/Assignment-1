import React from "react";
import Link from "next/link";

const Country = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline p-3">
        This is the countries list:
      </h1>
      <ul>
        <li className="text 2xl font-bold text-red-600 ml-5">
          <Link href={"/country/pakistan"}>Pakistan</Link>
        </li>
        <li className="text-2xl font-bold text-red-600 ml-5">
          <Link href={"/country/china"}>China</Link>
        </li>
        <li className="text-2xl font-bold text-red-600 ml-5">
          <Link href={"/country/japan"}>Japan</Link>
        </li>
      </ul>
    </div>
  );
};

export default Country;