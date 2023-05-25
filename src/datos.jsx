import axios from 'axios'
import { useEffect, useState } from 'react';



const [data, setDatas] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:4000/subjects')
        .then(response => {
            const subjectsData = response.data.data;
            setDatas(subjectsData);
            console.log("console",subjectsData)
        }).catch(error => {
            console.error(error);
        });
    }, []);

return(data)