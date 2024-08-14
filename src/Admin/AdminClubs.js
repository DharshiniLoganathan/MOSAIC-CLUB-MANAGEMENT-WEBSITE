import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { AdminHead } from './AdminHead';
import { AdminToggle } from './AdminToggle';

const AdminClubs = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const location = useLocation(); // Get the current location
    const [bgColor, setBgColor] = useState("initialColor");

    const handleMenuClick = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleButtonClick = (club) => {
        setActiveButton(club);
        setBgColor("blue");
    };

    return (
        <Container>
            <AdminToggle isOpen={sidebarOpen} toggleSidebar={handleMenuClick} />
            <Main>
                <AdminHead onMenuClick={handleMenuClick} />
                <Content>
                    <ClubButtons>
                        <ClubButton
                            to="/admin-arts"
                            isActive={location.pathname === '/admin-arts'}
                            onClick={() => handleButtonClick('Arts')}
                            isClicked={activeButton === 'Arts'}
                            style={{ backgroundColor: activeButton === 'Arts' ? bgColor : "initialColor" }}
                        >
                            Arts Club
                        </ClubButton>
                        <ClubButton
                            to="/admin-music"
                            isActive={location.pathname === '/admin-music'}
                            onClick={() => handleButtonClick('Music')}
                            isClicked={activeButton === 'Music'}
                            style={{ backgroundColor: activeButton === 'Music' ? bgColor : "initialColor" }}
                        >
                            Music Club
                        </ClubButton>
                        <ClubButton
                            to="/admin-coding"
                            isActive={location.pathname === '/admin-coding'}
                            onClick={() => handleButtonClick('Coding')}
                            isClicked={activeButton === 'Coding'}
                            style={{ backgroundColor: activeButton === 'Coding' ? bgColor : "initialColor" }}
                        >
                            Coding Club
                        </ClubButton>
                        <ClubButton
                            to="/admin-literature"
                            isActive={location.pathname === '/admin-literature'}
                            onClick={() => handleButtonClick('Literature')}
                            isClicked={activeButton === 'Literature'}
                            style={{ backgroundColor: activeButton === 'Literature' ? bgColor : "initialColor" }}
                        >
                            Literature Club
                        </ClubButton>
                        <ClubButton
                            to="/admin-sports"
                            isActive={location.pathname === '/admin-sports'}
                            onClick={() => handleButtonClick('Sports')}
                            isClicked={activeButton === 'Sports'}
                            style={{ backgroundColor: activeButton === 'Sports' ? bgColor : "initialColor" }}
                        >
                            Sports Club
                        </ClubButton>
                    </ClubButtons>
                </Content>
            </Main>
        </Container>
    );
};

export default AdminClubs;

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
`;

const ClubButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`;

const ClubButton = styled(Link)`
    background-color: ${props => props.isClicked ? '#FF8A5C' : (props.isActive ? '#444' : '#2b2b2b')};
    color: #fff;
    padding: 15px 30px;
    text-decoration: none;
    text-align: center;
    font-size: 18px;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.3s;
    &:hover {
        background-color: ${props => props.isClicked ? '#FF8A5C' : (props.isActive ? '#666' : '#444')};
        transform: scale(1.05);
    }
`;
