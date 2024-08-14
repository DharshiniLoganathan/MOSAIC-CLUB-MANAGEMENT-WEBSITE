import React, { useState } from 'react';
import styled from 'styled-components';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { AdminToggle } from './AdminToggle';
import { AdminHead } from './AdminHead';
import { BarChart, LineChart, PieChart } from './Charts';

const AdminDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleMenuClick = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Container>
            <AdminToggle isOpen={sidebarOpen} toggleSidebar={handleMenuClick} />
            <Main>
                <AdminHead onMenuClick={handleMenuClick} />
                <Content>
                    <SummaryWrapper>
                        <SummaryCard>
                            <SummaryTitle>Total Events Conducted</SummaryTitle>
                            <SummaryValue>45</SummaryValue> {/* Example value */}
                        </SummaryCard>
                        <SummaryCard>
                            <SummaryTitle>Number of People Participated</SummaryTitle>
                            <SummaryValue>1,500</SummaryValue> {/* Example value */}
                        </SummaryCard>
                        <SummaryCard>
                            <SummaryTitle>Number of Clubs Till Date</SummaryTitle>
                            <SummaryValue>5</SummaryValue> {/* Example value */}
                        </SummaryCard>
                    </SummaryWrapper>
                    <Wrapper>
                        <Card>
                            <Title>Events Conducted</Title>
                            <Bar
                                data={{
                                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                                    datasets: [
                                        {
                                            label: 'Events Conducted',
                                            data: [12, 19, 3, 5, 2, 3],
                                            backgroundColor: '#36A2EB',
                                        },
                                    ],
                                }}
                                options={{ maintainAspectRatio: false }}
                            />
                        </Card>
                        <Card>
                            <Title>No. of People Participated</Title>
                            <Line
                                data={{
                                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                                    datasets: [
                                        {
                                            label: 'No. of People Participated',
                                            data: [300, 500, 200, 600, 300, 450],
                                            borderColor: '#FF6384',
                                            fill: false,
                                        },
                                    ],
                                }}
                                options={{ maintainAspectRatio: false }}
                            />
                        </Card>
                        <Card>
                            <Title>No. of Users Joined in Clubs</Title>
                            <Pie
                                data={{
                                    labels: ['Club A', 'Club B', 'Club C', 'Club D', 'Club E'],
                                    datasets: [
                                        {
                                            label: 'No. of Users Joined',
                                            data: [150, 250, 200, 100, 75],
                                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
                                        },
                                    ],
                                }}
                                options={{ maintainAspectRatio: false }}
                            />
                        </Card>
                    </Wrapper>
                </Content>
            </Main>
        </Container>
    );
};

export default AdminDashboard;

const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #1f1f1f;
`;

const Main = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    color: #fff;
`;

const Content = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SummaryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`;

const SummaryCard = styled.div`
    background-color: #2b2b2b;
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    text-align: center;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

const SummaryTitle = styled.h3`
    margin: 0;
    color: #fff;
    font-size: 18px;
`;

const SummaryValue = styled.p`
    margin: 10px 0 0;
    font-size: 24px;
    color: #fff;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
`;

const Card = styled.div`
    background-color: #2b2b2b;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
    }
`;

const Title = styled.h2`
    margin-bottom: 15px;
    font-size: 18px;
    color: #fff;
`;
