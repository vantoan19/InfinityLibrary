import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useLayoutEffect,
} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import MockAccount from "../mocks/Account/Account"

type AuthenticateProviderProps = {
  children: ReactNode
}

type AuthenticateContext = {
  isAuthenticate?: boolean
  setIsAuthenticate: React.Dispatch<React.SetStateAction<boolean | undefined>>
  login: (payload: any) => boolean
  logout: () => void
}

const AuthenticateContext = createContext({} as AuthenticateContext)

export function useAuthenticateContext() {
  return useContext(AuthenticateContext)
}

export function AuthenticateProvider({ children }: AuthenticateProviderProps) {
  const [isAuthenticate, setIsAuthenticate] = useState<undefined | boolean>()

  useLayoutEffect(() => {
    const getItemStorage = async () => {
      const res = await AsyncStorage.getItem("user")
      const value = res === null ? false : res
      if (value) {
        setIsAuthenticate(true)
      } else {
        setIsAuthenticate(false)
      }
    }
    getItemStorage()
  }, [])

  const login = (payload: any) => {
    if (payload === JSON.stringify(MockAccount)) {
      AsyncStorage.setItem("user", payload)
      setIsAuthenticate(true)
      return true
    }
    return false
  }

  const logout = () => {
    AsyncStorage.clear()
    setIsAuthenticate(false)
  }

  return (
    <AuthenticateContext.Provider
      value={{ isAuthenticate, setIsAuthenticate, login, logout }}
    >
      {children}
    </AuthenticateContext.Provider>
  )
}
