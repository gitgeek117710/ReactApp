import React from "react";

function Header(){

    return(
        <header style={headerStyle}>
            <h1>My Todolist</h1>
        </header>
    )

}

const headerStyle={
    background: "Teal",
    color: "White",
    textAlign: "center",
    padding: "10px"
}

export default Header;