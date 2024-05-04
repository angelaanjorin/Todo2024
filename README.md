# Todo APP

# Introduction

Project 2 for Code Institute Full-stack development program: JavaScript Essentials

This Todo App website was built using HTML, CSS and JavaScript. The website is interactive and user-friendly, allowing the user to add todos to a list. They can later on sort the todo list according to thier preferences and edit or delete todo items.


[Live Website Here](https://angelaanjorin.github.io/Todo2024/)

![Website Homepage](https://res.cloudinary.com/dzesjeplp/image/upload/v1714839135/Todo/Am-I-Responsive-_bs8bfx.png)

# README Table Content

- [Todo APP](#todo-app)
- [Introduction](#introduction)
- [Site Goals:](#site-goals)
- [User Experience - UX](#user-experience-ux)
   * [User Stories](#user-stories)
         - [New User:  ](#new-user)
         - [Returning User:](#returning-user)
   * [Development Planes:](#development-planes)
- [Design](#design)
   * [Color Scheme](#color-scheme)
   * [Typography](#typography)
   * [Imagery](#imagery)
- [Features](#features)
   * [The Input Section ](#the-input-section)
   * [The Filter Section](#the-filter-section)
      + [Date: ](#date)
      + [Pending:](#pending)
      + [Revert:](#revert)
      + [Business:](#business)
      + [Personal:](#personal)
   * [The Todo List Section](#the-todo-list-section)
      + [Top right:](#top-right)
      + [Content left section:](#content-left-section)
      + [Date section:](#date-section)
      + [Actions buttons at the left bottom section:](#actions-buttons-at-the-left-bottom-section)
      + [Scrollbar:](#scrollbar)
   * [Future Features](#future-features)
      + [More Edit Functions](#more-edit-functions)
- [Technolgies Used](#technolgies-used)
   * [Languages Used](#languages-used)
   * [Frameworks - Libraries - Programs Used](#frameworks-libraries-programs-used)
- [Deployment & Local Development](#deployment-local-development)
   * [Deployment](#deployment)
   * [Local Development](#local-development)
      + [How to Fork](#how-to-fork)
      + [How to Clone](#how-to-clone)
- [Testing](#testing)
   * [Information Sources/Resources](#information-sourcesresources)
   * [Content](#content)
   * [Code](#code)
   * [Images](#images)
   * [Special Thanks](#special-thanks)

# Site Goals:

The goals for this site are as follows:
* To be able to view the site on a range of device sizes.
* To provide a Todo APP that users can use to write up things they have to do.
* To provide the function of adding a date to state the due dates for when the todos should be completed.
* To edit, delete and sort the todos.
* To make it possible to save the information on the local storage of the user´s device.


# User Experience - UX

## User Stories

#### New User:  
* As a new user, I am looking for a Todo App to write my todos.  
* As a new user, I would like to be able to edit, delete and sort my todos.
* As a new user, I want to be able to navigate the site easily to store and manipulate my information.  


#### Returning User:
* As a returning user, I would like to access my todos again.
* As a returning user, I would like to add, edit, delete and sort my todos.

## Development Planes:
To create a website that is comprehensive and interactive for a user, as a developer you need to look at all aspects of the website and how someone who visits your website will use it. You have to consider all the user stories that have been outlined in the above sections.  

# Design

## Color Scheme

![Colors](https://res.cloudinary.com/dzesjeplp/image/upload/v1714840483/Todo/todo2024/Extract-palette-from-image-Coolors_arqj2n.png)
* The color scheme of the website was generated using [Coolors](https://coolors.co/) from the background picture. 
* Different shades of purple were used to match the background. 

## Typography
Google Fonts was used to import the chosen fonts for use on the site. 
We chose to use the font:'montserrat', sans-serif as it is user-friendly.
![Fonts](https://res.cloudinary.com/dzesjeplp/image/upload/v1714840483/Todo/todo2024/Montserrat-Google-Fonts_lkgc6u.png)

## Imagery
The background image used within the site has been chosen because it is a calming landscape, which does not interfere with the todo app located on top of it.

# Features

The website is comprised of the Home page with a Heading and then 3 main sections:

## The Input Section 

![The Input Section](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841447/Todo-2024_dunz2x.png)

The input section has four sections. There are two input fields, one for text with a placeholder saying "Add your Todo" so that the user is clearly notified to add their todo in that field. 
The second input area indicates to the user to add a date. They can type the date using the given format as a placeholder. Alternatively, there is an icon to the right of this input area indicating a calendar. When the user clicks on the icon a drop-down calendar is shown, which they can use to choose their date. 
Then there are two buttons to choose from to indicate if the todo is personal or for business. The business button is, by default, already chosen. The user has to toggle between the two buttons to make thier choice.
At the bottom, there is a big Add button to indicate the submit button. If it is clicked and there are no inputs in the sections above it, then error messages appear for both the date and todo input fields.

![Date Input Section](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841806/dateinpute_xuurn9.png)

[Live Homepage Here](https://angelaanjorin.github.io/Todo2024/)

## The Filter Section

This section has 5 buttons to sort the todo list according to:
### Date: 
After the user clicks this button, the todo list will be sorted according to the date.

![Date](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841445/date_wzyfxg.png)

### Pending:
After the user clicks this button, the todo list will be sorted with the pending todos shown first.

![Pending](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841445/pending_l4irty.png)

### Revert:
After the user clicks this button, the todo list is reverted to how it originally was before clicking any of the sort buttons. Any changes like edits, deleted todos, newly added todos or checked or unchecked todos that are made and saved on the local storage will be shown. In short, the revert button shows the current status of the todos in the local storage. 

### Business:
After the user clicks this button, the todo list is sorted with the business todos first.

![Business](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841442/businessfirst_zzmdwd.png)

### Personal:
After the user clicks this button, the todo list is sorted with the personal todos first.

![Personal](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841441/personalfirst_pdzf2h.png)

## The Todo List Section

This section shows the created todos. If the user adds a new todo, it appears at the end of the list. There is a scrollbar on the right-hand side of the todo list, which enables the user to scroll through all the todos.
There are 5 display sections for each todo:

### Top right:
In the top right corner of each todo, there is a check circle. The circle has a border and a center. When the circle is unchecked, this is demonstrated as either a pink border for personal todos or a blue border for business todos.  If the circle is checked to indicate that the todo is complete, the center gets the same color as the border. At the same instance, the text of the todo gets a line-through and the text font color changes to grey. 

![Checked](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841440/checkmark_aqx2oi.png)

### Content left section:
Here is where the title, content or description of the todo is displayed. On larger devices where the hover feature is active, the background color changes to a lighter purple to highlight the section for the user. 
As mentioned above, when the todo is checked as completed, there is a line through the text and a font color change to grey to indicate the completed status of the todo.
When the edit icon is clicked, the focus of the cursor pointer moves to the text to indicate that the user can edit the text in that field. When the user clicks again in the text field it changes to a lighter purple color. 

### Date section:
Here the chosen date is displayed of the todo.

### Actions buttons at the left bottom section:
On the left is the edit button with a hover feature that changes the background to a dark grey when hovered over (on larger devices). When the edit icon is clicked, the focus of the cursor goes directly to the title or description area of the todo to notify the user that they can edit the text in that area. 
On the right of the edit icon is a delete icon, depicted by a trash can and having a bright crimson color to alert the user that if this button is clicked the todo gets deleted and can´t be retrieved again.

### Scrollbar:
The scrollbar appears on the far righthand side of the whole todo list after a maximal height of 300px is reached. 


## Future Features

### More Edit Functions

* It would be very beneficial to be able to edit and change not only the description of the todo, but also the date and change the status of the check circle, in case the wrong category was initially chosen as the business icon is by default chosen.
* When the edit icon is clicked on a checked todo, a popup message should appear to ask the user if they want to make changes or not. Then if the user chooses to make changes, they should be prompted to uncheck the todo so that the text is no longer grey or have a line-through. Afterwards, they can choose to check the todo again or leave it unchecked.

# Technolgies Used

## Languages Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5).
* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets).
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript).

## Frameworks - Libraries - Programs Used
* [Google Fonts:](https://fonts.google.com/)
   * Google Fonts were used to import the 'Montserrat' fonts throughout the style.css.
* [Google icons:](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:delete:FILL@0;wght@400;GRAD@0;opsz@24)
    * Icons for the edit and delete functions were acquired from Google Fonts(material.io).
* [Git](https://git-scm.com/)
    * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
* [GitHub:](https://github.com/)
    * GitHub is used to store the project's code after being pushed from Git.
* [GitHuv](https://derlin.github.io/bitdowntoc/)
    * This link was used to create the table of content for the README file.
* [Visual Studio Code](https://code.visualstudio.com/)
    *Visual studio code was used to write my code.
* [Coolors:](https://coolors.co/image-picker)
    * Coolors was used to generate a color palette for the site based on the background image of the website.

# Deployment & Local Development
## Deployment
The website development was created in the "main" branch. This branch was deployed using GitHub Pages.

* This site was deployed by completing the following steps:

1. Open [GitHub](https://github.com/).
2. Click on the project to be deployed.
3. Navigate to the "Settings".
4. Navigate down to the "GitHub Pages".
5. Click on "Check it out here!".
6. Select the "main" branch and select "Save".
7. The link to the live website was ready on the top.

## Local Development

### How to Fork
To fork the Todo2024 repository:

Log in (or sign up) to Github.
Go to the repository for this project [Todo2024 repository](https://github.com/angelaanjorin/Todo2024).
Click the Fork button in the top right corner.

### How to Clone
To clone the Todo2024:

Log in (or sign up) to GitHub.
Go to the repository for this project,[Todo2024 repository](https://github.com/angelaanjorin/Todo2024).
Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

# Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

* [W3C Markup Validator](https://validator.w3.org/#validate_by_input) 

![Result HTML](https://res.cloudinary.com/dzesjeplp/image/upload/v1714843946/html_validator_hdbryr.png)

* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

![Result CSS](https://res.cloudinary.com/dzesjeplp/image/upload/v1714845095/CSS_Validator_ey9k1a.png)

* [JS Validator](https://jshint.com/)

![Result JS](https://res.cloudinary.com/dzesjeplp/image/upload/v1714846234/JSvalidator_q4opue.png)

Google Lighthouse was used to test Performance, Best Practices, Accessibility and SEO on both Desktop and Mobile devices.
The testing was done using the Google Chrome Browser. Testing was also done using Firefox on desktop.

![Lighthouse Results:](https://res.cloudinary.com/dzesjeplp/image/upload/v1714848457/PageSpeed-Insights_hdc1q0.png)

  ## Functionality
* All links have been hovered and clicked to ensure accessibility.
* The page loads correctly on all device screen sizes.
* The background image loads as intended.
* All the buttons are working correctly and provide the function results that they were built for.
* The todos are saved on the local storage of the computers and can be re-assessed when the user returns to the site after exiting it.

   ## Bugs
* My program had a bug in the javascript and wouldn´t run. I had neglected to pass in the "todos" parameter into the main Displaytodos function as well as where the Displaytodos function was called as a callback function within the different filter functions.

![Before the correction](https://res.cloudinary.com/dzesjeplp/image/upload/v1714848902/Screenshot_2024-05-03_223459_j8ljc4.png)

![Before the correction](https://res.cloudinary.com/dzesjeplp/image/upload/v1714848889/Screenshot_2024-05-04_130450_bjhwop.png)

![After the correction](https://res.cloudinary.com/dzesjeplp/image/upload/v1714848887/Screenshot_2024-05-04_124652_lkfh4d.png)

* I had an overlay in the vertical access of my todo list and I had to fix the issue by adding some code in the CSS file line 185 and setting the overflow-y to scroll.

![Before the correction](https://res.cloudinary.com/dzesjeplp/image/upload/v1714848959/overflow_rwpy3i.png)

* When I was coding for the filter functions I made the error of using the sort function on the todo list instead of the todos(e.g.todoList.sort((a, b) =>.... instead of todos.sort((a,b) =>....). 

* I needed to tweak the filter functions many times until they worked the way I wanted them to work. There are still bugs. Like if you sort the list first by date and then by pending , it keeps the original sort by date status and then with the new sort status of pending todos first, which means the pending todos will appear on the top of the list sorted by date and the completed will appear below sorted by date. If you click the pending button before any other sort button, it will only sort per pending and not any other criteria. The same goes for the other buttons as well. 
* Below are screenshots I made while I was coding for the "personal todos firt" function. I figured out in the end that the last return function (return a.category > b.category ? -1 : 1;) was sorting alphabetically and since "b" for business comes before "p", it would always return the business todos first until I changed the comparison sign from < to >. 

![Prior to correction](https://res.cloudinary.com/dzesjeplp/image/upload/v1714851722/personalbeforechange_idw0cx.jpg)

![After the correction](https://res.cloudinary.com/dzesjeplp/image/upload/v1714851719/personalafterchange_erftbq.jpg)

* A bug I could not fix due to time constraints was that, after editing text in the content area, it is not explicitly clear to a user how the edited text will be saved. The enter key has no function here, which is something I would like to change in the future. By moving or clicking out of the text field the edited text is saved but I am aware that this is not eminent to the user.

* Another bug it that it is possible to edit checked text. The line through and font color of grey remain as features during the editing process. A solution would be that if a checked todo is being edited, then the status should revert to unchecked, reverting the changes to the text automatically. 


## Information Sources/Resources

* [W3Schools](https://www.w3schools.com/).

* [Code Institute](https://stackoverflow.com/).
  

## Content

* All the text content is original. 

## Code
I got inspiration from the following projects:
    1. [yt-js-todo-2022 by TylerPottsDev](https://github.com/TylerPottsDev/yt-js-todo-2022)
    2. [Todo list tutorial by Gordon Chan](https://github.com/gorgorgordon/JS-To-do-List-App)
    3. [Tutorial from Dom from dcode](https://dev.to/dcodeyt)
    4. [Learntime](https://learntime.net/)

## Images

* [Hotpot:](https://hotpot.ai/art-generator)
    *The background image used on the site was AI-generated from hotpot from a similar image used by the todo list from learntime (link above).
  
## Special Thanks
 * Special thanks to my partner and alumni of Code Institute Eric Jones for his assistance throughout this project.
 * Special thanks to my mentor Gareth McGirr for helping me to fix some bugs and guiding me throughout the project.
 * Thanks to the support team, especially John from the tutoring service.
