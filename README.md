

# First attempt - MVP


## TAGS

### v0.1

Scafolded a vanilla js vite project and I wanted to make sure I can fetch and show video thumbnails with posters. We fetch data and use map function to simply create a video element for every element in the array and then add it to element's innerHTML. Cool method for quickly creating markup without adding a framework.

### v0.2

Added features:

- make the video play/pause in fullscreen
- share to Facebook
- cleaner design

### v0.3

Added:
- new file structure, added dummy react components to showcase spme of the future steps
- added formatting and linting
- defined specific versions for engines and packages for easier install (so I am sure the code reviewer will have the same project installed)
- written detailed readme where I explained some of my choices, and actions


## Task

This is a Javascript Developer Technical Task. My task was to create an application that will serve a feed with posts that are based around videos. API Specification was provided as an Apiary document. It was required to at least implement fetching and displaying of the feed. 

Good places to showcase skill set:
- make the video
play/pause in fullscreen, 
- animate actions
- add share 
- prepare for deep linking

Good places to showcase knowledge:
- Good setup documentation
- TypeScript
- Clean VCS history
- Having VCS
- Robustness of input and output parameters
- CLEAN, layer architecture (MV^^)


Other:
- design was not provided and it wasn't really important for the task. 
- I was allowed to use any tools as I find fit.
- have fun doing it!


## Setup

### Install and build

Install the dependencies:

``
npm install
``

Local dev server with HMR:

``
npm run dev
``

Locally preview production build:

``
npm run preview
``

production build:

``
npm run build
``

### Linting and formatting from the cli

Project uses eslint:

``
npm run format
``

and prettier (demo only to showcase further steps):

``
npm run lint
``

* if using vscode, you can install extensions for prettier and eslint.

## Struggles

Besides time, I struggled with some of the requirements (rating, robustness of input output params) but I got some help from Luka.

Deep linking was something I didn’t work with before and I learned something new about about it but didn’t implement it as I would like to learn more about the concept before coding it without understanding it.
If we talk about deep linking as in ability to open link in native app, then the app should probably detect user device onLoad and suggest there is an app for that. If the content can be viewed on every device, but specific routes can only be accessed in app, maybe we can only ask them to use app when these routes are visited.


I did not have time to focus on action animations. Where I would like to see animations is opening and closing video fullscreen, share bar would probably open a modal for different sharing options.

If given time, I would probably remove default video controls and create my own and add animation there too.
Thumbnail onHover would show video preview.

Overall, I chose to write more about my thought process than actually code because I think I can present myself better this way. Luka said this task should not took a lot of time so I decided to create a simple working version and then describe the rest.

## What next?

Possible improvements: 

- handle cache. I only used tanstack query ( former react query) and would like to learn more about proper cache handling.
 
- add placehoders for content loading - useful for slow connection 
 
- error handling - show error mesagge if feed not loaded

- add lazy loading - no point in loading all thumbnails if user not scrolling

  - learn why, when and how to write tests and add then implement them.
  
  - add more styling, I would like to use tailwind more as I heard its great with component based frameworks. 

- add typescript 


## Misc.
 
 I just realized this would be better if it were MPA and not a SPA. It’s content heavy, doesn’t have complex state, we get better seo and accessibility (because it uses basic <a> syntax).
 
We populate feed cards with videos and every feed card is a link. 

If this were my hobby project, I would probably use Astro because it seems fun, I can write js on both sides and add my own choice of ui framework.

If working for a client, probably express or next.js if something complex.
