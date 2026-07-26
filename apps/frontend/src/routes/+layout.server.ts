import { serverClient } from "$lib/cms/client.server"
import { projectsQuery } from "$lib/cms/queries";
import { footerQuery } from "$lib/cms/queries";

export const load = async () => {
  const projects = await serverClient.fetch(projectsQuery);
  const footer = await serverClient.fetch(footerQuery);

  return {
    projects,
    footer
  }
}