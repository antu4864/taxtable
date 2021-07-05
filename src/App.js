import React from 'react';
import {Route, Switch} from "react-router-dom";
import Bam from "./Bam";
import Ca from "./Ca";
import Cgt from "./Cgt";
import Ct from "./Ct";
import Dtc from "./Dtc";
import It from "./It";
import Ias from "./Ias";
import Lt from "./Lt";
import Ma from "./Ma";
import Nic from "./Nic";
import Pen from "./Pen";
import Sd from "./Sd";
import Vat from "./Vat";
import Vb from "./Vb";
import Menu from "./Menu";

  

const App = () => {
   
  return (
    <> 
     
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route path='/Bam' component={Bam} />
        <Route path='/Ca' component={Ca}/>
        <Route path='/Cgt' component={Cgt}/>
        <Route path='/Ct' component={Ct}/>
        <Route path='/Dtc' component={Dtc}/>
        <Route path='/It' component={It}/>
        <Route path='/Ias' component={Ias}/>
        <Route path='/Lt' component={Lt}/>
        <Route path='/Ma' component={Ma}/>
        <Route path='/Nic' component={Nic}/>
        <Route path='/Pen' component={Pen}/>
        <Route path='/Sd' component={Sd}/>
        <Route path='/Vat' component={Vat}/>
        <Route path='/Vb' component={Vb}/>
        
      </Switch>
 
   </>
  );
}

export default App;
