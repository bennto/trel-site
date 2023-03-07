// import fs from "fs";
// import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { getAssetURL } from "../components/lib/getAssetUrl";
// import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import { getDirectusClient } from "../components/lib/directus";
import Layout from "../components/layout.js";
import styles from "../styles/blog.module.scss";

const Blog = ({ posts }) => {
  return (
    <Layout>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <section>
        <h1 className="mt-40 mb-10 text-center">Blog</h1>
        <div className={styles.container}>
          {/* outer flex to keep content centered */}
          <div className={styles.gutter}></div>
          <div className="flex flex-row justify-center flex-wrap">
            {posts.map((post) => (
              <Link href={`/posts/${post.id}`}>
                <div className="max-w-xs rounded m-4 overflow-hidden bg-zinc-900 cursor-pointer">
                  <div className="object-cover w-auto h-52 overflow-hidden">
                    <img
                      className="w-full min-h-full h-auto"
                      src={getAssetURL(post.blog_face)}
                      alt=""
                    />
                  </div>
                  <div className="px-6 py-6">
                    <h2 className="font-bold text-xl mb-2">{post.title}</h2>
                    <p className="text-gray-300 text-sm">{post.date_created}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.gutter}></div>
        </div>
      </section>
      <br />
    </Layout>
  );
};

export async function getStaticProps() {
  const directus = await getDirectusClient();
  // GET DATA
  // We don't need to authenticate if the public role has access to some_public_collection.
  let response;
  try {
    response = await directus.items("blogs").readByQuery({
      fields: ["*"],
      sort: ["date_created"],
    });
  } catch (err) {
    console.log("error");
  }

  const posts = response.data;
  // .map((n) => {
  //   return {
  //     id: n.id,
  //     name: n.name,
  //     email: n.email,
  //     ut_eid: n.ut_eid,
  //     status: n.status,
  //     position: n.position,
  //   };
  // });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
