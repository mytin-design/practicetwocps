
# Obj 1
# Create Btn  - 
Onclick - opens the create account page in a new tab

# Obj 2
create an exam database

--- To include
- Select options  - used to search

- Main question is - What happens when a certain search criteria is passed

# What happens
- Example (exIndex) - If 
----Criteria 
1. Grade 1
2. X
3. 2023
4. II
5. Midterm

--- Then, we must have this data, in order to display it

-- Option one
- Have a table with titles of each of the criteria
-so that if a search parameter meets the title in a table, the title is highlighted, and if clicked, gives the user more options

--Option two - Best Version
Display the results of the class requested 

--The How 
-Create the display container - virtual
-- Have all the files in the root directory or a folder in the root directory

--Use ids to target files
-That is, if (exIndex), Show fileX, else if (another grade, year, etc), Show fileY, else, and so on



and how do I search


# Modify site for Consolata Primary School 

# Bein data  - 10th July 2023

# Stage 1
Rename current index file to directories.html  

# Create an index file


# bug xx

The carousel was being affected by a .fade class connected to an animation.
Problem was - The fade was too fast and only connected to one of the carousel divs
Therefore, the first 2 carousel divs functioned as set, however, the last moved faster     


# Hide previous and next buttons until pcard is hovered onto

- Let prev and next buttons remain hidden in the main header carousel

# make the pcard a flex container - image, left, text, right 

- In flexpcard
    Have a heading, some text and call to action button or sth

 # modify the create account log in and sign in section   


# after logging in

A system 
Each user with their own account
I suggest using wordpress for now - try
If user creates an account, create a similar but personalized account
Admins should have priviledges 




# Sign up and Login
To login
-Use the username and passowrd set during sign in - 
This means it should be stored somewhere we can access it

-If no username or passowrd set, use default, admin and password to login

//Now how do we store username and password so as to retrieve it later for use in login?



 
 # 7-10-2023
 # Two tabs for the login/sign up page 

 -One tab, student, other staff

 -completed for login

 # Redesign sign in page to reflect that of the login page.


# 11/10/2023
reg-form bug 001
Tabs script does not hide one of the tabcontents 

Solved - add "display: none;" to tabcontents,
 and open a tab by default;

 
12/10
<!--Disable right click context menu for images security-->

How can we uplodad results for parents?


12/10/2023
Profiles updated 

13/10/2023
upload Joining the staff form



# create this
//JobApplication PHP 


# registration box media query for 400px and below corrected

25/10/2023 - Updates
# When a profile is clicked,  it should appear as a dialog box showing extra information.

# Before moving, have a goal
# Without a goal you wander aimlesslessly

# GOAL - Repair the carousel in the mentorship page
Bug: 
It a script in the main js file "script.js" interferes with the running of this script;

Solution
-Move the script to another separate file - "mentorship.js"
-Adjust the script in accordance to W3Schools recommendations


:Status - Completed
- Works locally
-Not functional on the server.



# reduce font-size for input elements in the job application form for smaller devices <400

# Afternoon Updates
The Job Application form

- Padding-left of .5pc added for inputs and option values and placeholders
- Font-size change - media query for varying devices
- 
# Updates 26 oct 2023
- Border radius for most elements in landing and about us page

- changes in design for login page esp the create acc button and also border radius effects

- Google sign in API installation
--- Credentials created at console.cloud.google.com/api/credentials

- Client ID set up for portal-login.html
----googleSignIn.js created and attached to portal-login.html


--  Portal login for staff is not Javascript enabled
Idea
--Use the same script used for learners, but change the classes and id's


// Completed

Now the students and the staff can log in using separate channels

# 4TH NOVEMBER 2023
# SEARCH ALGORITHM FOR CPS WEBSITE

//The function of the search engine is to provide relevant search results
based on the user's search criteria;

For this to function as intended, the engine must have access to multiple resource materials, 
and multiple probable search keywords
//The general format of the algorith is:

if(probable keyword matches available predefined relevant results) {
    return relevant result;
}

//Notice ; we need relevant keyword matches
for example: Say fee structure

A user may search for 'Fee Structure' using the following keywords:
fee, f, fii, school fees, school money, structure, pesa, money, amount, school amount, total, pay

The above are all possible search keywords

The next step is to define what should be returned;

Obviously, the first result is the fee structure;

However, we could also provide relevant results such as:
how to pay, where to pay, school account numbers, who to pay, boarding services, precautions, etc

Basically that is how it will work

Indexing means that we need to list all possible search items AVAILABLE in the website;keyword - available
However we may provide an option to search on the web;
using this :
window.open('https://www/google.com/search?client=firefox-b-d&q=searchVal', '_blank');


# 12 NOVEMBER 2023

Create a registration module for online application 


# NEW FEATURE - 12 NOV 2023 - DIALOG OR MODAL BOX FOR BROKEN LINKS AND BUTTONS
When a user clicks a broken link or button, aquick dialog box will appear
Not working for now


# OBJECTIVE 13 NOV 2023
I think its best we handle all issues - add functionality to the landing page before we proceed to other pages

1. Search Functionality
Objective

when a word is searched, it should list all the available important links on a new search page

Task No.1: Design a search page - Use AccountsPlaceKenya for mockup


13/nov/2023
//Christmass / Holiday changes - a few images added


- Working on feedback.php for sending messages to email


### START IF
## START OPTIMIZATION FOR VERSION 1.1.A
# DATE 7/12/2023

# Changes on the CPS WEBSITE, as from today, 7th DEC 2023, will be done from this endpoint.

# Initial change - Search functionality
- The search functionality is inherited from C:\Users\denis\desktop\code\buildingprojects\cpssearch dir
NB: Functionality functions as intended in the original dir

NB: Search function integrated successfuly and working as intended!



# Second change - When a staff clicks their 'space', a dialog box appears with additional information.



# Indicate the contents of each js file attached on every file, esp the landing page


# Enter marks page
Page added - 