import { HomeIcon } from "@sanity/icons";
import { StructureBuilder } from "sanity/structure";

export const structure = {
  name: 'structure',
  title: "Structure",
  structure: (S: StructureBuilder) => S.list()
  .title("Content")
  .items([
    homePageListItem(S),
    S.divider(),
    projectsListItem(S),
    marqueesListItem(S)
  ])
}

const homePageListItem = (S: StructureBuilder) => S.listItem()
    .title('Homepage')
    .child(S.document().schemaType('homepage').documentId('homePage'))
    .icon(HomeIcon);

const projectsListItem = (S: StructureBuilder) => S.documentTypeListItem('project')
const marqueesListItem = (S: StructureBuilder) => S.documentTypeListItem('marquee')