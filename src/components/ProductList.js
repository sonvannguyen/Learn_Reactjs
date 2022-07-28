import productData from "../assets/fake-data/products";
import ProductCard from '../components/ProductCard'
import bannerProduct from '../assets/images/banner.png'

const ProductList = () => {
    const dataAllProducts = productData.getProducts(12)
    return ( 
        <div className="wrap__product container grid">
            <img src= {bannerProduct} alt="" className="banner__product" />
            <div className="row">
                {
                    dataAllProducts.map((item, index) => (
                        <div key={index} className="col l-2-4 m-4 c-6">
                            <ProductCard product={item} />
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default ProductList;