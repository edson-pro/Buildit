import React from "react";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./Textarea";

export default function Contact() {
  const handleSubmit = () => {};
  return (
    <div className="grid max-w-5xl my-14 mx-auto px-3 grid-cols-2 gap-6">
      <div>
        <div className="flex items-start flex-col justify-start my-12">
          <h4 className="text-sm text-primary capitalize my-3">Contact</h4>
          <h4 className="text-primaryDark font-bold capitalize text-xl">
            Get in touch
          </h4>
        </div>
        <div>
          <div className="flex items-center my-4">
            <img className="h-12 w-12" src="/phone.png" alt="" />
            <div className="ml-3">
              <span className="text-sm text-primary">Tell</span>
              <h4 className="font-semibold text-sm text-primary">
                708-790-0000
              </h4>
            </div>
          </div>{" "}
          <div className="flex items-center my-4">
            <img className="h-12 w-12" src="/mail.png" alt="" />
            <div className="ml-3">
              <span className="text-sm text-primary">Mail</span>
              <h4 className="font-semibold text-sm text-primary">
                sales@buildit.site
              </h4>
            </div>
          </div>{" "}
          <div className="flex items-center my-4">
            <img className="h-12 w-12" src="/phone.png" alt="" />
            <div className="ml-3">
              <span className="text-sm text-primary">Office</span>
              <h4 className="font-semibold text-sm text-primary">
                60 Manor Station St. Fairport, NY 14450
              </h4>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-[#C6DBFF] m-8 p-5 rounded-sm shadow-xl">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Name" />
            <Input label="email" />
            <div className="col-span-2">
              <Input label="Subject" />
            </div>
            <div className="col-span-2">
              <TextArea label="subject" />
            </div>
          </div>
          <div className="my-6 w-full flex">
            <Button>Send Message</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
