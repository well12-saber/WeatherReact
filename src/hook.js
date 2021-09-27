import React, { useEffect,useState} from 'react';

export const FetchDataHook=()=> {
    const [lat,setLat]=useState([]);
    const [lon,setLon]=useState([]);
    const [data,setData]=useState([]);
    //API DATA
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = process.env.REACT_APP_API_URL;
    
    useEffect(()=>{
        const fetchData=async ()=>{

            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            });
            
            await fetch(`${API_URL}/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
            .then((res)=>res.json())
            .then(result =>{
                setData(result);
            });
        }
        
        fetchData();
    }, [lat,lon,API_URL,API_KEY]);

    return {data};

};