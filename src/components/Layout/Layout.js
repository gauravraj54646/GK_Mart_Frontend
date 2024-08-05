import React from "react";
import Footer from "./Footer.js";
import Headers from "./Headers.js";
import { Helmet } from "react-helmet";
//   import { ToastContainer } from 'react-toastify';
import { Toaster } from "react-hot-toast";
//  import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, tittle, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{tittle}</title>
      </Helmet>
      <Headers />
      <main style={{ minHeight: "70vh" }}>
        {/* <ToastContainer/> */}
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "GauravDev",
};

export default Layout;
