import { useState } from "react"
export default function Buttons() {
    const [blueColor , setBlueColor]=useState(0)
    const [redColor , setRedColor]=useState(0)
    const [greenColor , setGreenColor]=useState(0)
  return (
      <>
        <div className="flex w-full">
            <div className="w-[50%] text-6xl text-center">


                <div className="flex flex-col justify-center"><div className="red-box h-[33.33vh] bg-red-500 text-white">
                    <div className="mb-8 mt-4">Red</div>
                    <button className="border-white border w-80 rounded-t-full" onClick={()=>{if(redColor<256)setRedColor(redColor+1)}}>+</button><br />
                    <button className="border-white border w-80 rounded-b-full" onClick={()=>{if(redColor>0)setRedColor(redColor-1)}}>-</button>
                </div></div>


                <div className="flex flex-col justify-center"><div className="green-box h-[33.33vh] bg-green-500 text-white">
                <div className="mb-8 mt-4">Green</div>
                    <button className="border-white border w-80 rounded-t-full" onClick={()=>{if(greenColor<256)setGreenColor(greenColor+1)}}>+</button><br />
                    <button className="border-white border w-80 rounded-b-full" onClick={()=>{if(greenColor>0)setGreenColor(greenColor-1)}}>-</button>
                </div></div>


                <div className="flex flex-col justify-center"><div className="blue-box h-[33.33vh] bg-blue-500 text-white">
                <div className="mb-8 mt-4">Blue</div>
                    <button className="border-white border w-80 rounded-t-full" onClick={()=>{if(blueColor<256)setBlueColor(blueColor+1)}}>+</button><br />
                    <button className="border-white border w-80 rounded-b-full" onClick={()=>{if(blueColor>0)setBlueColor(blueColor-1)}}>-</button>
                </div></div>


            </div>

            <div className={`w-[50%] flex flex-col justify-center`}>
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center">
                        <div className="w-[80%] rounded-full pt-14 h-44 text-center border-black border text-white text-5xl font-bold" style={{backgroundColor:`rgb(${redColor},${greenColor},${blueColor})`}}>{`RGB(${redColor},${greenColor},${blueColor})`}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}









// function addRED()
    // {
    //     if(redColor<256)
    //     {
    //         setRedColor(redColor+1)
    //     }
    // }
    // function reduceRED()
    // {
    //     if(redColor>0)
    //     {
    //         setRedColor(redColor-1)
    //     }
        
    // }

    // function addGreen()
    // {
    //     if(greenColor<256)
    //     {
    //         setGreenColor(greenColor+1)
    //     }
    // }
    // function reduceGreen()
    // {
    //     if(greenColor>0)
    //     {
    //         setGreenColor(greenColor-1)
    //     }
    // }
    
    // function addBlue()
    // {
    //     if(blueColor<256)
    //     {
    //         setBlueColor(blueColor+1)
    //     }
    // }
    // function reduceBlue()
    // {
    //     if(blueColor>0)
    //     {
    //         setBlueColor(blueColor-1)
    //     }
    // }









///////////////////////////////////////////////
// import { useState } from "react"
// export default function Buttons() {
//     let red=149
//     let blue=149
//     let green=149
//     let [background , setBackground]=useState(`rgb(${red},${green},${blue})`)
//     // let rgb=`rgb(${red},${green},${blue})`
//     function addRED()
//     {
//         red++;
//         calculateSum()
//     }
//     function reduceRED()
//     {
//         red--;
//         calculateSum()
//     }
//     function addBlue()
//     {
//         blue++;
//         calculateSum()
//     }
//     function reduceBlue()
//     {
//         blue--;
//         calculateSum()
//     }
//     function addGreen()
//     {
//         green++;
//         calculateSum()
//     }
//     function reduceGreen()
//     {
//         green--;
//         calculateSum()
//     }
//     function calculateSum()
//     {
//         setBackground(`rgb(${red},${green},${blue})`)
//     }
//   return (
//       <>
//         <div className="flex w-full">
//             <div className="w-[50%] text-6xl text-center">
//                 <div className="red-box h-[33vh]">
//                     <div className="red-title">Red</div>
//                     <button onClick={addRED}>+</button>
//                     <button onClick={reduceRED}>-</button>
//                 </div>
//                 <div className="blue-box h-[33vh]">
//                 <div className="Blue-title">Blue</div>
//                     <button onClick={addBlue}>+</button>
//                     <button onClick={reduceBlue}>-</button>
//                 </div>
//                 <div className="green-box h-[33vh]">
//                 <div className="Green-title">Green</div>
//                     <button onClick={addGreen}>+</button>
//                     <button onClick={reduceGreen}>-</button>
//                 </div>
//             </div>
//             <div className={`w-[50%] flex flex-col justify-center`}>
//                 <div className="flex justify-center">
//                     <div className="w-[80%] h-44 text-center border-black border text-white text-5xl" style={{backgroundColor:`${background}`}}>{background}</div>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }
