import { useMutation } from '@tanstack/react-query'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from './firebase'

type Params = {
    email: string,
    password: string
}

const mutationFn = async ({ email, password }: Params) => {
  const credential = await signInWithEmailAndPassword(firebaseAuth, email, password)

  return credential.user
}

export const useSignInWithCredentials = () => useMutation({ mutationFn })