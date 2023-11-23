/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Standard_plan from './components/Standard_plan'
import './index.css'
import NavBar from './components/NavBar'
import Pro_plan from './components/Pro_plan'
import Product_details from './components/Product_details'
import { Product_context_provider } from './context/Product_context'

const App = () => {
    return (
        <div>
            <Product_context_provider>
                <NavBar />
                <div className='container'>
                    <Standard_plan />
                    <Pro_plan />
                    <Product_details />
                </div>
            </Product_context_provider>
        </div>
    )
}

export default App
