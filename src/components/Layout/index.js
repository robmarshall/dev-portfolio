import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

import '../../utils/sass/base/base.scss';
import '../../utils/sass/layout/layout.scss';

const Layout = ({children}) => (
  <div>

    <div className="article-container">
        {children}
    </div>

    <Footer />

  </div>
)

export default Layout
