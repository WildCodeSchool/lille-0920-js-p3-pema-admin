import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const TimelineEdit = props => {
  return (
    <Edit title="Modifiez votre projet" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="paragraphe" />
      </SimpleForm>
    </Edit>
  );
};

export default TimelineEdit;
