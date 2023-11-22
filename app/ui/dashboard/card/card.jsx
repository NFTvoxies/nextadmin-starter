import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Totla Users</span>
        <span  className={styles.number}>10.785</span>
        <span className={styles.detail}>
          <span className={styles.positive}>27%</span>more than the previous
          week
        </span>
      </div>
    </div>
  );
};

export default Card;
