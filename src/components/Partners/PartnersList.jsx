import React from "react";
import {
  Datagrid,
  TextField,
  List,
  EditButton,
  DeleteButton,
  ImageField,
} from "react-admin";

const PartnersList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <ImageField source="url" />
        <EditButton basePath="/partners" />
        <DeleteButton label="Delete" basePath="/partners" />
      </Datagrid>
    </List>
  );
};

export default PartnersList;
