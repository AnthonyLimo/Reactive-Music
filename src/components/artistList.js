import React from "react";
import { Link } from "react-router-dom";

const ArtistList = (props) => {
    //console.log(props);

    const list = ( { allArtists } ) => {
        if(allArtists){
            return allArtists.map((item) => {

                const style = {
                    background: `url('/images/covers/${item.cover}.jpg') no-repeat`,
                    width: '18rem'
                }

                return(
                    <div className="card">
                    <div className="card-body">
                    <div className="card-image-top" style={style}>
                        <Link key={item.id} to={`/artist/${item.id}`} className="card-text">{item.name}</Link>
                    </div>
                    </div>
                    </div>
                );
            });
        }
        else {
            return(
                <div className="alert alert-danger">Something has gone wrong</div>
            );
        }
    };

    return(
        <div className="container">
            <h4>Browse the Artists</h4>
            {list(props)}
        </div>
    );
};

export default ArtistList;