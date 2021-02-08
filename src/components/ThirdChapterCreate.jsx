import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const ThirdChapterCreate = (props) => {
  return (
    <Create title="Ajouter un paragraphe" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="paragraphe" />
      </SimpleForm>
    </Create>
  );
};

export default ThirdChapterCreate;
