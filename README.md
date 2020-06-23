# Prototyper 

A basic web app that follows the requirements specified bellow.

### Requirements
* Two pages/routes that a user should be able to navigate between by typing the url in the browser and with links/buttons in the UI.

#### Page 1
* A responsive layout and contain 3 elements
* On small screens (mobile devices) they should be stacked on top of each other.
* On large screens (tablets and desktop) the two first elements should be placed next to each
other and the third element should be placed on a new "row" and use the full width.
* They should switch order on tablet/desktop (see example below).
* BONUS: Styled content inside elements.

The main objective is to get the responsive layout right, design and content inside elements is optional.

#### Page 2
* A button and a table
* When the user clicks the button the table should be populated with data from [this API](https://private-9b37c2-wlb.apiary-mock.com/accounts?ccy=SEK)
* It should be possible to sort the table on at least one property i.e. balance ascending/
descending.
* BONUS: Show loader when table is waiting for data.
* BONUS: Persist sort state and/or data i.e. when the user navigates between page 1 and 2 the app
should remember how the table is sorted and possibly even the table data.
* BONUS: Create a mobile friendly version - tables aren’t always the best approach for presenting large
data sets on small screens.

The main objective is to render a table on the page, the data should be fetched using a REST-Api call from the client.
