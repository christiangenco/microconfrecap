import App, { Container, Head } from "next/app";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Mailtrain from "../components/Mailtrain";

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
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <Meta />
        <div className="bg-grey-lightest min-h-screen font-serif leading-normal">
          <div className="container mx-auto min-h-screen bg-white">
            <div className="bg-white md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4">
              <Header />
              <Component {...pageProps} />
              <Mailtrain />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default MyApp;
