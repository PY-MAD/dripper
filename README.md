# Al Imam Mohammad Ibn Saud Islamic University

## College of Computer and Information Sciences

**CS Department**  
**Course Title:** Web Application Development  
**Course Code:** CS346  
**Course Instructors:** Dr. Sultan Naaman Qasim  

---

# Dripper (Course Project)

**Class:** 172  

### Students
| Name                   | Academic No. |
|------------------------|-------------|
| Omar Saad AlShuail    | 443017190   |
| Mohammed Saleh Alhawas| 443017764   |
| Omar Suliman Alsuraia | 444002592   |
| Khaled Madwas Al-Asiri| 443017332   |

## Dripper - A Place to Find Your Taste in Coffee

### Overview
Dripper is a web application that helps users discover and share their favorite coffee recipes. It allows users to upload recipes, rate them, and find new coffee ideas.

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### Goals of the Project
- To create a community-driven platform for coffee enthusiasts.
- To provide an easy-to-use experience for users to discover and share coffee recipes.

---

## Features

### Some Screenshots of the Project

#### Dashboard
![Dashboard Screenshot](https://ibb.co/chH4HbXc)
This is where you can find all the navigation you need.

#### Upload a Recipe
![Upload Recipe Screenshot](https://ibb.co/DPSRcRfB)
In this page, you can upload your own recipes for everyone to see!

#### Discover All the Recipes
![Discover Recipes Screenshot](https://ibb.co/Xxnt1mqD)
In this page, you can choose the type of recipe you want.

#### Choose a Recipe
![Choose Recipe Screenshot](https://ibb.co/prvJKMmX)
In this page, you can find all the recipes uploaded by other users!

#### More Details
![More Details Screenshot](https://ibb.co/HTVWQcNj)
In this page, you can find out more about the recipe you have chosen.

#### My Recipe
![My Recipe Screenshot](https://ibb.co/Pzxyjt0b)
In this page, you can find all the recipes you have uploaded and manage them.

#### Contact Us
![Contact Us Screenshot](https://ibb.co/qLMqCzXj)

---

## Flow Chart
![Flow Chart](https://media.discordapp.net/attachments/1115430930140635136/1335053763345649664/web.drawio.png?ex=679ec535&is=679d73b5&hm=ef0a185009b400d9ceeae59709a7db6ab2cc6a82064c50ed6c19dca3f69c9a12&)

The flow chart for Dripper outlines the structure and functionality of the web application, which is designed to help users discover and share coffee recipes.

---

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/PY-MAD/dripper.git
   ```
2. Install all the required dependencies:
   ```sh
   npm install
   ```
3. Create the `.env` file with the following content:
   ```ini
   PORT_DB=
   USERNAME_DB="User Name"
   PASSWORD_DB=7414
   MONGODB_URI=mongodb+srv://msmhawas:7414@webproject.6jtmd.mongodb.net/web_project
   
   GOOGLE_CLIENT_ID=1073873453680-thn6v021mj28g8s270je09cmgp6ig3qr.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=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
   GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback
   
   SMTP_HOST=smtp.gmail.com
   SMTP_USERNAME=dripper931@gmail.com
   SMTP_PASSWORD=hcys iqit kcau kwnf
   SENDER_EMAIL=dripper931@gmail.com
   ```

**⚠️ Important:** Ensure that sensitive credentials are stored securely and not exposed in public repositories.

---

## Running the Project

1. Start the server using the following command:
   ```sh
   npm start
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
3. Alternatively, visit the live website (if available):
   ```
   https://dripper.site/dashboard
   ```

---

## Technologies Used
- **Backend:** Express.js
- **Database:** MongoDB
- **Front End:** EJS, HTML
- **Styling:** Bootstrap (CSS)
- **Authentication:** Passport.js with Google OAuth
- **File Upload:** express-fileupload
- **Email Service (Contact Form):** Nodemailer
- **Session Management:** express-session with connect-mongo
- **Environment Variables:** dotenv

---

## Future Work
- Implement user ratings and comments for recipes.
- Add more authentication options.
- Improve UI/UX design.
- Allow users to buy coffee beans.

---

## Resources
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Passport.js Documentation](http://www.passportjs.org/docs/)
