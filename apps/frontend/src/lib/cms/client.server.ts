import { createClient } from "@sanity/client";
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from "$env/static/public";

export const serverClient = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false,
});