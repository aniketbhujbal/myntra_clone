import React, { useEffect, useState } from 'react'
import data from '../../Data.json';
import style from './trendingpicks.module.css'
function TrendiestPicks() {
    
  const [jsondata, setjsonData] = useState([])
  const fetchimages= async()=>{
    try {
         
         const resp= await fetch("https://myntra-data.onrender.com/trendiestPicks")
         const data = await resp.json();
         setjsonData(data);
         console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    useEffect(() => {
        fetchimages()
         console.log("aaaa",data)
    }, [data])

    // useEffect(() => {
    //   // Define the URL of your API endpoint on Render
    //   const apiUrl = "https://myntra-data.onrender.com/trendiestPicks";
  
    //   // Fetch the JSON data
    //   fetch(apiUrl)
    //     .then((response) => response.json())
    //     .then((data) => setjsonData(data))
    //     .catch((error) => console.error('Error fetching JSON data:', error));
    // }, []);
  return (
    <div>
        <div >
            <h2>Trendiest Picks</h2>
        </div>
   
    <div className={style.grid}>
    {
        jsondata && jsondata.map((item)=>(
            <div key={item.key}>
                    <img src={item.image} alt={`pick ${item.key}`} />
            </div>
        ))
    }

    </div>
    </div>
  )
}

export default TrendiestPicks