import { project } from './documents/project'
import { label } from './objects/label'
import { marqueeItem } from './objects/marqueeItem'
import { homePage } from './pages/homePage'
import { aboutSection } from './sections/aboutSection'
import { marqueeSection } from './sections/marqueeSection'
import { textRevealSection } from './sections/textRevealSection'
import { textPopupSection } from './sections/textPopupSection'

export const schemaTypes = [
  // documents
  homePage,
  project,
  marqueeSection,
  aboutSection,
  textRevealSection,
  textPopupSection,
  
  // objects
  label,
  marqueeItem
]
