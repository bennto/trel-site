import { Directus } from "@directus/sdk";

const directus = new Directus(process.env.directusUrl);

const email = process.env.directusUser;
const password = process.env.directusPass;
const token = process.env.directusToken;

async function getDirectusClient() {
  if (email && password) {
    await directus.auth.login({ email, password });
  } else if (token) {
    await directus.auth.static(token);
  }
  return directus;
}

export { getDirectusClient };
