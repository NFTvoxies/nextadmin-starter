import { UpdateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
const ViewProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noproduct.jpg"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <input type="hidden" name="id" value={product.id} />
        <form action={UpdateProduct} className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="Price" placeholder={product.price} />
          <label>Created at</label>
          <input type="text" name="Created at" />
          <label>Stock</label>
          <input type="number" name="Stock" placeholder={product.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="description"
            id="desc"
            rows="10"
            placeholder={product.description}
          />
          <button type="submit" className={styles.submit}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ViewProductPage;
