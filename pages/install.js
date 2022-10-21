import Head from "next/head";
import Image from "next/image";
import InstallServices from "../components/InstallServices";

import { installationdata } from "../data";


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
      <InstallServices services={services} />
    </div>
  );
}

export const getStaticProps = () => {
  const services = installationdata;
  return {
    props: { services },
  };
};
