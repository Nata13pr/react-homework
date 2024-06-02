import React, {FC} from 'react';

import {ICarModel} from "../../models/ICarModel";
import CarComponent from "../car/CarComponent";

interface IProps {
    cars: ICarModel[] | undefined
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <ul>
            {cars?.map(item => <CarComponent car={item} key={item.id}/>)}
        </ul>
    );
};

export default CarsComponent;