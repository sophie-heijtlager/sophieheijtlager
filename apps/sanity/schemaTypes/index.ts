import { project } from './documents/project'
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
  
  // objects
  label,
  marqueeItem
]
