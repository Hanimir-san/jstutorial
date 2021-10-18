'use strict';

let user = {
  name: "John Smith",
  age: 35
};

let userJson = JSON.parse(JSON.stringify(user));

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

let meetupJson = JSON.stringify(meetup, (key, value) => (key && value == meetup) ? undefined: value);
alert(meetupJson);
