# Paradise Nursery E-Commerce Application

A fully functional React-based e-commerce web application specialized in selling high-quality houseplants. This project focuses on building an intuitive user experience using React for UI components, Vite for building the application, and Redux Toolkit for clean, robust state management of the shopping cart.

## Project Name Details
* **Project Name:** Paradise Nursery Shopping Application
* **Course:** Front-End Development with React / E-Commerce Web Development
* **Platform:** Coursera Guided Project

## Core Features Implemented

1. **Landing Page (`App.jsx` & `App.css`):**
   * Features an immersive, responsive background image styled with advanced CSS gradients.
   * Displays the company name "Paradise Nursery" with a clear, engaging call-to-action "Get Started" button that seamlessly transitions users to the product store view.

2. **About Us Component (`AboutUs.jsx`):**
   * Contains details about the organization's mission, history, and passion for green living.

3. **Product Listing Page (`ProductList.jsx`):**
   * Features a global navigation bar that persists across pages, displaying total cart items dynamically.
   * Displays **18 unique houseplants** systematically categorized into **3 specific plant groups**: *Air Purifying*, *Aromatic*, and *Low Maintenance* (each group contains exactly 6 distinct houseplants).
   * Each product features high-quality thumbnail images, detailed plant names, and specific unit pricing.
   * Implements "Add to Cart" functional buttons which dynamically increment global basket state and disable themselves once clicked to prevent redundant actions.

4. **Shopping Cart Management (`CartSlice.jsx` & `CartItem.jsx`):**
   * Uses Redux Slice mechanisms to seamlessly handle adding, removing, and updating product quantities.
   * Dynamically tracks and displays subtotal calculations per item type alongside cumulative shopping basket grand totals.
   * Includes fully-functional control nodes for increasing, decreasing, or deleting items from the active basket interface.
   * Implements user flow direction switches like "Continue Shopping" (which routes backwards safely into the catalog view) and a "Checkout" action which triggers alert placeholders.

## Technology Stack Applied
* **Framework:** React 18+ (Functional Components with Hooks)
* **Build Automation Tool:** Vite
* **State Container:** Redux Toolkit (`@reduxjs/toolkit` & `react-redux`)
* **Styling Framework:** Custom Modern CSS Core Rules

## Author
* **Developer Name:** Đỗ Mạnh Chung
