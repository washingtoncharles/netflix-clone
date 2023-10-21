import React, { useEffect } from "react";
import { Container } from "./Navbar.style";

export default function Navbar(){
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  }, [])

  return(
    <Container>
      <div className={"nav-container" + (show ? " nav-container-black" : "")}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix" 
          className="nav-logo" 
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
          alt="Avatar" 
          className="nav-avatar" 
        />

      </div>
    </Container>
  )
}