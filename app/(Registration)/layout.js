import React from 'react'
import Header from '@/components/Headerr/Header'
const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default layout
