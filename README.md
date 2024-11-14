# React-Hook-Tasks
practical react hook task for full stack training 
# Simple React Hooks Practice

## First, here's a simple CSS you can use for all assignments:
```css
/* styles.css */
.container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
}

button {
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
}

input, textarea {
  padding: 10px;
  margin: 5px 0;
  width: 100%;
}

.card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px 0;
}
```

## Assignment 1: Counter App
A simple counter to learn useState:

```jsx
function CounterApp() {
  // Add useState here
  
  return (
    <div className="container">
      <h2>Counter</h2>
      <p>Count: {/* show count here */}</p>
      <button>+</button>
      <button>-</button>
      <button>Reset</button>
    </div>
  );
}
```

**Tasks:**
1. Create count state with useState
2. Add click handlers for buttons
3. Extra: Use useEffect to show "Count changed!" in console

---

## Assignment 2: Countdown Timer
Learn useEffect with a simple timer:

```jsx
function CountdownTimer() {
  // Add state for time
  // Add useEffect for timer
  
  return (
    <div className="container">
      <h2>Countdown</h2>
      <p>Time left: {/* show seconds */} seconds</p>
      <button>Start</button>
      <button>Reset</button>
    </div>
  );
}
```

**Tasks:**
1. Create state for time (start from 10)
2. Use useEffect to countdown
3. Stop at 0
4. Add reset button

---

## Assignment 3: Dark Mode Toggle
Practice useState with localStorage:

```jsx
function DarkMode() {
  // Add state for theme
  
  return (
    <div className="container" style={{
      background: /* theme ? 'black' : 'white' */,
      color: /* theme ? 'white' : 'black' */
    }}>
      <h2>Dark Mode</h2>
      <button>Toggle Theme</button>
      <div className="card">
        <p>This text changes color with theme</p>
      </div>
    </div>
  );
}
```

**Tasks:**
1. Add theme state
2. Toggle theme on button click
3. Extra: Save theme in localStorage

---

## Assignment 4: Text Input Length
Practice useState with inputs:

```jsx
function TextInput() {
  // Add state for input
  
  return (
    <div className="container">
      <h2>Text Input</h2>
      <textarea 
        placeholder="Type something..."
      />
      <p>Characters: {/* show length */}</p>
    </div>
  );
}
```

**Tasks:**
1. Create input state
2. Show character count
3. Extra: Add max length warning

---

## Assignment 5: Simple ToDo List
Practice array state:

```jsx
function TodoList() {
  // Add state for todos
  
  return (
    <div className="container">
      <h2>Todo List</h2>
      <input type="text" placeholder="Add new todo" />
      <button>Add</button>
      <ul>
        {/* map todos here */}
      </ul>
    </div>
  );
}
```

**Tasks:**
1. Create todos state array
2. Add new todos
3. Show todo list
4. Add delete button

---

## Assignment 6: Online Status
Learn browser events with useEffect:

```jsx
function OnlineStatus() {
  // Add state for status
  
  return (
    <div className="container">
      <h2>Online Status</h2>
      <div className="card">
        Status: {/* show online/offline */}
      </div>
    </div>
  );
}
```

**Tasks:**
1. Create online state
2. Use useEffect for window.online/offline events
3. Show current status

---

## Assignment 7: Simple Form
Practice form inputs with state:

```jsx
function SimpleForm() {
  // Add state for form data
  
  return (
    <div className="container">
      <h2>Simple Form</h2>
      <div className="card">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <button>Submit</button>
      </div>
    </div>
  );
}
```

**Tasks:**
1. Create state for form fields
2. Handle input changes
3. Show data on submit
4. Extra: Add basic validation

---

## Assignment 8: Image Viewer
Practice useState for UI elements:

```jsx
const images = [
  "/api/placeholder/400/300",
  "/api/placeholder/400/300",
  "/api/placeholder/400/300"
];

function ImageViewer() {
  // Add state for current image
  
  return (
    <div className="container">
      <h2>Image Viewer</h2>
      <img src={/* current image */} alt="view" style={{ width: '100%' }} />
      <button>Previous</button>
      <button>Next</button>
    </div>
  );
}
```

**Tasks:**
1. Add state for current image index
2. Make next/previous buttons work
3. Loop through images

---

## Assignment 9: Color Picker
Practice with select inputs:

```jsx
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

function ColorPicker() {
  // Add state for selected color
  
  return (
    <div className="container">
      <h2>Color Picker</h2>
      <select>
        {colors.map(color => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <div 
        style={{
          width: '100px',
          height: '100px',
          marginTop: '10px',
          backgroundColor: /* selected color */
        }}
      />
    </div>
  );
}
```

**Tasks:**
1. Add color state
2. Handle select change
3. Show selected color

---

## Assignment 10: Simple Timer
Practice useEffect cleanup:

```jsx
function Timer() {
  // Add state for time
  
  return (
    <div className="container">
      <h2>Timer</h2>
      <p>Time: {/* show time */} seconds</p>
      <button>Start</button>
      <button>Stop</button>
    </div>
  );
}
```

**Tasks:**
1. Add time state
2. Start timer with useEffect
3. Stop timer
4. Cleanup on unmount

## Tips for All Assignments:
1. Start with the state
2. Then add event handlers
3. Finally add effects if needed
4. Console.log to check your work
5. Ask for help if stuck!

## What to Learn:
- useState for:
  - Numbers (counter)
  - Strings (input)
  - Booleans (toggle)
  - Arrays (todo list)

- useEffect for:
  - Timers
  - Browser events
  - Cleanup

Remember:
- Keep it simple
- Focus on understanding
- Practice small changes
- It's okay to make mistakes!
