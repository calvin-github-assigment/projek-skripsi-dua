import React from "react";

const Footer = () => {
  return (
    <div
      className="text-center text-light p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
    >
      &copy; {new Date().getFullYear()} Minahasa Utara Airmadidi : {""}
      <a className="text-ligh" href="https://www.google.com/maps/place/Kembang+Deisy+Airmadidi/@1.4226343,124.982178,754m/data=!3m2!1e3!4b1!4m5!3m4!1s0x32870edd301af9cb:0x6db8531055389581!8m2!3d1.422616!4d124.984349">
        www.KembangDeisy.com
      </a>
    </div>
  );
};

export default Footer;