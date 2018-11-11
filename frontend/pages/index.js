import Link from "next/link";
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
  <ul>{posts.map(post => <PostItem key={post.slug} post={post} />)}</ul>
);

const Index = ({ posts }) => {
  const starterPosts = Object.values(posts).filter(
    post => post.conference == "starter"
  );

  const growthPosts = Object.values(posts).filter(
    post => post.conference == "growth"
  );

  return (
    <div>
      <h2 className="font-sans">Starter</h2>
      <PostList posts={starterPosts} />
      <h2 className="mt-6 font-sans">Growth</h2>
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

Index.getInitialProps = async ({ query }) => {
  const snap = await db
    .collection("posts")
    .orderBy("date")
    .get();

  const posts = {};
  snap.forEach(doc => (posts[doc.id] = doc.data()));

  return { posts };
};

export default Index;
