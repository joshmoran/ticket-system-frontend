# Ticket System - Frontend 

> This is the backend programming for a weather app and is intended to be used along side one another 
[Ticket System Backend - Github](https://github.com/joshmoran/ticket_server-back_end)

# Index 
1. Getting Started with the project
2. Overview and Features
3. Improvements 

# 1. Getting Started with the project 
To successfully run the program, please follow these steps:
1. rename 'env-template' to '.env'
2. Edit and change the '.env' file to the desired values
   - BACKEND_APP_BASE_URL = url for the backend app 
     - e.g. "127.0.0.1:3001"
     - This should match the URL for the address of the backend
3. In a terminal run, "npm install"
4. then "npm start"

# 2. Overview and Features
- The app is split into two sections:
  - Authorized 
  - Unauthorized 
- On startup, the unauthorized screen is show, features of:
  - Presently, their is no authentication happening, but it will store the username and password and createContext for each page to consume nested data between pages
  - Login: When a user enters a username and password and clicks 'login', they are taken to the authorized screen
  - Register: When a user enters a username and password and clicks register, they are taken to the authorized screen
- When logged in or registered is submitted, the authorized screen is shown and the pages are as follow:
  - Home
    - Welcome the user and gives an overview
  - Pending 
    - Allows the user to view pending tickets 
  - Complete
    - Allows the user to view complete tickets
  - Create
    - Allows the user to create a ticket with the following values:
      - Summary (name)
      - Priority
      - Create Date 
      - Status 
    - Does alert the user and prevents the data being inputted to the database when the summary is empty
  - Logout
    - Allows the user to logout and return to the unauthorized screen
- On the authorized screen, within pending and complete tickets page, the user can: 
  - Sort the tickets by:
    - Name - A to Z or Z to A
    - Priority - High to Low or Low to High
    - Status - CREATED, REJECTED, IN_PROGRESS or COMPLETED 
    - Date Created - Oldest to Newest or Newest to Oldest 
    - Date Uploaded - Oldest to Newest or Newest to Oldest
  - View a ticket by clicking on a ticket entry 
    - The user can see Details information on the ticket 
    - The user can write messages/updates to the ticket
      - Their username is used to show who entered the information and when 
    - The user can complete a ticket or they can change the status
  
# 3. Improvements
- One thing I need to learn and implement into this is authentication. Either when the user logs in to an account or when they register for an account.
- In addition, how to secure this process and prevent Man in the Middle attacks or leaks of session IDs