import { products } from "./data.js";
import product from "../models/ProductSchema.js";

const DefaultData = async () => {
    try {
        await product.insertMany(products);
        console.log('Data Imported Successfully');

    } catch (error) {
        console.log('Error will inserting the data ', error.message);
    }
}

export default DefaultData;