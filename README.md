 

  
Al Imam Mohammad Ibn Saud Islamic University
    College of Computer and Information Sciences
CS Department Course Title:	Web Application Development
Course Code:	CS346
Course Instructors:	Dr. Sultan Naaman Qasim



Web Application Development
Dripper ( Course Project )
Class : 172

STUDENTS NAME	ACADIMIC NO
Omar Saad AlShuail	443017190
Mohammed Saleh Alhawas	443017764
Omar Suliman Alsuraia	444002592
Khaled Madwas Al-Asiri	443017332





( Dripper )

- A place to find your taste in coffee.

( Overview )
Dripper is a web application that helps users discover and share their favorite coffee recipes. Also allows users to upload recipes, rate them, and find new coffee ideas.

( Prerequisites )

- Node.js
- npm (Node Package Manager)
- MongoDB

( Goals of the project )
- To create a community-driven platform for coffee enthusiasts.
- To provide a an easy to use experience for the users to discover and share coffee recipes.








( Some Screenshot of the project ) 
- Dashboard : 
 
This is where you can find all the navigation you need.
- Upload a Recipe! : 
 
In this page you can upload you own recipes for everyone to see !.




- Discover all the Recipes : 
 
In this page you can choose the type of the Recipe you want.
- Choose a Recipe 
 
In this page you can find all the Recipes uploaded by other users !.


- More Details : 
 
In this page you can find out more about the Recipe you have chosen.
- My Recipe :
 
In this page you can find all the Recipes you have uploaded and manage them.

- Contact us :
 


( Flow Chart )
The flow chart for Dripper outlines the structure and functionality of the web application, which is designed to help users discover, share coffee recipes.
 
( Installation )

1. Clone the repository :
   “git clone https://github.com/PY-MAD/dripper.git”

2. Install all the required dependencies : 
   “npm install”

3. Create the ( .env ) file with the following contant :
PORT_DB=
USERNAME_DB=  “User Name”
PASSWORD_DB=7414
MONGODB_URI=mongodb+srv://msmhawas:7414@webproject.6jtmd.mongodb.net/web_project

GOOGLE_CLIENT_ID=
1073873453680-thn6v021mj28g8s270je09cmgp6ig3qr.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback

SMTP_HOST=smtp.gmail.com
SMTP_USERNAME=dripper931@gmail.com
SMTP_PASSWORD=hcys iqit kcau kwnf
SENDER_EMAIL=dripper931@gmail.com



( Running the project )

1. Start the server by using the following command in the terminal :
	npm start

2. Open your browser :
	 and navigate to http://localhost:3000

3. Or you could visit the website with the link ( Optional ) :
   https://dripper.site/dashboard

( Technologies Used )

- Backend: Express.js
- Database: MongoDB
- Front End: EJS, ( HTML )
- Styling: Bootstrap ( CSS )
- Authentication: Passport.js with Google OAuth
- File Upload: express-fileupload
- Email Service ( Contact Form ): Nodemailer
- Session Management: express-session with connect-mongo
- Environment Variables: dotenv







( Future Work )

- Implement user ratings and comments for recipes.
- Add more authentication options.
- Improve the UI/UX design.
- Allow user to buy coffee beans.

( Resources ) 

- Express.js Documentation : ( https://expressjs.com/ )
- MongoDB Documentation : ( https://docs.mongodb.com/ )
- Passport.js Documentation : ( http://www.passportjs.org/docs/ )







![image](https://github.com/user-attachments/assets/7e4a0ffb-64f0-4b41-ac6c-f9b9fdf9bb03)
