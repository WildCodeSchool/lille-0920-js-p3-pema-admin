import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const ProjetsCreate = props => {
  return (
    <Create title="Ajoutez un projet" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput source="first_paragraph" />
        <TextInput source="second_paragraph" />
      </SimpleForm>
    </Create>
  );
};

export default ProjetsCreate;
