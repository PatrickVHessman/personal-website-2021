exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(
        `
        {
            allWordpressPost {
              nodes {
                title
                content
                excerpt
                slug
                wordpress_id
                date(formatString: "MMM Do YYYY")
                featured_media {
                  source_url
                }
                acf {
                  description
                }
              }
            }
          }
        `)
    data.allWordpressPost.nodes.forEach(node => {
        const slug = node.slug
        const httpReplace = node.content.replace(/http:/g, "https:");
      actions.createPage({
        path: `blog/${slug}`,
        component: require.resolve(`./src/pages/post.js`),
        context: { 
            slug: slug,
            title: node.title,
            content: httpReplace,
            id: node.wordpress_id,
            excerpt: node.excerpt,
            date: node.date
         },
      })
    });
    // createRedirect({
    //   fromPath: `/blog`,
    //   toPath: `/#blogs`,
    // });
  }