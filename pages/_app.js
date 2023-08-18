import '@/styles/globals.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';


import { Plus_Jakarta_Sans } from 'next/font/google'
 
const plusJakartaSans = Plus_Jakarta_Sans({
  weight: '400',
  subsets: ['latin'],
})



const theme = createTheme({
  typography: {
    fontFamily: ['Plus Jakarta Sans'].join(','),
  },
  palette: {
    primary: {
      main: '#000',
    },
  },
});


export default function App({ Component, pageProps }) {
  console.log({plusJakartaSans})
  return  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}