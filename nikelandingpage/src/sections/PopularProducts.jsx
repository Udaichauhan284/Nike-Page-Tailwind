import {products } from '../constants';
import {PopularProductCard} from '../components'
const PopularProducts = () => {
  return (
    <section id="products" className='max-container max-sm:mt-12'>
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanguin font-bold">Our <span className="text-orange-500">Popular</span> Products</h2>
        <p className="lg:mx-w-lg mt-2 font-montserrat  text-slate-600">Experience top-notch qualty and style with our sought-after selections. Discover a world of Comfort, Design, and Value.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 ml-7">
        {products.map((product)=>(
          <PopularProductCard key={product.name} {...product} />
        ))}
        </div>
    </section>
  )
}

export default PopularProducts;