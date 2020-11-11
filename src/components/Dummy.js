import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Axios from "axios";

const Dummy = () =>{
    const [data, setData] = useState([]);
    useEffect(() => {
      Axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
        setData(res.data)
      );
    }, []);
//   const columns = [
//     {
//       name: "name",
//       label: "name"
//     },
//     {
//       name: "email",
//       label: "email"
//     },
//     {
//       name: "phone",
//       label: "phone"
//     }
//   ];

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
console.log(data);
//    const data = [
//     { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
//     { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
//     { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
//     { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
//    ];

   const options = {
    filterType: 'checkbox',
  };



//   const items = data.map(
//     (single) => single.name + "," + single.email + "," + single.website
//   );
//   console.log(data);
//   const single = JSON.parse("[" + items + "]");
//   console.log(single);
//   const simple = single.join(" ,");
//   console.log(simple);

  // const usingSplit = single.split(/[ ,]+/).join();
  // console.log(usingSplit);

  return (
    <>
      <MUIDataTable title={"JSON PlaceHolder"} columns={columns} data={data} options={options}/>
    </>
  );
}

export default Dummy;