import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


















// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

/////////////////////////////////////////////////////////////////////////////////////////////////

// در اینجا مقدار اینپوت به بالا پاس داده میشود (به جای باتن اینپوت گذاشتم)
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// function BoilingVerdict(props) {
//   return <p>your number is {props.mynumber}</p>
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {number: ''};
//   }

//   handleChange(e) {
//     this.setState({number: e.target.value});
//   }

//   render() {
//     const number = this.state.number;
//     return (
//       <fieldset>
//         <legend>Enter number :</legend>
//         <input
//         className='border-black border'
//           value={number}
//           onChange={this.handleChange} />
//         <BoilingVerdict
//           mynumber={parseFloat(number)} />
//       </fieldset>
//     );
//   }
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Calculator />);


///////////////////////////////////////////////////////////////////////////////////////////
//second
// import { useState } from 'react';

// function MyForm() {
//   const [name, setName] = useState("arian");
//   const [lastname, setlastName] = useState("farzaneh");

//   return (
//     <form>
//       <label>Enter your name:
//         <input 
//           className='border-black border rounded-full'
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//          <input 
//           className='border-black border rounded-full'
//           type="text" 
//           value={lastname}
//           onChange={(e) => setlastName(e.target.value)}
//         />
//         <input 
//           type="submit"
//           value="submit"
//           onClick={()=>{console.log(name);console.log(lastname);}} />
//       </label>
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

