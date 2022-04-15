import React, { Component } from 'react';
import "./itinerary.css";

class App extends Component {
  constructor(){
 super();
 this.state={
   userData : [],
 }
  }

  handleSubmit=(e)=>{
  e.preventDefault();
  let userData = this.state.userData;
  let name = this.refs.textName.value;
  let expensetype = this.refs.textExpensess.value;
  let expenseAmt = this.refs.textAmtExpensess.value;

  let newUser = {
    'name': name,
    'expensetype':expensetype,
    'expenseAmt':expenseAmt
  }
 userData.push(newUser);
  
 this.setState({
   userData: userData,
 
 })

 this.refs.myform.reset();
}

handelDelete =(i)=>{
let userData = this.state.userData;
userData.splice(i,1);
this.setState({
  userData: userData
});
}
  render() {  
    let userData = this.state.userData;
    return (
      <>
     <form ref= 'myform' className="myform" style={{ paddingTop: "7rem" }}>
       <label>Name</label>
       <input type= 'text' ref="textName" placeholder='Enter Your Name' className='formfield'/>
       <label>Expencess</label>
       <input type = 'text' ref="textExpensess" placeholder='Enter your Expensess Type' className='formfield'/>
       <label>Amount Expensess</label>
       <input type = 'text' ref="textAmtExpensess" placeholder='Enter your Expensess Amount' className='formfield'/>
       <button onClick={e=> this.handleSubmit(e)} className="myButton">Save</button>
      </form>
      <table className='table'>
        <tr>
          <th>
            NAME
          </th>
          <th>
            Expensess Type
          </th>
          <th>Expensess Amount
          </th>
        </tr>
       { 
       userData.map((data, i)=>
        <tr key={i}>
          <td>{data.name}</td>
          <td>{data.expensetype}</td>
          <td>{data.expenseAmt}</td>
          <td><button onClick={i=>this.handelDelete(i)} className="myButton">Delete</button></td>
          </tr>)
  }
      </table>
      </>
    )
  }
}

export default App;
