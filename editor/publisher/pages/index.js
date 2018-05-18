import posts from "../posts.json";

export default () => (
  <div>
    <style jsx>{`
      .page {
        page-break-before: always;
        position: relative;
        overflow: hidden;
        width: 11in;
        height: 8.5in;
        font-family: arial, sans serif;
      }

      @page {
        size: 11in 8.5in;
        margin: 0;
      }
    `}</style>{" "}
    Welcome to next.js!
    <pre>{JSON.stringify(posts[1], null, 2)}</pre>
  </div>
);
