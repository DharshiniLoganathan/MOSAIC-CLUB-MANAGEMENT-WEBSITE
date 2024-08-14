import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { AdminToggle } from './AdminToggle';
import { AdminHead } from './AdminHead';

const ManageMembers = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [members, setMembers] = useState([
        { id: 1, name: 'Dharshini', email: 'dharshiniloganathan07@gmail.com.com', phone: '123-456-7890', club: 'Arts Club', status: 'Active', role: 'Member' },
        { id: 2, name: 'dharniha', email: 'dharniha17@gmail.com.com', phone: '234-567-8901', club: 'Music Club', status: 'Inactive', role: 'Leader' },
        // Add more members here
        { id: 3, name: 'sreeaishwarya', email: 'sreeaishwarya07@gmail.com', phone: '234-567-8901', club: 'Music Club', status: 'Inactive', role: 'Leader' },
        // Add more members here
    ]);

    const [editMember, setEditMember] = useState(null);

    const location = useLocation();

    const handleMenuClick = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleEditClick = (member) => {
        setEditMember(member);
    };

    const handleDeleteClick = (id) => {
        setMembers(members.filter(member => member.id !== id));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditMember({ ...editMember, [name]: value });
    };

    const handleSave = () => {
        setMembers(members.map(member => member.id === editMember.id ? editMember : member));
        setEditMember(null);
    };

    return (
        <Container>
            <AdminToggle isOpen={sidebarOpen} toggleSidebar={handleMenuClick} />
            <Main>
                <AdminHead onMenuClick={handleMenuClick} />
                <Content>
                    <Header>User Details</Header>
                    <MemberList>
                        {members.map(member => (
                            <MemberCard key={member.id}>
                                <MemberInfo>
                                    <Label>Name:</Label> {member.name}
                                </MemberInfo>
                                <MemberInfo>
                                    <Label>Email:</Label> {member.email}
                                </MemberInfo>
                                <MemberInfo>
                                    <Label>Phone:</Label> {member.phone}
                                </MemberInfo>
                                <MemberInfo>
                                    <Label>Club:</Label> {member.club}
                                </MemberInfo>
                                <MemberInfo>
                                    <Label>Status:</Label> <Status status={member.status}>{member.status}</Status>
                                </MemberInfo>
                                <MemberInfo>
                                    <Label>Role:</Label> {member.role}
                                </MemberInfo>
                                <Actions>
                                    <ActionButton onClick={() => handleEditClick(member)}>Edit</ActionButton>
                                    <ActionButton onClick={() => handleDeleteClick(member.id)}>Delete</ActionButton>
                                </Actions>
                            </MemberCard>
                        ))}
                    </MemberList>

                    {editMember && (
                        <EditForm>
                            <h2>Edit Member</h2>
                            <form>
                                <label>
                                    Name:
                                    <input type="text" name="name" value={editMember.name} onChange={handleChange} />
                                </label>
                                <label>
                                    Email:
                                    <input type="email" name="email" value={editMember.email} onChange={handleChange} />
                                </label>
                                <label>
                                    Phone:
                                    <input type="text" name="phone" value={editMember.phone} onChange={handleChange} />
                                </label>
                                <label>
                                    Club:
                                    <input type="text" name="club" value={editMember.club} onChange={handleChange} />
                                </label>
                                <label>
                                    Status:
                                    <select name="status" value={editMember.status} onChange={handleChange}>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </label>
                                <label>
                                    Role:
                                    <input type="text" name="role" value={editMember.role} onChange={handleChange} />
                                </label>
                                <EditActions>
                                    <ActionButton onClick={handleSave}>Save</ActionButton>
                                    <ActionButton onClick={() => setEditMember(null)}>Cancel</ActionButton>
                                </EditActions>
                            </form>
                        </EditForm>
                    )}
                </Content>
            </Main>
        </Container>
    );
};

export default ManageMembers;

const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #1f1f1f;
    color: #fff;
    overflow: hidden;
`;

const Main = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Content = styled.div`
    flex: 1;
    overflow-y: auto;
`;

const Header = styled.h1`
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: 600;
`;

const MemberList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

const MemberCard = styled.div`
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
    min-width: 300px;
    max-width: 300px;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }
`;

const MemberInfo = styled.p`
    margin: 10px 0;
    color: #ddd;
    font-size: 1rem;
    line-height: 1.5;
`;

const Label = styled.span`
    font-weight: 700;
    color: #9c88ff;
`;

const Status = styled.span`
    color: ${props => props.status === 'Active' ? '#4cd137' : '#e84118'};
    font-weight: 500;
`;

const Actions = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 10px;
`;

const ActionButton = styled.button`
    background-color: #8c7ae6;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.3s;
    
    &:hover {
        background-color: #7158e2;
        transform: scale(1.05);
    }
    
    &:active {
        background-color: #5339b8;
    }
`;

const EditForm = styled.div`
    background-color: #444;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
`;

const EditActions = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
`;
