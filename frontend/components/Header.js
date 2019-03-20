import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", url => NProgress.start());
Router.events.on("routeChangeComplete", url => NProgress.done());
Router.events.on("routeChangeError", (err, url) => NProgress.done());

export const Header = props => {
  return (
    <h1 className="md:text-4xl font-sans">
      <Link href="/">
        <a className="text-black no-underline hover:underline flex items-center mb-4">
          <img
            src="/static/logo.png"
            alt="Microconf Logo"
            className="h-8 mr-2"
          />
          Microconf Recap
        </a>
      </Link>
    </h1>
  );
};

export default Header;
