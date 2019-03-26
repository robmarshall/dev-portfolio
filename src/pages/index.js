import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

import Hero from '../components/Hero'
import ProjectsList from '../components/ProjectsList'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[``]} />
        <Hero />
        <ProjectsList />
    </Layout>
)

export default IndexPage
