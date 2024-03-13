import React, { useState } from 'react';
import { Spinner, Card, Input, Label, Button, CardHeader, LargeTitle } from '@fluentui/react-components';

const Login = ({
    setLoggedIn,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const setLoggedInAfterDelay = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setLoggedIn(true);
        }, 2000);
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {isLoading && <Spinner size="large" label="Logging in..." />}
            {!isLoading &&<Card style={{ width: '500px', padding: '20px' }}>
                <CardHeader
                    header={
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                            width: '100%',
                            flexDirection: 'column',
                            height: '120px'

                        }}>
                            <img
                                src={"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"}
                            />
                        <LargeTitle>
                            FHL Copilot for Web
                        </LargeTitle>
                        </div>
                    } />
                <Label>
                    Email
                </Label>
                <Input type='email' />
                <Label>
                    Password
                </Label>
                <Input type='password' />
                <Button appearance="primary" style={{ marginTop: '20px' }}
                    onClick={() => { setLoggedInAfterDelay(true) }}
                >Login</Button>
            </Card>}
        </div>
    );
};

export default Login;