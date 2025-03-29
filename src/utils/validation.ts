interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validatePassword = (password: string): ValidationResult => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.push('Password must contain at least one special character (!@#$%^&*)');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateEmail = (email: string): ValidationResult => {
  const errors: string[] = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errors.push('Please enter a valid email address');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateName = (name: string): ValidationResult => {
  const errors: string[] = [];

  if (name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  if (/[0-9!@#$%^&*]/.test(name)) {
    errors.push('Name cannot contain numbers or special characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validatePhoneNumber = (phone: string): ValidationResult => {
  const errors: string[] = [];
  const phoneRegex = /^\+?[\d\s-]{10,}$/;

  if (!phoneRegex.test(phone)) {
    errors.push('Please enter a valid phone number');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateUrl = (url: string): ValidationResult => {
  const errors: string[] = [];
  try {
    new URL(url);
  } catch {
    errors.push('Please enter a valid URL');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateRequired = (value: string, fieldName: string): ValidationResult => {
  const errors: string[] = [];

  if (!value || value.trim().length === 0) {
    errors.push(`${fieldName} is required`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateLength = (value: string, min: number, max: number): ValidationResult => {
  const errors: string[] = [];

  if (value.length < min) {
    errors.push(`Must be at least ${min} characters long`);
  }
  if (value.length > max) {
    errors.push(`Must not exceed ${max} characters`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateForm = (values: Record<string, string>, rules: Record<string, Function[]>): Record<string, string[]> => {
  const errors: Record<string, string[]> = {};

  Object.keys(rules).forEach(field => {
    const fieldErrors: string[] = [];
    rules[field].forEach(validationFn => {
      const result = validationFn(values[field]);
      if (!result.isValid) {
        fieldErrors.push(...result.errors);
      }
    });
    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
    }
  });

  return errors;
};