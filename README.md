# Vue.js E-commerce Application

This is a Vue.js-based e-commerce application that allows users to browse products, add items to their cart, and place orders. The application is structured using Vue's Composition API and Pinia for state management.

## Table of Contents
-----------------

-   [Installation](#installation)
-   [Usage](#usage)
-   [State Management](#state-management)

------------
### Installation

To install and run the project locally, follow these steps:

1.  **Install dependencies**:

    ```sh
    npm install
    ```

2.  **Compile and Hot-Reload for Development**:

    ```sh
    npm run dev
    ```

3.  **Build for production**:

    ```sh
    npm run build
    ```

-----
### Usage

After running the development server, you can access the application at `http://localhost:8080`. The application allows users to browse through available products, add items to their shopping cart, and proceed to place orders.

----------------
### State Management

The application uses Pinia for state management, specifically for managing the shopping cart and orders. The state management logic is handled in `cart.js`, where the following actions and getters are defined:

-   **Actions**:

    -   `addToCart`: Adds a product to the cart or increments its quantity if it already exists.
    -   `emptyCart`: Clears all items from the cart.
    -   `updateCartItem`: Updates the quantity of a specific cart item.
    -   `removeCartItem`: Removes a specific item from the cart.
    -   `placeOrder`: Places an order and clears the cart.
-   **Getters**:

    -   `cartItems`: Retrieves the list of items in the cart.
    -   `cartItemCount`: Returns the number of items in the cart.
    -   `getCartItem`: Finds a specific item in the cart by its ID, color, and size.
    -   `orderList`: Retrieves the list of orders placed by the user.
