"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

// ADD USER

export const addUser = async (formData) => {
  const { email, password, address, phone, username, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: hashedPassword,
      address,
      phone,
      username,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user!!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

//UPDATE USER

export const UpdateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to  Update user!!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// ADD PRODUCT

export const addProduct = async (formData) => {
  const { title, description, price, stock, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      description,
      price,
      stock,
      size,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add Product !!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// DELETE PRODUCT

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete Product !!");
  }
  revalidatePath("/dashboard/products");
};

// UPDATE Products

export const UpdateProduct = async (formData) => {
  const { id, title, description, price, color, stock, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      description,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Update product!!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// DELETE USER

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete User !!");
  }
  revalidatePath("/dashboard/users");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    return "wrong username or password";
  }
};
