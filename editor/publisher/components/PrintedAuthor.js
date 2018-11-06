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
    <div style={{ float: "bottom" }}>
      {image && (
        <div className="float-right">
          <img src={image} alt={name} style={{ width: "55mm" }} />
        </div>
      )}
      <h2 className="mb-0 mt-0">{name}</h2>
      {title && (
        <h4 className="mt-0">
          {title} {title && location && "//"} {location}
        </h4>
      )}
      <p className="italic">{description}</p>
    </div>
  );
};
