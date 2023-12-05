import React from 'react'
import Header from './Home/Header'
import Navbar from './Home/Navbar'
import Footer from './Home/Footer'

const Layout = ({children}) => {
  return (
    <div>

      <Header />
      <Navbar />
            {children}
      <Footer />
    </div>
  )
}

export default Layout
