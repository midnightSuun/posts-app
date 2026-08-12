import type { Middleware } from "openapi-fetch"
import createClient from "openapi-fetch"
import type { paths } from "./schema"
import { firebaseAuth } from "../auth/firebase"

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const user = firebaseAuth.currentUser
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