import React from 'react'
import { useSelector } from 'react-redux'

function Suppliers() {

    let { suppliersState } = useSelector(state => state)

    console.log('suppliersState', suppliersState);

    return (<>
        <ul>
            {
            suppliersState && suppliersState.map(item => <li>{item.companyName}</li>)
            }
        </ul>

    </>
    )
}

export default Suppliers