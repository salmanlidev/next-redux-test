"use client"

import { useRouter } from "next/navigation"
import { store } from "../stores"
import { actions as basketActions } from "../stores/basket-store"


const Product = ({ product }) => {
    const router = useRouter();

    const addProduct = (product) => {
        store.dispatch(basketActions.addToBasket({
            id: product.id,
            price: product.price,
            count: 1,
        }))
    }

    return (
        <div className='cursor-pointer border-2 w-1/3 justify-between py-3 px-4 flex hover:shadow-sm hover:shadow-red-600 transition-shadow'>
            <div onClick={() => router.push(`/${product.id}`)} className='cursor-pointer flex flex-col gap-2 '>
                <h1>{product.title.slice(0, 42)}</h1>
                <p>{product.price}</p>
            </div>
            <button onClick={() => addProduct(product)} type='button' className='bg-green-600 h-10 w-44 hover:bg-green-400 transition-colors'>Add</button>
        </div>
    )
}

export default Product