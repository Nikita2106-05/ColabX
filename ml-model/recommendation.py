import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# --- AI Project Idea Bank ---
AI_IDEA_BANK = [
    # --- AI & Data Science ---
    {"title": "AI-Powered Mental Health Tracker", "skills": "Python, Machine Learning, NLP, React Native", "difficulty": "Hard"},
    {"title": "Real-time Sign Language Translator", "skills": "Python, Computer Vision, OpenCV, TensorFlow", "difficulty": "Hard"},
    {"title": "Personalized AI Tutor Bot", "skills": "Python, NLP, OpenAI API, Flask", "difficulty": "Medium"},
    {"title": "Fake News Detection Engine", "skills": "Python, Scikit-learn, NLP, Pandas", "difficulty": "Medium"},
    {"title": "Smart Attendance System (Face Recognition)", "skills": "Python, OpenCV, SQL, Raspberry Pi", "difficulty": "Medium"},

    # --- Web & Full Stack ---
    {"title": "Remote Code Execution Engine", "skills": "React, Node.js, Docker, Socket.io", "difficulty": "Hard"},
    {"title": "Real-time Collaborative Whiteboard", "skills": "React, Canvas API, WebSockets, Firebase", "difficulty": "Medium"},
    {"title": "Microservices-Based E-Commerce Platform", "skills": "Node.js, MongoDB, Docker, Kubernetes, React", "difficulty": "Hard"},
    {"title": "University Event Management System", "skills": "React, Node.js, Express, MongoDB, Cloudinary", "difficulty": "Easy"},

    # --- Blockchain & Security ---
    {"title": "Blockchain-Based E-Voting System", "skills": "Solidity, Web3.js, React, Ethereum", "difficulty": "Hard"},
    {"title": "Decentralized File Storage (IPFS)", "skills": "IPFS, Blockchain, React, Node.js", "difficulty": "Hard"},
    {"title": "Secure Password Manager with AES", "skills": "Python, Cryptography, SQL, PyQT", "difficulty": "Medium"},
    {"title": "EduChain: Academic Credential Verifier", "skills": "Ethereum, Solidity, Web3, React", "difficulty": "Hard"},

    # --- IoT & Hardware ---
    {"title": "Smart Traffic Management System", "skills": "IoT, Arduino, Python, ML", "difficulty": "Hard"},
    {"title": "Automatic Hydroponics Controller", "skills": "C++, Arduino, IoT, Sensors", "difficulty": "Medium"},
    {"title": "Smart Home Energy Optimizer", "skills": "IoT, ESP32, Flutter, Firebase", "difficulty": "Medium"},
    {"title": "Wearable Fall Detection for Elderly", "skills": "Embedded C, Accelerometer, IoT, GSM Module", "difficulty": "Hard"},

    # --- App Development ---
    {"title": "AR-Based Campus Navigation App", "skills": "Unity, C#, ARCore, Android SDK", "difficulty": "Hard"},
    {"title": "Student Resource Sharing App", "skills": "Flutter, Firebase, Dart, Node.js", "difficulty": "Medium"},
    {"title": "AI-Diet Planner Mobile App", "skills": "React Native, Python, ML API, PostgreSQL", "difficulty": "Medium"}
]

def get_ai_suggestions(student_skills):
    descriptions = [idea['skills'] for idea in AI_IDEA_BANK]
    tfidf = TfidfVectorizer(stop_words='english')
    # Ensure student_skills is string
    all_texts = [str(student_skills)] + descriptions
    matrix = tfidf.fit_transform(all_texts)
    sim = cosine_similarity(matrix[0:1], matrix[1:])
    
    suggestions = []
    for i, score in enumerate(sim[0]):
        if score > 0.05: # Matching threshold
            idea = AI_IDEA_BANK[i].copy()
            idea['ai_generated'] = True
            idea['match_score'] = float(score)
            suggestions.append(idea)
    return sorted(suggestions, key=lambda x: x['match_score'], reverse=True)

@app.route('/recommend-hybrid', methods=['POST'])
def hybrid_recommend():
    try:
        data = request.json
        # Check if student_skills is list, then join it to string
        raw_skills = data.get('student_skills', "")
        student_skills = ", ".join(raw_skills) if isinstance(raw_skills, list) else str(raw_skills)
        
        faculty_projects = data.get('faculty_projects', [])

        faculty_matches = []
        if faculty_projects:
            # FIX: MongoDB se aayi hui skills list ko string mein badlein
            project_desc = []
            for p in faculty_projects:
                s = p.get('skillsRequired', "")
                # Agar skills list hai toh join karein, warna string rakhein
                project_desc.append(", ".join(s) if isinstance(s, list) else str(s))

            tfidf = TfidfVectorizer(stop_words='english')
            # all_texts must be a list of STRINGS
            all_texts = [student_skills] + project_desc
            matrix = tfidf.fit_transform(all_texts)
            sim = cosine_similarity(matrix[0:1], matrix[1:])
            
            for i, score in enumerate(sim[0]):
                p = faculty_projects[i]
                p['match_score'] = float(score)
                p['ai_generated'] = False
                faculty_matches.append(p)

        ai_suggestions = get_ai_suggestions(student_skills)

        return jsonify({
            "faculty_projects": sorted(faculty_matches, key=lambda x: x['match_score'], reverse=True)[:6],
            "ai_innovations": ai_suggestions[:6]
        })
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5001, debug=True)