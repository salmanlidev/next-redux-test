"use client"

import { useSelector } from "react-redux"

export const Basket = () => {
    const { basket } = useSelector(state => state.basket)

    let totalAmount = basket.length !== 0 ? basket.map(p => p.price * p.count).reduce((acc , cur) => acc + cur) : 0

    return (
        <div className="text-2xl">Basket: {totalAmount.toFixed(2)}</div>
    )
}
