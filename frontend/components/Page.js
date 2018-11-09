import Header from "../components/Header";
import Meta from "../components/Meta";

export const Page = props => {
  return (
    <>
      <Meta />
      <Header />
      <div>{props.children}</div>
    </>
  );
};

export default Page;
