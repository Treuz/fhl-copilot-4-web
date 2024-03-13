import React, { useState } from 'react';
import { Label, Input, LargeTitle, Card, CardHeader, CardPreview, Divider, Title2 } from '@fluentui/react-components';

const Install = () => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateRows: 'repeat(1,1fr)',
                gridTemplateColumns: 'repeat(101, 1fr)',
                height: "100%"
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: '100%',
                paddingLeft: "20px",
                paddingRight: "20px",
                gridColumn: 'span 50',
            }}>
                <Title2 style={{
                    color: '#005FB8',
                }}>
                    Enable Copilot Companion on your website by providing us some additional information
                </Title2>
                <Label>
                    What is your site's URL?
                </Label>
                <Input></Input>

            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <Divider style={{
                    height: '70%',
                }} vertical appearance='subtle'>Or</Divider>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                gridColumn: 'span 50',
                paddingLeft: "20px",
                paddingRight: "20px",

            }}>

                <Title2 style={{
                    color: 'black',
                }}>
                    Add this code to your side
                </Title2>
            </div>
        </div>
    );
};

export default Install;