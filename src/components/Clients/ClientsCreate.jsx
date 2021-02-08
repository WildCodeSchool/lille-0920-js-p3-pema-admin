import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const ClientsCreate = props => {
  return (
    <Create title="Ajoutez un projet" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="url" />
      </SimpleForm>
    </Create>
  );
};

export default ClientsCreate;
