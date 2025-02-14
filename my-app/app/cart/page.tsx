'use client'

import React from 'react'

const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow p-6">
        {/* Cart content will go here */}
        <p>Your cart is empty</p>
      </div>
    </div>
  )
}

export default CartPage 