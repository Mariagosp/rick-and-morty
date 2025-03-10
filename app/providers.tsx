'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false, 
  },
  styles: {
    global: {
      body: {
        bg: "#0a0a0a", 
        color: "white", 
        minHeight: "100vh", 
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
  );
}