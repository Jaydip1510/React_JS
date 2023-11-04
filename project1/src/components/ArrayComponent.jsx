import React from "react";

const ArrayComponent = () => {
    let arr = [11,22,33,44,55];
    let arr2 = [10,20,30,40,50];
    let arr3 = [11,22,33,44,55];
    let array = [...arr2,...arr3];

    let year = [2001,2005,2012,2020]
    const tot = arr2.reduce((total,arr2) => total + arr2)
    const result = arr.filter ((i) =>{
         return i == 44;
    })

    return (
       <div>
               <h5>Array List</h5>
               <ul>
                {
                  arr.map((i)=>{
                    return <li>{i}</li>
                  })
                }
               </ul><hr/>
               <h5>Array Sum</h5>
               Array Sum is :- {tot} <hr />
               <h5>
                   <ul>
                    {result} is found.
                   </ul>
               </h5><hr />
               <h5>Even Array List</h5>
               <ul>
                {
                  arr3.map((i)=>{
                    return i % 2 ? '' :<li>{i}</li>
                  })
                }
               </ul><hr/>
               <h5>Odd Array List</h5>
               <ul>
                {
                  arr3.map((i)=>{
                    return i % 2 ? <li>{i}</li>:''
                  })
                }
               </ul><hr/>
               <h5>Leap Year</h5>
               <ul>
                {
                  year.map((i)=>{
                    return i % 4 ? '' :<li>{i}</li>
                  })
                }
               </ul><hr/>
               <h5>Marge Array</h5>
               <ul>
                    {
                        array.map((i)=>{
                            return <li>{i}</li>
                        })
                    }
                </ul><hr/>

       </div>
    )
}

export default ArrayComponent


