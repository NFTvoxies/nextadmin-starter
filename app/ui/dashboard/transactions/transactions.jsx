import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Latest Transactions</h2>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>
              <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              />
              Youssef lfk
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
              
            </td>
            <td>14.11.2023</td>
            <td>$3.050</td>
          </tr>
          
          
          <tr>
            <td>
              <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              />
              samir mohaja
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
              Done
              </span>
            </td>
            <td>14.05.2023</td>
            <td>$4.180</td>
          </tr>
          
          <tr>
            <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              />
              salom fakir
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
              Cancelled
              </span>
            </td>
            <td>14.01.2023</td>
            <td>$103</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              />
              dorin lamo
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.09.2023</td>
            <td>$850</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
