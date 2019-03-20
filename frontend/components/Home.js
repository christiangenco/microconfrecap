import Link from "next/link";
import Head from "next/head";
import db from "../firebase";

const PostItem = ({ post }) => (
  <li className="mb-2 text-lg">
    {post.speaker.name}:{" "}
    <Link href={`/${post.slug}`}>
      <a className="no-underline hover:underline">{post.title}</a>
    </Link>
  </li>
);

const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <PostItem key={post.slug} post={post} />
    ))}
  </ul>
);

const Home = ({ posts = {}, query: { coverIndex } }) => {
  const starterPosts = Object.values(posts).filter(
    post => post.conference == "starter"
  );

  const growthPosts = Object.values(posts).filter(
    post => post.conference == "growth"
  );

  const starter2019Posts = Object.values(posts).filter(
    post => post.conference == "starter2019"
  );

  const growth2019Posts = Object.values(posts).filter(
    post => post.conference == "growth2019"
  );

  return (
    <div>
      <Head>
        <meta property="og:title" content="Microconf Recap" />
        <meta property="og:type" content="website" />
        <meta
          property="description"
          content="Microconf official conference notes by Christian Genco."
        />
        <meta
          property="og:description"
          content="Microconf official conference notes by Christian Genco."
        />
        <meta property="og:url" content="https://microconf.gen.co/" />
        <meta
          property="og:image"
          content={
            coverIndex
              ? `https://microconf.gen.co/static/covers/${coverIndex}.jpg`
              : "https://microconf.gen.co/static/microconf.jpg"
          }
        />
        <meta name="twitter:site" value="@microconf" />
        <meta property="twitter:url" content="https://microconf.gen.co/" />
        <meta property="twitter:title" content="Microconf Recap" />
        <meta
          property="twitter:description"
          content="Microconf official conference notes by Christian Genco."
        />
        <meta
          property="twitter:image"
          content={
            coverIndex
              ? `https://microconf.gen.co/static/covers/${coverIndex}.jpg`
              : "https://microconf.gen.co/static/microconf.jpg"
          }
        />
        <meta name="twitter:card" value="summary_large_image" />
      </Head>
      <h2 className="font-sans">Growth 2019</h2>
      <PostList posts={growth2019Posts} />
      <h2 className="font-sans">Starter 2019</h2>
      <PostList posts={starter2019Posts} />
      <hr style={{ border: "1px solid black" }} />
      <h2 className="font-sans">Starter 2018</h2>
      <PostList posts={starterPosts} />
      <h2 className="mt-6 font-sans">Growth 2018</h2>
      <PostList posts={growthPosts} />
      <h2 className="mt-6 font-sans">Past Recaps</h2>
      <ul className="text-lg">
        <li>
          Kai Davis:{" "}
          <a
            href="https://kaidavis.com/microconf-2015/"
            className="no-underline hover:underline"
          >
            Microconf Recap 2015
          </a>
        </li>
        <li>
          remarq.io:{" "}
          <a
            href="https://docs.google.com/document/d/1EefLjujm3TW0oL21XvstCx7OuUfwmcJsASvakyhZ2LI/edit#"
            className="no-underline hover:underline"
          >
            Microconf Recap 2016
          </a>
        </li>
        <li>
          Shai Schechter:{" "}
          <a
            href="https://shai.io/microconf/"
            className="no-underline hover:underline"
          >
            Microconf Recap 2017
          </a>
        </li>
      </ul>
    </div>
  );
};

Home.getInitialProps = async props => {
  const snap = await db
    .collection("posts")
    .orderBy("date")
    .get();

  const posts = {};
  snap.forEach(doc => (posts[doc.id] = doc.data()));

  return { posts };
};

export default Home;
