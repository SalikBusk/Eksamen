import React from "react";

// Compoents
import Container from "../Components/Container";
import Gallery from "../Components/Gallery";
import Heading from "../Components/Heading";

import ArticlePostProps from "../Components/ArticlePost";

// Data = array
import GalleryArr from "../Data/GalleryArr";
import Data from "../Data/Data";

const SectionStyle = "pt-[50px]"

const Index = () => {
  return (
    <div className="">
      <Container>

        <section id="SectionOne" className={SectionStyle}>
           <Heading title="NOGET OM TE" />
          {Data.filter((item) => item.id === 1).map((item) => (
            <ArticlePostProps
              title={item.title}
              description={item.descriptions}
              image={item.image}
            />
          ))}
        </section>

        <section id="SectionTwo" className={SectionStyle}>
           <Heading title="Måneds tilbud" />
          {Data.filter((item) => item.id === 2).map((item) => (
            <ArticlePostProps
              title={item.title}
              description={item.descriptions}
              image={item.image}
              reverse
            />
          ))}
        </section>

        <section id="Section3" className={SectionStyle}>
          <Heading title="Vælg din favorit"/>
          {GalleryArr.map((gallery, index) => (
            <Gallery
              key={index}
              id={`gallery${index + 1}`}
              bigImage={gallery.bigImage}
              smallImages={gallery.images}
              onClick={() => {
                console.log(`Gallery ${index + 1} clicked`);
              }}
            />
          ))}
        </section>
      </Container>
    </div>
  );
};

export default Index;
