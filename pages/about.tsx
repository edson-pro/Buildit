import React from "react";
import Team from "../Components/Team";

export default function About() {
  return (
    <div className="">
      <header className="bg-gradient-to-t  top-0 from-[#C6DBFF] relative to-[#E1EBFA]">
        <div className="grid grid-cols-2 gap-6  py-28 max-w-5xl mx-auto px-3">
          <div className="flex items-center justify-center">
            <img src="/about2.png" className="w-4/5" alt="" />
          </div>
          <div className="py-8">
            <h4 className="text-sm text-primary capitalize my-3">About</h4>
            <h4 className="text-xl font-bold text-primaryDark leading-[50px]">
              Owner and investor with a reputation
            </h4>
            <p className="text-sm my-5 leading-7 text-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
              Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
              viverra vel ultrices in, congue sed ex.
            </p>
          </div>
        </div>
      </header>
      <div className="my-16">
        <div className="flex items-center flex-col justify-center my-8">
          <h4 className="text-sm text-primary capitalize my-3">Statistics</h4>
          <h4 className="text-primaryDark font-bold capitalize text-xl">
            Development in numbers
          </h4>
        </div>
        <div className="grid py-5 px-3 max-w-4xl mx-auto my-8 grid-cols-3 gap-5 bg-[#C6DBFF] shadow-[#E1EBFA] shadow-xl ">
          <div className="flex px-5 border-r border-primary">
            <img className="h-12 w-12" src="/loc.svg" alt="" />
            <div className="ml-3">
              <h4 className="text-primaryDark text-xl font-bold">{">"} 200</h4>
              <span className="text-xs text-primary">Number</span>
            </div>
          </div>
          <div className="flex px-5 border-r border-primary">
            <img className="h-12 w-12" src="/home.svg" alt="" />
            <div className="ml-3">
              <h4 className="text-primaryDark text-xl font-bold">{">"} 70</h4>
              <span className="text-xs text-primary">Number</span>
            </div>
          </div>
          <div className="flex px-5">
            <img className="h-12 w-12" src="/hands.svg" alt="" />
            <div className="ml-3">
              <h4 className="text-primaryDark text-xl font-bold">{">"} 20</h4>
              <span className="text-xs text-primary">Number</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl my-6 py-0 border-t border-b border-primary mx-auto px-3">
          <img src="./logos.png" alt="" />
        </div>
      </div>

      <Team />
    </div>
  );
}
