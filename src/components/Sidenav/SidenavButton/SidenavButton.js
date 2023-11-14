import React, { useState } from "react";

function SidenavButton(props) {
    const [isExpanded, setExpanded] = useState(false);
    let arrow;

    const expand = () => {
        setExpanded(!isExpanded)
    }

    if (!isExpanded) {
        arrow = " ^ "
    }
    else {
        arrow = " v "
    }

    //return data
    if (!props.isDropdown) {
        return (
            <a>{props.display}</a>
        )
    }
    else {
        return (
            <a onClick={expand}>{props.display}{arrow}</a>
        )
    }
}

export default SidenavButton;