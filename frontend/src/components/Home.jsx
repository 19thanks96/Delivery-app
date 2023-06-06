import { useState } from 'react'
import { getGoods, url } from './api'

const Home = ({basket, setBasket}) => {
    console.log(basket)
    const [goods, setGoods] = useState()
    function addtoCart(goods) {
        
        setBasket(basket.push(goods))
        localStorage.setItem('Goods', JSON.stringify(basket))
    }
    
    function outputGoods(answer) {
        setGoods(
            answer.map((goods) => (
                <li key={goods._id}>
                    <img
                        className="img"
                        src={url + '/' + goods.img}
                        alt={goods.img}
                    ></img>
                    <p className="about">{goods.name}</p>
                    <button
                        className="check"
                        type="button"
                        onClick={() => {
                            addtoCart(goods)
                        }}
                    >
                        Add to Cart
                    </button>
                </li>
            ))
        )
    }
    async function getGoodsMc() {
        let answer = await getGoods('Mc Donny')
        localStorage.removeItem('Goods');
        basket.length = 0;
        outputGoods(answer)
        console.log(answer)
    }

    async function getGoodsCfk() {
        let answer = await getGoods('CFK')
        localStorage.removeItem('Goods');
        basket.length = 0;
        outputGoods(answer)
    }
    return (
        <div className="wrapper">
            <div className="shops">
                <div>Shops</div>
                <ul>
                    <li onClick={getGoodsMc}>Mc donny</li>
                    <li onClick={getGoodsCfk}>Cfk</li>
                </ul>
            </div>

            <div className="product-list">
                <ul>{goods}</ul>
            </div>
        </div>
    )
}

export default Home
