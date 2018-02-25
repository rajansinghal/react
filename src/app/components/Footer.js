//Functional component 
//presentational/stateless component
import React from 'react';
import PropTypes from 'prop-types';

//one default per file its rule

//one way around to pass properties other is in header.js
export default function Footer(props){
    console.log('Footer created');

    //deconsturct
    let {year, company} = props;

    //returns virtual dom
    return(
        <div>
            <hr />
            Copyrights@ {year}, {company}
        </div>

    )
}

//defaulProps is a keyword
Footer.defaultProps = {
    company: 'Product App'
}

//propTypes is a keyword
Footer.propTypes = {
    //mandatory is  isRequired
    year : PropTypes.number.isRequired,
    company : PropTypes.string
}