import React from 'react'

import Firstview from '../components/SecondhandList/Firstview'
import Filter from '../components/SecondhandList/Filter'
import ProductList from '../components/SecondhandList/ProductList'
import '../styles/secondhandList.css'

function SecondhandList() {
  // const [product, setProduct] = useState([])

  // async function getTotalFromSQL(props) {
  //   const url = 'http://localhost:3001/man_secondhand/secondhandlist'

  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const data = await response.json()
  //   const newData = [...data]
  //   console.log('newData' + newData)
  //   console.log(Array.isArray(data))
  //   setProduct(newData)
  // }

  // const handleClick = () => {
  //   let preViewProduct = viewProduct
  //   let newViewProduct = preViewProduct + 15

  //   console.log(newViewProduct)
  //   setViewProduct(newViewProduct)
  //   //const arr = product.slice(0, preViewProduct)
  //   //setLastProductId(arr[arr.length - 1].sid)
  //   if (document.getElementById(lastProductId)) {
  //     //alert(lastProductId)
  //     document
  //       .getElementById(lastProductId)
  //       .scrollIntoView({ behavior: 'smooth', block: 'center' })
  //   }
  // }

  // useEffect(() => {
  //   const arr = product.slice(0, viewProduct)
  //   if (arr.length > 0) setLastProductId(arr[arr.length - 1].sid)
  // }, [viewProduct, product])

  // useEffect(() => {
  //   getTotalFromSQL()
  // }, [])

  // useEffect(() => {
  //   const arr = product.slice(0, viewProduct)
  //   if (arr.length > 0) setLastProductId(arr[arr.length - 1].sid)
  // }, [viewProduct, product])

  return (
    <>
      <Firstview />
      <div class="container custom-container-width">
        <div className="row mt-5">
          <Filter />
          <ProductList />
        </div>
      </div>
    </>
  )
}

export default SecondhandList
