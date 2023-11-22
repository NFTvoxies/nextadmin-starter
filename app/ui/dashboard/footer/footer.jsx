import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            Ideo Factory
        </div>
        <div className={styles.text}>© all rights reserved</div>
    </div>
  )
}

export default Footer