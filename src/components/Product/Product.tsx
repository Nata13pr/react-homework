import React, {FC, ReactNode} from 'react';
import IProduct from "../../Model/IProduct";
import ListOfImages from '../ListOfImages/ListOfImages';

interface IProps {
    product: IProduct
}

type ProductComponentWithChildren<T> = T & { children?: ReactNode }

const Product: FC<ProductComponentWithChildren<IProps>> = ({product}) => {
    const {title, rating, brand, thumbnail, description, category, price, images, stock, discountPercentage,} = product;
    return (
        <li>
            <h1>Title - {title}</h1>
            <img src={thumbnail} alt={thumbnail}/>
            <p>Description - {description}</p>
            <p>Discount Percentage - {discountPercentage}</p>
            <p>Price - {price}</p>
            <p>Rating - {rating}</p>
            <p>Brand - {brand}</p>
            <p>Stock - {stock}</p>
            <div>
                <h2>More images</h2>
                <ListOfImages images={images}/>
            </div>
        </li>
    );
};

export default Product;