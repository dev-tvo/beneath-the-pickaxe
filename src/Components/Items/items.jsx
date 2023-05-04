import relics from '../../data/relics.js'
import curses from '../../data/curses.js'
import hexes from '../../data/hexes.js'
import potions from '../../data/potions.js'
import familiars from '../../data/familiars.js'
import items from '../../data/items.js'
import './items.scss'
import './header-link.scss'
import Item from '../Item/Item.jsx';
import {NavLink, useParams} from "react-router-dom";
import React, {useState, useEffect} from 'react';

export default function Items() {
    const [showOverlay, setShowOverlay] = useState(false);
    console.log(items);
    // const {type} = useParams();
    // let items
    //
    // if (type === 'relics') {
    //     items = relics
    // } else if (type === 'curses') {
    //     items = curses
    // } else if (type === 'hexes') {
    //     items = hexes
    // } else if (type === 'potions') {
    //     items = potions
    // } else if (type === 'familiars') {
    //     items = familiars
    // }

    // const [query, setQuery] = useState({
    //     query: '',
    //     list: items
    // })
    //
    // const handleInput = (e) => {
    //     setQuery(e.target.value)
    //
    //     const results = items.filter(item => {
    //         if (e.target.value === '') return items
    //         return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    //     })
    //
    //     setQuery({
    //         query: e.target.value,
    //         list: results
    //     })
    // }

    // useEffect(() => {
    //     setQuery({
    //         query: '',
    //         list: items
    //     })
    //
    // }, [type])

    const handleClickedItem = (item, status) => {
        status === true ? setShowOverlay(false) : setShowOverlay(true)
    }

    const handleOverlay = () => {
        setShowOverlay(false)
    }

    return (
        <>
            <div className={"items-index"}>
                <div className="header">
                    <div className="links">
                        <NavLink to="/relics"
                                 className={({isActive}) => isActive ? "link active" : 'link'}>Relics</NavLink>
                        <NavLink to="/curses"
                                 className={({isActive}) => isActive ? "link active" : 'link'}>Curses</NavLink>
                        <NavLink to="/hexes"
                                 className={({isActive}) => isActive ? "link active" : 'link'}>Hexes</NavLink>
                        <NavLink to="/potions"
                                 className={({isActive}) => isActive ? "link active" : 'link'}>Potions</NavLink>
                        <NavLink to="/familiars"
                                 className={({isActive}) => isActive ? "link active" : 'link'}>Familiars</NavLink>
                        <NavLink to="/favorites"
                                 className={({isActive}) => isActive ? "link active" : 'link'}>Favorites</NavLink>
                    </div>
                    {/*<div className="search">*/}
                    {/*    <input type="search" autoFocus onKeyUp={handleInput} placeholder={'Type here to search'}/>*/}
                    {/*</div>*/}
                </div>
                <div className="content">
                    <div className="item-list">
                        {items.map((item, index) => (
                            <>
                                <h1>{item.name}</h1>
                                {item.items.map((item, index) => (
                                    <Item itemData={item}
                                          key={index}
                                          handleClickedItem={handleClickedItem}
                                          showOverlay={showOverlay}
                                    />
                                ))}
                            </>
                        ))}
                    </div>
                </div>
            </div>
            {showOverlay &&
                <div className={'overlay'} onClick={handleOverlay}></div>
            }
        </>
    );
}