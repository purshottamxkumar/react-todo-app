import React from "react";
import ItemTemplate from "./Shared/ItemTemplate";

const Item = ({ item, itemId, handleDelete }) => {
	return (
		<ItemTemplate>
			<div className="item-content" id={itemId}>
                <div className="mergeIn">
                    <div onClick={() => handleDelete(itemId)} className="cross-btn">x</div>
                    <span>{item}</span>
                </div>
			</div>
		</ItemTemplate>
	);
};

Item.defaultProps = {
    checked: false
};

export default Item;
