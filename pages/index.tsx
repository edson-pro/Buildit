import type { NextPage } from "next";
import { Fragment } from "react";
import Button from "../Components/Button";
import Contact from "../Components/Contact";

const Home: NextPage = () => {
  const posts = [
    "/is1.png",
    "/is2.png",
    "/is3.png",
    "/is4.png",
    "/is5.png",
    "/is6.png",
    "/is7.png",
    "/is8.png",
  ];
  return (
    <Fragment>
      <header className="bg-gradient-to-t top-0 from-[#C6DBFF] relative to-[#E1EBFA]">
        <img
          className="absolute right-0 top-0 h-full"
          src="/Figure.svg"
          alt=""
        />

        <div className="flex py-16 justify-between gap-10 items-center max-w-5xl mx-auto px-3">
          <div>
            <h4 className="text-4xl font-bold text-primaryDark leading-[50px]">
              Development <br /> company
            </h4>
            <p className="text-sm my-5 leading-7 text-primary">
              Forward-thinking real estate developer, owner and investor <br />{" "}
              with a reputation
            </p>
            <div className="flex gap-4 items-center mt-6">
              <Button href="/services">Services</Button>

              <Button href="/about" variant="normal">
                About the company
              </Button>
            </div>
          </div>
          <div className="max-w-md relative z-20">
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
            <h4 className="text-primaryDark font-bold capitalize text-base">
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
            <h4 className="text-primaryDark font-bold capitalize text-base">
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
            <h4 className="text-primaryDark font-bold capitalize text-base">
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
              <h4 className="text-xl font-bold text-primaryDark leading-[50px]">
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
                <Button href="/exprole">Exprole</Button>
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
          <h4 className="text-xl font-bold text-primaryDark leading-[50px]">
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
            <Button href="/exprole">Exprole</Button>
          </div>
        </div>
        <div>
          <img src="/ft.png" alt="" />
        </div>
      </div>
      <div className="bg-[#E1EBFA] py-7">
        <div className="flex items-center flex-col justify-center my-8">
          <h4 className="text-sm text-primary capitalize my-3">Socials</h4>
          <h4 className="text-primaryDark font-bold capitalize text-xl">
            On Instagram
          </h4>
        </div>
        <div className="max-w-5xl my-4 mx-auto px-3">
          <div className="grid grid-cols-3 gap-6">
            {posts.map((e, index) => {
              return <img key={index} src={e} alt="" />;
            })}
          </div>
        </div>
      </div>
      <Contact />
    </Fragment>
  );
};

export default Home;
