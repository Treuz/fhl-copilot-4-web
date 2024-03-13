import React, { useState } from 'react';
import { Card, Tab, TabList } from '@fluentui/react-components';
import Analytics from './Analytics';
import Management from './Management';
import Install from './Install';

const Dashboard = () => {
    const [selectedValue, setSelectedValue] = useState('tab1')
    return (
        <div style={
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                height: "100vh",
                width: "100%",
            }
        }>
            <nav style={{
                display: "block",
                height: "50px",
                width: "100%",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Add box shadow here
                paddingTop: "10px",
                paddingBottom: "10px",
            }}>
                <img
                    style={{
                        marginLeft: "20px",
                    }}
                    height={45}
                    src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' />
            </nav>
            <div style={{
                flexGrow: 1,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: "start",
            }}>
                <div style={{
                    paddingTop: "20px",
                }}>
                    <div
                        style={{
                            width: "1200px",
                            height: "50px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            rowGap: "20px",

                        }}
                    >
                        <TabList
                            selectedValue={selectedValue}
                            onTabSelect={(e, data) => setSelectedValue(data.value)}
                            defaultSelectedValue="tab1">
                            <Tab value="tab1">
                                Analytics
                            </Tab>
                            <Tab value="tab2">
                                Copilot management
                            </Tab>
                            <Tab value="tab3">
                                Copilot embedding
                            </Tab>
                        </TabList>
                    </div>
                    <Card size='large' style={{
                        width: "1300px",
                        height: "650px",
                    }}>
                        {selectedValue === "tab1" && <Analytics />}
                        {selectedValue === "tab2" && <Management />}
                        {selectedValue === "tab3" && <Install />}
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;