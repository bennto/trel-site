import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import Layout from '../components/layout.js'
import styles from '../styles/blog.module.scss'

const Blog = ({ posts }) => {
    return (
        <Layout>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />    
            </head>

            <section className={styles.blog}>
                <h1>Blog</h1>
                <div className={styles.container}> {/* outer flex to keep content centered */}
                    <div className={styles.gutter}></div>
                    <div className={styles.dadbod}> {/* all the posts are in here */}
                        {posts.slice(0).reverse().map((post) => (
                            <Link
                            as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                            href={`/posts/[slug]`}>
                                <div className={styles.artbox}>
                                    <div className={styles.imgbox}>
                                        <img src={`${post.data.picture}`}></img>
                                    </div>
                                    <div className={styles.infobox}>
                                        <h5>{post.data.date}</h5>
                                        <h6>by {post.data.author}</h6>
                                    </div>
                                    <a>{post.data.title}</a>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className={styles.gutter}></div>
                </div>
            </section>
            <br />
        </Layout>
    )
}

export function getStaticProps() {
    const posts = postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
        const { content, data } = matter(source)

        return {
            content,
            data,
            filePath,
        }
    })

    return { 
        props: {
            posts,
        }
    }
}

export default Blog