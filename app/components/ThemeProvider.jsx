"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export default ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}