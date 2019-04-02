import Head from "next/head";
import db from "../firebase";
import { useState, useEffect } from "react";

import Post from "../components/Post";

const PostPage = props => {
  const { post, query } = props;

  const [livepost, setPost] = useState(post);

  // comment this out to turn off live updates
  useEffect(() => {
    // return { post: { ...post.data(), body: (body.data() || {}).body } };

    // const metadataUnsubscribe = db
    //   .collection("posts")
    //   .doc(post.id)
    //   .onSnapshot(snap => {
    //     const newPost = { ...post, ...snap.data() };
    //     setPost(newPost);
    //   });

    const bodyUnsubscribe = db
      .collection("bodies")
      .doc(post.id)
      .onSnapshot(snap => {
        const newPost = { ...post, ...snap.data() };
        setPost(newPost);
      });

    return () => {
      // metadataUnsubscribe();
      bodyUnsubscribe();
    };
  }, []);

  const {
    title,
    date,
    updatedAt,
    speaker,
    description,
    image,
    slug,
  } = livepost;
  const url = `https://microconf.gen.co/${slug}`;

  let fullTitle = `${title}`;
  if (speaker && speaker.name) fullTitle += ` by ${speaker.name}`;

  let fullDescription = description || "Microconf talk recap";

  let fullImage = image || "https://microconf.gen.co/microconf.jpg";
  if (query && query.img) fullImage = query.img;

  return (
    <div>
      <Head>
        <title>{title} | Microconf Recap</title>
        <meta property="og:type" content="article" />
        <meta
          property="article:section"
          itemprop="articleSection"
          content="Business"
        />
        <meta
          property="article:published"
          itemprop="datePublished"
          content={date}
        />
        <meta
          property="article:modified"
          itemprop="dateModified"
          content={updatedAt}
        />

        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={fullImage} />

        <meta name="twitter:site" value="@microconf" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={fullDescription} />
        <meta property="twitter:image" content={fullImage} />
        <meta name="twitter:card" value="summary_large_image" />
      </Head>
      <Post {...livepost} url={"https://microconf.gen.co/" + livepost.slug} />
    </div>
  );
};

PostPage.getInitialProps = async ({ query }) => {
  const post = await db
    .collection("posts")
    .doc(query.slug)
    .get();

  const body = await db
    .collection("bodies")
    .doc(query.slug)
    .get();

  return { post: { ...post.data(), body: (body.data() || {}).body } };
};

export default PostPage;
