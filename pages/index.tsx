import type { NextPage } from "next";
import Link from "next/link";
import { Fragment } from "react";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import TextArea from "../Components/Textarea";

const Home: NextPage = () => {
  return (
    <Fragment>
      <header className="bg-gradient-to-t -mt-16 -z-20 from-[#C6DBFF] relative to-[#E1EBFA]">
        <img
          className="absolute right-0 top-0 h-full -z-10"
          src="/Figure.svg"
          alt=""
        />

        <div className="flex py-16 justify-between gap-10 items-center max-w-5xl mx-auto px-3">
          <div>
            <h4 className="text-4xl font-bold text-primary leading-[50px]">
              Development <br /> company
            </h4>
            <p className="text-sm my-5 leading-7 text-primary">
              Forward-thinking real estate developer, owner and investor <br />{" "}
              with a reputation
            </p>
            <div className="flex gap-4 items-center mt-6">
              <Link href="/services">
                <a className="button">Services</a>
              </Link>
              <Link href="/about">
                <a className="button">About the company</a>
              </Link>
            </div>
          </div>
          <div className="max-w-md">
            <img className="w-full py-14" src="/img_group.png" alt="" />
          </div>
        </div>
      </header>
      <div className="my-24">
        <div className="flex items-center justify-center my-8">
          <h4 className="text-primary font-bold capitalize text-xl">
            Innovative Execution
          </h4>
        </div>
        <div className="grid grid-cols-3 my-14 gap-6 max-w-3xl mx-auto">
          <div className="">
            <div className="bg-[#678C92] w-12 h-12 flex items-center justify-center mb-4 rounded-md">
              <img src="/pen.svg" alt="" />
            </div>
            <h4 className="text-primary font-bold capitalize text-base">
              Featured Listing
            </h4>
            <p className="text-sm text-primary my-2 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="">
            <div className="bg-[#678C92] w-12 h-12 flex items-center justify-center mb-4 rounded-md">
              <img src="/pen.svg" alt="" />
            </div>
            <h4 className="text-primary font-bold capitalize text-base">
              Featured Listing
            </h4>
            <p className="text-sm text-primary my-2 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="">
            <div className="bg-[#678C92] w-12 h-12 flex items-center justify-center mb-4 rounded-md">
              <img src="/pen.svg" alt="" />
            </div>
            <h4 className="text-primary font-bold capitalize text-base">
              Featured Listing
            </h4>
            <p className="text-sm text-primary my-2 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#E1EBFA] py-7">
        <div className="max-w-6xl mx-auto px-3">
          <img src="./logos.png" alt="" />
        </div>
        <div className="max-w-5xl my-4 mx-auto px-3">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center justify-center">
              <img src="/about.png" className="w-4/5" alt="" />
            </div>
            <div>
              <h4 className="text-sm text-primary capitalize my-3">About</h4>
              <h4 className="text-xl font-bold text-primary leading-[50px]">
                Owner and investor with a reputation
              </h4>
              <p className="text-sm my-5 leading-7 text-primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                Integer rhoncus, eros vel euismod tempor, ipsum magna tristique
                nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis
                semper aliquet. Cras hendrerit molestie sapien sed fermentum.
                Mauris dui tortor, viverra vel ultrices in, congue sed ex.
              </p>
              <div className="my-3">
                <Link href="/exprole">
                  <a className="button">Exprole</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 my-20 max-w-5xl mx-auto px-3">
        <div>
          <h4 className="text-sm text-primary capitalize my-3">
            Available Properties{" "}
          </h4>
          <h4 className="text-xl font-bold text-primary leading-[50px]">
            Featured Listing
          </h4>
          <p className="text-sm my-5 leading-7 text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </p>
          <div className="my-3">
            <Link href="/exprole">
              <a className="button">Exprole</a>
            </Link>
          </div>
        </div>
        <div>
          <img src="/ft.png" alt="" />
        </div>
      </div>

      <div className="bg-[#E1EBFA] py-7">
        <div className="flex items-center flex-col justify-center my-8">
          <h4 className="text-sm text-primary capitalize my-3">Socials</h4>
          <h4 className="text-primary font-bold capitalize text-xl">
            On Instagram
          </h4>
        </div>
        <div className="max-w-5xl my-4 mx-auto px-3">
          <div className="grid grid-cols-3 gap-6">
            <img src="/is1.png" alt="" />
            <img src="/is2.png" alt="" />
            <img src="/is3.png" alt="" />
            <img src="/is4.png" alt="" />
            <img src="/is5.png" alt="" />
            <img src="/is6.png" alt="" />
          </div>
        </div>
      </div>

      <div className="grid max-w-5xl my-14 mx-auto px-3 grid-cols-2 gap-6">
        <div>
          <div className="flex items-start flex-col justify-start my-12">
            <h4 className="text-sm text-primary capitalize my-3">Contact</h4>
            <h4 className="text-primary font-bold capitalize text-xl">
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
        <form action="">
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
              <a className="button w-full">Send Message</a>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Home;
