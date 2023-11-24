import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />

        <input
          className={styles.input}
          type="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="phone"
          name="phone"
        />
        <select name="isActive" id="isActive" className={styles.list}>
          <option>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isAdmin" id="isAdmin" className={styles.list}>
          <option>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="address"
          cols="30"
          rows="16"
          placeholder="Address"
          className={styles.desc}
        ></textarea>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
