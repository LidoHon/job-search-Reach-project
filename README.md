# Job Searching Page

This project is a job searching application built with React. It includes functionalities for viewing, adding, editing, and deleting jobs, and uses a JSON server for data management. 
This project is built following a tutorial on YouTube ([Traversy media](https://youtu.be/LDB4uaJ87e0?si=CCm9GUVt1sdcpenW)).


## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)


## Features

- **Home Page:** Introduction and overview of the application.
- **Jobs Page:** View a list of all available jobs.
- **Add Jobs Page:** Add new job postings.
- **Edit/Delete Jobs:** Modify or remove existing job postings.
- **Fetch Jobs:** Retrieve the latest job postings from the JSON server.

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/LidoHon/job-search-Reach-project.git
   cd job-searching-page
   ```
2. **Install the dependencies:**
   ```bash
   npm install
   ```
3. **Start the JSON server:**
   ```bash
   npm json-server
   ```
4. **Run the React application:**
   ```bash
   npm run dev
   ```

## Usage
- Navigate to http://localhost:3000 to view the home page.
- Go to the Jobs page to view all job postings.
- Use the Add Jobs page to create a new job listing.
- Click on a job listing to edit or delete it.

## Folder Structure
Here is the folder structure of the project:
```
src/
  ├── components/
  │   ├── Card.jsx
  │   ├── Hero.jsx
  │   ├── HomeCard.jsx
  │   ├── JobListings.jsx
  │   ├── JobListing.jsx
  │   ├── NavBar.jsx
  │   ├── Spinner.jsx
  │   └── ViewAllJobs.jsx
  ├── layout/
  │   └── MainLayout.jsx
  ├── pages/
  │   ├── JobPage.jsx
  │   ├── EditJobPage.jsx
  │   ├── HomePage.jsx
  │   ├── HomeJobPage.jsx
  │   └── JobsPage.jsx
      └── NotFoundPage.jsx
  └── 
```

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for review.
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Submit a pull request.


