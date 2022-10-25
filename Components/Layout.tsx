import React, { Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <Fragment>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
}
