

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Title from './Visite'
import Signup from './signup'


const Routings=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Routings