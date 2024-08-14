import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { AdminToggle } from './AdminToggle';
import { AdminHead } from './AdminHead'; // Import AdminHead component

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Sample data
const initialEvents = [
    { id: 1,name: 'Introduction to Algorithms', date: '2024-08-05', description: 'Learn about different algorithms and their applications in coding.' },
    { id: 2,name: 'JavaScript Fundamentals', date: '2024-08-12', description: 'A deep dive into JavaScript fundamentals and best practices.' },
    { id: 3,name: 'Competitive Programming Contest', date: '2024-08-18', description: 'Test your coding skills in our competitive programming contest.' },
    { id: 4,name: 'React Workshop', date: '2024-08-22', description: 'An interactive workshop on React. Learn how to build modern web applications with React.' },
    { id: 5,name: 'Coding Best Practices', date: '2024-08-28', description: 'Understand coding best practices and improve your programming skills.' },
    { id: 6,name: 'Open Source Contribution', date: '2024-08-30', description: 'Get involved in open source projects and contribute to real-world applications.' },
];

const AdminArts = () => {
    const [events, setEvents] = useState(initialEvents);
    const [isEditing, setIsEditing] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Example data for charts
    const monthlyData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Events Conducted',
                data: [2, 3, 4, 2, 3, 4, 5, 6, 2, 3, 4, 5],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Participants',
                data: [50, 60, 70, 65, 80, 90, 100, 110, 75, 85, 95, 105],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
            {
                label: 'New Members',
                data: [10, 15, 20, 12, 18, 22, 25, 30, 15, 20, 25, 28],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
            }
        ]
    };

    const lineChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Club Activities',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Count'
                }
            }
        }
    };

    const handleEdit = (event) => {
        setIsEditing(true);
        setCurrentEvent(event);
    };

    const handleDelete = (eventId) => {
        setEvents(events.filter(event => event.id !== eventId));
    };

    const handleSave = () => {
        setEvents(events.map(event => (event.id === currentEvent.id ? currentEvent : event)));
        setIsEditing(false);
        setCurrentEvent(null);
    };

    const handleCreate = () => {
        const newEvent = {
            id: events.length + 1,
            name: 'New Event',
            date: '2024-09-01',
            description: 'Description of the new event'
        };
        setEvents([...events, newEvent]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentEvent({ ...currentEvent, [name]: value });
    };

    return (
        <Container>
            <AdminHead />
            <AdminToggle />
            <ButtonContainer>
                <ClubButton to="/admin-arts">Arts Club</ClubButton>
                <ClubButton to="/admin-music">Music Club</ClubButton>
                <ClubButton to="/admin-coding">Coding Club</ClubButton>
                <ClubButton to="/admin-literature">Literature Club</ClubButton>
                <ClubButton to="/admin-sports">Sports Club</ClubButton>
            </ButtonContainer>
            <Dashboard>
                <ChartContainer>
                    <Bar data={monthlyData} options={lineChartOptions} />
                </ChartContainer>
                <EventsContainer>
                    {events.map((event) => (
                        <EventCard key={event.id}>
                            {isEditing && currentEvent.id === event.id ? (
                                <EditForm>
                                    <EditInput
                                        type="text"
                                        name="name"
                                        value={currentEvent.name}
                                        onChange={handleChange}
                                    />
                                    <EditInput
                                        type="text"
                                        name="date"
                                        value={currentEvent.date}
                                        onChange={handleChange}
                                    />
                                    <EditTextarea
                                        name="description"
                                        value={currentEvent.description}
                                        onChange={handleChange}
                                    />
                                    <SaveButton onClick={handleSave}>Save</SaveButton>
                                </EditForm>
                            ) : (
                                <DetailsContainer>
                                    <EventTitle>{event.name}</EventTitle>
                                    <EventDate>{event.date}</EventDate>
                                    <EventDescription>{event.description}</EventDescription>
                                    <ActionButtons>
                                        <ActionButton onClick={() => handleEdit(event)}>✎</ActionButton>
                                        <ActionButton onClick={() => handleDelete(event.id)}>✘</ActionButton>
                                    </ActionButtons>
                                </DetailsContainer>
                            )}
                        </EventCard>
                    ))}
                </EventsContainer>
                <CreateEventButton onClick={handleCreate}>Create Event</CreateEventButton>
            </Dashboard>
        </Container>
    );
};

export default AdminArts;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #1f1f1f;
    color: #fff;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top:20px;
`;

const ClubButton = styled(Link)`
    background-color: #2b2b2b;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s;
    &:hover {
        background-color: #49BEB7;
    }
`;

const Dashboard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const ChartContainer = styled.div`
    width: 80%;
    max-width: 800px;
    margin-bottom: 20px;
`;

const CreateEventButton = styled.button`
    background-color: #49BEB7;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background-color 0.3s;
    &:hover {
        background-color: #36A2EB;
    }
`;

const EventsContainer = styled.div`
    width: 80%;
    max-width: 840px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

const EventCard = styled.div`
    background-color: #2b2b2b;
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    flex: 1 1 calc(50% - 20px); // Two cards per row with a gap of 20px
`;

const DetailsContainer = styled.div`
    padding: 15px;
`;

const EventTitle = styled.h4`
    margin: 0;
    font-size: 18px;
`;

const EventDate = styled.p`
    margin: 5px 0;
    font-size: 14px;
`;

const EventDescription = styled.p`
    margin: 5px 0;
    font-size: 14px;
`;

const ActionButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`;

const ActionButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
        color: orange;
    }
`;

const EditForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

const EditInput = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #49BEB7;
    border-radius: 5px;
    font-size: 16px;
`;

const EditTextarea = styled.textarea`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #49BEB7;
    border-radius: 5px;
    font-size: 16px;
    resize: none;
`;

const SaveButton = styled.button`
    background-color: #49BEB7;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #36A2EB;
    }
`;
