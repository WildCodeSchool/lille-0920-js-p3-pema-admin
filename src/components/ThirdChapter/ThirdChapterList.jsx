import React from "react";
import {
  Datagrid,
  TextField,
  List,
  EditButton,
  DeleteButton,
} from "react-admin";

const ThirdChapterList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="paragraph" />
        <EditButton basePath="/thirdchapters" />
        <DeleteButton label="Delete" basePath="/thirdchapters" />
      </Datagrid>
    </List>
  );
};

export default ThirdChapterList;
