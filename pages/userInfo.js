/** @format */
'use client';
import React from 'react';
import { Character } from '../queries';
import { useQuery } from '@apollo/client';

const UserInfo = () => {
  const { data } = useQuery(Character);

  return (
    <>
      {data.characters.results.map(r => (
        <div style={{ border: '1px solid' }} key={r.id}>
          Name: {r.name} <br />
          Status: {r.status}
        </div>
      ))}
    </>
  );
};

export default UserInfo;
