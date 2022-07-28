import { useEffect, useState } from "react";
import Button from "./Button";
import { AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";

const ProductViewDetail = ({productInfo}) => {
    const [previewImg, setPreviewImg] = useState(productInfo.image01)
    const [descriptionExpand, setDescriptionExpand] = useState(false)
    const [color, setColor] = useState(productInfo.colors[0])
    const [size, setSize] = useState(productInfo.size[0])
    const [quantity, setQuantity] = useState(1)

    const handleSetQuantity = (type) => {
        type === 'plus' ? 
        setQuantity(quantity + 1) :
        setQuantity(quantity > 1 ? quantity - 1 : 1)
    }

    // handle change product reset all state
    useEffect(() => {
        setPreviewImg(productInfo.image01)
        setQuantity(1)
        setColor(productInfo.colors[0])
        setSize(productInfo.size[0])
        window.scrollTo(0,0)
    }, [productInfo])

    // handle add to cart
    const handleAddToCart = () => {
        console.log('add')
    }
    return ( 
        <div className="product__view grid">
            <div className="row">
                {/* image list */}
                <div className="col l-6">
                    <div className="product__view_image__description">
                        <div className="grid">
                            <div className="row">
                                <div className="product__view__images__list col l-2">
                                        <div className="product__view__images__list__item" onClick={() => setPreviewImg(productInfo.image01)}>
                                                <img src={productInfo.image01} alt="" />
                                        </div>
                                        <div className="product__view__images__list__item" onClick={() => setPreviewImg(productInfo.image02)}>
                                                <img src={productInfo.image02} alt="" />
                                        </div>
                                </div>

                                <div className="product__view__images__list__itemMain col l-10">
                                            <img src={previewImg} alt="" />
                                </div>
                            </div>
                        </div>

                        <h4 className="product__view__description__title">
                            Chi tiết sản phẩm
                        </h4>
                        {descriptionExpand ? 
                         (
                            <div 
                                className="product__view__description__more"
                                dangerouslySetInnerHTML={{__html: productInfo.description}}
                            >
                            </div>
                         )
                         : 
                         (
                            <div 
                                className="product__view__description"
                                dangerouslySetInnerHTML={{__html: productInfo.description}}
                            >
                            </div>
                         )
                        }
                            
                         <Button infoText={descriptionExpand ? 'Thu gọn' : 'Xem thêm'} handleClick={() => setDescriptionExpand(!descriptionExpand)}/>  

                    </div>
                </div>

                {/* product info */}
                <div className="col l-6">
                    <div className="product__info">
                        <div className="product__info__item">
                            <h3 className="product__info__title">
                                {productInfo.title}
                            </h3>
                        </div>
                        <div className="product__info__item">
                            <h3 className="product__info__price">
                                {productInfo.price}
                            </h3>
                        </div>
                        <div className="product__info__item">
                            <div className="product__info__item__title">
                                Màu sắc
                            </div>
                            <div className="product__info__item__list">
                                {
                                    productInfo.colors.map((item, index) => (
                                        <span 
                                            className={`product__info__item__list__circle bg-${item} 
                                                        ${item === color ? 'item__active' : ''}`
                                            }
                                            key={index}
                                            onClick={()=>setColor(item)}
                                        >
                                        </span>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="product__info__item">
                            <div className="product__info__item__title">
                                Kích cỡ
                            </div>
                            <div className="product__info__item__list">
                                {
                                    productInfo.size.map((item, index) => (
                                        <span 
                                            className={`product__info__item__list__circle
                                                ${item === size ? 'item__active' : ''} `
                                            } 
                                            key={index}
                                            onClick={() => setSize(item)}
                                        >
                                            {item}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="product__info__item">
                            <div className="product__info__item__title">
                                Số lượng
                            </div>

                            <div className="product__info__item__quantity">
                                <div 
                                    className="product__info__item__quantity__btn">
                                    <AiFillMinusCircle
                                        onClick = {() => handleSetQuantity('minus')}
                                    />
                                </div>
                                <div className="product__info__item__quantity__input">
                                    {quantity}
                                </div>
                                <div className="product__info__item__quantity__btn">
                                    <AiFillPlusCircle
                                        onClick = {() => handleSetQuantity('plus')}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="product__info__submit">
                            <Button 
                                infoText={'THÊM VÀO GIỎ HÀNG'}
                                handleClick= {handleAddToCart}
                            />
                            <Button 
                                infoText={'MUA NGAY'}
                                handleClick= {handleAddToCart}
                            />
                        </div>

                    </div>
                </div>
           </div>

        </div>
     );
}
 
export default ProductViewDetail;