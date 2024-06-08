const InnerAppContainer = ({ theme, children }) => {
    return (
        <div 
            className={`inner-app-container 
            ${ theme === 'green' ? 'green-theme' 
                : theme === 'red' ? 'red-theme' 
                    : theme === 'orange' ? 'orange-theme' 
                        : theme === 'yellow' ? 'yellow-theme' 
                            : theme === 'grayish' ? 'grayish-theme'
                            : '' }`}
        >
            {children}
        </div>
    )
}

export default InnerAppContainer