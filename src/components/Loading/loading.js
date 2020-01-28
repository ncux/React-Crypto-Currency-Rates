import React from 'react';
import { Dimmer, Loader } from "semantic-ui-react";

export const Loading = props => {

    return (
        <div className="">
            <Dimmer active inverted>
                <Loader>Loading</Loader>
            </Dimmer>
        </div>
    );

};

