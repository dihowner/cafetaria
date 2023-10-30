import Footer from '@/components/Footer'
import Header from '@/components/Headerr/Header'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout
