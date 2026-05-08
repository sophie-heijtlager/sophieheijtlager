import groq from "groq";


export const projectsQuery = groq`*[_type == "project"]{
  _id,
  title,
  labels
}`;
