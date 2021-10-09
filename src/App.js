import React, {useState, useEffect} from "react"
import axios from "axios";

function App() {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/paintings")
        .then(res => {
          console.log(res.data);
          setPaintings(res.data);
        },[])
  })

  return (
    <div style={{ display: "flex", flexFlow: "row wrap", }}>
        {paintings.map(painting => (
            <div style={{ margin: 5, textAlign: "center" }}>
                <img width="300" height="299" src={painting.image} alt={painting.name}/>
                <p style={{ fontWeight: 900 }}>{painting.name} - {painting.artist}</p>
                <p style={{ fontWeight: 700 }}>${painting.price}</p>
            </div>
        ))}
    </div>
  );
}

export default App;
