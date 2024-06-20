import { GoCheck } from 'react-icons/go';

const ThemeSelector = ({ themes }) => {

    return (
        themes && themes.map((theme, index) => (
            <div key={index} className="theme-selector" onClick={theme.onHandleTheme} role="button">
                <div className={`theme-selector-box ${theme.activeClassName}`}>
                    <div className="theme-selector-box-inner">
                        <span><GoCheck /></span>
                    </div>
                </div>
                <h4>{theme.label}</h4>
            </div>
        ))
    )
}

export default ThemeSelector