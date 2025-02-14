import React, { useState, useEffect } from "react";

export default function FakeStore(props) {
  const [data, setData] = useState([]); // Ensure initial state is an array

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Call the function properly inside useEffect
  }, []); // Dependency array to run only once when component mounts

  const filter = (e) => {
    var filtervalue = document.getElementById("filtertext").value;
    setData(data.filter((item) => item.title.includes(filtervalue)));
  }
  
  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Here is some sample product data from FakeStore API</h2>
      <input id="filtertext"></input><br></br>
      <button onClick={filter}>Filter</button>
      <p></p>
      <table className="table-default">
       <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th> 
            </tr>
        </thead>
        <tbody>
        {data.map((p) => (
        <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.title}</td>
            <td>{p.price}</td>
        </tr>
              ))}
              </tbody>
      </table>       
    </div>
  );
}
