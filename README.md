# ReachInBox-Frontend

## Overview
This repository contains the code for Reachinbox frontend App using React with Javascript for an assignment given by Reachinbox.

## Technologies Used ( Frontend )
  - Javascript
  - React + Vite
  - Tailwind CSS

## Deployment

The application is deployed on Vercel and can be accessed here at https://reachinbox-assignment-seven.vercel.app/


## Demo Video :- 
https://www.loom.com/share/3b5534a9c73045d29b5e04fa84d4db73?sid=44a28504-6270-450c-a65f-e59f84091967

## Login Page
![loginpage](https://github.com/user-attachments/assets/e7f88269-a781-46b8-bb00-043506969e63)

## Landing Page
![landingpage](https://github.com/user-attachments/assets/3a564398-e3f8-4c03-87e3-572b463fe51a)

## Dashboard with Light Mode
![dashbord_lightmode](https://github.com/user-attachments/assets/640f2569-fdf1-4e80-970f-0930dec3028e)

## Dashboard with Dark Mode
![dashbord_darkmode](https://github.com/user-attachments/assets/e53c3228-0463-4938-baf6-5f4c7d058b5d)

## Reply Email 
![replyemail](https://github.com/user-attachments/assets/f30c2280-126f-4df1-a006-bc656f14e7fc)

## Delete Email 
![delete_email](https://github.com/user-attachments/assets/c89a1cbb-c1f7-41b9-8bc7-244f3cffad67)



 # How to Run <br/>
 
   <h2>Installation</h2>
   
   Clone the repository:   ``` git clone https://github.com/chaitanyakagita/Reachinbox_Assignment.git  ``` <br/>
   Navigate to the project directory:   ``` cd reachinbox ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run start ``` <br/>
   Open your browser and visit:   ``` http://localhost:5173 ``` <br/>
   

   ## Features 
   
  - Login Authentication
  - Get All Emails
  - Post (send) Email
  - Delete Email


   <h2>Endpoints</h2>
   <h3>List All Emails</h3>
   <pre><code>GET {{baseurl}}/onebox/list </code></pre>

   <h3>Get Messages from Onebox</h3>
   <pre><code>GET {{baseurl}}/onebox/messages/:thread_id </code></pre>

   <h3>Reply Email</h3>
   <pre><code>POST {{baseurl}}/onebox/reply/:thread_id </code></pre>

   <h3>Delete Email</h3>
   <pre><code>DELETE {{baseurl}}/onebox/messages/:thread_id </code></pre>

 
  
