import { useParams } from "react-router-dom";
import ProductViewDetail from "../components/ProductViewDetail";
import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
    const {productTitle} = useParams()
    const product = productData.getProductBySlug(productTitle)
    const productRelated = productData.getProducts(8)
    return ( 
        <div className="container ">
            <ProductViewDetail productInfo={product}/>
            <h2
                style={{marginBottom: '20px'}}
            >
                SẢN PHẨM LIÊN QUAN
            </h2>

            <div className="grid ">
                 <div className="row">
                    {
                        productRelated.map((item, index) => (
                            <div className="col l-2-4"  key={index}>
                                <ProductCard product={item}/>
                            </div>
                        ))
                    }
                 </div>
            </div>
        </div>

     );
}
 
export default ProductDetail;