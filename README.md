# React TypeScript Shop App

A comprehensive educational React project demonstrating essential frontend concepts: component structure, responsive design with flexbox, and data manipulation using JavaScript array methods.

![React TypeScript Shop App Screenshot](https://via.placeholder.com/800x400?text=React+TypeScript+Shop+App)

## 🚀 Features

- **Navigation Bar**: Responsive header with logo and navigation links
- **Product Catalog**: Dynamic product listing with cards
- **Filtering System**: Filter products by category and stock status
- **Sorting Functionality**: Sort products by name or price
- **Responsive Footer**: Multi-column footer with adaptive layout
- **Flexbox Layout**: Modern CSS layout techniques throughout
- **TypeScript Implementation**: Basic type safety without advanced concepts

## 🔍 Educational Value

This project serves as a practical example of:

1. **Component Organization**: Properly structured React components
2. **JavaScript Array Methods**:
   - `filter()`: Filtering products based on criteria
   - `map()`: Transforming data into components
   - `sort()`: Organizing data in different orders
3. **Flexbox CSS**: Modern layout techniques for responsive design
4. **State Management**: React hooks for managing application state
5. **Event Handling**: Processing user interactions
6. **Conditional Rendering**: Showing appropriate UI based on data state

## 🛠️ Technologies Used

- React 18+
- TypeScript
- CSS3 with Flexbox
- JavaScript ES6+

## 📋 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Top navigation bar
│   ├── Navbar.css
│   ├── Footer.tsx        # Site footer with information
│   ├── Footer.css
│   ├── ProductList.tsx   # Container for product cards
│   ├── ProductList.css
│   ├── ProductCard.tsx   # Individual product display
│   └── ProductCard.css
├── App.tsx               # Main application component
└── App.css               # Global styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js (14.x or higher)
- npm or yarn

### Installation

1. Clone the repository or download the code
   ```bash
   git clone https://github.com/yourusername/react-typescript-shop.git
   cd react-typescript-shop
   ```

2. Install dependencies
   ```bash
   npm install
   # OR
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # OR
   yarn start
   ```

4. Open your browser to `http://localhost:3000`

## 🎯 Learning Objectives

- Understand component-based architecture in React
- Learn practical applications of JavaScript array methods
- Implement responsive layouts with CSS Flexbox
- Apply basic TypeScript concepts without using advanced features
- Practice state management with React hooks

## 🔄 Data Flow

1. Product data is stored in state at the App level
2. Filter/sort criteria are managed in App component state
3. Filtered data is passed to the ProductList component
4. ProductList maps the filtered data to individual ProductCard components

## 📝 Notes for Beginners

- The CSS uses flexbox instead of grid for better browser compatibility
- TypeScript is implemented using basic type aliases instead of interfaces
- Component props are defined inline for better readability
- The project intentionally avoids advanced concepts to focus on fundamentals

## 🧩 Possible Enhancements

- Add a shopping cart functionality
- Implement product detail pages
- Add form validation for a checkout process
- Connect to a mock API for product data
- Add animations for user interactions

## 📜 License

MIT

## 🙏 Acknowledgments

- The React team for their excellent documentation
- The TypeScript team for making type-safety accessible
