import { useState } from 'react';
import {Func} from './Func';
function Sizeselect(){
    const [sizelist, setsizelist] = useState(250);
    const shoessize = Func(220, 270, 5)
    return(
        <div className='sizes'>
            {shoessize.map((size)=>(
                <button key={size} onClick={()=>setsizelist(size)} style={{backgroundColor:sizelist ==size ? '#333' : '#fdfdfd', color:sizelist ==size ? '#fdfdfd' : '#333'}}>{size}</button>
            ))}
        </div>
    )
}
export default Sizeselect