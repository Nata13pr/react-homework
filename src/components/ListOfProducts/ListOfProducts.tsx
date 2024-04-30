import React, {FC} from 'react';
import IProduct from "../../Model/IProduct";
import Product from "../Product/Product";

type ListOfProductsWithChildren<T> = T & { children?: React.ReactNode };

const ListOfProducts: FC<ListOfProductsWithChildren <IProduct[]> > = ({products}) => {
    return (
        <ul>
            {products.map(product=><Product key={product.id} product={product}/>)}
        </ul>
    );
};

export default ListOfProducts;