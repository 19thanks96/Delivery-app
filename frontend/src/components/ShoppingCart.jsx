import { useState, useEffect } from 'react'
import { url } from './api'

const ShoppingCart = () => {
    const [price, setPrice] = useState(0)
    const [goods, setGoods] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    let answer;
    useEffect(() => {
        answer = JSON.parse(localStorage.getItem('Goods'))
        setFullPrice(answer)
        outputGoods(answer)
    }, [])
    function outputGoods(answer) {
        setGoods(
            answer.map((goods) => (
                <div key={goods._id + Math.random()}>
                    <p className="about">{goods.name}</p>
                    <img
                        className="img"
                        src={url + '/' + goods.img}
                        alt={goods.img}
                    ></img>
                </div>
            ))
        )
    }
    let pr = 0;
    function setFullPrice(answer) {
        answer.forEach((goodsPrice) => {
            pr += Number(goodsPrice.price)
        })
        setPrice(pr)
        console.log(pr)
    }
    function buy() {
        console.log(name, email, phone, address, goods)
    }
    return (
        <div className="wrapper">
            <div className="inputs">
                <label htmlFor="name">Name:</label>
                <input name="name" type="text" value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}></input>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={email}
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}></input>
                <label htmlFor="number">Phone:</label>
                <input name="number" type="number" value={phone}
                    onChange={(event) => {
                        setPhone(event.target.value)
                    }}></input>
                <label htmlFor="address">Address:</label>
                <input name="address" type="text" value={address}
                    onChange={(event) => {
                        setAddress(event.target.value)
                    }}></input>
            </div>
            <div className="goods">{goods}</div>
            <div className="price">
                <span>
                    Total price:<span>{price}</span>
                    <button type="button" onClick={buy}>Submit</button>
                </span>
            </div>
        </div>
    )
}

export default ShoppingCart
