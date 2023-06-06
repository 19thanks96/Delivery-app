# JavaScript Delivery app
Web application where users can order food delivery


## Functional requirements:

The Food Delivery app should consist of two pages:
- [x] the shops page and
- [x] the shopping cart page

Overview:
- [x] The page where users can choose a shop, then add goods to the cart (get data
from the database)
- [x] The page where the user can check all added products, remove some of them
or change the count. And add an email, a phone number, and an address (in
inputs)
- [x] The order should be saved in the database after the user clicks the “submit”
button
- [x] Users can order products only from one shop (for example, if the user chooses
McDony. Then you need to disable other shops.)
- [x] The cart should be saved in local storage.


## Technical requirements
> Technologies:
> - React
> - Express
> - React Router
> - Prettier
> - Nodemon
> - MongoDb



## How to start

Clone the project
```
git clone git@github.com:19thanks96/Delivery-app.git
```

Change dir to the project folder
```
cd Delivery-app
```

### Frontend:
```
cd frontend

npm install

npm start
```
### Backend:
Install and run MongoDb on: `mongodb://127.0.0.1:27017`
```
cd backend

npm install

npm start
```
