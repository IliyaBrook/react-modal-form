# CustomForm Package

`CustomForm` is a customizable form component built with React. It allows you to easily create forms with dynamic fields, handling form state and validation in a flexible way.

## Installation

To install the package, use npm or yarn:

```bash
npm install react-modal-form
```
```bash
yarn add react-modal-form
```

## Usage

Here's a basic example of how to use the `CustomForm` component in your project.

Import the CustomForm component from the package in your React application

```jsx
import React from 'react';
import { CustomForm } from 'my-custom-form-package';

function App() {
  const handleSubmit = (formState: { [key: string]: string }) => {
    console.log(formState);
  };

  return (
    <div>
      <h1>My App</h1>
      <CustomForm
        formHeader={{ headerText: 'My Form', subHeaderText: 'Please fill out the form' }}
        fields={[
          { name: 'email', type: 'email', label: 'Email' },
          { name: 'password', type: 'password', label: 'Password' },
        ]}
        onSubmit={handleSubmit}
        formErrors={{ message: '' }}
        buttonText="Submit"
      />
    </div>
  );
}

export default App;
```
