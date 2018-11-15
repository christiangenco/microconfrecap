import App, { Container, Head } from "next/app";
import Header from "../components/Header";
import Meta from "../components/Meta";
import CTA from "../components/CTA";
import Tracker from "../components/Tracker";
import Bio from "../components/Bio";

export class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // monkeypatch the query string into the props of the page
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const {
      Component,
      pageProps,
      router: { asPath },
    } = this.props;

    return (
      <Container>
        <Meta />
        <Tracker code="UA-118473626-1" path={asPath} />
        <div className="bg-grey-lightest min-h-screen font-serif leading-normal text-black">
          <div className="container mx-auto min-h-screen bg-white">
            <div className="bg-white md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4">
              <Header />
              <Component {...pageProps} />
              <CTA />
              <Bio />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default MyApp;
