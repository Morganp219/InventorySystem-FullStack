"use client"

import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { useState } from "react"
import { usePurchaseHandler } from "../controllers/PurchaseHandler"

export default function Header() {
  const {
    itemsInCart,
    removeItemFromCart,
    updateItemQuantity,
    buyItems,
  } = usePurchaseHandler()

  const [isCartOpen, setIsCartOpen] = useState(false)

  const total = itemsInCart.reduce(
    (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  )

  return (
    <>
      <header className="flex w-screen h-20 items-center justify-between bg-black px-4 text-white">
        <div>Inventory System</div>

        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton>
              <button className="rounded bg-white/10 px-3 py-1 text-sm text-white transition hover:bg-white/20">
                Sign in
              </button>
            </SignInButton>

            <SignUpButton>
              <button className="rounded bg-white/10 px-3 py-1 text-sm text-white transition hover:bg-white/20">
                Sign up
              </button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative inline-flex h-8 w-8 items-center justify-center"
        >
          <span className="material-symbols-outlined text-[28px]">
            shopping_cart
          </span>

          <span className="absolute -right-1 -bottom-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold leading-none text-white">
            {itemsInCart.length}
          </span>
        </button>
      </header>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-lg rounded-lg bg-white p-5 text-black shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>

              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded px-2 py-1 text-sm hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {itemsInCart.length === 0 ? (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {itemsInCart.map(cartItem => (
                  <div
                    key={cartItem.item.id}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    <div>
                      <h3 className="font-medium">{cartItem.item.name}</h3>
                      <p className="text-sm text-gray-500">
                        ${cartItem.item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateItemQuantity(
                            cartItem.item.id,
                            cartItem.quantity - 1
                          )
                        }
                        className="flex h-7 w-7 items-center justify-center rounded bg-gray-200 hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="w-6 text-center text-sm">
                        {cartItem.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateItemQuantity(
                            cartItem.item.id,
                            cartItem.quantity + 1
                          )
                        }
                        className="flex h-7 w-7 items-center justify-center rounded bg-gray-200 hover:bg-gray-300"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeItemFromCart(cartItem.item.id)}
                        className="ml-2 text-sm text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex items-center justify-between pt-2 font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => {
                    buyItems(itemsInCart)
                    setIsCartOpen(false)
                  }}
                  className="w-full rounded bg-black px-4 py-2 text-white transition hover:bg-gray-800"
                >
                  Buy Now
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}