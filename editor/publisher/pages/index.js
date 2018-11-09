import posts from "../posts.json";
import PrintedPost from "../components/PrintedPost";

// @font-face {
//   font-family: "Emoji";
//   src: local("Emoji"), url("TwitterColorEmoji-SVGinOT.ttf"),
//     format("truetype");
// }

export default () => (
  <div>
    <div>
      {posts
        .filter(post => post.speaker && post.speaker.name)
        .map(post => <PrintedPost {...post} />)}
    </div>
  </div>
);
