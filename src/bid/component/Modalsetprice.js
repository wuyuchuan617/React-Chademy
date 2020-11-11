import React from 'react'
import { Modal,Button } from 'react-bootstrap'

function Modalsetprice(props){
    const{pname, chair,price,setMyCart,setCartAmount,cartamount}=props
    //add to cart fn
const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
  
    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)
  
    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      currentCart[index].amount++
    } else {
      currentCart.push(item)
    }
  
    localStorage.setItem('cart', JSON.stringify(currentCart))
        // 設定資料
        setMyCart(currentCart)
      }
    // console.log(data)
    return(
        
        <>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                恭喜競標成功！
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className="text-center">您已成功競標以下商品</h4>
                <p className="text-center">
                    {pname}
                </p>
                    <div className="g-modal-pic mx-auto"><img src={chair} /></div>
                    
            </Modal.Body>
            <Modal.Footer>
                <Button  className="w_cart-btn"
                  onClick={() => {
                    props.onHide()
                    setCartAmount(cartamount + 1)
                    updateCartToLocalStorage({
                  
                      id: pname,
                      img: chair,
                      amount: 1,
                      price: price,
                      category: 1,
                    })
                  }}>加入購物車</Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}
export default Modalsetprice