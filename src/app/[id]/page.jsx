import { BackButton } from "@/src/components/BackButton"
import { store } from "@/src/stores"
import { fetchProductDetail } from "@/src/stores/product-store"

async function ProductDetail({ params }) {
    await store.dispatch(fetchProductDetail(params.id))
    const { product } = store.getState().products
  

    return (
        <div className="w-full flex flex-col justify-center items-center py-10">
            <div className="w-1/2 border border-white rounded-lg p-5 flex flex-col gap-4">
                <BackButton />
                <h3 className="text-xl">{product.title}</h3>
                <p className="text-md">
                    {product.description}
                </p>
                <span className="text-2xl ">${product.price}</span>
                <button type="button" className="bg-white text-black h-10 rounded-lg text-2xl font-bold font-mono">ADD</button>
            </div>
        </div>
    )
}

export default ProductDetail