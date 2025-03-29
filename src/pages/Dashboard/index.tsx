import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/auth/AuthContext';
import { timeAgo, truncateText, getInitials } from '../../utils/helpers';

interface DashboardStats {
  totalCandidates: number;
  activeAssessments: number;
  completionRate: number;
}

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [stats, setStats] = useState<DashboardStats>({
    totalCandidates: 124,
    activeAssessments: 8,
    completionRate: 87
  });

  const [activities, setActivities] = useState<ActivityItem[]>([
    {
      id: '1',
      title: 'New candidate applied',
      description: 'John Doe completed the assessment',
      timestamp: new Date()
    }
  ]);

  const menuItems = [
    { path: '/dashboard', label: 'Overview' },
    { path: '/dashboard/candidates', label: 'Candidates' },
    { path: '/dashboard/assessments', label: 'Assessments' },
    { path: '/dashboard/reports', label: 'Reports' },
    { path: '/dashboard/settings', label: 'Settings' }
  ];

  return (
    <DashboardContainer>
      <Sidebar>
        <SidebarHeader>
          <UserInfo>
            <UserAvatar>
              {getInitials(user?.fullName || 'User Name')}
            </UserAvatar>
            <UserName>{truncateText(user?.fullName || 'User', 20)}</UserName>
          </UserInfo>
        </SidebarHeader>
        <NavMenu>
          {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              as={Link}
              to={item.path}
              active={location.pathname === item.path}
            >
              <span>{item.label}</span>
            </MenuItem>
          ))}
        </NavMenu>
      </Sidebar>

      <MainContent>
        <Header>
          <Title>Dashboard</Title>
          <Actions>
            <PrimaryButton as={Link} to="/dashboard/assessments/new">
              New Assessment
            </PrimaryButton>
          </Actions>
        </Header>

        <StatsGrid>
          <StatCard>
            <StatTitle>Total Candidates</StatTitle>
            <StatValue>{stats.totalCandidates}</StatValue>
            <StatChange positive>+12% from last month</StatChange>
          </StatCard>
          <StatCard>
            <StatTitle>Active Assessments</StatTitle>
            <StatValue>{stats.activeAssessments}</StatValue>
            <StatChange>Current</StatChange>
          </StatCard>
          <StatCard>
            <StatTitle>Completion Rate</StatTitle>
            <StatValue>{stats.completionRate}%</StatValue>
            <StatChange positive>+5% from last month</StatChange>
          </StatCard>
        </StatsGrid>

        <RecentActivity>
          <SectionTitle>Recent Activity</SectionTitle>
          <ActivityList>
            {activities.map((activity) => (
              <ActivityItem key={activity.id}>
                <ActivityContent>
                  <ActivityTitle>{truncateText(activity.title, 50)}</ActivityTitle>
                  <ActivityDescription>
                    {truncateText(activity.description, 100)}
                  </ActivityDescription>
                </ActivityContent>
                <ActivityTime>{timeAgo(activity.timestamp)}</ActivityTime>
              </ActivityItem>
            ))}
          </ActivityList>
        </RecentActivity>
      </MainContent>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
  background-color: #f9fafb;
`;

const Sidebar = styled.aside`
  background-color: white;
  border-right: 1px solid #e5e7eb;
  padding: 1.5rem;
`;

const SidebarHeader = styled.div`
  margin-bottom: 2rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #6366f1;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #111827;
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

// const MenuItem = styled.a<{ active?: boolean }>`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   padding: 0.75rem 1rem;
//   border-radius: 6px;
//   color: ${props => props.active ? '#6366f1' : '#4b5563'};
//   background-color: ${props => props.active ? '#eff6ff' : 'transparent'};
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     background-color: ${props => props.active ? '#eff6ff' : '#f9fafb'};
//     color: #6366f1;
//   }
// `;

const MainContent = styled.main`
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  color: #111827;
  margin: 0;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled.button`
  background-color: #6366f1;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4f46e5;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const StatTitle = styled.h3`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 0.5rem 0;
`;

const StatValue = styled.div`
  font-size: 1.875rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const StatChange = styled.div<{ positive?: boolean }>`
  font-size: 0.875rem;
  color: ${props => props.positive ? '#059669' : '#6b7280'};
`;

const RecentActivity = styled.section`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: #111827;
  margin: 0 0 1rem 0;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActivityItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  background-color: #f9fafb;
`;

const ActivityContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ActivityTitle = styled.div`
  font-weight: 500;
  color: #111827;
`;

const ActivityDescription = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

const ActivityTime = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

const MenuItem = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  color: ${props => props.active ? '#6366f1' : '#4b5563'};
  background-color: ${props => props.active ? '#eff6ff' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.active ? '#eff6ff' : '#f9fafb'};
    color: #6366f1;
  }
`;

export default Dashboard;