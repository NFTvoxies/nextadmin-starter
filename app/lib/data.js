
import { Product, Transaction, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const escapedQ = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(escapedQ, "i");

  const ITEM_PER_PAGE = 3;
  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users");
  }
};


export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();

    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};

export const fetchProducts = async (q, page) => {
  const escapedQ = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(escapedQ, "i");

  const ITEM_PER_PAGE = 3;
  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products");
  }
};


export const fetchProduct = async (id) => {
  
  try {
    connectToDB();
  
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product");
  }
};

export const fetchTransactions = async () => {
  
  try {
    connectToDB();
    
    const transactions = await Transaction.find()
      
      return { transactions };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch tansactions");
  }
};

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];