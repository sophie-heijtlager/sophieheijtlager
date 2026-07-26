import groq from 'groq';

export const projectsQuery = groq`*[_type == "project"]{
  _id,
  title,
  labels
}`;

export const footerQuery = groq`*[_type == "footer"][0]{
  _id,
  contact_title,
  contact_text,
  menu_items[],
  socials,
  logo
}`

  export const homePageQuery = groq`*[_type == "homepage"][0]{
    _id,
    title,
    sections[]{
      _key,
      _type,
      _type == 'homeHero' => {
        titles[],
        images[] {
          asset,
          "imageUrl": asset->url
        },
        label,
      },
      _type == 'marqueeSection' => {
        _id,
        title,
        marquees[] -> {
          color_scheme,
          rotation,
          items[] -> {title, show_info, level}
        }
      },
      _type == 'myCareer' => {
        _id,
        title,
        paragraph,
        timelineCards[] -> {
          image {
            "imageUrl": asset->url
          },  
          labels[] {
          text,
          color,
          icon,
          border
          }, 
          years, 
          heading, 
          description
        }
      },
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
