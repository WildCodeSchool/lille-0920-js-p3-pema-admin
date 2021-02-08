import React from "react";
import { Admin, Resource } from "react-admin";

import dataProvider from "./dataProvider";
import TimelineList from "./components/Timeline/TimelineList";
import TimelineEdit from "./components/Timeline/TimelineEdit";
import ChaptersList from "./components/Chapters/ChaptersList";
import ChaptersEdit from "./components/Chapters/ChaptersEdit";
import ChaptersCreate from "./components/Chapters/ChaptersCreate";
import ClientsList from "./components/Clients/ClientsList";
import ClientsEdit from "./components/Clients/ClientsEdit";
import ClientsCreate from "./components/Clients/ClientsCreate";
import ThirdChapterList from "./components/ThirdChapterList";
import ThirdChapterEdit from "./components/ThirdChapterEdit";
import ThirdChapterCreate from "./components/ThirdChapterCreate";
import TestimoniesCreate from "./components/Testimonies/TestimoniesCreate";
import TestimoniesList from "./components/Testimonies/TestimoniesList";
import TestimoniesEdit from "./components/Testimonies/TestimoniesEdit";

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="timeline" list={TimelineList} edit={TimelineEdit} />
      <Resource
        name="chapters"
        list={ChaptersList}
        edit={ChaptersEdit}
        create={ChaptersCreate}
      />
      <Resource
        name="thirdchapters"
        list={ThirdChapterList}
        edit={ThirdChapterEdit}
        create={ThirdChapterCreate}
      />
      <Resource
        name="clients"
        list={ClientsList}
        edit={ClientsEdit}
        create={ClientsCreate}
      />
      <Resource
        name="testimonies"
        list={TestimoniesList}
        edit={TestimoniesEdit}
        create={TestimoniesCreate}
      />
    </Admin>
  );
};

export default App;
