import Head from "next/head";
import Image from "next/image";
import LawnServices from "../components/LawnServices";

import { data } from "../data";


export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>GREENPOWER Landscaping | Virginia Lawn & Landscaping Services</title>
        <meta
          name="description"
          content="Lawn Services in Virginia "
        />
      </Head>
      <LawnServices services={services} />
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
