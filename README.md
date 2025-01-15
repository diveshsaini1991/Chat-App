
# Realtime Chat-App 📨

This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO. The app allows users to communicate in real-time through one-to-one chat, making it ideal for private conversations.






## Features

- Real-time messaging with Socket.IO
- User authentication
- One-to-one chat functionality
- Responsive design for mobile and desktop
- Message history
- Search functionality to find users easily



## Technical Details

- **Frontend:** React.js, Redux (if applicable), CSS/SASS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time Communication:** Socket.IO
- **Password Hashing:** bcrypt
- **CORS:** Enabled for cross-origin resource sharing
## API Endpoints


#### Auth 

```http
  POST /api/auth/signup
  POST /api/auth/login
  POST /api/auth/logout
```

#### Message

```http
  POST /api/message/send/:id
  GET /api/message/get/:id
```
#### User

```http
  GET /api/user/
```



## Run Locally

Clone the project

```bash
  git clone https://github.com/diveshsaini1991/Chat-App.git
```

Install dependencies

```bash
  npm install 
```

create **.env file** in a folder named "config" following next section

Start the server

```bash
  npm run start
```

Go to the frontend directory using Other Terminal

```bash
  cd ./frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables


```dotenv
PORT = 4000

MONGO_URI = YOUR_MONGO_URL

JWT_SECRET_KEY = YOUR_JWT_SECRET_KEY

NODE_ENV = development

```


## Demo

link - https://chat-app-dken.onrender.com


# Contributing to the Chat-App 🤝

We welcome and appreciate contributions from the community to enhance and improve the Chat-App . Whether you're a developer, designer, tester, or someone with valuable feedback, your input is valuable.
## Thank You!❤️

Thank you for considering contributing to the Chat-App . Your efforts help make this project better for everyone. If you have any questions or need assistance, feel free to reach out through the issue tracker or discussions. Happy coding🤩!
