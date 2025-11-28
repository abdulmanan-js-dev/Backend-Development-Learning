# Backend Development

## About This Repository

This repository serves as a detailed record of my journey to learn **Backend Development**.

At present, I possess a foundational understanding of backend concepts. However, I noticed that most instructors and online courses tend to focus on building complete, large-scale projects instead of deconstructing and teaching the individual components that form the backbone of backend systems.

This observation is not a criticism. The issue often lies in the unrealistic expectation that one can become a fully proficient full-stack developer within six months or a year, capable of earning thousands of dollars immediately. In reality, **_Full Stack evelopment is a long-term learning process that demands patience, consistency, and practice._**

Having completed one six-month in-person course and one comprehensive Udemy course, I have now chosen to take a structured and self-paced approach. In this repository, I will document:

-   Key backend concepts and components
-   Tools, technologies, and frameworks I learn
-   Mini-projects designed to strengthen each concept
-   Lessons, insights, and best practices discovered along the way

All concepts will be written in inclusive **“we”** language to make this learning experience more collaborative and approachable.

By the end of this journey, my goal is to become a competent backend developer and to make this repository a valuable resource for others pursuing the same path.

---

## Plan of Action

This backend development journey is divided into **five main phases**.  
Each phase will include its own dedicated `README.md` file outlining the **goals**, **topics to cover**, and **mini-projects** relevant to that phase.

Additionally, each phase will contain a `.txt` file documenting any **questions, doubts, or reflections** that arise during the learning process, serving as a personal knowledge log and review reference.

### The Five Learning Phases

1. **Phase 1: Node.js Fundamentals**

    - **Goal:** Build a solid foundation in Node.js and understand its core concepts.
    - Focus Areas: Node.js architecture, event loop, core modules, CommonJS vs ES Modules, asynchronous patterns, and custom modules.

2. **Phase 2: Building Servers with HTTP & Express.js**

    - **Goal:** Learn to create and manage web servers, handle routes, and develop scalable RESTful APIs.
    - Focus Areas: HTTP module, Express.js framework, middleware, routing, error handling, and modular API design.

3. **Phase 3: Databases with MongoDB & Mongoose**

    - **Goal:** Understand how to integrate and manage databases effectively using MongoDB and Mongoose.
    - Focus Areas: CRUD operations, schema design, data validation, population, indexing, and working with complex data models.

4. **Phase 4: Authentication & Security**

    - **Goal:** Implement secure user authentication and apply essential backend security principles.
    - Focus Areas: JWT and session-based authentication, password hashing, environment variables, input validation, and securing APIs.

5. **Phase 5: Deployment & Optimization**
    - **Goal:** Learn to deploy, monitor, and optimize backend applications for production environments.
    - Focus Areas: Environment setup, version control, cloud deployment (Render, Vercel, or AWS), performance optimization, logging, and scalability practices.

---

## Universal Learning Components

Throughout all five phases of this backend development journey, certain concepts and skills will remain **universally relevant**. These elements are not tied to any single topic or framework but form the foundation of strong backend engineering.

1. **Problem-Solving Mindset**  
   Each phase will focus on strengthening logical thinking, debugging skills, and the ability to approach technical challenges methodically.

2. **Understanding Data Flow**  
   Regardless of technology or framework, learning how data moves between client, server, and database will remain a constant priority.

3. **API Design Principles**  
   Designing clear, consistent, and scalable APIs will be emphasized across all phases, ensuring smooth communication between system components.

4. **Error Handling & Logging**  
   Every project will include structured error handling, meaningful responses, and logging practices to aid in debugging and monitoring.

5. **Security Awareness**  
   Security considerations — such as validation, authorization, and safe data handling — will be integrated into every phase rather than treated as an afterthought.

6. **Performance Optimization**  
   Performance tuning, caching strategies, and code efficiency will be explored continually as the projects scale.

7. **Scalability & Maintainability**  
   All code and project structures will be written with the mindset of real-world growth — ensuring that what’s learned can scale beyond small demos.

8. **Documentation & Reflection**  
   Consistent documentation, journaling, and revision will help reinforce concepts and track progress across the entire journey.

---

### Final Objective

To complete this journey with a **comprehensive, hands-on understanding of backend systems** — capable of designing, building, securing, and deploying modern web applications from the ground up.

Ultimately, the objective is to not only become a skilled backend developer but also to inspire others who wish to take the same path — proving that true mastery comes through **consistent learning, reflection, and creation**.

## Project Setup

-   Visual Studio Code
-   Ensure you have Node.js installed (version 14 or higher).
-   Postman

These are the core requirements till now according to me. Third party libraries will be listed where it will be used with proper reasoning why it was used.

# Node.js

**Node.js** is JavaScript’s runtime environment that enables JavaScript to work outside the browser.

## Introduction

This markdown file is a concise study guide for the core Node.js concepts required to build backend services as a software developer or full-stack developer.

It focuses on practical fundamentals and intentionally avoids diving into every advanced niche of the Node ecosystem. Covered topics include:

-   Node runtime and the event loop
-   Modules and package management (npm / yarn)
-   Asynchronous patterns: callbacks, Promises, async/await
-   Streams, buffers, and the file system
-   Creating HTTP servers and basic routing
-   Debugging, testing, and deployment basics

