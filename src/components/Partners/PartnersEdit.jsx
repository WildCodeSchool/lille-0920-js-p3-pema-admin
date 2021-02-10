import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const PartnersEdit = (props) => {
  return (
    <Edit title="Modifiez votre projet" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput multiline source="url" />
      </SimpleForm>
    </Edit>
  );
};

export default PartnersEdit;
