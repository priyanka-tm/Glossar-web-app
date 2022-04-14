import React from "react";
import Link from "next/link";
import Container from "../../other/Container";
import Navigator from "../elements/Navigator";
import FunctionItems from "../elements/FunctionItems";
import MobileMenuOpener from "../elements/MobileMenuOpener";
// import Logo from "../../src/attech/images/Logo.svg"
// import { ReactComponent as YourSvg } from 'src/attech/images/Logo.svg'; 

export default function MenuOne() {
  return (
    <div className="menu -style-one">
      <Container>
        <div className="menu-wrapper">
          <MobileMenuOpener />
          <Link href={process.env.PUBLIC_URL + "/"}>
            <a className="menu-logo"> 
               <img
                src={"src/attech/images/Logo"}
                alt="glooser logo"
              />
              {/* <YourSvg /> */}
            </a>
          </Link>
          <Navigator />
          <FunctionItems />
        </div>
      </Container>
    </div>
  );
} 
