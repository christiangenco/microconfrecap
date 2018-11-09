import Head from "next/head";

export const Meta = props => {
  return (
    <Head>
      <title>Microconf Recap</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.png" />

      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#00a300" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Microconf 2017 official notes by Christian Genco."
      />
      <meta property="og:title" content="Microconf Recap 2018" />
      <meta property="og:url" content="https://microconf.gen.co/" />
      <meta
        property="og:image"
        content="https://microconf.gen.co/microconf.jpg"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Lato|Merriweather"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/static/blokkfont.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Meta;
