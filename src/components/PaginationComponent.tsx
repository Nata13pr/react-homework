import React, {FC} from 'react';
import {IPaginationPageModel} from "../models/IPaginationPageModel";

interface IProps {
    changePage: (action: string) => void;
    next:IPaginationPageModel | null;
    prev:IPaginationPageModel | null;
}

const PaginationComponent: FC<IProps> = ({changePage,prev,next}) => {
    return (
        <div>
            <button
                disabled={!prev}
                onClick={() => {
                changePage('prev')
            }}>prev
            </button>
            <button
                disabled={!next}
                onClick={() => {
                changePage('next')
            }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;