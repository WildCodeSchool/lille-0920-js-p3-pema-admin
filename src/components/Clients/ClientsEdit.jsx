import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const ClientsEdit = props => {
  return (
    <Edit title="Modifiez votre projet" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="url" />
      </SimpleForm>
    </Edit>
  );
};

export default ClientsEdit;
