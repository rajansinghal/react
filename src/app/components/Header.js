import React, {Component} from 'react';
import PropTypes from 'prop-types';
//React.Component or Component are same . don't confuse
export default class Header extends Component{
    constructor(){
        super(); //Must
        console.log("Header created");
    }

    //ES.NEXT
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render(){
        console.log("Header render");

        //props are immutable can't change, below will throw an exception as props are read only prop
        //this.props.title = 'something';
        return(
            <div>
                {/* comments syntax as normal // or <!-- will not work */}
                {/*props stands for object prop and its reserved in react*/}
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}