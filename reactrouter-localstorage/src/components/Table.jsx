import React, { useState,useEffect  } from "react";

function Table() {
  const [alldata, setAlldata] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('empInfo'));
    if (storedData) {
      setAlldata(storedData);
    }
  }, []);

  const deleteinfo = (indexToDelete) => {
    const updatedData = alldata.filter((item, index) => index !== indexToDelete);
    setAlldata(updatedData);
    localStorage.setItem('empInfo', JSON.stringify(updatedData));
  };
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata
            ? alldata.map((i, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.email}</td>
                    <td><button className="btn btn-danger" type="button" onClick={() => deleteinfo(index)}>Delete</button></td>
                  </tr>
                );
              })
            : "nono"}
        </tbody>
      </table>
    </div>
  );
}

export default Table;