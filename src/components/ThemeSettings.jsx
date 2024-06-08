import '../styles/themeSettings.css';

import { useState, useEffect, useRef } from 'react';
import useThemeContainerStore from '../stores/useThemeContainerStore.js';
import useThemeStore from '../stores/useThemeStore.js';
import useNotificationThresholdStore from '../stores/useNotificationThresholdStore.js';
import { CSSTransition } from 'react-transition-group';
import { GoX } from 'react-icons/go';
import { TfiBell } from 'react-icons/tfi';
import ThemeSelector from './ThemeSelector.jsx';

function ThemeSettings() {
    const { isOpen, toggleThemeContainer } = useThemeContainerStore();
    const { theme, setTheme } = useThemeStore();

    const { threshold, setThreshold } = useNotificationThresholdStore();

    const ref = useRef(null);
    const nodeRef = useRef(null); 
    const thresholdRef = useRef(null);

    const handleThresholdChange = (event) => {
        setThreshold(event.target.value);
        thresholdRef.current.blur();  
    };

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
                    <h2>Theme settings</h2>

                    <div className="selection-container">
                        <ThemeSelector
                            themes={[
                                { 
                                    label: 'Default', 
                                    activeClassName: theme === 'default' ? 'active' : '', 
                                    onHandleTheme: () => setTheme('default') 
                                },
                                { 
                                    label: 'Green', 
                                    activeClassName: theme === 'green' ? 'active' : '', 
                                    onHandleTheme: () => setTheme('green') 
                                },
                                { 
                                    label: 'Red', 
                                    activeClassName: theme === 'red' ? 'active' : '', 
                                    onHandleTheme: () => setTheme('red') 
                                },
                                { 
                                    label: 'Orange', 
                                    activeClassName: theme === 'orange' ? 'active' : '', 
                                    onHandleTheme: () => setTheme('orange') 
                                },
                                { 
                                    label: 'Yellow', 
                                    activeClassName: theme === 'yellow' ? 'active' : '', 
                                    onHandleTheme: () => setTheme('yellow') 
                                },
                                { 
                                    label: 'Grayish', 
                                    activeClassName: theme === 'black&white' ? 'active' : '', 
                                    onHandleTheme: () => setTheme('black&white') 
                                },
                            ]}
                        />
                    </div>

                    <h2>Notification settings</h2>
                    <div className="selection-container">
                        <h5>Set the notification threshold</h5>
                        <select
                            name="limit"
                            id="limit"
                            value={threshold}
                            onChange={handleThresholdChange}
                            ref={thresholdRef}
                        >
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