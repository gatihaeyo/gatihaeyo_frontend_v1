import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Loading from "./common/status/loading";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Loading />
      </div>
    </>
  );
};

export default Home;
