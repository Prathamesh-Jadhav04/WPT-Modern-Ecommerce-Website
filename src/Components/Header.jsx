import React from "react";

function Header() {
    <header class="w-sm lg:w-6xl mx-auto pt-2 pb-2 flex flex-col lg:flex-row">
      <figure class="logo w-full lg:w-1/6">
        <img
          class="animate__animated animate__bounce"
          src="images/logo.png"
          alt="Logo Will be shown shortly"
        />
      </figure>
      <nav class="w-full lg:w-5/6">
        <ul class="flex justify-center lg:justify-end pt-2">
          <li class="pl-2 pr-2">
            <a href="">login</a>
          </li>
          <li class="pl-2 pr-2">
            <a href="">Sign-up</a>
          </li>
          <li class="pl-2 pr-2">
            <a href="">Shop</a>
          </li>
          <li class="pl-2 pr-2">
            <a href="">About Us</a>
          </li>
          <li class="pl-2 pr-2">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>;

}
// module.exports=Header   ---> alternate way Es5 features
export default Header
