# Pokemon Memory Game

- [Click here for live project](https://adorable-syrniki-de194e.netlify.app/)

### SUMMARY

- This project has been developed to fulfill the requirements of the Hyper Island Course Goals Skill 2 and Knowledge 2.

![Flow chart](https://res.cloudinary.com/frank2021/image/upload/v1669640273/pokemon_game/Flow_chart_xmjjop.png)

We have developed a game that fetches data from an API, and displays the data dynamically in order to create a game experience.

Players have to type their name in order to unlock the start game functionality. When 8 card matches are achieved the counter will stop and the player time will be registered in local storage. Thou we do not make use of an external database, this application is scalable and could be something we implement in the future.

## GitHub collaboration

- This project was developed using git version control for code collaboration with my support group, which gave us a deeper understanding of the tools available, and how to make better use of gitHub, while working as team.

1.  Contributors:

    ![Contributors](https://res.cloudinary.com/frank2021/image/upload/v1669710463/pokemon_game/contributors_gv5hh6.png)

2.  Pull Requests:

    ![Pull requests](https://res.cloudinary.com/frank2021/image/upload/v1669640716/pokemon_game/pull_requests_yqvh01.png)

3.  Branching:

    ![Branching](https://res.cloudinary.com/frank2021/image/upload/v1669640716/pokemon_game/fork_and_branches_hvdn9g.png)

## Functions, loops, object manipulation and api fetching

- As part of the projects knowledge goals, the use of functions, loops and object manipulation was implemented.
  This methods were very important to develop a project of such a scope. We also made use of asynchronous JavaScript
  which helped with the work flow which was based on data fetching.

  ![Functions, loops and object manipulation 1](https://res.cloudinary.com/frank2021/image/upload/v1669663646/pokemon_game/api_fetching_echvih.png)

- Data is fetched and converted to json format, which has a similar object structure, making the use of external data very simple.

  ![Functions, loops and object manipulation 3](https://res.cloudinary.com/frank2021/image/upload/v1669803371/pokemon_game/obj_c7dm9w.png)

- Data is now saved inside a variable and displayed dynamically on the page, putting to use DOM manipulation, rendering the card element using string literals.

  ![Functions, loops and object manipulation 2](https://res.cloudinary.com/frank2021/image/upload/v1669663340/pokemon_game/functions_jwgfu2.png)

## File structure

- To better understand JavaScript's file structure we have provided a simple snapshot of the code structure:

1. We have defined all global scoped variables up top, to avoid errors when using strict mode, as well as to make them available to all functions.

![Variables](https://res.cloudinary.com/frank2021/image/upload/v1669810489/pokemon_game/variable_scope_uup9vz.png)

2. We have defined functions according to their use need (Scope) ex. createNewGame() function has been declared at the bottom of the code because it makes use of other helper functions, and variables that have been declared through out the code base.

![createNewGame() function](https://res.cloudinary.com/frank2021/image/upload/v1669809103/pokemon_game/function_scope_pyr72l.png)

## Array and local storage

- This project also makes use of arrays, and local storage which saves the user data on their machine holding the player scores in a array, displaying a list of scores to the user, also putting into effect DOM manipulation through append/prepend the score board element into the DOM.

  ![Array and local storage](https://res.cloudinary.com/frank2021/image/upload/v1669665647/pokemon_game/array_and_localstorage_d3m8uj.png)

- Data is stored in local storage in a array of objects, and displayed to the whenever user come back to the page, unless deleted by the user.

  ![Array and local storage 2](https://res.cloudinary.com/frank2021/image/upload/v1669798740/pokemon_game/2022-11-30_sasolq.png)

## Browser developer tools

- We have used Chrome's developer tools to debug our code, as well as dealing with the api data fetching in order to understand how data is returned.

![Developer tools](https://res.cloudinary.com/frank2021/image/upload/v1669799914/pokemon_game/2022-11-30_2_faobic.png)

- We have also used a series of console logs to determine if the application works and runs as it should.

![Developer tools 2](https://res.cloudinary.com/frank2021/image/upload/v1669800471/pokemon_game/clg_eg1pc4.png)

## Feedback from group and mentor

- During the process of development we as group have taken feedback from our mentor, and from within our group for several details and improvements.
  But also from the game jam that happened in the campus on the 29th of November 22. That really helped us with testing and improving the application further.

## SEO and accessibility

- Search engine optimization (SEO) is the practice of orienting your website to rank higher on a search engine results page so that you receive more traffic. The aim is typically to rank on the first page of Google results for search terms that mean the most to your target audience. This application scores a high for SEO and accessibility on Google chrome's lighthouse.

  ![Lighthouse](https://res.cloudinary.com/frank2021/image/upload/v1669640884/pokemon_game/lighthouse_pxwo8b.png)

## Acknowledgments

- This project has taught me how to be better in a work environment and how to collaborate with team members, it was a almost unique feeling to get something built from the ground up together. So I would like to thank my team: [Kevin Johnson](https://github.com/johnsonmkevin) and [Ester Cortes](https://github.com/kristallers) for all the time spent together during the learning process. Also big thanks to Christoffer Teye for the great mentoring skills.
