import React from 'react';
import { Select } from "semantic-ui-react";

export const CurrencyInput = ({ setCurrency }) => {

    const currencies = [ { value: 'USD', text: 'USD' }, { value: 'EUR', text: 'EUR' }, { value: 'GBP', text: 'GBP' } ];

    const onSelectCurrency = (e, data) => setCurrency(data.value);

    return (
        <div className="form">
            <Select options={ currencies } placeholder="Select currency..." onChange={ onSelectCurrency }></Select>
        </div>
    );

};

