import React, { useState } from "react";

import MaterialTable from 'material-table'


function Tables() {
  // const columns = ["Name", "Company", "City", "State"];
  
  // const data = [
  //  ["Joe James", "Test Corp", "Yonkers", "NY"],
  //  ["John Walsh", "Test Corp", "Hartford", "CT"],
  //  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  //  ["James Houston", "Test Corp", "Dallas", "TX"],
  // ];
  
  // const options = {
  //   filterType: 'checkbox',
  // };
  
  // const [responsive, setResponsive] = useState("vertical");
  // const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  // const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");

  // const columns = ["Name", "Title", "Location"];

  // const options = {
  //   filter: true,
  //   filterType: "dropdown",
  //   responsive,
  //   tableBodyHeight,
  //   tableBodyMaxHeight
  // };

  // const data = [
  //   ["Gabby George", "Business Analyst", "Minneapolis"],
  //   [
  //     "Aiden Lloyd",
  //     "Business Consultant for an International Company and CEO of Tony's Burger Palace",
  //     "Dallas"
  //   ],
  //   ["Jaden Collins", "Attorney", "Santa Ana"],
  //   ["Franky Rees", "Business Analyst", "St. Petersburg"],
  //   ["Aaren Rose", null, "Toledo"],
  //   ["Johnny Jones", "Business Analyst", "St. Petersburg"],
  //   ["Jimmy Johns", "Business Analyst", "Baltimore"],
  //   ["Jack Jackson", "Business Analyst", "El Paso"],
  //   ["Joe Jones", "Computer Programmer", "El Paso"],
  //   ["Jacky Jackson", "Business Consultant", "Baltimore"],
  //   ["Jo Jo", "Software Developer", "Washington DC"],
  //   ["Donna Marie", "Business Manager", "Annapolis"]
  // ];



  return (

    <div style={{ maxWidth: '100%' }}>
    <MaterialTable
      columns={[
        { title: 'Adı', field: 'name' },
        { title: 'Soyadı', field: 'surname' },
        { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
        { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
      ]}
      data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
      title="Demo Title"
    />
  </div>
    // <React.Fragment>
    //   <FormControl>
    //     <InputLabel id="demo-simple-select-label">Responsive Option</InputLabel>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       value={responsive}
    //       style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
    //       onChange={(e) => setResponsive(e.target.value)}
    //     >
    //       <MenuItem value={"vertical"}>vertical</MenuItem>
    //       <MenuItem value={"standard"}>standard</MenuItem>
    //       <MenuItem value={"simple"}>simple</MenuItem>

    //       <MenuItem value={"scroll"}>scroll (deprecated)</MenuItem>
    //       <MenuItem value={"scrollMaxHeight"}>
    //         scrollMaxHeight (deprecated)
    //       </MenuItem>
    //       <MenuItem value={"stacked"}>stacked (deprecated)</MenuItem>
    //     </Select>
    //   </FormControl>
    //   <FormControl>
    //     <InputLabel id="demo-simple-select-label">Table Body Height</InputLabel>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       value={tableBodyHeight}
    //       style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
    //       onChange={(e) => setTableBodyHeight(e.target.value)}
    //     >
    //       <MenuItem value={""}>[blank]</MenuItem>
    //       <MenuItem value={"400px"}>400px</MenuItem>
    //       <MenuItem value={"800px"}>800px</MenuItem>
    //       <MenuItem value={"100%"}>100%</MenuItem>
    //     </Select>
    //   </FormControl>
    //   <MUIDataTable
    //     title={"ACME Employee list"}
    //     data={data}
    //     columns={columns}
    //     options={options}
    //   />
    // </React.Fragment>
  );
}

export default Tables;
