import style from "../styles/Testimonials.module.css";
import Image from "next/image";
import Circle from "./Circle";
import { users } from "../data";
import Pulse from "react-reveal/Pulse"

const Testimonials = () => {
  return (
    <div className={style.container} id='testimonials'>
      <h2 className={style.title}>Testimonials</h2>
        <Pulse>
        <h1 className={style.subtitle}>What Our Customers Say<hr></hr>Noah's Lawncare</h1>
        </Pulse>
      <div className={style.wrapper}>
        {users.map((user) => (
          <div className={style.card} key={user.id}>
            <Image src={`${process.env.NEXT_PUBLIC_URL}/img/${user.logo}`} width="30" height="30" alt="" />
            <p className={style.comment}>
              &ldquo;{user.comment}&rdquo;
            </p>
            <div className={style.person}>
              <Image
                className={style.avatar}
                src={`${process.env.NEXT_PUBLIC_URL}/img/${user.avatar}`}
                width="45"
                height="45"
                objectFit="cover"
                alt=""
              />
              <div className={style.info}>
                <span className={style.username}>{user.name}</span>
                <span className={style.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
