import Sidebar from '@/components/Sidebar'
import React from 'react'
import {
  SideBarFirstLinks,
  SideBarSecondLinks,
} from '@/components/Utilis/Dummy'
const layout = ({children}) => {
  return (
    <div>
      <Sidebar
        SideBarFirstLinks={SideBarFirstLinks}
        SideBarSecondLinks={SideBarSecondLinks}
      />
      <main>
        {children}
      </main>
    </div>
  )
}

export default layout
