/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
    lang,
    title,
    description,
    meta,
    keywords,
    facebookImageSrc,
    facebookImageWidth,
    facebookImageHeight,
    imageAlt,
    twitterCardType,
    twitterImageSrc
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            locale
            title
            description
            author
            url
          }
        }
      }
    `
  )

  const locale = site.siteMetadata.locale;
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:locale`,
          content: locale,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.url,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: facebookImageSrc,
        },
        {
          property: `og:image:width`,
          content: facebookImageWidth,
        },
        {
          property: `og:image:height`,
          content: facebookImageHeight,
        },
        {
          property: `og:image:alt`,
          content: imageAlt,
        },
        {
          name: `twitter:card`,
          content: ( twitterCardType || `summary_large_image` ),
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: twitterImageSrc,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
