import React from "react";
import MUIDataTable from "mui-datatables";

function DataTables(props) {
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: false,
        sort: false,
        setCellHeaderProps: (value) => ({
          style: {
            backgroundColor: "#ED028C",
            color: "#fff",
          },
        }),
      },
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: false,
        sort: false,
        setCellHeaderProps: (value) => ({
          style: {
            backgroundColor: "#ED028C",
            color: "#fff",
          },
        }),
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: false,
        sort: false,
        setCellHeaderProps: (value) => ({
          style: {
            backgroundColor: "#ED028C",
            color: "#fff",
          },
        }),
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: false,
        sort: false,
        setCellHeaderProps: (value) => ({
          style: {
            backgroundColor: "#ED028C",
            color: "#fff",
          },
        }),
      },
    },
  ];

  const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
  ];

  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
      options={{
        print: false,
        selectableRows: false,
      }}
    />
  );
}

export default DataTables;
