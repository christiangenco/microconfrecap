import App, { Container } from "next/app";
import Page from "../components/Page";

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
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
MyApp.propTypes = {};

export default withData(MyApp);
