import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';

const Header = ({children}) => {
    const { lightTheme, darkTheme, isDarkMode } = useContext(ThemeContext)
    return (
        <div style={{fontSize: isDarkMode ? lightTheme.sizes.xl : darkTheme.sizes.xl}}>{children}</div>
    )
}

export default Header;