import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from "$env/static/public";

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false,
});