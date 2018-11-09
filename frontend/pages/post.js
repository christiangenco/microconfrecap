import Head from "next/head";
import db from "../firebase";

import Post from "../components/Post";

const PostPage = ({ post }) => (
  <div>
    <Head>
      <title>{post.title} | Microconf Recap 2018</title>
      {/* TODO: metadata */}
    </Head>
    <Post {...post} />
  </div>
);

PostPage.getInitialProps = async ({ query }) => {
  const post = await db
    .collection("posts")
    .doc(query.slug)
    .get();

  const body = await db
    .collection("bodies")
    .doc(query.slug)
    .get();

  return { post: { ...post.data(), body: body.data().body } };
};

export default PostPage;
