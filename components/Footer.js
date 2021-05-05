import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';

const Footer = () => {
    const { lightTheme, darkTheme, isDarkMode } = useContext(ThemeContext)
    return (
        <div style={{color: isDarkMode ? lightTheme.colors.textColor : darkTheme.colors.textColor, fontSize: isDarkMode ? lightTheme.sizes.xl : darkTheme.sizes.xl, fontWeight: 700}}>Footer</div>
    )
}

export default Footer;