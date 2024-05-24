import {useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';

const CharacterPagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.characters);
    const [, setQuery] = useSearchParams();
    console.log('prev',prevPage)
    console.log('next',nextPage)

    const prev = () => {
        setQuery(value => {
            value.set('page', `${+value.get('page') - 1}`);
            return value;
        })
    }

    const next = () => {

        setQuery(value => {
            value.set('page', `${+value.get('page') + 1}`)
            return value;
        })
    }

    return (
        <diV>
            <button disabled={!prevPage} onClick={prev}>prev</button>
            <button disabled={!nextPage} onClick={next}>next</button>
        </diV>
    )
}
export {CharacterPagination}