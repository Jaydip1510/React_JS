import React from 'react'
const  FilterReduceFc = () => {
    const arr = [{
        name:"jaydip",
        age:26,
        salary:"20000"
    },
    {
        name:"alpesh",
        age:27,
        gender:"male"

    }];
    let arr1 = [1,2,3,4,5]
    const res1 = arr1.reduce((total,arr1)=> total + arr1)

    const result = arr.filter((i)=>{
        return i.name == "jaydip"
    })
    return (
        <div>
            <h3>Filter Function</h3>
            <ul>
                {
                    result.map((i,index)=>{
                        return <li key={index}>{i.name}</li>
                    })
                }
            </ul><hr />
            <h3>Reduce Function</h3>
            result is :- {res1}
        </div>
    );
}

export default FilterReduceFc;