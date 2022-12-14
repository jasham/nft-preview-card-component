import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html className="m-0 p-0 box-border" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-veryDarkBlueMainBG min-h-screen m-0 p-0 box-border font-outfit flex justify-center items-center ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
