import React from "react";
import Container from "../Container";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="md:sticky top-0 w-full bg-blue z-10">
      <Container>
        <div className="py-2">
          <Navigation />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
