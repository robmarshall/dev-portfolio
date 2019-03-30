import React, { Component } from 'react'
import axios from 'axios'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Fade from 'react-reveal/Fade'
import './tnsposts.scss'

class TNSPostsList extends Component {
    state = {
        postsExist: false,
        posts: [],
    }

    fetchPosts = () => {
        axios
            .get(
                `http://rest.thoughtsandstuff.com/wp-json/wp/v2/posts?per_page=3`
            )
            .then(posts => {
                this.setState({
                    posts: posts.data,
                    postsExist: true,
                })
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    componentDidMount() {
        this.fetchPosts()
    }

    render() {
        const { posts, postsExist } = this.state

        let postBlocks = posts.map(post => (
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
                            {post.title.rendered}
                        </h3>

                        <div
                            className="tnsposts__single__desc"
                            dangerouslySetInnerHTML={{
                                __html: post.excerpt.rendered,
                            }}
                        />
                    </OutboundLink>
                </div>
            </Fade>
        ))

        return (
            postsExist && (
                <div className="tnsposts__list">
                    <div className="tight-container">
                        <h2 className="tnsposts__title">
                            Most Recent Thoughts
                        </h2>
                        {postBlocks}
                    </div>
                </div>
            )
        )
    }
}

export default TNSPostsList
