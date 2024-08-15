type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser(initialValues: Partial<User>) {
 
    console.log('User updated with:', initialValues);
  }
  
  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });