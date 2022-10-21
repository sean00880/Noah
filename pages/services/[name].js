import { data } from "../../data";
import style from "../../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Product = ({ product }) => {
  return (
    <div className={style.wrapper}>
    <div className={style.container}>
      <Head>
        <title>Digital Design for Your Product</title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation Agency Near NY"
        />
      </Head>

      
      <div className={style.cardL}>
        
        {product.images.map((img) => (
          <div key={img.id} className={style.imgContainer}>
            <Image src={img.url} layout="fill" objectFit="cover" alt="" />
          </div>
        ))}
      </div>
      
      <div className={style.cardS}>
      <div className={style.cardImage}>
      <Image src={product.photo} className={style.photo} width={100} height={100} />
        </div>
        <h1 className={style.title}>{product.title} <span className={style.subtitle}>| Service in Virginia |</span></h1>
        
        
       
        <p className={style.desc}>{product.longDesc}</p>
        
      </div>
      </div>
      <button className={style.button}>
        
          <Link href="/contact">Request a Quote</Link>
        </button>

    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Product;
