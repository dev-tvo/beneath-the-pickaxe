import items from '../../data/items.js'
import './items.scss'
import Item from '../item/item.jsx';
import React, {useState} from 'react';
import Header from "../header/header.jsx";

export default function Items() {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleClickedItem = (item, status) => {
        status === true ? setShowOverlay(false) : setShowOverlay(true)
    }

    const handleOverlay = () => {
        setShowOverlay(false)
    }

    return (
        <>
            <div className={"items-index"}>
                <Header/>
                <div className="content">
                    <div className="item-list">
                        {items.map((item, index) => (<>
                            <div className="list-header">
                                {index !== 0 && <hr/>}
                                <h2>{item.name} [{items[index].items.length}]</h2>
                            </div>
                            <div className={`list-content ${item.name}`}>
                                {item.items.map((item, index) => (
                                    <Item itemData={item}
                                          key={index}
                                          handleClickedItem={handleClickedItem}
                                          showOverlay={showOverlay}
                                          itemName={item.name}
                                    />))
                                }
                            </div>
                        </>))}
                    </div>
                </div>
            </div>
            {showOverlay && <div className={'overlay'} onClick={handleOverlay}></div>}
        </>
    );
}