import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Favorites() {

    //useSelector ile global state üzerindeki favorileri çekiyorum...

    let { favoritesState } = useSelector(state => state);

    let dispatch = useDispatch();

    const removeFav = (id) => {
        dispatch({ type: 'REMOVE_TO_FAV', payload: id });
        // alert('Ürün favoriden çıkarıldı')
    }

    const empty = () => {
        dispatch({ type: 'EMPTY' })
    }

    return (<>
        <ul>
            {
                favoritesState && favoritesState.map(item => <li style={{ cursor: 'pointer' }} onClick={() => removeFav(item.id)} key={item.id}>{item.name}</li>)
            }
        </ul>
        <button onClick={() => empty()}>Empty</button>

    </>
    )
}

export default Favorites