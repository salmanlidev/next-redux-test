"use client"

import { Basket } from "./Basket"

const Header = ({ user }) => {
    return (
        <header className="flex items-center justify-between p-4">
            <a className="text-2xl" href="/">Logo</a>
            <div className="text-xl">Active user: {user.name}</div>
            <Basket />
        </header>
    )
}

export default Header