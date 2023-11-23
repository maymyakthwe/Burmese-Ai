import React, { useContext } from 'react'
import { ProductContext } from '../context/Product_context'


const Product_details = () => {
    const { toggle, setToggle, product } = useContext(ProductContext)
    const productData = [{
        id: 1,
        name: "Viso Suite Platform",
        catagory: 'Photo',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quos laudantium consequatur esse error ad blanditiis ipsum! Eum, optio vero, accusamus eaque et alias hic nobis eveniet itaque explicabo a ? Aut ?"
    },
    {
        id: 2,
        name: "ChatGPT",
        catagory: 'Photo',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quos laudantium consequatur esse error ad blanditiis ipsum! Eum, optio vero, accusamus eaque et alias hic nobis eveniet itaque explicabo a ? Aut ?"
    },
    {
        id: 3,
        name: "Jupyter Notebooks",
        catagory: 'Photo',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quos laudantium consequatur esse error ad blanditiis ipsum! Eum, optio vero, accusamus eaque et alias hic nobis eveniet itaque explicabo a ? Aut ?"
    },
    {
        id: 4,
        name: "Azure Machine Learning Studio",
        catagory: 'Photo',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quos laudantium consequatur esse error ad blanditiis ipsum! Eum, optio vero, accusamus eaque et alias hic nobis eveniet itaque explicabo a ? Aut ?"
    },
    {
        id: 5,
        name: "Viso Suite Platform",
        catagory: 'Photo',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quos laudantium consequatur esse error ad blanditiis ipsum! Eum, optio vero, accusamus eaque et alias hic nobis eveniet itaque explicabo a ? Aut ?"
    },
    {
        id: 6,
        name: "ChatGPT",
        catagory: 'Photo',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quos laudantium consequatur esse error ad blanditiis ipsum! Eum, optio vero, accusamus eaque et alias hic nobis eveniet itaque explicabo a ? Aut ?"
    },
    {
        id: 7,
        name: "Jupyter Notebooks",
        catagory: 'Photo',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quos laudantium consequatur esse error ad blanditiis ipsum! Eum, optio vero, accusamus eaque et alias hic nobis eveniet itaque explicabo a ? Aut ?"
    },
    {
        id: 8,
        name: "Azure Machine Learning Studio",
        catagory: 'Photo',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quos laudantium consequatur esse error ad blanditiis ipsum! Eum, optio vero, accusamus eaque et alias hic nobis eveniet itaque explicabo a ? Aut ?"
    }]
    return (
        <div className={toggle ? 'product-details' : 'product-details toggle'}>
            {
                productData.map((p, key) => {
                    if (p.id === product) {
                        return <div key={key}>
                            <h1 className='product-name'>{p.name}</h1>
                            <p>{p.description}</p>
                            <p className='product-catagory'>{p.catagory}</p>
                        </div>
                    }
                })
            }
            <button className='product-detail-close-btn' onClick={() => setToggle(false)}> close</button>
        </div>
    )
}

export default Product_details

