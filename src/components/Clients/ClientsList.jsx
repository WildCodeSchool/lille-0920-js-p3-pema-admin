import React from "react";
import {
  Datagrid,
  TextField,
  ImageField,
  List,
  EditButton,
  DeleteButton,
} from "react-admin";

const ClientList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <ImageField source="url" />
        <EditButton basePath="/clients" />
        <DeleteButton label="Delete" basePath="/clients" />
      </Datagrid>
    </List>
  );
};

export default ClientList;
