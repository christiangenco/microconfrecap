import get from "lodash.get";
import { Follow } from "react-twitter-widgets";

export default ({ speaker }) => {
  const { name, title, bioUrl, twitter } = speaker;

  const image =
    speaker.image ||
    (get(twitter, "profile_image_url_https") || "").replace("_normal", "");
  const screen_name = speaker.twitter;
  const description = speaker.description || get(twitter, "description");
  const location = speaker.location || get(twitter, "location");
  const verified = get(twitter, "verified");

  // TODO: urls

  return (
    <div className="rounded border flex mb-4">
      <div className="p-4">
        <h2 className="font-sans" style={{ marginBottom: 0 }}>
          {name}
        </h2>
        {title && <h4 className="font-sans text-grey-darker">{title}</h4>}
        <p className="">{description}</p>
        <div className="mt-4">
          {location}{" "}
          {screen_name && (
            <Follow username={screen_name} options={{ size: "large" }} />
          )}
        </div>
      </div>
      {image && (
        <div className="">
          <img src={image} alt={name} className="w-full rounded-r" />
        </div>
      )}
    </div>
  );
};
