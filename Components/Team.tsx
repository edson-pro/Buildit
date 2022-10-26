import Image from "next/image";
import React from "react";
import Button from "./Button";
import TeamItem from "./TeamItem";

export default function Team() {
  const teamMembers = [
    { role: "worker", photo: "/worker1.png", name: "Name surname" },
    { role: "worker", photo: "/worker2.png", name: "Name surname" },
    { role: "worker", photo: "/worker3.png", name: "Name surname" },
    { role: "worker", photo: "/worker4.png", name: "Name surname" },
    { role: "worker", photo: "/worker5.png", name: "Name surname" },
    { role: "worker", photo: "/worker6.png", name: "Name surname" },
  ];
  return (
    <div className="bg-[#E1EBFA] py-7">
      <div className="flex items-center flex-col justify-center my-12">
        <h4 className="text-sm text-primary capitalize my-3">Our Team</h4>
        <h4 className="text-primaryDark font-bold capitalize text-xl">
          Let&apos;s talk
        </h4>
      </div>
      <div className="max-w-3xl my-4 mx-auto px-3">
        <div className="grid grid-cols-3 gap-6">
          {teamMembers.map((e, index) => {
            return <TeamItem {...e} key={index} />;
          })}
        </div>
      </div>
      <div className="max-w-4xl flex items-center justify-between my-12 py-12 border-t border-b border-primary mx-auto px-0">
        <h4 className="text-xl font-bold text-primaryDark">Call us</h4>
        <div className="flex items-center gap-5">
          <Button>Call</Button>
          <Button variant="normal">Email</Button>
        </div>
      </div>
    </div>
  );
}
