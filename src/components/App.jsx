import React from "react";
import Content from "./Content/Content";

export default function App() {
  return (
    <div className="h-[100dvh] font-raleway grid bg-very-dark-blue overflow-hidden relative text-custom-font">
      <img
        src="bg-mobile.png"
        alt=""
        className="w-full h-full landscape:hidden"
      />
      <img
        src="bg-desktop.png"
        alt=""
        className="hidden landscape:block h-[50dvh] self-end w-full"
      />
      <Content />
    </div>
  );
}
