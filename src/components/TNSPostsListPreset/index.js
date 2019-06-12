import React, { Component } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Fade from 'react-reveal/Fade'
import './tnsposts.scss'

class TNSPostsListPreset extends Component {
    render() {
        const postList = [
            {
                title: 'GatsbyJS and WordPress Gives Website a Lease of Life',
                slug:
                    'gatsbyjs-and-wordpress-gives-thoughts-and-stuff-a-lease-of-life',
                desc:
                    '<p>There seems to be only one option when needing a fast website – having a static site. I have been a massive advocate of static sites in principle for a very long time. This article explains how I turned my sluggish WordPress blog, into a speedy machine.</p>',
            },
            {
                title: 'The Rise of the Content Mesh',
                slug: 'the-rise-of-the-content-mesh',
                desc:
                    '<p>On October 4th 2018 an article named “Delivering Modern Website Experiences: The Journey to a Content Mesh” was published by Sam Bhagwat on gatsbyjs.org. Sam introduced the concept of a Content Mesh, and touched on the different pieces that are involved. These are my thoughts on it.</p>',
            },
            {
                title: 'Trellis & Bedrock For Fast WordPress Development',
                slug: 'trellis-bedrock-fast-wordpress-dev',
                desc:
                    '<p>I am continually trying to speedy up and improve my WordPress workflow process. Unlike a lot of JS framework communities, WordPress seems to be a little behind in creating a fast and efficient roll out process. The whole thing seems a little “work it out yourself”. This article covers something that may change that...</p>',
            },
            {
                title: 'The Inclusive Web – Why It Should Matter to Businesses',
                slug: 'the-inclusive-web-why-it-should-matter-to-businesses',
                desc:
                    '<p>Web Accessibility is about designing the web so that everyone can use it. The web is a resource that is used across all aspects of life. Education, employment, government, health care, the list goes on. It seems that a lot of businesses missed the memo.</p>',
            },
        ]

        let postBlocks = postList.map(post => (
            <Fade bottom key={post.slug}>
                <div className="tnsposts__single">
                    <OutboundLink
                        className="tnsposts__single__link"
                        href={'https://www.thoughtsandstuff.com/' + post.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="This link will open up a new tab to Thoughts and Stuff.com"
                    >
                        <h3 className="tnsposts__single__title">
                            {post.title}
                        </h3>

                        <div
                            className="tnsposts__single__desc"
                            dangerouslySetInnerHTML={{
                                __html: post.desc,
                            }}
                        />
                    </OutboundLink>
                </div>
            </Fade>
        ))

        return (
            <div className="tnsposts__list">
                <div className="tight-container">
                    <Fade bottom>
                        <h2 className="tnsposts__title">Some Thoughts</h2>
                    </Fade>
                    {postBlocks}
                </div>
            </div>
        )
    }
}

export default TNSPostsListPreset
