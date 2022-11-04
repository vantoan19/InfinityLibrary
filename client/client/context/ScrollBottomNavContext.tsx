import { createContext, ReactNode, useContext, useState } from "react"

type ScrollBottomNavProviderProps = {
  children: ReactNode
}

type ScrollBottomNavContext = {
  scrollHide: any
  setScrollHide: any
}

const ScrollBottomNavContext = createContext({} as ScrollBottomNavContext)

export function useScrollBottomNavContext() {
  return useContext(ScrollBottomNavContext)
}

export function ScrollBottomNavProvider({
  children,
}: ScrollBottomNavProviderProps) {
  const [scrollHide, setScrollHide] = useState(false)

  return (
    <ScrollBottomNavContext.Provider value={{ scrollHide, setScrollHide }}>
      {children}
    </ScrollBottomNavContext.Provider>
  )
}
