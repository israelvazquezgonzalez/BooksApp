# Book Finder Web App
## Assignment Overview
The task that was given was, to create an application that will allow users to search for books by entering a search query, Title, Author, etc and display the resulting books in a list on the page with the book information.

#### User stories
User can enter a search query into a input field
User can submit the search query and this will call an API that will return a collection of books with the book information
User can see a collection of books displayed on the page

#### Bonus features
Include a link that take user to an external site to see more info about the books
Create a responsive design 
Add loading animation
Any other feature that might be useful to the user

#### Resources
Google Books API can be used


## Approach 
The approach I took was to build a clean, easy-to-use, search centric web application that will be usable on desktop and mobile.

#### Solution
The solution for this assignment I built was leveraging .NET Core 6, JQuery/Javascript/Ajax, HTML, Bootstrap 5 and CSS3.

#### Reasoning behind technical choices
I chose .NET Core 6 as they made performance improvements. Secondlly the size of the application, my experience working with them and the quick turnaround was the reason why I went with JQuery/Javascript/Ajax and Bootstrap 5.

#### Trade-offs
Time was definitely a factor, two glaring elements I left behind were, pagination and sorting. Code refactoring, validation, testing and logging were some of the other things I would have liked to finish but did not have the time to implement. 

#### Optional features
Creating the graphics, the loading animation keyframe by keyframe as well as the visual aspects of the overall application and UX was something I considered optional features.


### Instruction to Run the Application

- Donwload the repo from https://github.com/israelvazquezgonzalez/BooksWebApp 
- Open the project with Visual Studio.
- Build the application.
- Published the application to a folder of your liking it defaults to ~\BooksApp\BooksApp\bin\Release\net6.0\publish
- The saved profile is targeting win-x64.
- If not already install [Microsoft 6.0.4 Windows Server Hosting](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.4-windows-hosting-bundle-installer) is needed to run the application
- Open IIS 
- Add a new Website to IIS pointing to the folder where the published application lives.
- Browse
