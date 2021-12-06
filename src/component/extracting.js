import React from 'react';

export const comment = {
    date: new Date(),
    text: 'I hope you know what you are doing',
    author: {
      name: 'Shionne',
      avatarUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/554802fe-c63a-43b8-b1ce-903ae6324422/dd9tvpd-293a6a44-18fc-4783-9e30-95cd4f4b485e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NDgwMmZlLWM2M2EtNDNiOC1iMWNlLTkwM2FlNjMyNDQyMlwvZGQ5dHZwZC0yOTNhNmE0NC0xOGZjLTQ3ODMtOWUzMC05NWNkNGY0YjQ4NWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2gCrpprloqs2d90jMVjAv1n6_OKo7LH-I6tyaCnphA0',
    },
  };

function Child(props) {
    return (
      <img className="Child"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
    );
  }
  
  function Parent(props) {
    return(
      <div className="Parent">
      <Child user={props.user} />
        <div className="GrandChild">
          {props.user.name}
        </div>
      </div>
    );
  }
  
  function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  export function Extracting(props) {
    return (
      <div className="GrandParent">
        <Parent user={props.author} />
        <div className="Child1">
          {props.text}
        </div>
        <div className="Child2">
          {formatDate(props.date)}
        </div>
      </div>
    )
  }