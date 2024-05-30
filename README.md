# Weather Details Web App

## Overview

Build a web app that displays weather details of different cities and allows a user to search for the weather details of a particular city. The application fetches data from a weather API and dynamically updates the UI based on user interactions.

## Functionalities

1. **Get Weather Button:**
   - The user clicks on the “Get Weather” button.
   - The web app highlights the first row in the “City list” table with a green border.
   - The web app fetches the JSON information from the API.
     - Method: GET
     - URL: `https://python3-dot-parul-arena-2.appspot.com/test?cityname=<city name in the current row>`
     - Example: `https://python3-dot-parul-arena-2.appspot.com/test?cityname=London`
   - Weather information is fetched and inserted into the table.
   - The web app then highlights the next city and repeats the process for all cities.

2. **Editable Description Field:**
   - The Description field in the "Details" table is a text input and is editable by the user.

3. **Data Age Calculation:**
   - The value of "Data age" is calculated as "(Current date time - data_and_time)" and expressed in hours.

4. **Dynamic Row Addition:**
   - Every time a city's weather information is fetched, a new row is added to the "Details" table.

5. **Delete Row:**
   - Clicking the Delete button will delete the corresponding row from the table.

6. **Data Storage:**
   - Table data is stored in a dictionary/JS object as rows are added to the table.

7. **Search Functionality:**
   - The user enters a city name in the search input box and clicks on the Search button.
   - If the city name is present in the "Details" table, that row is highlighted in yellow color for 3 seconds.

## Additional Packages Used

- **Axios:** For making HTTP requests to the weather API.
- **React.js:** For building the user interface and managing state.
- **Tailwind CSS:** For styling the application.

## Learnings

- **API Integration:** Improved skills in integrating external APIs to fetch and display data.
- **State Management:** Enhanced understanding of managing state in React applications.
- **User Experience:** Gained experience in creating interactive and user-friendly interfaces.
- **Asynchronous Programming:** Deepened knowledge of handling asynchronous operations using async/await.
- **Date and Time Manipulation:** Learned efficient ways to manipulate and calculate dates and times.

## Future Improvements

- **Error Handling:** Implement more robust error handling for API requests.
- **Optimized Search:** Enhance the search functionality to provide instant results and suggestions.
- **Data Caching:** Implement caching mechanisms to reduce redundant API calls and improve performance.

## Images

![img1](https://github.com/Rachitgarg56/weather-app-fa2/assets/112542259/042fc74f-361c-4e91-b422-650acd0f362d)
![img2](https://github.com/Rachitgarg56/weather-app-fa2/assets/112542259/5a1b9088-4746-4fd7-9a2e-57609343ab78)
