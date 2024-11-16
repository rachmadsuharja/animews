# Animews - Anime News Portal

**Animews** is a news site that provides the latest information about the world of anime, including news on the latest releases, anime reviews and other interesting articles. With a modern design and easy navigation, this portal aims to be a trusted source of information for anime fans around the world.

## 🚀 Installation

### Prerequisites

<ul>
<li><a href="https://nodejs.org/en">Nodejs (v.20+)</a></li>
<li>MongoDB (local or cloud)</li>
<li>Git</li>
</ul>

### Local Development

**1. Clone the repository**

```bash
git clone https://github.com/rachmadsuharja/animews.git
cd animews
```

**2. Install dependencies for both (frontend & backend)**

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

**3. Set up environment variables**

```env
PORT=3000
DATABASE_URI=<your-mongodb-uri>
JWT_SECRET_KEY=<your-jwt-secret-key>
```

**4. Start the development servers**

```bash
cd backend
npm run dev

# Frontend
cd ../frontend
npm start
```

**5. Open the app in your browser**

<ul>
<li><b>Backend API :</b> <a href="http://localhost:5000/api">http://localhost:5000/api</a></li>
<li><b>Frontend :</b> <a href="http://localhost:3000">http://localhost:3000</a></li>
</ul>
