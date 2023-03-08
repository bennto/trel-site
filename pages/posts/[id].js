import Head from "next/head";
import { useRouter } from "next/router";
import { getAssetURL } from "../../components/lib/getAssetUrl";
import { getDirectusClient } from "../../components/lib/directus";
import Layout, { siteTitle } from "../../components/layout";
import styles from "../../styles/post.module.scss";

const Post = ({ post, author }) => {
  const { first_name, last_name } = author.data[0];
  return (
    <Layout>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.container}>
        <div className="max-w-xl mx-auto mt-36">
          <h2 className="leading-tight">{post.title}</h2>
          <hr />
          <div className="mb-2 flex flex-row justify-between">
            <h5 className="text-sm">
              Written by {first_name} {last_name}
            </h5>
            <h5 className="text-sm">{post.date_created}</h5>
          </div>
          <img
            className="w-full h-auto"
            src={getAssetURL(post.blog_face)}
            alt=""
          />
          <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const directus = await getDirectusClient();
  const { data } = await directus.items("blogs").readByQuery({
    fields: "id",
    filter: { status: { _eq: "published" } },
    limit: -1,
  });

  return {
    paths: data.map((post) => {
      return {
        params: { id: post.id.toString() },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const directus = await getDirectusClient();

  const post = await directus.items("blogs").readOne(id, {
    fields: ["*"],
  });

  const initialDate = new Date(post.date_created);
  let year = initialDate.getFullYear();
  let month = initialDate.getMonth();
  let day = initialDate.getDate();
  let endDate = month + "/" + day + "/" + year;
  post.date_created = endDate;

  const uuid = post.user_created;
  const author = await directus.users.readByQuery({
    filter: {
      id: {
        _eq: uuid,
      },
    },
  });

  return {
    props: {
      post,
      author,
    },
  };
};

export default Post;
