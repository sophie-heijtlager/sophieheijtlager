import { serverClient } from "$lib/cms/client.server"
import { projectsQuery } from "$lib/cms/queries";

export const load = async () => {
  const projects = await serverClient.fetch(projectsQuery);

  return {
    projects,
  }
}