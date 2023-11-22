import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required className={styles.title}/>
        <select name="cat" id="cat" className={styles.list}>
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          className={styles.input}
          type="number"
          placeholder="price"
          name="price"
          required
        />
        <input
          className={styles.input}
          type="number"
          placeholder="stock"
          name="stock"
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="color"
          name="color"
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="size"
          name="size"
          required
        />
        <textarea
          name="description"
          id="desc"
          cols="30"
          rows="16"
          placeholder="Description"
          className={styles.desc}
        ></textarea>
        <button
          type="submit"
          className={styles.submit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
