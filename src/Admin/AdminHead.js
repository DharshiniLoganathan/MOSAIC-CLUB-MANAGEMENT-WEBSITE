// src/Admin/AdminHead.js

import React from 'react';
import styled from 'styled-components';
import logo from '../image/logo.png'; // Import the logo image
import { FaBars } from 'react-icons/fa'; // Import FontAwesome bars icon

export const AdminHead = ({ onMenuClick }) => (
    <Container>
        <MenuButton onClick={onMenuClick}><FaBars /></MenuButton>
        <Logo src={logo} alt="Logo" />
        <Title>Dashboard</Title>
    </Container>
);

const Container = styled.header`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #2b2b2b;
`;

const MenuButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    margin-right: 20px;
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 20px;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 24px;
    color: white;
    flex: 1;
    text-align: center;
     margin-left: -100px;
`;
