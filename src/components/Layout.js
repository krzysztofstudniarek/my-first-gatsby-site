import * as React from 'react'


const Layout = ({ pageTitle, children }) => {
  return (
    <div>
        <title>{pageTitle}</title>
        {children}
    </div>
  )
}

export default Layout;