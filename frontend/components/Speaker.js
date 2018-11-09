import get from "lodash.get";
import { Follow } from "react-twitter-widgets";

export default ({ speaker }) => {
  return <pre>{JSON.stringify(speaker, null, 2)}</pre>;

  const { name, title, bioUrl } = speaker;
  // const { twitter } = this.state;

  const image =
    speaker.image ||
    (get(twitter, "profile_image_url_https") || "").replace("_normal", "");
  const screen_name = speaker.twitter;
  const description = speaker.description || get(twitter, "description");
  const location = speaker.location || get(twitter, "location");
  const verified = get(twitter, "verified");

  // TODO: urls

  return (
    <div className="card">
      <div className="row card-body">
        <div className="col-md-8">
          <div className="card-block">
            <h3 className="card-title" style={{ marginBottom: 0 }}>
              About {name}
            </h3>
            {title && <h5 className="text-muted">{title}</h5>}
            <p className="card-text">{description}</p>
            <div className="card-text" style={{ marginTop: 10 }}>
              {location}{" "}
              {screen_name && (
                <Follow username={screen_name} options={{ size: "large" }} />
              )}
            </div>
          </div>
        </div>
        {image && (
          <div className="col-md-4">
            <img src={image} alt={name} className="w-100" />
          </div>
        )}
      </div>
      {false && (
        <pre>
          {JSON.stringify({ props: this.props, state: this.state }, null, 2)}
        </pre>
      )}
    </div>
  );
};
