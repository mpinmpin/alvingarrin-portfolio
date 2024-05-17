import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="a.ico" /> {/* Next app directly imported favicon from /public/a.ico */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
