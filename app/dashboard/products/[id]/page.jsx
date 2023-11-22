import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
const ViewProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noproduct.jpg"} alt="" fill />
        </div>
        Product A
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Product A" />
          <label>Price</label>
          <input type="number" name="Price" placeholder="$19.99" />
          <label>Created at</label>
          <input type="text" name="Created at" placeholder="2023/11/16" />
          <label>Stock</label>
          <input type="number" name="Stock" placeholder="50" />
          <label>Description</label>
          <textarea type="text" name="description" />
          <button type="submit" className={styles.submit}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ViewProductPage;
