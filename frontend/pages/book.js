import Head from "next/head";
import Home from "../components/Home";

export default props => {
  const coverIndex = (props.query && props.query.coverIndex) || 1;
  const coverUrl = `https://microconf.gen.co/static/covers/${coverIndex}.jpg`;

  return (
    <Head>
      <meta property="og:image" content={coverUrl} />
      <meta
        http-equiv="refresh"
        content={`0; url=/?coverIndex=${coverIndex}`}
      />
    </Head>
  );
};
