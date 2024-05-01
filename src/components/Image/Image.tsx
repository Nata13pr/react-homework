import React,{FC} from 'react';
import styles from '../Image/Image.module.css'

interface IProps{
    image:string
}

type ImageWithChildren<T>=T & {children?:React.ReactNode}
const Image:FC<ImageWithChildren<IProps>> = ({image}) => {
    return (
        <li >
            <img className={styles.image} src={image} alt={image}/>
        </li>
    );
};

export default Image;