import groq from 'groq';

export const projectsQuery = groq`*[_type == "project"]{
  _id,
  title,
  labels
}`;

  export const homePageQuery = groq`*[_type == "homepage"][0]{
    _id,
    title,
    sections[]{
      _key,
      _type,
      _type == 'about' => {
        _id,
        title,
        descriptions[],
        labels[]{
          text,
          color,
          icon,
          border
        },
        images[] {
          asset,
          "imageUrl": asset->url
        }
      },
      _type == 'textReveal' => {
        _id,
        text
      },
      _type == 'textPopup' => {
        _id,
        titles[],
        labels[]{
          text,
          color,
          icon,
          border
        },
      }
    }
  }`;
