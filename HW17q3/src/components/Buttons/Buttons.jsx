import { useState } from "react"
export default function Buttons() {
    let red=149
    let blue=149
    let green=149
    let [background , setBackground]=useState(`rgb(${red},${green},${blue})`)
    // let rgb=`rgb(${red},${green},${blue})`
    function addRED()
    {
        red++;
        calculateSum()
    }
    function reduceRED()
    {
        red--;
        calculateSum()
    }
    function addBlue()
    {
        blue++;
        calculateSum()
    }
    function reduceBlue()
    {
        blue--;
        calculateSum()
    }
    function addGreen()
    {
        green++;
        calculateSum()
    }
    function reduceGreen()
    {
        green--;
        calculateSum()
    }
    function calculateSum()
    {
        setBackground(`rgb(${red},${green},${blue})`)
    }
  return (
      <>
        <div className="flex w-full">
            <div className="w-[50%] text-6xl text-center">
                <div className="red-box h-[33vh]">
                    <div className="red-title">Red</div>
                    <button onClick={addRED}>+</button>
                    <button onClick={reduceRED}>-</button>
                </div>
                <div className="blue-box h-[33vh]">
                <div className="Blue-title">Blue</div>
                    <button onClick={addBlue}>+</button>
                    <button onClick={reduceBlue}>-</button>
                </div>
                <div className="green-box h-[33vh]">
                <div className="Green-title">Green</div>
                    <button onClick={addGreen}>+</button>
                    <button onClick={reduceGreen}>-</button>
                </div>
            </div>
            <div className={`w-[50%] flex flex-col justify-center`}>
                <div className="flex justify-center">
                    <div className="w-[80%] h-44 text-center border-black border text-white text-5xl" style={{backgroundColor:`${background}`}}>{background}</div>
                </div>
            </div>
        </div>
    </>
  )
}
