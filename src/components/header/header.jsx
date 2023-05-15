import React, {useEffect, useState} from 'react';
import './header.scss'

const Header = props => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const handleThemeSwitch = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const handleInput = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.item');

        if (searchValue === '') return items.forEach(item => item.classList.remove('hidden'));

        items.forEach(item => {
            let itemName = item.dataset.name.toLowerCase();

            if (itemName.includes(searchValue)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        })
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.setAttribute('class', theme);
    }, [theme]);

    return (
        <div className="header">
            <div className="logo">
                <img src="./images/othermine-logo.png" alt=""/>
                <h2>Othermine</h2>
            </div>
            <div className="search">
                <input
                    type="input"
                    onKeyUp={handleInput}
                    placeholder={'Type here to search'}/>
            </div>
            <div className="theme-switch">
                <img src={`./images/${theme === 'light' ? 'moon' : 'sun'}.svg`} alt="" onClick={handleThemeSwitch}/>
            </div>
        </div>
    )
}

export default Header