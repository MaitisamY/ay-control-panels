import '../styles/themeSettings.css';

import { useEffect, useRef } from 'react';
import useThemeContainerStore from '../stores/useThemeContainerStore.js';
import useThemeStore from '../stores/useThemeStore.js';
import { CSSTransition } from 'react-transition-group';
import { GoX, GoCheck } from 'react-icons/go';
import { FcServices, FcAbout } from 'react-icons/fc';
import { TfiBell } from 'react-icons/tfi';

function ThemeSettings() {
    const { isOpen, toggleThemeContainer } = useThemeContainerStore();
    const { theme, setTheme } = useThemeStore();

    const ref = useRef(null);
    const nodeRef = useRef(null); 

    const handleOutsideClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            toggleThemeContainer();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="theme-container"
            unmountOnExit
            nodeRef={nodeRef} 
        >
            <div ref={nodeRef} className="theme-container"> 
                <div className="elements-holder" ref={ref}> 
                    <a className="close-btn" onClick={toggleThemeContainer}><GoX /></a>
                    <h2>Theme settings <FcServices /></h2>

                    <div className="selection-container">
                        <div className="theme-selector" onClick={() => setTheme('default')} role="button">
                            <div className={`theme-selector-box ${theme === 'default' ? 'active' : ''}`}>
                                <div className="theme-selector-box-inner">
                                    <span><GoCheck /></span>
                                </div>
                            </div>
                            <label>Default</label>
                        </div>

                        <div className="theme-selector" onClick={() => setTheme('green')} role="button">
                            <div className={`theme-selector-box ${theme === 'green' ? 'active' : ''}`}>
                                <div className="theme-selector-box-inner">
                                    <span><GoCheck /></span>
                                </div>
                            </div>
                            <label>Green</label>
                        </div>

                        <div className="theme-selector" onClick={() => setTheme('red')} role="button">
                            <div className={`theme-selector-box ${theme === 'red' ? 'active' : ''}`}>
                                <div className="theme-selector-box-inner">
                                    <span><GoCheck /></span>
                                </div>
                            </div>
                            <label>Red</label>
                        </div>

                        <div className="theme-selector" onClick={() => setTheme('orange')} role="button">
                            <div className={`theme-selector-box ${theme === 'orange' ? 'active' : ''}`}>
                                <div className="theme-selector-box-inner">
                                    <span><GoCheck /></span>
                                </div>
                            </div>
                            <label>Orange</label>
                        </div>

                        <div className="theme-selector" onClick={() => setTheme('yellow')} role="button">
                            <div className={`theme-selector-box ${theme === 'yellow' ? 'active' : ''}`}>
                                <div className="theme-selector-box-inner">
                                    <span><GoCheck /></span>
                                </div>
                            </div>
                            <label>Yellow</label>
                        </div>

                        <div className="theme-selector" onClick={() => setTheme('black&white')} role="button">
                            <div className={`theme-selector-box ${theme === 'black&white' ? 'active' : ''}`}>
                                <div className="theme-selector-box-inner">
                                    <span><GoCheck /></span>
                                </div>
                            </div>
                            <label>Grey</label>
                        </div>
                    </div>

                    <h2>Notification settings <FcAbout /></h2>
                    <div className="selection-container">
                        <h5>Set the notification threshold</h5>
                        <select name="limit" id="limit">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                        <p>This will set the limit for the number of notifications that can be shown by the bell icon.</p>
                        <p>For example, if you set the limit to 10. And if you have more than 10 notifications. It will look something like the below. </p>
                        <div className="elaborator">
                            <h3>
                                <i><TfiBell /></i> <span>10+</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default ThemeSettings;