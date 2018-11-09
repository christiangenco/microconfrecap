import Header from "../components/Header";
import Meta from "../components/Meta";

export const Page = props => {
  return (
    <div className="container mx-auto bg-red-lightest">
      <Meta />
      <Header />
      <div>{props.children}</div>
    </div>
  );
};

export default Page;
