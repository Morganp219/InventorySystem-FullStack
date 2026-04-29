"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { InventoryItem } from "../objects/InventoryItem"

export interface CartItem {
  item: InventoryItem
  quantity: number
}

export interface PurchaseContextValue {
  itemsInCart: CartItem[]
  addItemToCart: (item: InventoryItem) => void
  removeItemFromCart: (itemId: number) => void
  updateItemQuantity: (itemId: number, quantity: number) => void
  buyItems: (cartItems: CartItem | CartItem[]) => void
}

export const PurchaseContext = createContext<PurchaseContextValue>({
  itemsInCart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateItemQuantity: () => {},
  buyItems: () => {},
})

export function PurchaseHandlerProvider({ children }: { children: ReactNode }) {
  const [itemsInCart, setItemsInCart] = useState<CartItem[]>([])

  const addItemToCart = (item: InventoryItem) => {
    setItemsInCart(items => {
      const existingItem = items.find(cartItem => cartItem.item.id === item.id)

      if (existingItem) {
        return items.map(cartItem =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }

      return [...items, { item, quantity: 1 }]
    })
  }

  const removeItemFromCart = (itemId: number) => {
    setItemsInCart(items => items.filter(cartItem => cartItem.item.id !== itemId))
  }

  const updateItemQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItemFromCart(itemId)
      return
    }

    setItemsInCart(items =>
      items.map(cartItem =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity }
          : cartItem
      )
    )
  }

  const buyItems = (cartItems: CartItem | CartItem[]) => {
    const itemsToBuy = Array.isArray(cartItems) ? cartItems : [cartItems]

    console.log("Buying items:", itemsToBuy)

    setItemsInCart(items =>
      items.filter(
        cartItem =>
          !itemsToBuy.some(
            boughtItem => boughtItem.item.id === cartItem.item.id
          )
      )
    )
  }

  return (
    <PurchaseContext.Provider
      value={{
        itemsInCart,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        buyItems,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}

export const usePurchaseHandler = () => {
  return useContext(PurchaseContext)
}