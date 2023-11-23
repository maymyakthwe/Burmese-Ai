/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from 'react'

import std_1 from '../images/std_1.jpg'
import std_2 from '../images/std_2.jpg'
import std_3 from '../images/std_3.jpg'
import std_4 from '../images/std_4.jpg'
import { ProductContext } from '../context/Product_context'


function Standard_plan() {
    const { handleButton } = useContext(ProductContext)


    return (
        <div className='plan '>
            <div className='plan-text'>

                <div className='plan-name'>
                    <h1 >Standard Plan</h1>

                    <p>Contains 4 Ai websites for photo-generation, 1 Ai website for Voice-generation and 2 Ai websites for Video-generation </p>
                    <p className='plan-price'>Only <b>18000</b> mmk</p>
                </div>
                <div><a target='_blank' href='https://m.me/the.burmese.ai' className='btn'>Buy Now</a></div>

            </div>
            <div className='plan-products'>
                <div className='plan-product'>
                    <button onClick={() => handleButton(true, 1)}>

                        <img src={std_1} alt="" />
                        <div>Viso Suite Platform</div>
                    </button>
                </div>
                <div className='plan-product'>
                    <button onClick={() => handleButton(true, 2)}>
                        <img src={std_2} alt="" />
                        <div>ChatGPT</div>
                    </button>
                </div>
                <div className='plan-product'>
                    <button onClick={() => handleButton(true, 3)}>
                        <img src={std_3} alt="" />
                        <div>Jupyter Notebooks</div>
                    </button>
                </div>
                <div className='plan-product'>
                    <button onClick={() => handleButton(true, 4)}>
                        <img src={std_4} alt="" />
                        <div>Azure Machine Learning Studio</div>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Standard_plan
