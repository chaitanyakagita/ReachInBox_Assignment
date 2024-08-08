# ReachInBox-Frontend

## Overview
This repository contains the code for Reachinbox frontend App using React with Javascript for an assignment given by Reachinbox.

## Technologies Used ( Frontend )
  - Javascript
  - React
  - Tailwind css

## Deployment

The application is deployed on Vercel and can be accessed [here](https://reachinbox-assignment-seven.vercel.app/).


## Demo Video :- 
https://www.loom.com/share/3b5534a9c73045d29b5e04fa84d4db73?sid=44a28504-6270-450c-a65f-e59f84091967


 # How to Run <br/>
 
   <h2>Installation</h2>
   
   Clone the repository:   ``` git clone https://github.com/chaitanyakagita/Reachinbox_Assignment.git  ``` <br/>
   Navigate to the project directory:   ``` cd reachinbox ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run start ``` <br/>
   Open your browser and visit:   ``` http://localhost:5173 ``` <br/>
   

   ## Features 
   
  - Authentication
  - Get Emails
  - Post (send) Email
  - Delete Email


   <h2>Endpoints</h2>
   <h3>All Emails</h3>
   <pre><code>GET {{baseurl}}/onebox/list </code></pre>

   <h3>All Emails from Onebox</h3>
   <pre><code>GET {{baseurl}}/onebox/messages/:thread_id </code></pre>

   <h3>Add Onebox Mail</h3>
   <pre><code>POST {{baseurl}}/onebox/reply/:thread_id </code></pre>

   <h3>Delete Email</h3>
   <pre><code>DELETE {{baseurl}}/onebox/messages/:thread_id </code></pre>

 
  
