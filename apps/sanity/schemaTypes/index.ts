import {project} from './documents/project'
import { label } from './objects/label'
import { homePage } from './pages/homePage'
import { aboutSection } from './sections/aboutSection'
import { textRevealSection } from './sections/textRevealSection'
import { textPopupSection } from './sections/textPopupSection'

export const schemaTypes = [
  // documents
  homePage,
  project,
  aboutSection,
  textRevealSection,
  textPopupSection,
  
  // objects
  label
]
