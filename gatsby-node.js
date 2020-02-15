const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

//To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  return graphql(
    `
      query PostListSlug {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        // Path for this page — required
        path: node.fields.slug,
        component: path.resolve(".src/templates/blog-post.js"),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
