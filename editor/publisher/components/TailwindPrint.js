import React from "react";

export const TailwindPrint = props => {
  return (
    <style jsx global>{`
      @import url(http://fonts.googleapis.com/css?family=Lato);
      @import url(https://fonts.googleapis.com/css?family=Istok+Web);
      @import url(http://localhost:3000/static/TwitterColorEmoji-SVGinOT.ttf);

      .font-sans {
        font-family: "Istok Web", "Twitter Color Emoji", sans-serif;
      }

      .font-serif {
        font-family: "Lato", "Twitter Color Emoji", serif;
      }

      .font-mono {
        font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New,
          "Twitter Color Emoji", monospace;
      }

      /* Size */
      .text-xs {
        font-size: 0.75rem;
      }
      .text-sm {
        font-size: 0.875rem;
      }
      .text-base {
        font-size: 1rem;
      }
      .text-lg {
        font-size: 1.125rem;
      }
      .text-xl {
        font-size: 1.25rem;
      }
      .text-2xl {
        font-size: 1.5rem;
      }
      .text-3xl {
        font-size: 1.875rem;
      }
      .text-4xl {
        font-size: 2.25rem;
      }
      .text-5xl {
        font-size: 3rem;
      }

      /* Justifying */
      .text-left {
        text-align: left;
      }
      .text-center {
        text-align: center;
      }
      .text-right {
        text-align: right;
      }
      .text-justify {
        text-align: justify;
      }

      /* Decoration */
      .italic {
        font-style: italic;
      }
      .roman {
        font-style: normal;
      }
      .uppercase {
        text-transform: uppercase;
      }
      .lowercase {
        text-transform: lowercase;
      }
      .capitalize {
        text-transform: capitalize;
      }
      .normal-case {
        text-transform: none;
      }
      .underline {
        text-decoration: underline;
      }
      .line-through {
        text-decoration: line-through;
      }
      .no-underline {
        text-decoration: none;
      }

      /* Line Height */
      .leading-none {
        line-height: 1;
      }
      .leading-tight {
        line-height: 1.25;
      }
      .leading-normal {
        line-height: 1.5;
      }
      .leading-loose {
        line-height: 2;
      }

      /* Floats */
      .float-right {
        float: right;
      }
      .float-left {
        float: left;
      }
      .float-none {
        float: none;
      }

      /*.clearfix &::after {
        content: "";
        display: table;
        clear: both;
      }*/
      .clearfix {
        clear: both;
      }

      /* Width */
      .w-quarter {
        width: 25%;
      }
      .w-third {
        width: 33.33333%;
      }
      .w-half {
        width: 50%;
      }
      .w-two-thirds {
        width: 66.66667%;
      }
      .w-three-quarters {
        width: 75%;
      }
      .w-full {
        width: 100%;
      }

      /* Padding and margin */
      .m-0 {
        margin: 0;
      }

      .m-1 {
        margin: 0.25rem;
      }

      .m-2 {
        margin: 0.5rem;
      }

      .m-3 {
        margin: 0.75rem;
      }

      .m-4 {
        margin: 1rem;
      }

      .m-5 {
        margin: 1.25rem;
      }

      .m-6 {
        margin: 1.5rem;
      }

      .m-8 {
        margin: 2rem;
      }

      .m-10 {
        margin: 2.5rem;
      }

      .m-12 {
        margin: 3rem;
      }

      .m-16 {
        margin: 4rem;
      }

      .m-20 {
        margin: 5rem;
      }

      .m-24 {
        margin: 6rem;
      }

      .m-32 {
        margin: 8rem;
      }

      .m-auto {
        margin: auto;
      }

      .m-px {
        margin: 1px;
      }

      .my-0 {
        margin-top: 0;
        margin-bottom: 0;
      }

      .mx-0 {
        margin-left: 0;
        margin-right: 0;
      }

      .my-1 {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
      }

      .mx-1 {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
      }

      .my-2 {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }

      .mx-2 {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }

      .my-3 {
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
      }

      .mx-3 {
        margin-left: 0.75rem;
        margin-right: 0.75rem;
      }

      .my-4 {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      .mx-4 {
        margin-left: 1rem;
        margin-right: 1rem;
      }

      .my-5 {
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
      }

      .mx-5 {
        margin-left: 1.25rem;
        margin-right: 1.25rem;
      }

      .my-6 {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .mx-6 {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
      }

      .my-8 {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      .mx-8 {
        margin-left: 2rem;
        margin-right: 2rem;
      }

      .my-10 {
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
      }

      .mx-10 {
        margin-left: 2.5rem;
        margin-right: 2.5rem;
      }

      .my-12 {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }

      .mx-12 {
        margin-left: 3rem;
        margin-right: 3rem;
      }

      .my-16 {
        margin-top: 4rem;
        margin-bottom: 4rem;
      }

      .mx-16 {
        margin-left: 4rem;
        margin-right: 4rem;
      }

      .my-20 {
        margin-top: 5rem;
        margin-bottom: 5rem;
      }

      .mx-20 {
        margin-left: 5rem;
        margin-right: 5rem;
      }

      .my-24 {
        margin-top: 6rem;
        margin-bottom: 6rem;
      }

      .mx-24 {
        margin-left: 6rem;
        margin-right: 6rem;
      }

      .my-32 {
        margin-top: 8rem;
        margin-bottom: 8rem;
      }

      .mx-32 {
        margin-left: 8rem;
        margin-right: 8rem;
      }

      .my-auto {
        margin-top: auto;
        margin-bottom: auto;
      }

      .mx-auto {
        margin-left: auto;
        margin-right: auto;
      }

      .my-px {
        margin-top: 1px;
        margin-bottom: 1px;
      }

      .mx-px {
        margin-left: 1px;
        margin-right: 1px;
      }

      .mt-0 {
        margin-top: 0;
      }

      .mr-0 {
        margin-right: 0;
      }

      .mb-0 {
        margin-bottom: 0;
      }

      .ml-0 {
        margin-left: 0;
      }

      .mt-1 {
        margin-top: 0.25rem;
      }

      .mr-1 {
        margin-right: 0.25rem;
      }

      .mb-1 {
        margin-bottom: 0.25rem;
      }

      .ml-1 {
        margin-left: 0.25rem;
      }

      .mt-2 {
        margin-top: 0.5rem;
      }

      .mr-2 {
        margin-right: 0.5rem;
      }

      .mb-2 {
        margin-bottom: 0.5rem;
      }

      .ml-2 {
        margin-left: 0.5rem;
      }

      .mt-3 {
        margin-top: 0.75rem;
      }

      .mr-3 {
        margin-right: 0.75rem;
      }

      .mb-3 {
        margin-bottom: 0.75rem;
      }

      .ml-3 {
        margin-left: 0.75rem;
      }

      .mt-4 {
        margin-top: 1rem;
      }

      .mr-4 {
        margin-right: 1rem;
      }

      .mb-4 {
        margin-bottom: 1rem;
      }

      .ml-4 {
        margin-left: 1rem;
      }

      .mt-5 {
        margin-top: 1.25rem;
      }

      .mr-5 {
        margin-right: 1.25rem;
      }

      .mb-5 {
        margin-bottom: 1.25rem;
      }

      .ml-5 {
        margin-left: 1.25rem;
      }

      .mt-6 {
        margin-top: 1.5rem;
      }

      .mr-6 {
        margin-right: 1.5rem;
      }

      .mb-6 {
        margin-bottom: 1.5rem;
      }

      .ml-6 {
        margin-left: 1.5rem;
      }

      .mt-8 {
        margin-top: 2rem;
      }

      .mr-8 {
        margin-right: 2rem;
      }

      .mb-8 {
        margin-bottom: 2rem;
      }

      .ml-8 {
        margin-left: 2rem;
      }

      .mt-10 {
        margin-top: 2.5rem;
      }

      .mr-10 {
        margin-right: 2.5rem;
      }

      .mb-10 {
        margin-bottom: 2.5rem;
      }

      .ml-10 {
        margin-left: 2.5rem;
      }

      .mt-12 {
        margin-top: 3rem;
      }

      .mr-12 {
        margin-right: 3rem;
      }

      .mb-12 {
        margin-bottom: 3rem;
      }

      .ml-12 {
        margin-left: 3rem;
      }

      .mt-16 {
        margin-top: 4rem;
      }

      .mr-16 {
        margin-right: 4rem;
      }

      .mb-16 {
        margin-bottom: 4rem;
      }

      .ml-16 {
        margin-left: 4rem;
      }

      .mt-20 {
        margin-top: 5rem;
      }

      .mr-20 {
        margin-right: 5rem;
      }

      .mb-20 {
        margin-bottom: 5rem;
      }

      .ml-20 {
        margin-left: 5rem;
      }

      .mt-24 {
        margin-top: 6rem;
      }

      .mr-24 {
        margin-right: 6rem;
      }

      .mb-24 {
        margin-bottom: 6rem;
      }

      .ml-24 {
        margin-left: 6rem;
      }

      .mt-32 {
        margin-top: 8rem;
      }

      .mr-32 {
        margin-right: 8rem;
      }

      .mb-32 {
        margin-bottom: 8rem;
      }

      .ml-32 {
        margin-left: 8rem;
      }

      .mt-auto {
        margin-top: auto;
      }

      .mr-auto {
        margin-right: auto;
      }

      .mb-auto {
        margin-bottom: auto;
      }

      .ml-auto {
        margin-left: auto;
      }

      .mt-px {
        margin-top: 1px;
      }

      .mr-px {
        margin-right: 1px;
      }

      .mb-px {
        margin-bottom: 1px;
      }

      .ml-px {
        margin-left: 1px;
      }

      .-m-0 {
        margin: 0;
      }

      .-m-1 {
        margin: -0.25rem;
      }

      .-m-2 {
        margin: -0.5rem;
      }

      .-m-3 {
        margin: -0.75rem;
      }

      .-m-4 {
        margin: -1rem;
      }

      .-m-5 {
        margin: -1.25rem;
      }

      .-m-6 {
        margin: -1.5rem;
      }

      .-m-8 {
        margin: -2rem;
      }

      .-m-10 {
        margin: -2.5rem;
      }

      .-m-12 {
        margin: -3rem;
      }

      .-m-16 {
        margin: -4rem;
      }

      .-m-20 {
        margin: -5rem;
      }

      .-m-24 {
        margin: -6rem;
      }

      .-m-32 {
        margin: -8rem;
      }

      .-m-px {
        margin: -1px;
      }

      .-my-0 {
        margin-top: 0;
        margin-bottom: 0;
      }

      .-mx-0 {
        margin-left: 0;
        margin-right: 0;
      }

      .-my-1 {
        margin-top: -0.25rem;
        margin-bottom: -0.25rem;
      }

      .-mx-1 {
        margin-left: -0.25rem;
        margin-right: -0.25rem;
      }

      .-my-2 {
        margin-top: -0.5rem;
        margin-bottom: -0.5rem;
      }

      .-mx-2 {
        margin-left: -0.5rem;
        margin-right: -0.5rem;
      }

      .-my-3 {
        margin-top: -0.75rem;
        margin-bottom: -0.75rem;
      }

      .-mx-3 {
        margin-left: -0.75rem;
        margin-right: -0.75rem;
      }

      .-my-4 {
        margin-top: -1rem;
        margin-bottom: -1rem;
      }

      .-mx-4 {
        margin-left: -1rem;
        margin-right: -1rem;
      }

      .-my-5 {
        margin-top: -1.25rem;
        margin-bottom: -1.25rem;
      }

      .-mx-5 {
        margin-left: -1.25rem;
        margin-right: -1.25rem;
      }

      .-my-6 {
        margin-top: -1.5rem;
        margin-bottom: -1.5rem;
      }

      .-mx-6 {
        margin-left: -1.5rem;
        margin-right: -1.5rem;
      }

      .-my-8 {
        margin-top: -2rem;
        margin-bottom: -2rem;
      }

      .-mx-8 {
        margin-left: -2rem;
        margin-right: -2rem;
      }

      .-my-10 {
        margin-top: -2.5rem;
        margin-bottom: -2.5rem;
      }

      .-mx-10 {
        margin-left: -2.5rem;
        margin-right: -2.5rem;
      }

      .-my-12 {
        margin-top: -3rem;
        margin-bottom: -3rem;
      }

      .-mx-12 {
        margin-left: -3rem;
        margin-right: -3rem;
      }

      .-my-16 {
        margin-top: -4rem;
        margin-bottom: -4rem;
      }

      .-mx-16 {
        margin-left: -4rem;
        margin-right: -4rem;
      }

      .-my-20 {
        margin-top: -5rem;
        margin-bottom: -5rem;
      }

      .-mx-20 {
        margin-left: -5rem;
        margin-right: -5rem;
      }

      .-my-24 {
        margin-top: -6rem;
        margin-bottom: -6rem;
      }

      .-mx-24 {
        margin-left: -6rem;
        margin-right: -6rem;
      }

      .-my-32 {
        margin-top: -8rem;
        margin-bottom: -8rem;
      }

      .-mx-32 {
        margin-left: -8rem;
        margin-right: -8rem;
      }

      .-my-px {
        margin-top: -1px;
        margin-bottom: -1px;
      }

      .-mx-px {
        margin-left: -1px;
        margin-right: -1px;
      }

      .-mt-0 {
        margin-top: 0;
      }

      .-mr-0 {
        margin-right: 0;
      }

      .-mb-0 {
        margin-bottom: 0;
      }

      .-ml-0 {
        margin-left: 0;
      }

      .-mt-1 {
        margin-top: -0.25rem;
      }

      .-mr-1 {
        margin-right: -0.25rem;
      }

      .-mb-1 {
        margin-bottom: -0.25rem;
      }

      .-ml-1 {
        margin-left: -0.25rem;
      }

      .-mt-2 {
        margin-top: -0.5rem;
      }

      .-mr-2 {
        margin-right: -0.5rem;
      }

      .-mb-2 {
        margin-bottom: -0.5rem;
      }

      .-ml-2 {
        margin-left: -0.5rem;
      }

      .-mt-3 {
        margin-top: -0.75rem;
      }

      .-mr-3 {
        margin-right: -0.75rem;
      }

      .-mb-3 {
        margin-bottom: -0.75rem;
      }

      .-ml-3 {
        margin-left: -0.75rem;
      }

      .-mt-4 {
        margin-top: -1rem;
      }

      .-mr-4 {
        margin-right: -1rem;
      }

      .-mb-4 {
        margin-bottom: -1rem;
      }

      .-ml-4 {
        margin-left: -1rem;
      }

      .-mt-5 {
        margin-top: -1.25rem;
      }

      .-mr-5 {
        margin-right: -1.25rem;
      }

      .-mb-5 {
        margin-bottom: -1.25rem;
      }

      .-ml-5 {
        margin-left: -1.25rem;
      }

      .-mt-6 {
        margin-top: -1.5rem;
      }

      .-mr-6 {
        margin-right: -1.5rem;
      }

      .-mb-6 {
        margin-bottom: -1.5rem;
      }

      .-ml-6 {
        margin-left: -1.5rem;
      }

      .-mt-8 {
        margin-top: -2rem;
      }

      .-mr-8 {
        margin-right: -2rem;
      }

      .-mb-8 {
        margin-bottom: -2rem;
      }

      .-ml-8 {
        margin-left: -2rem;
      }

      .-mt-10 {
        margin-top: -2.5rem;
      }

      .-mr-10 {
        margin-right: -2.5rem;
      }

      .-mb-10 {
        margin-bottom: -2.5rem;
      }

      .-ml-10 {
        margin-left: -2.5rem;
      }

      .-mt-12 {
        margin-top: -3rem;
      }

      .-mr-12 {
        margin-right: -3rem;
      }

      .-mb-12 {
        margin-bottom: -3rem;
      }

      .-ml-12 {
        margin-left: -3rem;
      }

      .-mt-16 {
        margin-top: -4rem;
      }

      .-mr-16 {
        margin-right: -4rem;
      }

      .-mb-16 {
        margin-bottom: -4rem;
      }

      .-ml-16 {
        margin-left: -4rem;
      }

      .-mt-20 {
        margin-top: -5rem;
      }

      .-mr-20 {
        margin-right: -5rem;
      }

      .-mb-20 {
        margin-bottom: -5rem;
      }

      .-ml-20 {
        margin-left: -5rem;
      }

      .-mt-24 {
        margin-top: -6rem;
      }

      .-mr-24 {
        margin-right: -6rem;
      }

      .-mb-24 {
        margin-bottom: -6rem;
      }

      .-ml-24 {
        margin-left: -6rem;
      }

      .-mt-32 {
        margin-top: -8rem;
      }

      .-mr-32 {
        margin-right: -8rem;
      }

      .-mb-32 {
        margin-bottom: -8rem;
      }

      .-ml-32 {
        margin-left: -8rem;
      }

      .pr-0 {
        padding-right: 0;
      }

      .pb-0 {
        padding-bottom: 0;
      }

      .pl-0 {
        padding-left: 0;
      }

      .pt-1 {
        padding-top: 0.25rem;
      }

      .pr-1 {
        padding-right: 0.25rem;
      }

      .pb-1 {
        padding-bottom: 0.25rem;
      }

      .pl-1 {
        padding-left: 0.25rem;
      }

      .pt-2 {
        padding-top: 0.5rem;
      }

      .pr-2 {
        padding-right: 0.5rem;
      }

      .pb-2 {
        padding-bottom: 0.5rem;
      }

      .pl-2 {
        padding-left: 0.5rem;
      }

      .pt-3 {
        padding-top: 0.75rem;
      }

      .pr-3 {
        padding-right: 0.75rem;
      }

      .pb-3 {
        padding-bottom: 0.75rem;
      }

      .pl-3 {
        padding-left: 0.75rem;
      }

      .pt-4 {
        padding-top: 1rem;
      }

      .pr-4 {
        padding-right: 1rem;
      }

      .pb-4 {
        padding-bottom: 1rem;
      }

      .pl-4 {
        padding-left: 1rem;
      }

      .pt-5 {
        padding-top: 1.25rem;
      }

      .pr-5 {
        padding-right: 1.25rem;
      }

      .pb-5 {
        padding-bottom: 1.25rem;
      }

      .pl-5 {
        padding-left: 1.25rem;
      }

      .pt-6 {
        padding-top: 1.5rem;
      }

      .pr-6 {
        padding-right: 1.5rem;
      }

      .pb-6 {
        padding-bottom: 1.5rem;
      }

      .pl-6 {
        padding-left: 1.5rem;
      }

      .pt-8 {
        padding-top: 2rem;
      }

      .pr-8 {
        padding-right: 2rem;
      }

      .pb-8 {
        padding-bottom: 2rem;
      }

      .pl-8 {
        padding-left: 2rem;
      }

      .pt-10 {
        padding-top: 2.5rem;
      }

      .pr-10 {
        padding-right: 2.5rem;
      }

      .pb-10 {
        padding-bottom: 2.5rem;
      }

      .pl-10 {
        padding-left: 2.5rem;
      }

      .pt-12 {
        padding-top: 3rem;
      }

      .pr-12 {
        padding-right: 3rem;
      }

      .pb-12 {
        padding-bottom: 3rem;
      }

      .pl-12 {
        padding-left: 3rem;
      }

      .pt-16 {
        padding-top: 4rem;
      }

      .pr-16 {
        padding-right: 4rem;
      }

      .pb-16 {
        padding-bottom: 4rem;
      }

      .pl-16 {
        padding-left: 4rem;
      }

      .pt-20 {
        padding-top: 5rem;
      }

      .pr-20 {
        padding-right: 5rem;
      }

      .pb-20 {
        padding-bottom: 5rem;
      }

      .pl-20 {
        padding-left: 5rem;
      }

      .pt-24 {
        padding-top: 6rem;
      }

      .pr-24 {
        padding-right: 6rem;
      }

      .pb-24 {
        padding-bottom: 6rem;
      }

      .pl-24 {
        padding-left: 6rem;
      }

      .pt-32 {
        padding-top: 8rem;
      }

      .pr-32 {
        padding-right: 8rem;
      }

      .pb-32 {
        padding-bottom: 8rem;
      }

      .pl-32 {
        padding-left: 8rem;
      }
    `}</style>
  );
};

export default TailwindPrint;
