import React, {FC} from 'react';
import IProduct from "../../Model/IProduct";
import Product from "../Product/Product";

interface IProps {
    products: IProduct[]
}

type ListOfProductsWithChildren<T> = T & { children?: React.ReactNode };

const ListOfProducts: FC<ListOfProductsWithChildren<IProps>> = ({products}) => {
    return (
        <ul>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </ul>
    );
};

export default ListOfProducts;