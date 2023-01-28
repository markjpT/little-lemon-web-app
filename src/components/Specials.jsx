import React from 'react';
import {specials} from './data';

const Specials = () => {

    return (
        <section id='specials-section'>
            <view className="specials-top">
                <h2>This week's specials!</h2>
                <button className="button order-online">Order online</button>
            </view>
            <view className="specials">
                {specials.map(item => {
                    return (
                        <view key={item.id} className='special'>
                            <view className="special-content">
                                <img src={item.image} alt={item.alt} />
                                <view className="special-name">
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                </view>
                                <p>{item.description}</p>
                            </view>
                            <view className='order'>
                                Order a delivery <img src={require('../icons_assets/scooter-icon.jpg')} alt='Cyclist icon' width='30px' />
                            </view>
                        </view>
                    )
                })}
            </view>
        </section>
    )
}



export default Specials;