import {Route,Routes} from 'react-router-dom';
import { Home } from '../Pages/Homepage';
import { Menu } from '../Pages/Menupage';
export default function AllRoutes(){
    return (
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/menu" element={<Menu/>} />
        </Routes>
    )
}