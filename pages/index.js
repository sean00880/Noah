import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";
import { data } from "../data";
import { data2 } from "../data";
import { data3 } from "../data";
import { datalist } from "../data";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Faq from "../components/Faq";
import Contact from "../components/Contact"

export default function Home({ services, services2, services3, services4 }) {
  return (
    <div>
      <Head>
        <title>GREENPOWER Landscaping | Virginia Lawn & Landscaping Services</title>
        <meta
          name="description"
          content="Commercial and Residential Landscaping in Virginia "
        />
      </Head>
      <Intro services={services} services2={services2} services3={services3}/>
      <Services services={services4} />
      <About />
      <Testimonials />
      <Faq />
      <Contact />

    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  const services2 = data2;
  const services3 = data3;
  const services4 = datalist;
  return {
    props: { services , services2, services3, services4}, 
  };
};
