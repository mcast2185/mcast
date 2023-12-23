import { createClient } from "next-sanity";

export const projectId = String(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
export const useCdn = false;

export const client = createClient({
  projectId: projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false
});