import { project } from './documents/project'
import { footer } from './documents/footer'
import { header } from './documents/header'
import { marquee } from './documents/marquee'
import { timelineCards } from './documents/timelineCards'
import { label } from './objects/label'
import { marqueeItem } from './objects/marqueeItem'
import { homePage } from './pages/homePage'
import { aboutSection } from './sections/aboutSection'
import { marqueeSection } from './sections/marqueeSection'
import { textRevealSection } from './sections/textRevealSection'
import { textPopupSection } from './sections/textPopupSection'
import { myCareerSection } from './sections/myCareerSection'
import { certificatesSection } from './sections/certificatesSection'
import { heroSection } from './sections/heroSection'
import { socials } from './objects/socials'
import { certificateCards } from './documents/certificateCards'

export const schemaTypes = [
  // documents
  homePage,
  project,
  timelineCards,
  marquee,
  myCareerSection,
  marqueeSection,
  aboutSection,
  textRevealSection,
  textPopupSection,
  heroSection,
  certificatesSection,
  footer,
  header,
  
  // objects
  label,
  marqueeItem,
  socials,
  certificateCards
]
