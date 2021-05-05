import { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Main from '../components/Main'
import Content from '../components/Content'
import Article from '../components/Article'
import Footer from '../components/Footer'
import { lightTheme, darkTheme } from '../utils/Theme'
import { ThemeContext } from '../Context/ThemeContext';
import { Button } from "@chakra-ui/react"

export default function Home() {
  const [ isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode);

  return (
    <ThemeContext.Provider value={{lightTheme, darkTheme, isDarkMode}}>
      <Header>
        <Navigation />
        <h1 style={{ paddingTop: "25px" }}>Magia Context API</h1>
        <Button onClick={() =>setIsDarkMode(!isDarkMode)}>Toggle dark mode</Button>
      </Header>
      <Main>
        <Content>
          <Article />
        </Content>
      </Main>
      <Footer />
    </ThemeContext.Provider>
  );
}
