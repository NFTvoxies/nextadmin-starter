import Image from 'next/image';
import React from 'react'
import styles from "../../ui/dashboard/transactions/transactions.module.css"
import { fetchTransactions } from '@/app/lib/data';

const Transactions = async () => {
    const {  transactions } = await fetchTransactions();
    const getStatusClassName = (status) => {
        switch (status) {
          case 'pending':
            return styles.pending;
          case 'done':
            return styles.done;
          case 'cancelled':
            return styles.cancelled;
          default:
            return '';
        }
      };

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
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>
                  <div className={styles.user}>
                  <Image
                    src={transaction.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                    
                  />
                  {transaction.name}
                  </div>
                </td>
                <td>
                  <span className={`${styles.status} ${getStatusClassName(transaction.status)}`}>
                  {transaction.status}
                  </span>
                  
                </td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
              </tr>
              
              
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default Transactions