import React,{FC,ReactNode} from 'react';
import IProduct from "../../Model/IProduct";

interface IProps{
    product:IProduct
}

type ProductComponentWithChildren<T> =T & {children?: ReactNode}

const Product: FC<ProductComponentWithChildren<IProps> >= ({ product}) => {
const {title,rating,brand,thumbnail,description,category,price,images,stock,discountPercentage,}=product;
    return (
        <li>
            <h1>Title - {title}</h1>
            <p>D - description{description}</p>
            <p>Discount Percentage - {discountPercentage}</p>
            <p>Price - {price}</p>
            <p>Rating - {rating}</p>
            <p>Brand - {brand}</p>
            <p>Stock - {stock}</p>
            <img src={thumbnail} alt={thumbnail}/>
            <ListOfImage/>
        </li>
    );
};

export default Product;