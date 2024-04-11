import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

  import toast, { Toaster } from 'react-hot-toast';

const Layout = ({children, title, description, keywords, author}) => {
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />


  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />



                <title>{title}</title>
            </Helmet>
        <Header/>
    <main style={{ minHeight: "73vh" }}>
      <Toaster/>
      {children}</main>
    <Footer/>
      </div>
  )
}

Layout.defaultProps = {
    title: 'Green Delight-Shop Now',
    description: 'A marketplace to Get fresh Organic Farm Products at very Reasonable Cost',
    keywords: 'food,farmer',
    author: 'Kshitij Kumar'
}

export default Layout