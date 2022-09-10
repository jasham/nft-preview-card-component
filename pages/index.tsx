/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT preview card</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="max-w-[250px] p-3 flex flex-col shadow-[0px_15px_1px_10px_rgb(12,22,39)] bg-veryDarkBlueCardBG rounded-xl">
        <img src="/image-eqilibrium.jpg" alt="eqilibrium" />
        <Link href="">Link</Link>
        <p></p>
        <p>Left</p>
        <p>Right</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          doloribus laboriosam odit sapiente repellendus qui ad molestiae
          deleniti quas. Id nisi accusamus vero totam earum a, error obcaecati
          aliquam nesciunt?
        </p>
        <hr />
        {/* img Creation of Name Link */}
      </main>
    </div>
  );
};

export default Home;
