import React from "react";

class Footer extends React.Component{
    render(){
        const year = new Date();
        return(
            <footer><p>Copyright © {year.getFullYear()}</p></footer>
        )
    }
}
export default Footer