import { ProductType } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductInDB = async (productData: ProductType) => {
    const result = await ProductModel.create(productData);
    return result;
}

const getAllProductsFromDB = async (searchTerm = "") => {
    const query = searchTerm ? {
        name: {
            $regex: searchTerm,
            $options: "i"
        }
    } : {}
    const result = await ProductModel.find(query);
    return result;
}

const getProductDetailsFromDB = async (id: string) => {
    const result = await ProductModel.findById(id);
    return result;
}

const updateProductDetailsInDB = async (id: string, data: ProductType) => {
    const result = await ProductModel.findByIdAndUpdate(id, data, { new: true });
    return result;
}
const deleteProductFromDB = async (id: string) => {
    const result = await ProductModel.findByIdAndDelete(id);
    return result;
}

export const productServices = {
    createProductInDB,
    getAllProductsFromDB,
    getProductDetailsFromDB,
    updateProductDetailsInDB,
    deleteProductFromDB
}