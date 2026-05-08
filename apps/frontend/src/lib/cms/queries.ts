import groq from 'groq';

export const projectsQuery = groq`*[_type == "project"]{
  _id,
  title,
  labels
}`;

export const homePageQuery = groq`*[_type == "homepage"]{
  _id,
  title,
  sections[]{
    _key,
    _type,
    _type == 'about' => {
      _id,
      title,
      description,
      labels[]{
        text,
        color,
        icon,
        border
      },
      images[]
    }
  }
}`;
