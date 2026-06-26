💼 Job Portal
A full-stack Job Portal web application with a Spring Boot backend and a plain HTML/CSS/JS frontend, served locally via a Python HTTP server. Designed to connect job seekers with employers through a clean and responsive interface.
🚀 Tech Stack
Layer	Technology
Backend	Java Spring Boot
Frontend	HTML, CSS, JavaScript
Frontend Server	Python HTTP Server
Build Tool	Maven
📁 Project Structure
jobportal/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/jobportal/          # Spring Boot source files
│       │       ├── controller/         # REST Controllers
│       │       ├── model/              # Entity / Data models
│       │       ├── repository/         # JPA Repositories
│       │       └── service/            # Business logic
│       └── resources/
│           ├── application.properties  # Spring Boot config
│           └── static/                 # (Optional static assets)
├── frontend/                           # HTML/CSS/JS frontend
│   ├── index.html                      # Landing / Home page
│   ├── style.css                       # Global styles
│   ├── search.html                     # Job search page
│   ├── search.js                       # Search functionality
│   ├── search.css                      # Search page styles
│   └── form.html                       # Job posting form
├── pom.xml                             # Maven dependencies
└── README.md
⚠️ The frontend is not embedded in Spring Boot's templates — it's served separately using Python's built-in HTTP server.
⚙️ Prerequisites
Make sure you have the following installed:
Java 17+ (for Spring Boot)
Maven 3.6+
Python 3.x (for the frontend server)
A running database (MySQL / H2 — check application.properties)
🛠️ Getting Started
1. Clone the Repository
   git clone https://github.com/guhan0827-blip/jobportal.git
   cd jobportal
2. Configure the Backend
   Open src/main/resources/application.properties and update the database settings:
   spring.datasource.url=jdbc:mysql://localhost:3306/jobportal
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
3. Run the Spring Boot Backend
   mvn spring-boot:run
   The backend API will start at: http://localhost:8080
4. Serve the Frontend via Python
   Navigate to the frontend directory and start the Python HTTP server:
   cd frontend
   python3 -m http.server 8000
   The frontend will be accessible at: http://localhost:8000
   🌐 Features
   🏠 Home page with job portal landing (index.html)
   🔍 Search and browse job listings (search.html + search.js)
   📝 Post a new job via form (form.html)
   📄 View a specific job's details
   
   🔗 API Endpoints (Spring Boot)
   Method	Endpoint	Description
   GET	/jobapp	Fetch all job listings
   POST	/jobapp	Post a new job
   GET	/SpecificJob	Fetch a specific job
   Base URL: http://localhost:8080
   🖼️ Screenshots
   (Add screenshots of your UI here)
   🤝 Contributing
   Contributions are welcome! Please fork this repository and submit a pull request.
   Fork the project
   Create your feature branch: git checkout -b feature/YourFeature
   Commit your changes: git commit -m 'Add YourFeature'
   Push to the branch: git push origin feature/YourFeature
   Open a Pull Request
   📄 License
   This project is open-source and available under the MIT License.
   👤 Author
   Guhan — @guhan0827-blip
   has context menu