import { useState } from "react";
export default function Button() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  const [itemcolor, setItemcolor] = useState([]);
  function handleClick(){
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setItemcolor([...itemcolor,color])
    color='#'
  }
  return (
    <>
      <div className='flex justify-center pt-12'>
        <div className="">
          <button 
            className='text-4xl p-5 mb-4 bg-blue-400 text-white rounded-full'
            onClick={handleClick}
            >Click ME!
          </button>
          <ul>
            {itemcolor.map((item,index)=><li key={index} className={`rounded-full p-5 mb-4 text-center text-white text-4xl`} style={{backgroundColor:`${item}`}}>{item}</li>)}          
          </ul>
        </div>
      </div>
    </>
  )
}











// import { useState } from "react";
// export default function Button() {
//   const letters = '0123456789ABCDE';
//   let color = '#';
//   let colors = []
//   const [itemcolor, setItemcolor] = useState([colors]);
//   function handleClick(){
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 15)];
//     }
//     colors.push(color)
//     color='#'
//     console.log(colors);
//     setItemcolor(colors)
//   }
//   return (
//     <>
//       <div className='flex justify-center'>
//         <div className="">
//           <button 
//             className='text-4xl p-3 mb-10 bg-blue-400 text-white rounded-full'
//             onClick={handleClick}
//             >Click ME!
//           </button>
//           <ul>
//             {itemcolor.map((item,index)=><li key={index} className={`rounded-full p-4 text-center text-white text-4xl`} style={{backgroundColor:`${item}`}}>{item}</li>)}          
//           </ul>
//         </div>
//       </div>
//     </>
//   )
// }
