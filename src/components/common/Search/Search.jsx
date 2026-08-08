"use client";

import { FiSearch } from "react-icons/fi";

import "./Search.scss";

export default function Search(){

return(

<div className="search-box">

<FiSearch/>

<input

placeholder="Search..."

/>

</div>

)

}