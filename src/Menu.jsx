import React from 'react';
import { Link} from "react-router-dom";



const Menu=() => {
  return (
   <>
  
   
     
          <div className='con'>
           
               
              <Link to="/Bam" className='Link'><div>Benefits and Misc.</div> </Link>
              <hr/>
              <Link to="/Ca" className='Link'><div>Capital Allowances</div></Link>
              <hr/>
              <Link to="/Cgt" className='Link'><div>Capital Gains Tex</div></Link>
              <hr/>
              <Link to="/Ct" className='Link'><div>Corporation Tex</div></Link>
              <hr/>
              <Link to="/Dtc" className='Link'><div>Donations to Charity</div></Link>
              <hr/>
              <Link to="/It" className='Link'><div>Income Tax</div></Link>
              <hr/>
              <Link to="/Ias" className='Link'><div>Investing and Saving</div></Link>
              <hr/>
              <Link to="/Lt" className='Link'><div>Land Tax</div></Link>
              <hr/>
              <Link to="/Ma" className='Link'><div>Mileage Allowan</div></Link>
              <hr/>
              <Link to="/Nic" className='Link'><div>National Insurance Contributions</div></Link>
              <hr/>
              <Link to="/Pen" className='Link'><div>Pensions</div></Link>
              <hr/>
              <Link to="/Sd" className='Link'><div>Stamp Duty</div></Link>
              <hr/>
              <Link to="/Vat" className='Link'><div>Value Added Tax</div></Link>
              <hr/>
              <Link to="/Vb" className='Link'><div>Vehicle Benefits</div></Link>
              <hr/>
             
                
          
          </div> 
   </>
  );
}

export default Menu;
