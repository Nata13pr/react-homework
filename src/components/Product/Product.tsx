import React,{FC,ReactNode} from 'react';
import IProduct from "../../Model/IProduct";

interface IProps{
    product:IProduct
}

type ProductComponentWithChildren<T> =T & {children?: ReactNode}

const Product: FC<ProductComponentWithChildren<IProps> >= ({ product}) => {

    return (
        <li>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </li>
    );
};

export default Product;