
HumanChain AI Safety Incident Log API
This is a backend service built using Node.js and Express.js for logging and managing AI safety incidents.
It is developed as part of the take-home assignment for the Backend Intern position at HumanChain.
________________________________________
Technology Stack
•	Backend Framework: Node.js with Express.js
•	Database: MongoDB (using Mongoose ODM)
________________________________________
Getting Started
Follow the steps below to set up and run the project locally.
1. Clone the Repository
git clone https://github.com/your-username/humanchain-incident-log-api.git
cd humanchain-incident-log-api
2. Install Dependencies
npm install
3. Set Up Environment Variables
Create a .env file in the root directory with the following contents:<br>
PORT=5000<br>
MONGODB_URI=your_mongodb_connection_string<br>
Replace your_mongodb_connection_string with your actual MongoDB URI.<br>
________________________________________
Running the Server
Start the development server by running:
npm start
By default, the server will be available at http://localhost:5000/.
________________________________________
Database Setup
There is no manual setup required for MongoDB collections.
When the server runs, Mongoose will automatically create the incidents collection when you add your first incident.
If you want to populate the database with 2-3 sample incidents, you can either:
•	Use the POST /incidents endpoint to manually add them.
•	Or insert them directly through a MongoDB client (like Compass).
________________________________________
API Endpoints
Here are the available API routes:
1. Get All Incidents
•	Endpoint: GET /incidents
•	Description: Returns a list of all incidents.
________________________________________
2. Create a New Incident
•	Endpoint: POST /incidents
•	Description: Create and store a new incident.
•	Request Body Example (JSON):
{
  "title": "AI System Misbehaved",
  "description": "An AI recommendation engine pushed harmful content.",
  "severity": "High"
}
Example using curl:
curl -X POST http://localhost:5000/incidents \
-H "Content-Type: application/json" \
-d '{"title":"AI System Misbehaved","description":"An AI recommendation engine pushed harmful content.","severity":"High"}'
________________________________________
3. Get a Specific Incident
•	Endpoint: GET /incidents/:id
•	Description: Fetch a single incident by its ID.
Example using curl:
curl http://localhost:5000/incidents/<incident_id>
Replace <incident_id> with the actual ID.
________________________________________
4. Delete an Incident
•	Endpoint: DELETE /incidents/:id
•	Description: Delete an incident by its ID.
Example using curl:
curl -X DELETE http://localhost:5000/incidents/<incident_id>
________________________________________
Validation Rules
•	title, description, and severity are required fields.
•	severity must be one of the following: "Low", "Medium", or "High".
•	If validation fails, a 400 Bad Request is returned with an appropriate error message.
________________________________________
Notes
•	The reported_at timestamp is automatically generated when a new incident is created.
•	Proper error handling is implemented for missing fields, invalid severity levels, and invalid IDs.
________________________________________
Contact
If you have any questions or need clarification, feel free to reach out.
________________________________________

