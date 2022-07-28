import Checkbox from "../components/Checkbox";
import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";
import category from '../assets/fake-data/category'
import colors from '../assets/fake-data/product-color'
import size from '../assets/fake-data/product-size'
import Button from "../components/Button";
import { useCallback, useEffect, useRef, useState } from "react";

const Catalog = () => {
    const dataAllProducts = productData.getAllProducts()

    const [products, setProducts] = useState(dataAllProducts)
    const initFilters = {
        category: [],
        color: [],
        size: []
    }
    const [filters, setFilters] = useState(initFilters)

    // handle set filter
    const handleOnChangeCheckBox = (isChecked, typeFilter, newFilter) => {

        if(isChecked)
            switch(typeFilter){
                case 'category' : {
                    setFilters({...filters, category: [...filters.category, newFilter]})
                    break
                }
                case 'color' : {
                    setFilters({...filters, color:[...filters.color, newFilter]})
                    break
                }
                case 'size' : {
                    setFilters({...filters, size: [...filters.size, newFilter]})
                    break
                }
                default:

            }
            else
                // truong hop unCheck
                switch(typeFilter){
                    case 'category' : {
                        const categoryAfter = filters.category.filter(item => item !== newFilter)
                        setFilters({...filters, category: categoryAfter})
                        break
                    }
                    case 'color' : {
                        const colorAfter = filters.color.filter(item => item !== newFilter)
                        setFilters({...filters, color: colorAfter})
                        break
                    }
                    case 'size' : {
                        const sizeAfter = filters.size.filter(item => item !== newFilter)
                        setFilters({...filters, size: sizeAfter})
                        break
                    }
                    default:

                }
            
    }

    // handle filters products
    const handleFilterProducts = useCallback(
        () => {
            let productsFilters = dataAllProducts
            if(filters.category.length > 0){
                productsFilters = productsFilters.filter((item) =>
                    filters.category.includes(item.categorySlug)
                )
            }

            if(filters.color.length > 0){
                productsFilters = productsFilters.filter((item) => {
                    const isHave = item.colors.find(color => filters.color.includes(color))
                    return isHave !== undefined
                })
            }

            if(filters.size.length > 0){
                productsFilters = productsFilters.filter((item) => {
                    const isHave = item.size.find(size => filters.size.includes(size))
                    return isHave !== undefined
                })
            }

            setProducts(productsFilters)
        },
        [filters, dataAllProducts]
    )        

    useEffect(() => {
        handleFilterProducts()
    }, [handleFilterProducts])

    // handle remove filters
    const handleRemoveFilters = () => {
        setFilters(initFilters)
    }

    // keep state filter when refresh page
    

    return ( 
        <div className="grid container catalog">
            <div className="row">
                <div className="catalog__filter l-2 m-4 ">
                    {/* filter category */}
                    <div className="catalog__filter__category">
                        <h4 className="catalog__filter__title">
                            Danh Mục Sản Phẩm
                        </h4>

                        {
                            category.map((item, index) => (
                                <div className="catalog__filter__item" key = {index}>
                                    <Checkbox 
                                        props={item.display}
                                        valueFilter = {item.categorySlug}
                                        name={'category'}
                                        handleOnChangeCheckBox = {handleOnChangeCheckBox}
                                    />
                                </div>
                            ))
                        }

                    </div>

                    {/* filter color */}
                    <div className="catalog__filter__color">
                        <h4 className="catalog__filter__title">
                            Màu Sắc
                        </h4>

                        {
                            colors.map((item, index) => (
                                <div className="catalog__filter__item" key = {index}>
                                    <Checkbox
                                        props={item.display}
                                        valueFilter = {item.color}
                                        name={'color'}
                                        handleOnChangeCheckBox = {handleOnChangeCheckBox}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    {/* filter size */}
                    <div className="catalog__filter__size">
                        <h4 className="catalog__filter__title">
                            Kích Cỡ
                        </h4>
                        {
                            size.map((item, index) => (
                                <div className="catalog__filter__item" key = {index}>
                                    <Checkbox
                                        props={item.display}
                                        valueFilter = {item.size}
                                        name={'size'}
                                        handleOnChangeCheckBox = {handleOnChangeCheckBox}
                                    />
                                </div>
                            ))
                        }
                    </div>

                  
                    {/* remove filter */}
                    <Button 
                        infoText={"Xóa Bộ Lọc"}
                        handleClick={handleRemoveFilters}
                    />


                </div>
                <div className="catalog__content l-10 m-8">
                    <div className="grid">
                        <div className="row">
                            {
                                products.map((item, index) => (
                                        <div className="col l-3 m-4 c-6" key={index}>
                                            <ProductCard product={item} />
                                        </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Catalog;