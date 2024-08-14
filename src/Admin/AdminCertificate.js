import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { AdminHead } from './AdminHead'; // Import AdminHead component

const AdminCertificate = () => {
    const [name, setName] = useState('');
    const [event, setEvent] = useState('');
    const [club, setClub] = useState('');
    const [date, setDate] = useState('');
    const [certificate, setCertificate] = useState(null);
    const [email, setEmail] = useState('');

    const handleGenerateCertificate = () => {
        const cert = {
            name,
            event,
            club,
            date
        };
        setCertificate(cert);
    };

    const handleSaveCertificate = async () => {
        try {
            await axios.post('http://localhost:8080/api/admin/certificate/save', {
                name,
                event,
                club,
                date
            });
        } catch (error) {
            console.error('Error saving certificate:', error);
        }
    };

    const handleSendEmail = async () => {
        try {
            await axios.post('http://localhost:8080/api/admin/certificate/send', {
                email,
                name,
                event,
                club,
                date
            });
            alert(`Certificate sent to ${email}`);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <Container>
            <AdminHead />
            <Content>
                <Form>
                    <Input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Event"
                        value={event}
                        onChange={(e) => setEvent(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Club"
                        value={club}
                        onChange={(e) => setClub(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button onClick={() => { handleGenerateCertificate(); handleSaveCertificate(); }}>Generate Certificate</Button>
                    {certificate && (
                        <>
                            <Button onClick={() => handleSendEmail()}>Send via Email</Button>
                            <Certificate>
                                <CertificateContent>
                                    <Title>Certificate of Achievement</Title>
                                    <CertificateText>
                                        This is to certify that
                                        <br />
                                        <strong>{certificate.name}</strong>
                                        <br />
                                        has successfully completed the
                                        <br />
                                        <strong>{certificate.event}</strong>
                                        <br />
                                        for the
                                        <br />
                                        <strong>{certificate.club}</strong>
                                        <br />
                                        on <strong>{certificate.date}</strong>.
                                    </CertificateText>
                                </CertificateContent>
                            </Certificate>
                        </>
                    )}
                </Form>
            </Content>
        </Container>
    );
};

export default AdminCertificate;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: #1f1f1f;
    color: #fff;
    min-height: 100vh;
`;

const Content = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 700px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    color: #2b2b2b;
    background-color: #ffffff;
    padding: 12px;
    margin-bottom: 10px;
    border: 1px solid #555;
    border-radius: 5px;
    font-size: 16px;
    &:focus {
        outline: none;
        border-color: #49BEB7;
    }
`;

const Button = styled.button`
    background-color: #49BEB7;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 10px;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0C0C0C;
    }
`;

const Certificate = styled.div`
    background-color: #2b2b2b;
    padding: 30px;
    border-radius: 15px;
    width: 100%;
    max-width: 700px;
    text-align: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
`;

const CertificateContent = styled.div`
    padding: 20px;
`;

const Title = styled.h2`
    margin: 0;
    font-size: 28px;
    color: #fff;
    margin-bottom: 20px;
`;

const CertificateText = styled.p`
    margin: 20px 0;
    font-size: 20px;
    color: #fff;
    line-height: 1.8;
    font-weight: 500;
`;
