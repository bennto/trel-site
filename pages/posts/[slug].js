import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import CustomLink from '../../components/CustomLink'
import Layout from '../../components/layout'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'



export default function PostPage({ source, frontMatter }) {
  // Custom components & native components styled here. Everything else styled inline.
  // Customlink originates in the components folder, how it's styled is defined there.
  const components = {
    a: CustomLink,
    h3: (props) => <h3 style={{ color: "#adadad" }}>{props.children}</h3>,
    h2: (props) => <h2 style={{ marginBottom: "20px", fontSize: "1.5em", color: "#adadad" }}>{props.children}</h2>,
    p: (props) => <p style={{ marginBottom: "30px", fontSize: "0.8em", color: "#adadad" }}>{props.children}</p>,
    img: (props) => <img src={props.src} style={{ display: "block", width: "70%", height: "auto", margin: "auto"}}></img>,
  }
  
  return (
    <Layout className="container">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="boxme">
        <div className="post-header">
          <h1 style={{ fontSize: "3em" }}>{frontMatter.title}</h1>
          <h5 style={{ opacity: "0.6" }}>By {frontMatter.author}</h5>
        </div>
        <hr style={{ opacity: "0.5" }}></hr>
        <div className="styleme">
          <MDXRemote {...source} components={components} />
        </div>
        <br />
      </div>
      <style jsx>{`
        .boxme {
          width: 60%;
          margin-left: auto;
          margin-right: auto;
        }
        .post-header h1 {
          margin-top: 100px;
        }
        .post-header h5 {
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .styleme {
          font-size: 1.2em;
          color: #adadad;
          line-height: 50px;
        }
        @media (max-width: 768px) {
          .boxme {
            width: 100%; 
          }
          .styleme {
            font-size: 1.8em;
          }
        }
      `}</style>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
