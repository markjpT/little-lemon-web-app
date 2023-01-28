import React from 'react';
import specials from './data';

const Specials = () => {

    return (
        <section id='specials-section'>
            <view className="specials-top">
                <h2>This weeks specials!</h2>
                <button className="button order-online">Order online</button>
            </view>
            <view className="specials">
                {specials.map(item => {
                    return (
                        <view className='special'>
                            <view className="special-content">
                                <img src={item.image} alt={item.alt} />
                                <view className="special-name">
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                </view>
                                <p>{item.description}</p>
                            </view>
                            <view className='order'>
                                Order a delivery <img src={require('../icons_assets/cyclist-icon.png')} alt='Cyclist icon' width='20px' />
                            </view>
                        </view>
                    )
                })}
            </view>
        </section>
    )
}



export default Specials;