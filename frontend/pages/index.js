import Link from "next/link";
import db from "../firebase";

const PostItem = ({ post }) => (
  <li>
    <Link href={`/${post.slug}`}>
      <a>{post.title}</a>
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
      <h2>Starter</h2>
      <PostList posts={starterPosts} />
      <h2>Growth</h2>
      <PostList posts={growthPosts} />
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
