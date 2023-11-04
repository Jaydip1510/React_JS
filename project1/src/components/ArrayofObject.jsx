import React from "react";

const ArrayOfobject = () => {
    const student = [{
         Roll_No : 7,
         name : "jaydip",
         age : "26",
         gender :"male",
         address : "panshina"
    }]
    return (
        <div>
              <h5>StudentInformation</h5>
              
                {
                    student.map((i)=>{
                        return (
                            <div>
                                <h4>Roll_No :- {i.Roll_No}</h4>
                                <h4>name is:-{i.name}</h4>
                                <h4>Age is :-{i.age}</h4>
                                <h4>Gender is:-{i.gender}</h4>
                                <h4>Address is:-{i.address}</h4><hr/>
                            </div>
                            
                        )
                    })
                }
              
        </div>
    )
}

export default ArrayOfobject