import { store } from "../stores"
import Product from "../components/Product"
import { fetchProduct } from "../stores/product-store"


async function IndexPage() {
    await store.dispatch(fetchProduct())
    const products = store.getState().products.products


    if(products.length === 0){
        return (
            <div className="text-4xl text-center font-bold">No products</div>
        )
    }

    else{
        return (
            <div className="flex flex-wrap gap-5 justify-center py-5">
                {products.map((product , i) => (
                    <Product key={i} product={product} />
                ))}
            </div>
        )
    }
  
}

export default IndexPage