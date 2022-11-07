import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}><Image width={90} height={90} src="https://i.ibb.co/Ydb8xJh/noahlogo.png" className={style.logo}></Image>Noah's Lawncare</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
            <>
              <span className={style.linkText}>Join Our Team</span>
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/link.png"}
                width="40px"
                height="40px"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          Westminster, MD
          <br /> USA
        </div>
        <div className={style.cardItem}>
          Website Created by:
          <br /> DECODED Web <br></br>
          <a href='https://www.decodedweb.us/' >https://www.decodedweb.us/</a>
        </div>
        <div className={style.cardItem}>
          developer@decodedweb.us
          <br /> 000-000-0000
        </div>
      </div>
      <div className={style.cardS}>

        <div className={style.cardItem}>
          © 2022 Decoded Web | Web Development Services
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
