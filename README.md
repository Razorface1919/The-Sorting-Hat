# ⚡️ The Sorting Hat

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

A cinematic, interactive Single Page Application (SPA) that reimagines the Hogwarts Sorting Ceremony. Built entirely with Vanilla web technologies (Zero frameworks), this project focuses on high-performance CSS animations, true 3D DOM rendering, and serverless data collection.

🔗 **[Play the Live Demo Here](https://the-sorting-hat-tau.vercel.app/)**

---

## 🔮 Key Features

* **Cinematic UI/UX:** Features a highly immersive interface utilizing complex CSS keyframes, `backdrop-filter` glassmorphism, dynamic vignettes, and synchronized state crossfades.
* **True 3D CSS Physics Engine:** The landing page features a mathematically countered 3D orbit system. Using `transform-style: preserve-3d`, the parent rings rotate in 3D space while the child crests counter-rotate to perfectly face the camera, maintaining deep z-index layering without Canvas/WebGL.
* **Serverless Database Architecture:** Bypasses traditional backend requirements by structuring a `no-cors` POST request directly to a hidden Google Form/Sheet, allowing for free, seamless data collection.
* **State Persistence & "Soft" Auth:** Utilizes browser `localStorage` to check for returning users via their "Owl Post Address" (Email). Returning users bypass the quiz and have their customized Ministry Dossier instantly reconstructed from memory.
* **Dynamic SVG Radar Charts:** The final Results Dashboard generates an SVG polygon entirely via JavaScript math, mapping the user's quiz resonance across all four houses.
* **Custom Themed Micro-Interactions:** The quiz engine injects specialized DOM structures based on the question theme (e.g., 3D flipping Tarot cards, animated liquid vials, interactive dials, and CSS-only 3D carousel tracks).
* **Custom Modal System:** Replaces native browser `alert()` popups with a synchronized, animated "Ministry Notification" overlay.
* **Asynchronous Asset Preloading:** Implements a custom background preloader that silently scrapes the internal JSON data structures and caches over 60 high-resolution images while the user fills out the initial registration form, eliminating network latency during the highly dynamic quiz phase.
* **Fully Responsive Cinematic Design:** Utilizes extensive CSS media queries and relative units (vh, vw, %) to ensure complex 3D perspective layers, diorama tracks, and SVG charts scale perfectly down to narrow mobile screens without breaking the immersive experience.
* **Social Graph Optimization:** Includes complete Open Graph (OG) and Twitter Card meta tags to ensure the application unfurls into a beautiful, clickable preview card when shared across social media and messaging platforms.

---

## 🛠 Tech Stack

* **Structure:** HTML5 
* **Styling:** CSS3 (Heavy use of Variables, Flexbox, Grid, Transform Matrices, Masks, and Animations)
* **Logic & State:** Vanilla JavaScript (ES6+)
* **Backend / DB:** Google Forms API (Data-binding via Fetch)
* **Deployment:** Vercel / GitHub Pages
* **Asset Optimization:** WebP / Local Image Compression (Squoosh/TinyPNG) to ensure fast load times despite heavy visual assets.

---

## 💻 Local Development

Because this project uses vanilla web technologies without a heavy framework (like React or Vue), getting it running locally is incredibly fast. However, because it fetches external resources and utilizes complex DOM manipulations, it **must** be run on a local web server (opening the `index.html` file directly via the `file://` protocol will cause CORS and asset-loading errors).

### Prerequisites
* A code editor (like [VS Code](https://code.visualstudio.com/))
* Git installed on your machine
* A modern web browser (Chrome, Edge, Firefox, or Safari)

### Step 1: Clone the Repository
Open your terminal and clone the project to your local machine:
```bash
git clone https://github.com/Razorface1919/The-Sorting-Hat.git
cd The-Sorting-Hat
```
### Step 2: Launch a Local Server
You can launch a local server using one of the following methods depending on your setup:

**Option A: Using VS Code (Recommended)**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
2. Open the `index.html` file.
3. Click the **"Go Live"** button in the bottom right corner of your VS Code window.
4. The project will automatically open in your default browser at `http://127.0.0.1:5500`.

**Option B: Using Python (Mac/Linux Default)**
If you have Python installed, run this command in your project directory:
```bash
python3 -m http.server 5500
```
Then open `http://localhost:5500` in your browser.

**Option C: Using Node.js**
If you have Node installed, you can use the `serve` package:
```bash
npx serve
```

### Step 3: Database Configuration (Google Forms)
If you are forking this project and want to collect the data into your own Google Sheet:

1. Create a new Google Form with "Short Answer" fields matching the inputs in `index.html` (Name, Email, Age, City, Zodiac, Trait, Prediction, Winner, Scores).
2. Go to the live preview of your form, right-click, and select **Inspect**.
3. Find the `name="entry.123456789"` attribute for each specific input field.
4. Open `script.js` and update the `ENTRY_IDS` dictionary with your specific numbers:
```javascript
const ENTRY_IDS = {
    name: "entry.YOUR_ID_HERE", 
    email: "entry.YOUR_ID_HERE",
    // ... update the rest
};
```
5. Get the submission link for your form (it should end in `/formResponse`) and update the `GOOGLE_FORM_URL` variable at the top of `script.js`.

---

## 📜 License & Disclaimer

This is a personal portfolio project built for educational and demonstrative purposes only. 
Harry Potter, Hogwarts, the Hogwarts Houses, and all related terms, names, and characters are trademarks and intellectual property of Warner Bros. Entertainment Inc. and J.K. Rowling. No copyright infringement is intended, and no commercial profit is being made from this application.
