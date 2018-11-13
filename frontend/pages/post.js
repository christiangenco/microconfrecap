import Head from "next/head";
import db from "../firebase";

import Post from "../components/Post";

const PostPage = props => {
  const { post } = props;
  const { title, date, updatedAt, speaker, description, image, slug } = post;
  const url = `https://microconf.gen.co/${slug}`;

  let fullTitle = `${title}`;
  if (speaker && speaker.name) fullTitle += ` by ${speaker.name}`;

  let fullDescription = description || "Microconf 2018 talk recap";

  let fullImage = image || "https://microconf.gen.co/microconf.jpg";

  return (
    <div>
      <Head>
        <title>{title} | Microconf Recap 2018</title>
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
      <Post {...post} />
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

  return { post: { ...post.data(), body: body.data().body } };
};

export default PostPage;
