import React, { useState } from 'react';
import { Label, Input, LargeTitle, Card, CardHeader, CardPreview, Button } from '@fluentui/react-components';

const Management = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    return (
        <div
            style={{
                display: "grid",
                gridTemplateRows: 'repeat(2,1fr)',
                gridTemplateColumns: 'repeat(2, 1fr)',
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
                gridRow: 'span 2',
            }}>
                <LargeTitle color='blue'>Enable Copilot Companion on your website by providing us some additional information</LargeTitle>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    height: "250px",
                    paddingBottom: "100px",
                    justifyContent: 'space-around'
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column'
                    }}>
                        <Label>
                            Where can we find your menu?
                        </Label>
                        <Input />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column'
                    }}>
                        <Label>
                            What is the best way to contact you?
                        </Label>
                        <Input />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column'
                    }}>
                        <Label>
                            What are your hours?
                        </Label>
                        <Input />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column'
                    }}>
                        <Label>
                            Is there parking nearby?
                        </Label>
                        <Input />
                    </div>
                </div>
                    <Button appearance='primary'>Save</Button>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                gridRow: 'span 2',
                padding: '50px'
            }}>
                <Card style={{
                    height: 400
                }}>
                    <CardHeader
                        header={
                            <div style={{
                                width:'100%',
                                textAlign: 'center',
                                backgroundColor: "gray",
                                color:'white'
                            }}>
                                Live Preview
                            </div>
                        }
                    />
                    <CardPreview>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            background: 'gray',
                            justifyContent:'flex-start'
                        }}>
                            TODO
                        </div>
                    </CardPreview>
                </Card>
            </div>
        </div>
    );
};

export default Management;