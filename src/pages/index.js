import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

import Hero from '../components/Hero'
import ProjectsList from '../components/ProjectsList'
import TNSPostsListPreset from '../components/TNSPostsListPreset'
import Contact from '../components/Contact'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[``]} />
        <Hero />
        <ProjectsList />
        <Contact />
        <TNSPostsListPreset />
    </Layout>
)

export default IndexPage
