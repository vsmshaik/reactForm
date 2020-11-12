import React, { useEffect } from 'react'
import {useDataLayerValue } from './DataLayer';
import Axios from 'axios';
import Auxilary from './../hoc/Auxilary';
import MUIDataTable from "mui-datatables";

const ExternalAPI = () => {
    const [{ users }, dispatch] = useDataLayerValue();
    useEffect(() =>{
        Axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
            // console.log(res.data);
            return dispatch({
                type: 'API',
                payload: res.data
            });
        })
    },[]);

    console.log(users);


    const columns = [
        {
         name: "name",
         label: "Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "username",
         label: "Username",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "email",
         label: "Email",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "website",
         label: "Website",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
          name: 'phone',
          label: "Phone",
          options: {
           filter: true,
           sort: false,
          }
         },
       ];
       const options = {
        filterType: 'checkbox',
      };
    

    return (
       
        <Auxilary>
        	 <MUIDataTable title={"JSON PlaceHolder"} columns={columns} data={users} options={options}/>
        </Auxilary>
        
    )
}

export default ExternalAPI
