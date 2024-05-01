import React,{FC} from 'react';
import Image from '../Image/Image';
import styles from '../ListOfImages/ListOfImages.module.css'

interface IProps{
    images:string[],
}

type ListOfImagesWithChildren<T>=T & {children?:React.ReactNode}
const ListOfImages:FC<ListOfImagesWithChildren<IProps>> = ({images}) => {
    return (
        <ul className={styles.flex}>
            {images.map(image=> <Image  image={image} key={image}/>)}
        </ul>
    );
};

export default ListOfImages;