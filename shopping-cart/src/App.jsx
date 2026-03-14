import React from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const products = [
    { id: 1, name: 'Laptop', price: 50000, image: '💻' },
    { id: 2, name: 'Phone', price: 30000, image: '📱' },
    { id: 3, name: 'Headphones', price: 5000, image: '🎧' },
    { id: 4, name: 'Watch', price: 15000, image: '⌚' },
    { id: 5, name: 'Keyboard', price: 3000, image: '⌨️' },
    { id: 6, name: 'Mouse', price: 1500, image: '🖱️' }
  ]

  const [cart, setCart] = useState([])
  const [bill, setBill] = useState(0)
  const [gst, setGst] = useState(0)

  const handleCartAdd = (product) => {
    const isExisting = cart.find(item => item.id === product.id)

    if (isExisting) {
      setCart(cart.map((item) => {
        return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      })
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const handleCartChange = (type, product) => {
    if (type === 'in') {
      setCart(
        cart.map((item) => {
          return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        })
      )
    } else {
      const productQuantity = product.quantity
      if (productQuantity === 1) {
        let tempCart = cart.filter((item) => item.id !== product.id)
        setCart(tempCart)
      } else {
        setCart(
          cart.map((item) => {
            return item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
          })
        )
      }
    }
    
  }

  useEffect(() => {
    let billAmount = cart.reduce((acc, curr) => {
      return acc + (curr.quantity * curr.price)
    }, 0)
    let gstAmount = billAmount * (18 / 100)
    setBill(billAmount)
    setGst(gstAmount)
  }, [cart])


  return (
    <>
      <h3>Product List</h3>
      <div className="product-list">
        {
          products.map((item) => {
            return (
              <div className='product-item' key={item.id}>
                <div className="product-image">{item.image}</div>
                <div className="product-name">{item.name}</div>
                <div className="product-price">{`Rs ${item.price}`}</div>
                <button onClick={() => handleCartAdd(item)}>Add</button>
              </div>

            )
          })
        }
      </div>
      <h3>Cart</h3>
      {cart.length === 0 ?
        <div>{'Cart Empty'}</div>
        :
        <div className='cart-list'>
          {cart.map((item) => {
            return (
              <div className='cart-item' key={item.id}>
                <div className="cart-image">{item.image}</div>
                <div className="cart-name">{item.name}</div>
                <div className="cart-price">{`Rs ${item.price}`}</div>
                <div className="cart-quantity">{`Rs ${item.quantity}`}</div>
                <button onClick={() => handleCartChange('in', item)}>In</button>
                <button onClick={() => handleCartChange('de', item)}>De</button>
              </div>
            )
          })}
        </div>}

      {cart.length === 0 ?
        null :
        (
          <div className="bill-holder">
            <h3>Cost</h3>
            <div className="bill">{`Bill: Rs ${bill}`}</div>
            <div className="gst">{`GST: Rs ${gst}`}</div>
            <div className="total-bill">{`Total Bill: Rs ${bill + gst}`}</div>
          </div>
        )
      }















    </>
  )
}

export default App