import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

function DataTables(props) {
  const [stateData, setStateData] = useState([
    {
      id: 1,
      name: "Joe James",
      company: "Test Corp",
      city: "Yonkers",
      state: true,
    },
    {
      id: 2,
      name: "Hasibul Mahi",
      company: "Test Corp",
      city: "Hartford",
      state: false,
    },
    {
      id: 3,
      name: "Bob Herm",
      company: "Test Corp",
      city: "Tampa",
      state: true,
    },
    {
      id: 4,
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: false,
    },

    {
      id: 5,
      name: "Hasibul Mahi",
      company: "Test Corp",
      city: "Dallas",
      state: false,
    },
    {
      id: 6,
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: false,
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editCompany, setEditCompany] = useState("");
  const [editCity, setEditCity] = useState("");

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
        customBodyRender: (value, tableMeta) => {
          const rowIndex = tableMeta.rowIndex;
          return (
            <Switch
              checked={stateData[rowIndex].state}
              onChange={() => handleSwitchChange(rowIndex)}
              color="warning"
            />
          );
        },
      },
    },
    {
      name: "action",
      label: "Action",
      options: {
        filter: false,
        sort: false,
        setCellHeaderProps: (value) => ({
          style: {
            backgroundColor: "#ED028C",
            color: "#fff",
          },
        }),
        customBodyRender: (value, tableMeta) => {
          const rowIndex = tableMeta.rowIndex;
          return (
            <>
              <IconButton
                aria-label="Edit"
                color="primary"
                onClick={() => handleEditClick(rowIndex)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="Delete"
                color="secondary"
                onClick={() => handleDeleteClick(rowIndex)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  const handleSwitchChange = (rowIndex) => {
    const newData = [...stateData];
    newData[rowIndex].state = !newData[rowIndex].state;
    setStateData(newData);
  };

  const handleEditClick = (rowIndex) => {
    setEditIndex(rowIndex);
    setEditName(stateData[rowIndex].name);
    setEditCompany(stateData[rowIndex].company);
    setEditCity(stateData[rowIndex].city);
  };

  const handleEditSave = () => {
    const newData = [...stateData];
    newData[editIndex] = {
      ...newData[editIndex],
      name: editName,
      company: editCompany,
      city: editCity,
    };
    setStateData(newData);
    setEditIndex(null);
  };

  const handleDeleteClick = (rowIndex) => {
    const newData = [...stateData];
    newData.splice(rowIndex, 1);
    setStateData(newData);
  };

  const handleEditCancel = () => {
    setEditIndex(null);
  };

  return (
    <>
      <MUIDataTable
        title={"Category List"}
        data={stateData.map((item) => Object.values(item))}
        columns={columns}
        options={{
          print: false,
          selectableRows: false,
        }}
      />

      <Dialog open={editIndex !== null} onClose={handleEditCancel}>
        <DialogTitle>Edit Row</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <TextField
            label="Company"
            value={editCompany}
            onChange={(e) => setEditCompany(e.target.value)}
          />
          <TextField
            label="City"
            value={editCity}
            onChange={(e) => setEditCity(e.target.value)}
          />
        </DialogContent>
        <Box style={{ padding: "16px" }}>
          <Button variant="contained" color="primary" onClick={handleEditSave}>
            Save
          </Button>
          <Button
            sx={{
              ml: 2,
            }}
            variant="contained"
            color="secondary"
            onClick={handleEditCancel}
          >
            Cancel
          </Button>
        </Box>
      </Dialog>
    </>
  );
}

export default DataTables;
