import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const TestimoniesEdit = (props) => {
  return (
    <Edit title="Modifiez votre projet" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};

export default TestimoniesEdit;
