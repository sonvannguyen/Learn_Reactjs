import {BrowserRouter} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import RoutesComponent from '../routes/RoutesComponent'

const Layout = () => {
    return ( 
        <BrowserRouter>
            <Header/>
            <RoutesComponent/>
            <Footer/>
        </BrowserRouter>
     );
}
 
export default Layout;