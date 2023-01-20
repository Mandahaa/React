import React, { useEffect, useReducer, useState } from "react"
import axios from "axios"
import cart from "./cart"
import items from "./items"
import { data } from "autoprefixer"

const reduceCartData = (currState, action) => {
  return currState
}

export default function ShoppingList() {
  const [data, setData] = useState([])
  const [cartData, updateCartData] = useReducer(reduceCartData, {
    items: [],
    totalQty: 0,
    totalAmount: 0,
  })
  const fetchProductData = () => {
    axios
      .get(
        "https://api.bestbuy.com/v1/products?format=json&show=sku,productId,name,type,regularPrice,salePrice,onSale,url,categoryPath,customerReviewAverage,customerReviewCount,department,largeImage,plot,genre,albumTitle,releaseDate&apiKey=j7RQXCsGGeSc5GaXv0slAOAm"
      )
      .then((res) =>{
        if(res.status === 200){
            setData(res.data.products)
        }
      } )
    
  }

  useEffect(() => {
    fetchProductData()
  }, [])
  return (
    <div>
      {data.map((item) => {
        return (
        <div>
            <div style={{display: 'flex' , justifyContent: 'center'}}>
                <img src={item.largeImage} alt="cover-image"/>
                <div>{item.sku}</div>
                <div><b>${item.salePrice}</b></div>
            </div>
        </div>
      )})}

      <div>
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
