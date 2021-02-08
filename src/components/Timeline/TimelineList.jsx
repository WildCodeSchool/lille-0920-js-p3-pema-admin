import React from "react";
import {
  Datagrid,
  TextField,
  List,
  EditButton,
  DeleteButton,
} from "react-admin";

const TimelineList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="paragraph" />
        <EditButton basePath="/timeline" />
        <DeleteButton label="Delete" basePath="/timeline" />
      </Datagrid>
    </List>
  );
};

export default TimelineList;
