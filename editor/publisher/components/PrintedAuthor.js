import get from "lodash.get";

export default ({ speaker }) => {
  const { name, title, bioUrl } = speaker;

  const image =
    speaker.image ||
    (get(twitter, "profile_image_url_https") || "").replace("_normal", "");
  const screen_name = speaker.twitter;
  const description = speaker.description;
  const location = speaker.location;

  return (
    <div>
      {image && (
        <div style={{ float: "right", marginRight: "-60mm", clear: "both" }}>
          <img src={image} alt={name} style={{ width: "55mm" }} />
        </div>
      )}
      <h2 style={{ marginBottom: 0, marginTop: 0 }}>by {name}</h2>
      {title && (
        <h4 style={{ marginTop: 0, marginBottom: 10 }}>
          {title} {title && location && "//"} {location}
        </h4>
      )}
      <p>{description}</p>
    </div>
  );
};
