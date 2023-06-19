import React from "react";

const Map = () => {
  return (
    <div className="w-full">
      <iframe
        title="map"
        className="w-[100%] xl:w-full h-[450px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2170.2613623467064!2d9.919518315981207!3d57.047065880919305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932f2d57ff8a3%3A0xeecd5369643a5b44!2sM%C3%B8llegade%202%2C%209000%20Aalborg!5e0!3m2!1sda!2sdk!4v1687162345755!5m2!1sda!2sdk"
        loading="lazy"
      >
      </iframe>
    </div>
  );
};

export default Map;
