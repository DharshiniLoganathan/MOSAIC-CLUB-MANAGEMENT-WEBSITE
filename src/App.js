// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import FrontPage from './Pages/FrontPage';
import ExplorePage from './Pages/ExplorePage';
import LandingPage from './components/LandingPage';
import UserProfile from './Pages/UserProfile';
import BlogPage from './Pages/BlogPage';
import GalleryPage from './Pages/GalleryPage';
import AnnouncementsPage from './Pages/AnnouncementsPage';
import ParticipationForm from './Pages/ParticipationForm';
import ArtsClub from './Pages/ArtsClub';
import SportsClub from './Pages/SportsClub';
import LiteratureClub from './Pages/LiteratureClub';
import CodingClub from './Pages/CodingClub';
import MusicClub from './Pages/MusicClub';
import SurveyPage from './Pages/SurveyPage';
import SuccessPage from './Pages/SuccessPage';
import JoinClub from './Pages/ArtsJoinClub';

// Admin Pages
import AdminDashboard from './Admin/AdminDashboard';
import AdminClubs from './Admin/AdminClubs';
import AdminArts from './Admin/AdminArts';
import AdminMusic from './Admin/AdminMusic';
import AdminCoding from './Admin/AdminCoding';
import AdminLiterature from './Admin/AdminLiterature';
import AdminSports from './Admin/AdminSports';
import AdminCertificate from './Admin/AdminCertificate';
import ManageMembers     from './Admin/ManageMembers';
import ArtsJoinClub from './Pages/ArtsJoinClub';
import MusicJoinClub from './Pages/MusicJoinClub';
import SportsJoinClub from './Pages/SportsClubJoin';
import CodingJoinClub from './Pages/CodingJoinClub';
import LiteratureJoinClub from './Pages/LiteratureJoinClub';


const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

    return (
        <Router>
            <Routes>
                {/* User Routes */}
                <Route path="/" element={isAuthenticated ? <Navigate to="/frontpage" /> : <LandingPage />} />
                <Route path="/signin" element={<SignInPage setIsAuthenticated={(auth, isAdmin) => { setIsAuthenticated(auth); setIsAdminAuthenticated(auth && isAdmin); }} />} />
                <Route path="/signup" element={<SignUpPage setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/frontpage" element={isAuthenticated ? <FrontPage /> : <Navigate to="/signin" />} />
                <Route path="/userprofile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/signin" />} />
                <Route path="/explore" element={isAuthenticated ? <ExplorePage /> : <Navigate to="/signin" />} />
                <Route path="/blog" element={isAuthenticated ? <BlogPage /> : <Navigate to="/signin" />} />
                <Route path="/gallery" element={isAuthenticated ? <GalleryPage /> : <Navigate to="/signin" />} />
                <Route path="/announcements" element={isAuthenticated ? <AnnouncementsPage /> : <Navigate to="/signin" />} />
                <Route path="/logout" element={<LandingPage />} />
                <Route path="/arts-club" element={isAuthenticated ? <ArtsClub /> : <Navigate to="/signin" />} />
                <Route path="/sports-club" element={isAuthenticated ? <SportsClub /> : <Navigate to="/signin" />} />
                <Route path="/literature-club" element={isAuthenticated ? <LiteratureClub /> : <Navigate to="/signin" />} />
                <Route path="/coding-club" element={isAuthenticated ? <CodingClub /> : <Navigate to="/signin" />} />
                <Route path="/music-club" element={isAuthenticated ? <MusicClub /> : <Navigate to="/signin" />} />
                <Route path="/survey" element={isAuthenticated ? <SurveyPage /> : <Navigate to="/signin" />} />
                <Route path="/participation-form" element={isAuthenticated ? <ParticipationForm /> : <Navigate to="/signin" />} />
                <Route path="/success" element={isAuthenticated ? <SuccessPage /> : <Navigate to="/signin" />} />
                <Route path="/artsjoin-club" element={isAuthenticated ? <ArtsJoinClub /> : <Navigate to="/signin" />} />
                <Route path="/musicjoin-club" element={isAuthenticated ? <MusicJoinClub /> : <Navigate to="/signin" />} />
                <Route path="/sportsjoin-club" element={isAuthenticated ? <SportsJoinClub /> : <Navigate to="/signin" />} />
                <Route path="/codingjoin-club" element={isAuthenticated ? <CodingJoinClub /> : <Navigate to="/signin" />} />
                <Route path="/literaturejoin-club" element={isAuthenticated ? <LiteratureJoinClub /> : <Navigate to="/signin" />} />






                {/* Admin Routes */}
                <Route path="/admin" element={isAdminAuthenticated ? <AdminDashboard /> : <Navigate to="/signin" />} />
                <Route path="/admin/clubs" element={isAdminAuthenticated ? <AdminArts /> : <Navigate to="/signin" />} />
                <Route path="/admin-arts" element={isAdminAuthenticated ? <AdminArts /> : <Navigate to="/signin" />} />
                <Route path="/admin-music" element={isAdminAuthenticated ? <AdminMusic /> : <Navigate to="/signin" />} />
                <Route path="/admin-coding" element={isAdminAuthenticated ? <AdminCoding /> : <Navigate to="/signin" />} />
                <Route path="/admin-literature" element={isAdminAuthenticated ? <AdminLiterature /> : <Navigate to="/signin" />} />
                <Route path="/admin-sports" element={isAdminAuthenticated ? <AdminSports /> : <Navigate to="/signin" />} />
                <Route path="/admin/certificate" element={isAdminAuthenticated ? <AdminCertificate /> : <Navigate to="/signin" />} />
                <Route path="/admin/manage-members" element={isAdminAuthenticated ? <ManageMembers /> : <Navigate to="/signin" />} />


            </Routes>
        </Router>
    );
};

export default App;
