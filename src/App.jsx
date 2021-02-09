import React from "react";
import { Admin, Resource } from "react-admin";

import ChaptersCreate from "./components/Chapters/ChaptersCreate";
import ChaptersEdit from "./components/Chapters/ChaptersEdit";
import ChaptersList from "./components/Chapters/ChaptersList";
import ClientsCreate from "./components/Clients/ClientsCreate";
import ClientsEdit from "./components/Clients/ClientsEdit";
import ClientsList from "./components/Clients/ClientsList";
import PartnersCreate from "./components/Partners/PartnersCreate";
import PartnersEdit from "./components/Partners/PartnersEdit";
import PartnersList from "./components/Partners/PartnersList";
import TestimoniesCreate from "./components/Testimonies/TestimoniesCreate";
import TestimoniesEdit from "./components/Testimonies/TestimoniesEdit";
import TestimoniesList from "./components/Testimonies/TestimoniesList";
import ThirdChapterCreate from "./components/ThirdChapter/ThirdChapterCreate";
import ThirdChapterEdit from "./components/ThirdChapter/ThirdChapterEdit";
import ThirdChapterList from "./components/ThirdChapter/ThirdChapterList";
import TimelineEdit from "./components/Timeline/TimelineEdit";
import TimelineList from "./components/Timeline/TimelineList";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";

const App = () => {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
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
      <Resource
        name="partners"
        list={PartnersList}
        edit={PartnersEdit}
        create={PartnersCreate}
      />
    </Admin>
  );
};

export default App;
