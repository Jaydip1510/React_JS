import React from 'react'

const FirstComponent = () =>{
    // Find area of circle 
       
         const areaofcircle = () =>{
         const pi = 3.14;
         const r = 5;
         const area = pi * r * r;
         return area;
         }
    // Find area of Rectanle 
         const areaofrectangle = () => {
            const len = 8;
            const width = 15;
            const rectangle = len * width;
            return rectangle;
         }
    // Find area of Triangle
         const areaoftriangle = () => {
           const a = 5;
           const b = 10;
           const c = (a * b) / 2;
           return c;
         }

         return (
            <div>
                <h4>Area of circle is :- {areaofcircle()}</h4>
                <h4>Area of Rectangle is :- {areaofrectangle()}</h4>
                <h4>Area of triangle is :- {areaoftriangle()}</h4><hr />
            </div>
         )
    
}

export default FirstComponent

