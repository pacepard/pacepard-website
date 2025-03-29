import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/auth/AuthContext';
import AuthService from '../../services/auth.service';
import { validateEmail, validatePassword, validateName, validateForm } from '../../utils/validation';
import { getInitials } from '../../utils/helpers';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateRegistrationForm = () => {
    const validationRules = {
      firstName: [(value: string) => validateName(value)],
      lastName: [(value: string) => validateName(value)],
      email: [validateEmail],
      password: [validatePassword]
    };

    const errors = validateForm(formData, validationRules);
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const validationErrors = validateRegistrationForm();
    if (validationErrors) {
      setError('Please fix the form errors');
      setIsLoading(false);
      return;
    }

    try {
      await AuthService.register({
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password
      });
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <FormSection>
        <Logo>Preview</Logo>
        <Title>Sign up</Title>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>First name</Label>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Last name</Label>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Work email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="work@sample.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <PasswordWrapper>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </PasswordWrapper>
          </FormGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Hire with Preview'}
          </SubmitButton>
        </Form>

        <LoginLink>
          Have an account? <Link to="/login">Sign In</Link>
        </LoginLink>
      </FormSection>
      <ImageSection>
        <WelcomeText>
          This is a placeholder text for welcome copy.
        </WelcomeText>
      </ImageSection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
`;

const FormSection = styled.div`
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: 0 auto;
  width: 100%;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  color: #000;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #000;
`;

const Form = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #374151;
  font-size: 0.875rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4B5563;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 1rem;

  &:hover {
    background-color: #374151;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const LoginLink = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #4B5563;

  a {
    color: #6366f1;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ImageSection = styled.div`
  background: linear-gradient(rgba(99, 102, 241, 0.8), rgba(99, 102, 241, 0.8)),
              url('/path-to-your-image.jpg') center/cover;
  display: flex;
  align-items: center;
  padding: 2rem;
`;

const WelcomeText = styled.h2`
  color: white;
  font-size: 3.5rem;
  line-height: 1.2;
  font-weight: 600;
`;

const ErrorMessage = styled.div`
  background-color: #FEE2E2;
  color: #DC2626;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
`;

export default Register;