import React, { createContext, useState } from 'react'

export const ProductContext = createContext(null)

export const Product_context_provider = (props) => {
    const [toggle, setToggle] = useState(false)
    const [product, setProduct] = useState('')
    const handleButton = (toggle, product) => {
        setToggle(toggle)
        setProduct(product)
    }
    console.log(toggle, product)

    const contextValue = { toggle, setToggle, handleButton, product, setProduct }
    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    )
}


