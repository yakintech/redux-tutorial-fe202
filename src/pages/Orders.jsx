import React from 'react'
import { useSelector } from 'react-redux'

function Orders() {

    //global state useSelector ile erişiyorum
    const { orders, loading } = useSelector(state => state.orderReducer);

    console.log('LOADING', loading);

    return (<>
        {
            loading ? <h1>loading...</h1> : <ul>
                {
                    orders && orders.map((item) => <li key={item.id}>{item.shipName}</li>)
                }
            </ul>
        }

    </>
    )
}

export default Orders