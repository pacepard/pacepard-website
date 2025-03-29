interface ErrorResponse {
    message: string;
    statusCode: number;
    errors?: string[];
  }
  
  const ErrorService = {
    handleError(error: any): ErrorResponse {
      if (error.response) {
        // Server responded with error
        return {
          message: error.response.data.message || 'An error occurred',
          statusCode: error.response.status,
          errors: error.response.data.errors
        };
      } else if (error.request) {
        // Request made but no response
        return {
          message: 'No response from server',
          statusCode: 503
        };
      } else {
        // Error in request setup
        return {
          message: error.message || 'An error occurred',
          statusCode: 500
        };
      }
    },
  
    isAuthError(status: number): boolean {
      return status === 401 || status === 403;
    }
  };
  
  export default ErrorService;