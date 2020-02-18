import React, { Component } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import './tnsposts.scss'

class TNSPostsListPreset extends Component {
    render() {
        const postList = [
            {
                title: 'Why Use Gatsby JS for your Website?',
                slug: 'why-use-gatsby-js-for-your-website',
                desc:
                    '<p>Want to learn more about Gatsy JS? Considering using it JS for your website? Looking to improve your businesses marketing? This article explains why Gatsby is the right choice, and the benifits that it provides.</p>',
            },
            {
                title: 'The Rise of the Content Mesh',
                slug: 'the-rise-of-the-content-mesh',
                desc:
                    '<p>On October 4th 2018 an article named “Delivering Modern Website Experiences: The Journey to a Content Mesh” was published by Sam Bhagwat on gatsbyjs.org. Sam introduced the concept of a Content Mesh, and touched on the different pieces that are involved. These are my thoughts on it.</p>',
            },
            {
                title: 'The Inclusive Web – Why It Should Matter to Businesses',
                slug: 'the-inclusive-web-why-it-should-matter-to-businesses',
                desc:
                    '<p>Web Accessibility is about designing the web so that everyone can use it. The web is a resource that is used across all aspects of life. Education, employment, government, health care, the list goes on. It seems that a lot of businesses missed the memo.</p>',
            },
        ]

        let postBlocks = postList.map(post => (
            <div className="tnsposts__single">
                <OutboundLink
                    className="tnsposts__single__link"
                    href={'https://www.thoughtsandstuff.com/' + post.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="This link will open up a new tab to Thoughts and Stuff.com"
                >
                    <h3 className="tnsposts__single__title">{post.title}</h3>

                    <div
                        className="tnsposts__single__desc"
                        dangerouslySetInnerHTML={{
                            __html: post.desc,
                        }}
                    />
                </OutboundLink>
            </div>
        ))

        return (
            <div className="tnsposts__list">
                <div className="tight-container">
                    <h2 className="tnsposts__title">Recent Articles</h2>
                    {postBlocks}
                </div>
            </div>
        )
    }
}

export default TNSPostsListPreset
