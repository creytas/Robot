import React from 'react';

const Searchbar = ({onChange}) => {
    return (
        <div>
            <input type = "text" placeholder = "RECHERCHEZ PAR LE NOM..."  className="searchbar" onChange={onChange}/>
        </div>
    );
}

export default Searchbar;
