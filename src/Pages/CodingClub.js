import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-calendar/dist/Calendar.css';
import HeaderWithToggle from '../components/HeaderWithToggle';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

// Import images
import image1 from '../image/coding1.jpg';
import image2 from '../image/coding2.jpg';
import image3 from '../image/coding3.jpg';
import member1 from '../image/member1.jpeg';
import member2 from '../image/member2.jpeg';
import member3 from '../image/member3.jpeg';

const events = [
  { name: 'Introduction to Python', date: '2024-08-01', description: 'Join us for an introductory session on Python programming. Learn the basics and get started with your first Python project.' },
{ name: 'JavaScript Workshop', date: '2024-08-10', description: 'A comprehensive workshop on JavaScript. Understand the core concepts and build interactive web applications.' },
{ name: 'Hackathon', date: '2024-08-15', description: 'Participate in our hackathon event. Collaborate with fellow members, solve challenges, and create innovative projects.' },
{ name: 'Data Structures and Algorithms', date: '2024-08-20', description: 'A detailed workshop on data structures and algorithms. Enhance your problem-solving skills and prepare for coding interviews.' },
{ name: 'Open Coding Night', date: '2024-08-25', description: 'Join our open coding night. Work on personal projects, get help from peers, and share your progress.' },
{ name: 'Web Development Bootcamp', date: '2024-08-30', description: 'An intensive bootcamp on web development. Learn HTML, CSS, and JavaScript, and build your own website.' },

];

const CodingClub = () => {
  
  const [hasCodingJoined, setHasJoined] = useState(false);
  const navigate = useNavigate();

  // Function to handle join/leave button click
  const handleButtonClick = () => {
    if (hasCodingJoined) {
      // Call API to leave club
      axios.post('http://localhost:8080/api/codingleave-club')
        .then(response => {
          if (response.data.success) {
            setHasJoined(false);
          }
        })
        .catch(error => console.error('Error:', error));
    } else {
      navigate('/codingjoin-club');
    }
  };

  // Fetch user status on component mount
  useEffect(() => {
    axios.get('http://localhost:8080/api/codingcheck-membership')
      .then(response => {
        setHasJoined(response.data.hasJoined);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <HeroSection>
      <HeaderWithToggle />
      <MainContainer>
        <HeroContent>
          <HeroTitle>Welcome to the Coding Club</HeroTitle>
        </HeroContent>

        <Section>
          <SectionContent>
            <Text>
            Step into the dynamic world of coding, where creativity meets logic. Our club offers a collaborative environment to learn various programming languages, work on exciting projects, and participate in hackathons. From beginners to experienced developers, everyone can enhance their skills, solve real-world problems, and create innovative applications.  </Text>
           
            <JoinClubButton onClick={handleButtonClick}>
              {hasCodingJoined ? 'Leave Club' : 'Join Club'}
            </JoinClubButton>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Club Gallery</SectionTitle>
          <CarouselWrapper>
            <Carousel
              showArrows={true}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              transitionTime={500}
              swipeable={true}
            >
              <div>
                <CarouselImage src={image1} alt="Event 1" />
              </div>
              <div>
                <CarouselImage src={image2} alt="Event 2" />
              </div>
              <div>
                <CarouselImage src={image3} alt="Event 3" />
              </div>
            </Carousel>
          </CarouselWrapper>
        </Section>

        <Section>
          <SectionTitle>Upcoming Events</SectionTitle>
          <EventsList>
            {events.map((event, index) => (
              <EventItem key={index}>
                <EventDate>{event.date}</EventDate>
                <EventDetails>
                  <EventName>{event.name}</EventName>
                  <EventDescription>{event.description}</EventDescription>
                  <Link to="/participation-form">
                  <ParticipateButton>Participate</ParticipateButton>
                  </Link>
                </EventDetails>
              </EventItem>
            ))}
          </EventsList>
        </Section>

        <Section>
          <SectionTitle>Club Leads</SectionTitle>
          <LeadsGrid>
            <LeadCard>
              <LeadInner>
                <LeadFront>
                  <LeadImage src={member1} alt="Member 1" />
                </LeadFront>
                <LeadBack>
                  <LeadName>Maya Lee</LeadName>
                  <LeadRole>President</LeadRole>
                </LeadBack>
              </LeadInner>
            </LeadCard>
            <LeadCard>
              <LeadInner>
                <LeadFront>
                  <LeadImage src={member2} alt="Member 2" />
                </LeadFront>
                <LeadBack>
                  <LeadName>Chris Patel</LeadName>
                  <LeadRole>Secretary</LeadRole>
                </LeadBack>
              </LeadInner>
            </LeadCard>
            <LeadCard>
              <LeadInner>
                <LeadFront>
                  <LeadImage src={member3} alt="Member 3" />
                </LeadFront>
                <LeadBack>
                  <LeadName>Alex Brown</LeadName>
                  <LeadRole>Treasurer</LeadRole>
                </LeadBack>
              </LeadInner>
            </LeadCard>
          </LeadsGrid>
        </Section>

        {/* New Footer Section */}
        <FooterSection>
          <FooterContent>
            <FooterTop>
              <FooterLinks>
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </FooterLinks>
              <SocialMediaIcons>
                <SocialMediaLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </SocialMediaLink>
                <SocialMediaLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </SocialMediaLink>
                <SocialMediaLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </SocialMediaLink>
                <SocialMediaLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialMediaLink>
              </SocialMediaIcons>
            </FooterTop>
            <ContactDetails>
              <p>Email: <a href="mailto:contact@artsclub.com">contact@artsclub.com</a></p>
              <p>Phone: +123 456 7890</p>
            </ContactDetails>
            <BackToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              
            </BackToTopButton>
          </FooterContent>
        </FooterSection>
      </MainContainer>
    </HeroSection>
  );
};

export default CodingClub;

// Styled-components
const HeroSection = styled.div`
  background: url('../image/hero-background.jpg') no-repeat center center/cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const MainContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  overflow-y: auto;
  margin-bottom: 0px;
`;

const HeroContent = styled.div`
  margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 25px; /* Adjusted margin to move the title up */
`;

const JoinClubButton = styled.button`
  background-color:  #FF6B4D;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  margin-top: 20px; /* Adds space above the button */

  &:hover {
    background-color: #000000;
  }
`;



const SectionContent = styled.div`
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
 
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const CarouselWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
`;

const Section = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
 
  
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const EventsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const EventItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const EventDate = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #FF8A5C;
  margin-bottom: 15px;
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const EventName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
`;

const EventDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  text-align: center;
`;

const ParticipateButton = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  background-color:  #FF6B4D;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #000000;
    transform: translateY(-2px);
  }
`;
const LeadsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const LeadCard = styled.div`
  width: 200px;
  height: 300px;
  perspective: 1000px;
`;

const LeadInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const LeadFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LeadBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #333;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transform: rotateY(180deg);
`;

const LeadImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const LeadName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const LeadRole = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const FooterSection = styled.footer`
  background: #333;
  color: #fff;
  padding: 20px 20px;
  border-radius: 10px;
  margin-bottom: 0px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialMediaLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #FF8A5C;
  }
`;

const ContactDetails = styled.div`
  font-size: 1rem;
  color: #ccc;

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BackToTopButton = styled.button`
  background-color:  #FF6B4D;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: #000000;
  }

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Center the arrow */
  }
`;
