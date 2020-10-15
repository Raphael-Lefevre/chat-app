import React from 'react';
import Contact from './contact'


const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      isConnected: false,
      gender: 'male',
    },
    {
      name: 'Nellie Caldwell',

      isConnected: true,
      gender: 'female',
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      isConnected: true,
      gender: 'male',
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      isConnected: false,
      gender: 'female',
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      isConnected: true,
      gender: 'female',
    }
  ];

const contacts = () => (
    <div>
        {users.map(user => (<Contact
        name={user.name}
        gender={user.gender}
        avatar={user.avatar}
        key={user.name}
        />))}
    </div>

);


  export default contacts;