This is a living document: examples, notes, and references will be added as each topic is practiced.

## Learning Pattern

I’ll be following a **project-based learning approach**, building small applications to reinforce each concept. Each section will include code snippets, explanations, and links to further resources.

## Prerequisites

-   Basic understanding of JavaScript (ES6+)
-   Familiarity with command line operations
-   Basic knowledge of web protocols (HTTP/HTTPS)
-   A code editor (e.g., VS Code) and Node.js installed on your machine
-   Git for version control

---

## Project 1 - Handling Files Operations

### Todo

#### Overview

This project demonstrates how to use Node.js **file system (fs)** module to perform basic **CRUD operations** on a JSON file — simulating a mini task manager from the command line.

The program supports three main commands:

-   `add` → Add a new task
-   `list` → Display all saved tasks
-   `remove` → Delete a specific task by its number

All tasks are stored in a local file `tasks.json`, which is created automatically.

---

#### Folder Structure

NodeJS/Todo

-   todo.js
-   taks.json (auto-generated)

---

#### Key Takeaways

-   `const filePath = "./tasks.json";` — Defines the file name and relative path.
-   `fs.readFileSync()` — Reads the file contents synchronously and returns a buffer.
-   `fs.writeFileSync()` — Writes updated data back to the file.
-   `process.argv[]` — Captures command-line arguments provided by the user.
-   `JSON.parse()` and `JSON.stringify()` — Convert between text and object formats for storing structured data.

---

#### Features

-   Add new tasks via command line
-   List all saved tasks
-   Remove tasks by index
-   Automatically creates `tasks.json` file if it doesn’t exist
-   Simple, persistent storage using JSON

---

#### 💻 Commands

Run these commands in your terminal inside the project folder:

```javascript
// Add a task
node todo.js add "Buy groceries"

// List all tasks
node todo.js list

// Remove a task by index
node todo.js remove 1
```

---

### Contacts

#### Overview

This project is a CLI-based Contact Manager built using Node.js and the File System (fs) module.

It allows users to add, list, and remove contacts that are saved persistently in a JSON file.

Each contact contains a name (title) and a contact number.
The program uses synchronous file handling methods for simplicity and immediate feedback in the terminal.

---

#### Folder Structure

NodeJS/Contacts/

-   contacts.js
-   savedContacts.json (auto-generated)

---

#### Key Takeaways

-   `const filePath = "./savedContacts.json";` — Defines the file name and storage location.
-   `fs.readFileSync()` and `fs.writeFileSync()` — Handle file reading and writing.
-   `JSON.parse()` and `JSON.stringify()` — Used to serialize and deserialize data for storage.
-   `Array.prototype.filter()` — Used to remove a contact by name.
-   Basic CLI argument parsing using `process.argv`.

---

#### Features

-   Add a new contact with a name and phone number.
-   Prevents duplicate contact names.
-   List all stored contacts in the console.
-   Remove a specific contact by name.
-   Displays friendly CLI feedback for all operations.
-   Automatically creates the data file if missing.

---

#### 💻 Commands

Run these commands in your terminal inside the project folder

```javascript
// Add a new contact
node contacts.js add "Ali Khan" 03001234567

// List all contacts
node contacts.js list

//Remove a contact by name
node contacts.js remove "Ali Khan"
```

---

## Project 2 - Build our basic server inspired by Nginx with Node.js

### Overview

This project demonstrates how to create a simple HTTP server using Node.js that serves static files.
It uses the built-in http, fs, and path modules to read requested files and return them with proper MIME types.
In this project, I'll build a basic server inspired by Nginx. While it won't cover all Nginx features, it will demonstrate core concepts such as how servers work and how to build one from scratch using Node.js.

The server handles:

-   Serving HTML, CSS, JS, JSON, and image files.
-   Returning a 404 error for files that don’t exist.
-   Setting the correct Content-Type headers based on file extension.

This project is a foundation for building Node.js web servers without frameworks like Express.

---

### Folder Structure

NodeJS/HTTP-Server

-   index.html
-   style.css
-   script.js
-   image.png
-   server.js <-- main server file

You can add any HTML, CSS, JS, or image files in the same folder for testing.

---

### Key Takeaways

-   `http.createServer()` → Creates a basic HTTP server.
-   `fs.readFile()` → Reads files from disk asynchronously.
-   `path.join()` → Safely constructs file paths for different OS.
-   `path.extname()` → Determines the file extension.
-   `MIME types mapping` → Serves correct Content-Type headers for browser rendering.
-   `Error handling` → Returns 404 if file is not found and prevents server crash.

---

### Features

-   Serves static files: HTML, CSS, JS, images, JSON.
-   Handles 404 errors gracefully.
-   Supports multiple file types with proper MIME types.
-   Lightweight and framework-free implementation.

---

### 💻 Commands

Run the server from the terminal:

```JavaScript
node server.js
```

Then open your browser and visit:
[http://localhost:8080](http://localhost:8080)

-   The server will serve index.html by default if you visit /
-   You can request other files by specifying their path in the URL, e.g., http://localhost:8080/style.css.

---

This is perfect for learning how Node.js serves static files and for experimenting with basic web server functionality before moving to frameworks like Express.
