import type { Middleware } from "openapi-fetch"
import createClient from "openapi-fetch"
import type { paths } from "./schema"
import { firebaseAuth } from "../auth/firebase"
import { onAuthStateChanged, type User } from "firebase/auth";

let authReadyPromise: Promise<User | null> | null = null;

const waitForAuthReady = (): Promise<User | null> => {
    if (authReadyPromise) {
        return authReadyPromise;
    }

    if (firebaseAuth.currentUser) {
        return Promise.resolve(firebaseAuth.currentUser);
    }

    authReadyPromise = new Promise<User | null>((resolve) => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            unsubscribe();
            authReadyPromise = null;

            resolve(user);
        });
    });

    return authReadyPromise;
};

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    let user = firebaseAuth.currentUser

    if (!user) {
      user = await waitForAuthReady()
    }

    if (!user) {
      return request
    }

    const token = await user.getIdToken()
    request.headers.set("Authorization", `Bearer ${token}`)
    return request
  },
}

export const api = createClient<paths>({
  baseUrl: import.meta.env.VITE_API_URL,
})

api.use(authMiddleware)