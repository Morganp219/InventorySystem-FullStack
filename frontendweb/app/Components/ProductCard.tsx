"use client"
import Image from 'next/image';
import { InventoryItem } from '../objects/InventoryItem';
import { usePurchaseHandler } from '../controllers/PurchaseHandler';
export default function ProductCard({inventoryItem}: {inventoryItem: InventoryItem}) {
    const {addItemToCart} = usePurchaseHandler()
    return (
        <article className="flex flex-col max-w-70">
            <div className="border-b border-stone-200 bg-stone-100 p-4">
                <div className="relative mx-auto flex h-36 w-full items-center justify-center bg-white rounded-lg">
                    <Image src="https://placehold.co/600x400/png" alt="Product Description" width={180} height={120} />
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between flex-1">
                    <div className="flex flex-col">
                        <p className="text-sm font-light uppercase tracking-wide text-stone-500">Product</p>
                        <h3 className="text-lg font-bold text-stone-900">{inventoryItem.name}</h3>
                    </div>
                    <div className="flex flex-col">
                        <p className="rounded-md bg-stone-100 px-2 py-1 text-sm font-bold text-stone-700">$9.99</p>
                    </div>
                </div>

                <p className="text-sm leading-5 text-stone-600">{inventoryItem.description}</p>

                <div className="flex items-center justify-between rounded-lg bg-stone-50 px-3 py-2 text-sm">
                    <span className="font-medium text-stone-900">Availability</span>
                    <span>{inventoryItem.availableMedium}</span>
                </div>
                <button onClick={()=> {
                    addItemToCart(inventoryItem)
                }}>
                    Add to Cart
                </button>
                <button onClick={()=> {
                    buyItemById()
                }}>
                    Buy Now
                </button>
                <button onClick={()=> {
                    
                }}>
                    Add to Wishlist
                </button>
            </div>
        </article>
    )
}