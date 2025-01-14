import PocketBase from "pocketbase";

export const pb = new PocketBase(import.meta.env.VITE_POCKETBASE);

export async function login(username: string, password: string) {
  return pb.collection("users").authWithPassword(username, password);
}

export async function logout() {
  return pb.authStore.clear();
}

export async function refresh() {
  return pb.collection("users").authRefresh();
}
