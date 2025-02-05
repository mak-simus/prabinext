from flask import Flask, request, jsonify
from flask_cors import CORS  # Add this import
from db_config import get_db_connection
from flask_bcrypt import Bcrypt

app = Flask(__name__)
CORS(app, resources={r"/login": {"origins": "http://localhost:3000"}})  # Configure CORS
bcrypt = Bcrypt(app)
bcrypt.rounds = 10  # Set rounds to 10 for $2y$10$ format

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        username = data.get("username")
        password = data.get("password")

        if not username or not password:
            print("Username or password not provided")
            return jsonify({"success": False, "message": "Username and password required"}), 400

        db = get_db_connection()
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM hotel_logins WHERE username = %s", (username,))
        user = cursor.fetchone()

        # Debug prints
        if user:
            print("Login attempt:")
            print(f"Username: {username}")
            print(f"Stored hash: {user.get('password_hash')}")
            is_valid = bcrypt.check_password_hash(user["password_hash"], password)
            print(f"Password valid: {is_valid}")
        else:
            print("User not found")

        if not user or not bcrypt.check_password_hash(user["password_hash"], password):
            print("Invalid credentials")
            return jsonify({"success": False, "message": "Invalid credentials"}), 401

        print("Login successful")
        return jsonify({
            "success": True,
            "user": {
                "username": user["username"],
                "role": user["role"]
            }
        }), 200

    except Exception as e:
        print(f"Login error: {str(e)}")
        return jsonify({"success": False, "message": "Server error"}), 500

@app.route('/')
def index():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT DATABASE()")
    data = cursor.fetchone()
    print(f"Connected to database: {data}")
    return f"Connected to database: {data}"

if __name__ == '__main__':
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT DATABASE()")
    data = cursor.fetchone()
    print(f"Connected to database: {data}")
    app.run(debug=True)
