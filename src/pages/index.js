import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

import Hero from '../components/Hero'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[``]} />
        <Hero />
    </Layout>
)

export default IndexPage
