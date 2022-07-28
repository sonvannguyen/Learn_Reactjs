import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'


const RoutesComponent = () => {
    return ( 
        <Routes>
            <Route path = 'catalog' element = {<Catalog/>}>
            </Route>
            <Route path = 'catalog/:productTitle' element = {<ProductDetail/>} />
            <Route path = 'cart' element = {<Cart/>}/>
            <Route path = '/' element = {<Home/>}/>
        </Routes>
     );
}
 
export default RoutesComponent;