import PocketBase from "pocketbase";

export const pb = new PocketBase(import.meta.env.VITE_POCKETBASE);

export async function signUp(
  username: string,
  password: string,
  confirm: string
) {
  return pb.collection("users").create({
    email: username,
    password,
    passwordConfirm: confirm,
  });
}

export type Collection = "users" | "_superusers";
export async function login(
  username: string,
  password: string,
  collection: Collection = "users"
) {
  return pb.collection(collection).authWithPassword(username, password);
}

export async function logout() {
  return pb.authStore.clear();
}

export async function refresh(collection: Collection = "users") {
  return pb.collection(collection).authRefresh();
}

export async function isLoggedIn() {
  return !!pb.authStore.record;
}

export async function create(collection: "season" | "episode", args: Object) {
  return pb.collection(collection).create(args);
}
