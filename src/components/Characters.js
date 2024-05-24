import {useSearchParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {charactersActions} from '../store';
import {Character} from '../components';

const Characters = () => {
    const [query, setQuery] = useSearchParams({page: '1'})
    const dispatch = useDispatch()
    const {characters} = useSelector(state => state.characters)

    const page = query.get('page');

    useEffect(() => {
       dispatch(charactersActions.getAll(page))
    }, [page,dispatch]);

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    )
}
export {Characters}