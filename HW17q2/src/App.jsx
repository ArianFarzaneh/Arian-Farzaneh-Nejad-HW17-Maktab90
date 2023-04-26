import Button from "./components/Button/Button";
export default function App() {
  return (
    <div className="w-full p-8">
      <Button />
    </div>
  );
}



// import { useState } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       You pressed me {count} times
//     </button>
//   );
// }




















//Main Program
// import { useState } from 'react'

// function App() {
//   return (
//     <>
      
//     </>
//   )
// }

// export default App



//counter program:
// function Counter({initialCount}) {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <span className="">Count: {count}</span>
//       <button className='text-6xl bg-blue-500' onClick={() => setCount(initialCount)}>Reset</button>
//       <button className='text-6xl bg-red-500' onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//       <button className='text-6xl bg-green-500' onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//     </>
//   );
// }

// export default Counter
