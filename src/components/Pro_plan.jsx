import React, { useContext } from 'react'

import pro_1 from '../images/pro_1.jpg'
import pro_2 from '../images/pro_2.jpg'
import pro_3 from '../images/pro_3.jpg'
import pro_4 from '../images/pro_4.jpg'
import { ProductContext } from '../context/Product_context'


const Pro_plan = () => {
    const { handleButton } = useContext(ProductContext)
    return (
        <div className='plan'>
            <div className='plan-text'>

                <div className='plan-name'>
                    <h1 >Gold Plan</h1>
                    <p>Contains 4 Ai websites for photo-generation, 1 Ai website for Voice-generation and 2 Ai websites for Video-generation </p>
                    <p className='plan-price'>Only <b>18000</b> mmk</p>
                </div>
                <div><a target='_blank' href='https://m.me/the.burmese.ai' className='btn'>Buy Now</a></div>
            </div>
            <div className='plan-products'>
                <div className='plan-product'>
                    <button onClick={() => handleButton(true, 5)}>
                        <img src={pro_1} alt="" />
                        <div>Viso Suite Platform</div>
                    </button>

                </div>
                <div className='plan-product'>
                    <button onClick={() => handleButton(true, 6)}>
                        <img src={pro_2} alt="" />
                        <div>ChatGPT</div>
                    </button>
                </div>
                <div className='plan-product'>
                    <button onClick={() => handleButton(true, 7)}>
                        <img src={pro_3} alt="" />
                        <div>Jupyter Notebooks</div>
                    </button>
                </div>
                <div className='plan-product'>
                    <button onClick={() => handleButton(true, 8)}>
                        <img src={pro_4} alt="" />
                        <div>Azure Machine Learning Studio</div>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Pro_plan
