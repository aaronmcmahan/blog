import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            tagline
            description
            keywords
            siteUrl
            author {
              name
              url
              email
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
