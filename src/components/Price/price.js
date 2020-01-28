import React from 'react';
import { Card, CardContent, CardDescription, CardHeader } from "semantic-ui-react";


export const Price = ({ priceData, currency }) => {

    return (
        <div className="price">
            <Card>
                <CardContent>
                    <CardHeader>{ currency } Currency</CardHeader>
                    <CardDescription>{ priceData[currency].rate }</CardDescription>
                </CardContent>
            </Card>
        </div>
    );

};

