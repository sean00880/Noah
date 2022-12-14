import Head from "next/head";
import Services from "../components/Services";
import { data } from "../data";
import About from "../components/AboutServices";

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>GREENPOWER Landscaping | Virginia Lawn & Landscaping Services</title>
        <meta
          name="description"
          content="Commercial and Residential Landscaping. Proudly serving Westminster, Maryland and surrounding regions. "
        />
      </Head>
      <About />
      <Services services={services} />
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
