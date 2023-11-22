import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdBook, MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>

          <h3 className={styles.title}>
            How to use the new version of the admin dashboard
          </h3>
          <span className={styles.subtitle}>take 4 minutes to learn</span>

          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch Now
          </button>
        </div>
      </div>
      <div className={styles.item2}>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀Coming Soon</span>

          <h3 className={styles.title}>This is why you should...!!!</h3>
          <span className={styles.subtitle}>take the action now</span>

          <p className={styles.description}>
            Fire engine is simply dummy text of the printing and typesetting
            industry. 
          </p>
          <button className={styles.button}>
            <MdBook />
            Read !!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
