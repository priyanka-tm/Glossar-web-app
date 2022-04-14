import React from "react";
import Link from "next/link";

import SocialIcons from "../../other/SocialIcons";

export default function FooterInfomation() {
  return (
    <div className="footer-info">
      <Link href={process.env.PUBLIC_URL + "/"}>
        <a className="footer-info__logo">
          <a className="menu-logo"> 
               <img
                src={"src/attech/images/Logo"}
                alt="glooser logo"
              />
              {/* <YourSvg /> */}
            </a>
        </a>
      </Link>
      <ul>
        <li>Address: tehcnomargin silver business hub </li>
        <li>Phone: +91 9265912948</li>
        <li>Email: yasvekariya101@gmail.com</li>
      </ul>
      <SocialIcons type="primary" shape="circle" className="-btn-light" />
    </div>
  );
}
