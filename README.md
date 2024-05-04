# Todo APP

# Introduction

Project 2 for Code Institute Full-stack development program: JavaScript Essentials

This Todo App website was built using HTML, CSS and JavaScript. The website is interactive and user-friendly allowing the user to add todos to a list. They can later on sort the todo list according to thier preference and edit or delete todo items.


[Live Website Here](https://angelaanjorin.github.io/Todo2024/)

![Website Homepage](https://res.cloudinary.com/dzesjeplp/image/upload/v1714839135/Todo/Am-I-Responsive-_bs8bfx.png)



# Site Goals:

The goals for this site are as follows:
* To be able to view the site on a range of device sizes.
* To provide a Todo APP that users can use to write up things they have to do.
* To provide the function of adding a date to state the due dates for when the todos should be completed.
* To make it possible to save the information on the local storage of the users device.
* To edit, delete and sort the todos.

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
Google Fonts was used to import the chosen fonts for use in the site. 
We chose to use the font:'montserrat', sans-serif as it is user friendly.
![Fonts](https://res.cloudinary.com/dzesjeplp/image/upload/v1714840483/Todo/todo2024/Montserrat-Google-Fonts_lkgc6u.png)

## Imagery
The background image used within the site has been chosen for a calming landscape backdrop for the site.

# Features

The website is comprised of the Home page with a Heading and then 3 main sections:

## The Input Section 

![The Input Section](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841447/Todo-2024_dunz2x.png)

The input section has four sections. There are two input fields, one for text with a placeholder saying "Add your Todo" so that the user is clearly notified to add thier todo in that field. The second input area indicates to the user to add a date. They can type the date using the given format as a placeholder. Alternatively there is an icon to the right of this input area indicating a calender. When the user clicks on the icon a drop down calender is shown, which they can use to choose thier date. 
Then there are two bottons to choose from to indicate if the todo is personal or for business. The business botton is per default already chosen. The user has to toggle between the two buttons to make thier choice.
At the bottom there is a big Add button to indicate the submit button. If it is clicked and there are no inputs in the sections above it, then error messages appear for both the date and todo input fields.

![Date Input Section](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841806/dateinpute_xuurn9.png)

[Live Homepage Here](https://angelaanjorin.github.io/Todo2024/)

## The Filter Section

This section has 5 buttons to sort the todo list according to:
### Date: 
After the user clicks this button, the todo list will be sorted according to the date.
[Date](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841445/date_wzyfxg.png)

### Pending:
After the user clicks this butoon, the todo list will be sorted with pending todos first.
[Pending](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841445/pending_l4irty.png)

### Revert:
After the user clicks this button, the todo list is reverted to how it originally was before any changes like edits, deleted todos or newly added todos. 

### Business:
After the user clicks this button, the todo list is sorted with the business todos first.
[Business](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841442/businessfirst_zzmdwd.png)

### Personal:
After the user clicks this button, the todo list is sorted with the personal todos first.
[Personal](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841441/personalfirst_pdzf2h.png)

## The Todo List Section
This section shows the created todos. If the user adds a new todo, it appears at the end of the list. 
There are 5 display sections of each todo:
### Top right:
In the individual displayed todos, there is a checkcircle at the top right. The circle has a border and a center. When the circle is unchecked this is shown as either a pink border for personal or blue border for business todos.  If the circle is checked to indicate that the todo is complete, the center gets the same color as the border. At the same instance the text of the todo gets a line-through and the text font color changes to grey. 
[Checked](https://res.cloudinary.com/dzesjeplp/image/upload/v1714841440/checkmark_aqx2oi.png)

### Content left section:
Here is where the title, content or description of the todo is displayed. On larger devices where the hover feature is active, the background color changes to a lighter purple to highlight the section for the user. 
As mentioned above, when the todo is checked complete, there is a line through the text and a font color change to grey to indicate the complete status of the todo.
When the edit icon is clicked, the focus of the curser pointer moves to the text to indicate that the user can edit the text in that field. When the user clicks again in the text field it changes to a lighter purple color. By moving out of the text field the edited text is then saved.
It is possible to edit even checked text. The line through and font color of grey remain as features even during the editing process.  

### Date section:
Here the chosen date is displayed of the todo.

### Actions buttons at the left buttom section:
On the left is the edit button with a hover feature that changes the background to a dark grey when hovered over (on larger devices). When the edit icon is clicked, the focus of the curser goes directly to the title or description area of the todo to notify the user that they can edit the text in that area. 
On the right of the edit icon is a delete icon depicted by a trash can and having a bright crimson color to alert the user that if this button is clicked the todo gets deleted and can´t be retrieved again.

### Scrollbar:
The scrollbar appears on the far righthand side of the whole todo list after a maximal height of 300px is reached. The color changes from an off white to a light grey when the curser drags the scrollbar. On larger devices the thickness of the scrollbar increases when hovered over.


## Future Features

### More Edit Functions

* It would be very beneficial to be able to edit and change not only the description of the todo, but also the date and change the checkcircle incase the wrong category was initally choses as the business icon is per default choses.
* When the edit icon is clicked on a checked todo, a popup message should appear to ask the user if they want to make changes or not. Then if the user chooses to make changes, they should be prompted to uncheck the todo so that the text is no longer grey or have a line-through. Afterwards they can choose to check the todo or leave it as unchecked.

# Technolgies Used

## Languages Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5).
* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets).
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript).

## Frameworks - Libraries - Programs Used
* [Google Fonts:](https://fonts.google.com/)
   * Google fonts were used to import the 'Montserrat' fonts throughout the style.css.
* [Google icons:](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:delete:FILL@0;wght@400;GRAD@0;opsz@24)
    * Icons for the edit and delete functions were acquired from Google fonts(material.io).
* [Git](https://git-scm.com/)
    * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
* [GitHub:](https://github.com/)
    * GitHub is used to store the project's code after being pushed from Git.
* [GitHuv](https://derlin.github.io/bitdowntoc/)
    * This link was used to create the table of content for the README file.
* [Visual Studio Code](https://code.visualstudio.com/)
    *Visual studio code was used to write my code.
* [Coolors:](https://coolors.co/image-picker)
    * Coolors was used to generate a color pallete for the site based on the background image of the website.
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
### How to Clone
# Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

* [W3C Markup Validator](https://validator.w3.org/#validate_by_input) 
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

Google Lighthouse was used to test Performance, Best Practices, Accessibility and SEO on both Desktop and Mobile devices.
The testing was done using the Google Chrome Browser. Testing was also done using Firefox on desktop.

![Lighthouse Results:](./assets/images/READMEimages/Lighthouse-Report-Viewer5.png)

  ## Functionality
* All links have been hovered and clicked to ensure accessibility.
* Pages all load correctly on all device screen sizes.
* All social media links work correctly and open on a new tab.
* All images load on each page as intended.
* All the buttons and links on the different pages are working correctly and bring the users to the function that they were built for.
* The button on the Signup Page and the sections to be filled out with the requested information change the border color when hovered by the user. They are working without issues.
* The filled out sections of the form change color when completed by the user correctly.


   ## Bugs

* I was unable to reduce the largest contenful paint element in <section id=xmas> and eliminate the render-blocking resources from Font Awesome as suggested by Google Lighthouse [Lighthouse Results here:](https://angelaanjorin.github.io/Roxheim-Baking-School/index.html)

   ## Website Development Issues

* At the initial stages of my project, I was using [codeanywhere ](https://codeanywhere.com/) with some difficulties until i was advised to use Visual Studio Code. 
* I changed some of the fonts and colors towards the end of the project to improve the user experience.

# Credits
## Code Used

## Information Sources/Resources

* [W3Schools](https://www.w3schools.com/).

* [Code Institute](https://stackoverflow.com/).
  

## Content

* All the text content is original. I got inspiration from the following the Love run Project and following Projects 1 from Code Institute
    1. [Love Running](https://code-institute-org.github.io/love-running-2.0/index.html)
    2. [Flawlesscooking by Martina Martin](https://martiless.github.io/flawlesscooking/)
    3. [Travel World by Pedro Cristo](https://pedrocristo.github.io/portfolio_project_1/index.html)

## Images

* [Hotpot:](https://hotpot.ai/art-generator)
    *The background image used on the site was AI-generated from hotpot.
  
## Special Thanks
 * Special thanks to my partner and alumni of Code Institute Eric Jones for his assistance throughout this project.
 * Special thanks to my mentor Gareth McGirr for helping me to fix some bugs and guiding me throughout the project.
 * Thanks to the support team, especially John from the tutoring service.
