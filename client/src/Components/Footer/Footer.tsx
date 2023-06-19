import React from "react";
import Container from "../Container";
import Map from "../Map/Map";

const Footer = () => {
  return (
    <div className="">
      <section className="w-full bg-blue mt-[30px] py-[20px]">
        <Container>
          <section className="x-full grid grid-cols-1 xl:grid-cols-2 gap-[20px]">
            {/* Google map */}
            <Map />

            {/* info */}
            <hgroup className="flex flex-col ">
              <h3 className="text-light text-[2rem]">T-Shop</h3>
              <p className="text-light text-[1rem]">CVR: 923351032</p>

              <h3 className="text-dark text-[1rem]">Aalborg</h3>
              <p className="text-light text-[1rem]">Møllegade 2</p>
              <p className="text-light text-[1rem]">butik T-shop.dk</p>

              <p className="text-dark text-[1rem]">Aarhus:</p>
              <p className="text-light text-[1rem]">Møllegade 2</p>
              <p className="text-light text-[1rem]">butik T-shop.dk</p>

              <p className="text-dark text-[1rem]">Odense:</p>
              <p className="text-light text-[1rem]">Flakhaven 1</p>
              <p className="text-light text-[1rem]">butik T-shop.dk</p>

            </hgroup>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default Footer;
