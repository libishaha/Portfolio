# Libisha Sherani — Developer Portfolio

A full-stack retro pixel-art portfolio with a React frontend and FastAPI backend.

---

## 🗂 Project Structure

```
portfolio-project/
├── frontend/               # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Window.jsx          # Core reusable window component
│   │   │   ├── DesktopIcon.jsx     # Clickable desktop folder icons
│   │   │   ├── ProfileContent.jsx  # Profile window content
│   │   │   ├── WorksContent.jsx    # Projects window with API
│   │   │   ├── ToolsContent.jsx    # Skills/tools grid
│   │   │   ├── ResumeContent.jsx   # PDF resume viewer
│   │   │   └── ContactContent.jsx  # Contact form with API
│   │   ├── hooks/
│   │   │   └── useSound.js         # Web Audio API retro sounds
│   │   ├── styles/
│   │   │   └── global.css          # Pixel aesthetic global styles
│   │   ├── App.jsx                 # Main desktop layout & state
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── vercel.json
│   └── package.json
│
└── backend/                # FastAPI + SQLAlchemy + MySQL
    ├── app/
    │   ├── core/
    │   │   ├── config.py           # Pydantic settings / env vars
    │   │   └── database.py         # SQLAlchemy engine & session
    │   ├── models/
    │   │   └── models.py           # ORM models (projects, contact_messages)
    │   ├── schemas/
    │   │   └── schemas.py          # Pydantic v2 request/response schemas
    │   ├── routers/
    │   │   ├── projects.py         # GET/POST/DELETE /api/projects
    │   │   └── contact.py          # POST /api/contact
    │   └── main.py                 # FastAPI app, CORS, table creation
    ├── requirements.txt
    ├── Procfile                    # Render deployment
    └── .env.example
```

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js 18+
- Python 3.11+
- MySQL 8.0+

---

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/portfolio-project.git
cd portfolio-project
```

---

### 2. Set up the database

Log into MySQL and run:

```sql
CREATE DATABASE portfolio CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Tables are auto-created by SQLAlchemy when the backend starts.

---

### 3. Backend setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create environment file
cp .env.example .env
```

Edit `.env`:

```env
DATABASE_URL=mysql+pymysql://root:your_password@localhost:3306/portfolio
ALLOWED_ORIGINS=http://localhost:5173
```

Start the backend:

```bash
uvicorn app.main:app --reload --port 8000
```

Visit: http://localhost:8000/docs — Swagger UI will show all endpoints.

---

### 4. Frontend setup

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

Edit `.env.local`:

```env
VITE_API_URL=http://localhost:8000
```

Start the dev server:

```bash
npm run dev
```

Visit: http://localhost:5173

---

### 5. Add your resume PDF

Place your resume as `frontend/public/resume.pdf`. The Resume window will embed and offer download.

---

## 🌐 Deployment

### Railway MySQL (Database)

1. Go to [railway.app](https://railway.app) → New Project → MySQL
2. Once created, click on the MySQL service → **Variables** tab
3. Copy the `DATABASE_URL` (it looks like `mysql://user:pass@host:port/railway`)
4. Convert it to SQLAlchemy format:
   ```
   mysql+pymysql://user:pass@host:port/railway
   ```
5. Save this — you'll need it for Render.

---

### Render (Backend)

1. Go to [render.com](https://render.com) → New → Web Service
2. Connect your GitHub repo
3. Set:
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
4. Under **Environment Variables**, add:
   ```
   DATABASE_URL = mysql+pymysql://... (from Railway)
   ALLOWED_ORIGINS = https://your-portfolio.vercel.app
   ```
5. Click **Create Web Service**
6. Wait for deployment. Copy the Render URL (e.g. `https://libisha-api.onrender.com`)

---

### Vercel (Frontend)

1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Set:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
4. Under **Environment Variables**, add:
   ```
   VITE_API_URL = https://libisha-api.onrender.com
   ```
5. Click **Deploy**
6. Once deployed, copy your Vercel URL

---

### Update CORS on Render

After Vercel deploys, go back to Render → Environment Variables and update:
```
ALLOWED_ORIGINS = https://your-portfolio.vercel.app,http://localhost:5173
```

Then trigger a redeploy on Render.

---

## 📤 Pushing to GitHub

```bash
# From project root
git init
git add .
git commit -m "feat: initial portfolio setup"

# Create repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio-project.git
git branch -M main
git push -u origin main
```

**NEVER commit `.env` files.** The `.gitignore` already excludes them.

---

## 🗄 Database Schema

```sql
CREATE TABLE projects (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url   VARCHAR(500),
    github_link VARCHAR(500),
    live_link   VARCHAR(500),
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_messages (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    message     TEXT NOT NULL,
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

Tables are auto-created by SQLAlchemy — you don't need to run this manually.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | List all projects |
| GET | `/api/projects/{id}` | Get single project |
| POST | `/api/projects` | Create project |
| DELETE | `/api/projects/{id}` | Delete project |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | List all messages |
| GET | `/health` | Health check |

---

## 🎨 Customisation

### Personal details
- **Name/tagline**: Edit `src/App.jsx` — `FULL_TEXT` and `SUB_TEXT` constants
- **Social links**: Update href values in the dock section of `App.jsx`
- **Profile bio**: Edit `ProfileContent.jsx`
- **Tools**: Edit the `TOOLS` array in `ToolsContent.jsx`
- **Photo**: Replace the SVG in `ProfileContent.jsx` with your `<img>` tag
- **Resume**: Replace `frontend/public/resume.pdf` with your actual resume

### Adding projects via API

```bash
curl -X POST https://your-api.onrender.com/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Project",
    "description": "A cool project I built.",
    "github_link": "https://github.com/you/project",
    "live_link": "https://project.vercel.app"
  }'
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS |
| Backend | FastAPI, Python 3.11 |
| ORM | SQLAlchemy 2.0 |
| Validation | Pydantic v2 |
| Database | MySQL 8.0 |
| Fonts | Press Start 2P, Share Tech Mono |
| Sounds | Web Audio API (no files needed) |
| Deploy FE | Vercel |
| Deploy BE | Render |
| DB Host | Railway |
