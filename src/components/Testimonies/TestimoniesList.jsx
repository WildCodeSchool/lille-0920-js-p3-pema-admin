import React from "react";
import {
  Datagrid,
  TextField,
  List,
  EditButton,
  DeleteButton,
} from "react-admin";

const TestimoniesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="text" />
        <EditButton basePath="/testimonies" />
        <DeleteButton label="Delete" basePath="/testimonies" />
      </Datagrid>
    </List>
  );
};

export default TestimoniesList;
