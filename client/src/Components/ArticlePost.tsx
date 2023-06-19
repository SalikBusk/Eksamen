import React from "react";

interface ArticlePostProps {
  title: string;
  description?: string[];
  image?: string;

  reverse?: boolean;
}

const ArticlePost: React.FC<ArticlePostProps> = ({ title, description, image, reverse }) => {
  return (
    <>
      <figure
        className={`
        flex flex-col xl:flex-row gap-[10px] item-center w-full
        ${
          reverse ? "sm:flex-col xl:flex-row-reverse gap-[10px]" : "flex w-full"
        }
      `}
      >
        <img className="w-full h-[70vh]" src={image} alt={title} />
        <figure className="relative w-full">
            <h2 className="text-[3rem] text-blue font-roboto font-[400]">
            {title}
          </h2>
          {description?.map((text, index) => (
            <div>
              <p
                key={index}
                className="text-[1.5rem] text-blue text-dark font-roboto font-[400] py-[10px]"
              >
                {text}
              </p>
            </div>
          ))}
          <button className="absolute bottom-0 right-[15px] text-blue text-[1.5rem]">
            Læs mere: 
          </button>
        </figure>
      </figure>
    </>
  );
};

export default ArticlePost;
