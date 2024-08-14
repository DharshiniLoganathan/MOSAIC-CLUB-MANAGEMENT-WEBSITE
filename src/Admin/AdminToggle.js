import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaImages, FaBullhorn, FaSignOutAlt, FaBlog } from 'react-icons/fa';

export const AdminToggle = ({ isOpen, toggleSidebar }) => (
    <Container isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
        <Nav>
            <NavLink to="/admin"><FaHome /> Dashboard</NavLink>
            <NavLink to="/admin/clubs"><FaInfoCircle /> Clubs</NavLink>
           
            <NavLink to="/admin/manage-members"><FaBullhorn /> Members</NavLink>
            <NavLink to="/admin/certificate"><FaBlog /> Certificate</NavLink>
            <NavLink to="/logout"><FaSignOutAlt /> Logout</NavLink>
        </Nav>
    </Container>
);

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: #333;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease;
    z-index: 1000;
    color: white;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 60px 20px;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 10px 0;
    font-size: 18px;
    display: flex;
    align-items: center;
    transition: color 0.3s;
    &:hover {
        color: orange;
    }
    svg {
        margin-right: 10px;
    }
`;
