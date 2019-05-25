import { Follow } from "react-twitter-widgets";

export default () => (
  <div className="flex items-center justify-end my-4">
    <p className="text-right">
      by{" "}
      <a
        href="http://christian.gen.co"
        className="text-blue-600 hover:underline"
      >
        Christian Genco
      </a>
      <Follow username={"cgenco"} />
    </p>
    <a href="http://christian.gen.co" className="">
      <img
        src={"/static/cgenco.jpg"}
        alt={`Christian Genco`}
        className="ml-2 mb-0 rounded-full h-16"
      />
    </a>
  </div>
);
