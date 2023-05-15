import React, {useEffect, useState} from 'react';
import './item.scss'

const Item = (props) => {
    const [isHovering, setIsHovering] = useState(null);
    const [clickedItem, setClickedItem] = useState(false);

    const {
        id,
        name,
        description,
        curseType,
        itemType,
        rarity,
        effect,
        shopCost,
        craftingCost,
        minorCurseCost,
        majorCurseCost,
        abilities
    } = props.itemData

    const handleMouseOver = () => {
        setIsHovering(true)
    }

    const handleMouseOut = () => {
        setIsHovering(false)
    }

    const handleClick = () => {
        setClickedItem(!clickedItem)
        props.handleClickedItem(props.itemData, clickedItem)
    }

    useEffect(() => {
        if (props.showOverlay === false) {
            setClickedItem(false)
        }

    }, [props.showOverlay])

    return (
        <li className={`item`} data-name={props.itemData.name}>
            <img
                src={props.itemData.imageUrl}
                alt=""
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
            />

            {isHovering &&
                <div className="item-info">
                    <div className="item-header">
                        <div className="item-id font-bold">Index no. {id}</div>
                        <div className="item-name">{name}</div>
                        <div className="item-description font-light">{description}</div>
                    </div>
                    <div className="divider"></div>
                    <div className={`item-type ${curseType ? curseType : itemType}`}>
                        Type: <span className={'font-bold'}>{curseType ? curseType + ' curse' : itemType}</span>
                    </div>
                    <div className={`item-rarity ${rarity.toLowerCase()}`}>
                        Rarity: <span className={'font-bold'}>{rarity}</span>
                    </div>
                    <div className="item-effect">
                        Effect: <span className={'font-bold'}>{effect}</span>
                    </div>
                    {shopCost !== undefined &&
                        <div className="item-shopcost">
                            Shop cost: <span className={'font-bold'}>{shopCost}</span>
                        </div>
                    }
                    <div className="item-craftingcost">
                        Crafting cost: <span className={'font-bold'}>{craftingCost}</span>
                    </div>
                    {minorCurseCost !== undefined &&
                        <div className="item-minor-curse-cost item-curse-cost">
                            Minor curse cost: <span className={'font-bold'}>{minorCurseCost}</span>
                        </div>
                    }
                    {majorCurseCost !== undefined &&
                        <div className="item-major-curse-cost item-curse-cost">
                            Major curse cost: <span className={'font-bold'}>{majorCurseCost}</span>
                        </div>
                    }
                    {abilities &&
                        <div className="item-abilities">
                            Abilities (per level):
                            <ul>
                                {abilities.map((ability, index) => {
                                    return (
                                        <li key={index}>{ability}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    }
                </div>
            }

            {clickedItem &&
                <div className="item-info item-popup">
                    <div className="item-header">
                        <div className="item-id font-bold">Index no. {id}</div>
                        <div className="item-name">{name}</div>
                        <div className="item-description font-light">{description}</div>
                    </div>
                    <div className="divider"></div>
                    <div className={`item-type ${curseType ? curseType : itemType}`}>
                        Type: <span className={'font-bold'}>{curseType ? curseType + ' curse' : itemType}</span>
                    </div>
                    <div className={`item-rarity ${rarity.toLowerCase()}`}>
                        Rarity: <span className={'font-bold'}>{rarity}</span>
                    </div>
                    <div className="item-effect">
                        Effect: <span className={'font-bold'}>{effect}</span>
                    </div>
                    {shopCost !== undefined &&
                        <div className="item-shopcost">
                            Shop cost: <span className={'font-bold'}>{shopCost}</span>
                        </div>
                    }
                    <div className="item-craftingcost">
                        Crafting cost: <span className={'font-bold'}>{craftingCost}</span>
                    </div>
                    {minorCurseCost !== undefined &&
                        <div className="item-minor-curse-cost item-curse-cost">
                            Minor curse cost: <span className={'font-bold'}>{minorCurseCost}</span>
                        </div>
                    }
                    {majorCurseCost !== undefined &&
                        <div className="item-major-curse-cost item-curse-cost">
                            Major curse cost: <span className={'font-bold'}>{majorCurseCost}</span>
                        </div>
                    }
                    {abilities &&
                        <div className="item-abilities">
                            Abilities:
                            <ul>
                                {abilities.map((ability, index) => {
                                    return (
                                        <li key={index}>{ability}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    }
                </div>
            }
        </li>)
}

export default Item