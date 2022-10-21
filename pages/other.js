import Head from "next/head";
import Image from "next/image";
import OtherServices from "../components/OtherServices";

import { otherdata } from "../data";


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
      <OtherServices services={services} />
    </div>
  );
}

export const getStaticProps = () => {
  const services = otherdata;
  return {
    props: { services },
  };
};
