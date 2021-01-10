import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {}
}); // Initil value could be any type of data

export default authContext;