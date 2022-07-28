import { Link } from "react-router-dom";
import Button from "./Button";

const ProductCard = ({product}) => {
    
    return ( 
        <div className="product__item">
            <Link to = {`/catalog/${product.slug}`}>
                <img src = {product.image01} alt="" className="product__item__img" />
                <div className="product__item__info">
                    <h4 className="product__item__info__title">{product.title}</h4>
                    <div className="product__item__info__price">
                        {product.price}
                        <span className="product__item__info__price__old">
                            <del>399000</del>
                        </span>
                    </div>
                </div>
            </Link>

            <Button infoText = {'Chọn Mua'}/>
        </div>
     );
}
 
export default ProductCard;