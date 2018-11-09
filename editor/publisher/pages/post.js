import PrintedPost from "../components/PrintedPost";
import posts from "../posts.json";

export default ({ slug }) => (
  <PrintedPost {...posts.find(post => post.slug == slug)} />
);
