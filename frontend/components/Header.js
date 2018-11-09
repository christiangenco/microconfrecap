import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", url => NProgress.start());
Router.events.on("routeChangeComplete", url => NProgress.done());
Router.events.on("routeChangeError", (err, url) => NProgress.done());

export const Header = props => {
  return <h1>Microconf Recap 2018</h1>;
};

export default Header;
