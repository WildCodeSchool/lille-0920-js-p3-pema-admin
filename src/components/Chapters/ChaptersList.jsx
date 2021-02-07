import React from "react";
import {
  Datagrid,
  TextField,
  List,
  EditButton,
  DeleteButton,
} from "react-admin";

const ChaptersList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="first_paragraph" />
        <TextField source="second_paragraph" />
        <EditButton basePath="/chapters" />
        <DeleteButton label="Delete" basePath="/chapters" />
      </Datagrid>
    </List>
  );
};

export default ChaptersList;
