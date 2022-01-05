export const groups = [
  {
    id: "1",
    name: "General",
    countMessages: 0,
    type: "GROUP",
  },
  {
    id: "2",
    name: "Reporting",
    countMessages: 23,
    type: "GROUP",
  },
  {
    id: "3",
    name: "Designers",
    countMessages: 0,
    type: "GROUP",
  },
  {
    id: "4",
    name: "Developers",
    countMessages: 1,
    type: "GROUP",
  },
  {
    id: "5",
    name: "Project-alpha",
    countMessages: 0,
    type: "GROUP",
  },
  {
    id: "6",
    name: "Snacks",
    countMessages: 0,
    type: "GROUP",
  },
]

export const contacts = [
  {
    id: "1",
    name: "Albert Rodarte",
  },
  {
    id: "2",
    name: "Allison Etter",
  },
  {
    id: "3",
    name: "Craig Smiley",
  },
  {
    id: "4",
    name: "Daniel Clay",
  },
  {
    id: "5",
    name: "Doris Brown",
  },
  {
    id: "6",
    name: "Iris Wells",
  },
  {
    id: "7",
    name: "Juan Flakes",
  },
  {
    id: "8",
    name: "John Hall",
  },
  {
    id: "9",
    name: "Joy Southern",
  },
  {
    id: "10",
    name: "Mary Farmer",
  },
  {
    id: "11",
    name: "Mark Messer",
  },
  {
    id: "12",
    name: "Michael Hinton",
  },
  {
    id: "13",
    name: "Ossie Wilson",
  },
  {
    id: "14",
    name: "Phillis Griffin",
  },
  {
    id: "15",
    name: "Paul Haynes",
  },
  {
    id: "16",
    name: "Rocky Jackson",
  },
  {
    id: "17",
    name: "Sara Muller",
  },
  {
    id: "18",
    name: "Simon Velez",
  },
  {
    id: "19",
    name: "Steve Walker",
  },
]

export const chats = [
  {
    id: "1",
    name: "Patrick Hendricks",
    lastMessage: "",
    avatar: "",
    isOnline: true,
    dateTime: "05 min",
    countMessages: 0,
    typeLastMessage: "",
    typing: false,
    type: "CHAT",
    info: {
      title: "Some text",
      email: "PatrickHendricks@gmail.com",
      time: "11:40 AM",
      location: "California, USA"
    }
  },
  {
    id: "2",
    name: "Mark Messer",
    lastMessage: "I will late",
    avatar: "",
    isOnline: true,
    dateTime: "12 min",
    countMessages: 2,
    typeLastMessage: "text",
    typing: false,
    type: "CHAT",
    info: {
      title: "Some text",
      email: "MarkMesser@gmail.com",
      time: "11:40 AM",
      location: "California, USA"
    }
  },
  {
    id: "3",
    name: "General",
    lastMessage: "This theme is awesome!",
    avatar: "",
    isOnline: false,
    dateTime: "20 min",
    countMessages: 0,
    typeLastMessage: "image",
    typing: false,
    type: "CHAT",
    info: {
      title: "Some text",
      email: "General@gmail.com",
      time: "11:40 AM",
      location: "California, USA"
    }
  },
  {
    id: "4",
    name: "Doris Brown",
    lastMessage: "Nice to meet you",
    avatar: "",
    isOnline: true,
    dateTime: "10:12",
    countMessages: 0,
    typeLastMessage: "file",
    typing: false,
    type: "CHAT",
    info: {
      title: "Some text",
      email: "DorisBrown@gmail.com",
      time: "11:40 AM",
      location: "California, USA"
    }
  },
  {
    id: "5",
    name: "Designer",
    lastMessage: "Good morning",
    avatar: "",
    isOnline: false,
    dateTime: "12/07",
    countMessages: 1,
    typeLastMessage: "text",
    typing: true,
    type: "CHAT",
    info: {
      title: "Some text",
      email: "Designer@gmail.com",
      time: "11:40 AM",
      location: "California, USA"
    }
  }
]

export const users = [
  {
    id: "1",
    name: "Patrik",
    avatar: ""
  },
  {
    id: "2",
    name: "Doris",
    avatar: ""
  },
  {
    id: "3",
    name: "Emily",
    avatar: ""
  },
  {
    id: "4",
    name: "Steve",
    avatar: ""
  },
  {
    id: "5",
    name: "Teresa",
    avatar: ""
  },
]

export const currentUser = {
  id: "1",
  name: "Patricia Smith",
  isOnline: true,
  avatar: "",
  title: "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.",
  email: "adc@123.com",
  time: "11:40 AM",
  location: "California, USA"
}

export const chooseUser = {
  id: "2",
  name: "Doris Brown",
  isOnline: true,
  avatar: "",
  title: "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.",
  email: "adc@123.com",
  time: "11:40 AM",
  location: "California, USA"
}

// не используется, показан как пример с полями
export const currentDialog = {
  id: "4",
  name: "Doris Brown",
  lastMessage: "Nice to meet you",
  avatar: "",
  isOnline: true,
  dateTime: "10:12",
  countMessages: 0,
  typeLastMessage: "file",
  typing: false,
  type: "CHAT",
  info: {
    title: "Some text",
    email: "DorisBrown@gmail.com",
    time: "11:40 AM",
    location: "California, USA"
  },
}

export const messages = [
  {
    id: "1",
    name: "Doris Brown",
    text: "Good morning",
    time: "10:00",
    avatar: "",
    isOwn: false
  },
  {
    id: "2",
    name: "Patricia Smith",
    text: "Good morning, How are you? What about our next meeting?",
    time: "10:02",
    avatar: "",
    isOwn: true
  },
  {
    id: "3",
    name: "Doris Brown",
    text: "Yeah everything is fine",
    time: "10:05",
    avatar: "",
    isOwn: false
  },
  {
    id: "4",
    name: "Doris Brown",
    text: "& Next meeting tomorrow 10.00AM",
    time: "10:05",
    avatar: "",
    isOwn: false
  },
  {
    id: "5",
    name: "Patricia Smith",
    text: "Wow that's great",
    time: "10:06",
    avatar: "",
    isOwn: true
  },
  {
    id: "6",
    name: "Patricia Smith",
    text: "Wow that's great",
    time: "10:06",
    avatar: "",
    isOwn: true
  },
  {
    id: "7",
    name: "Patricia Smith",
    text: "Wow that's great",
    time: "10:06",
    avatar: "",
    isOwn: false
  },
]
