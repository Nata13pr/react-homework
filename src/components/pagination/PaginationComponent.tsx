import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";


import {IPaginationPageModel} from "../../models/IPaginationPageModel";

interface IProps {
    prev: IPaginationPageModel | null;
    next: IPaginationPageModel | null;
}

const PaginationComponent: FC<IProps> = ({prev, next}) => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                setQuery({...prev});
                break;
            case 'next':
                setQuery({...next});
                break;
        }
    }
    return (
        <div>
            <button disabled={!prev} onClick={() => changePage('prev')}>prev</button>
            <button disabled={!next} onClick={() => changePage('next')}>next</button>
        </div>
    );
};

export default PaginationComponent;