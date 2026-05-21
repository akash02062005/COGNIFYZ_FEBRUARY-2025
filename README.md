# 🌐 Cognifyz Web Development Internship — February 2025

Welcome to the **Cognifyz Web Development Internship (February 2025)** repository! This repository hosts a collection of modern frontend web applications engineered during my internship to demonstrate mastery of modern web design, interactive script logic, responsive layouts, grid systems, and bootstrap frameworks.

---

## 📂 Repository Structure

The repository contains a clean, flat-file structure containing all assets, JavaScript engines, and stylesheets for four distinct frontend web development tasks:

```text
COGNIFYZ_FEBRUARY-2025/
│
├── 🏢 Task 1: Static Professional Business Webpage
│   ├── cog task 1.html     # HTML structure
│   └── cog task 1.css      # Styling sheets
│
├── ⚙️ Task 2: Interactive Webpage (JS Engine)
│   ├── cog task 2.html     # HTML framework
│   ├── cog task 2.css      # Styling sheets
│   └── cog task 2.js       # Real-time greeting & parsing script
│
├── 🏋️ Task 3: Fitness Hub Portal (Bootstrap 5)
│   ├── cog task 3.html     # Bootstrap interface
│   ├── fitness 1.jpeg      # Local slider asset (Space in filename)
│   ├── fitness2.jpeg       # Local slider asset
│   └── fitness3.jpg        # Local slider asset
│
└── 📱 Task 4: Responsive Landing Page (Media Queries)
    ├── cog task 4.html     # Mobile-responsive markup
    └── cog task 4.css      # Fluid columns & media query rules
```

---

## 🚀 Projects & Task Breakdown

### 🏢 Task 1: Static Professional Business Webpage
A sleek, desktop-first corporate webpage designed to present high-value business offerings, corporate solutions, and a fully functional lead collection form.

**Key Features**:
- **Fixed Navbar Header** — Features responsive local link routing (`Home`, `Services`, `About`, `Contact`).
- **Services Grid** — Displays core competencies utilizing flexible layouts.
- **Client Intake Form** — Includes fields for Name, Email, and message context with structured labels and inputs.

---

### ⚙️ Task 2: Interactive Webpage (JavaScript Engine)
An enhanced interactive webpage integrating a custom client-side JavaScript engine to dynamically update layouts based on time inputs and user interactions.

**Key Features**:
- **Time-Aware Greeting Banner** — Automatically reads the user's local system browser hours to render personalized greetings:
  - `05:00 - 11:59` → **"Good morning!"**
  - `12:00 - 17:59` → **"Good afternoon!"**
  - `18:00 - 23:59` → **"Good evening!"**
  - `00:00 - 04:59` → **"Good night!"**
- **Interactive Theme Switcher** — Includes buttons that dynamically alter background themes using DOM style adjustments.
- **Sum Calculation Parser** — Real-time addition tool utilizing standard `parseFloat` casting to sum two dynamic numbers and render results instantly.

---

### 🏋️ Task 3: Fitness Hub Portal (Bootstrap 5)
A state-of-the-art landing page for a premier gym, utilizing **Bootstrap 5 CDN frameworks** for rapid, modern mobile-responsive design.

**Key Features**:
- **Bootstrap Navigation Bar** — Responsive navigation menu.
- **Interactive Carousel Slider** — Dynamic transitions for training program slides.
- **Grid Program Cards** — Grid layouts showcasing specialized training plans (Strength, Cardio, Yoga).
- **Collapsible FAQ Accordion** — Interactive questions using Bootstrap collapsing models.

> [!WARNING]
> **Image Filename Space Mismatch**
> 
> Inside `cog task 3.html`, the background carousel slide references `./fitness1.jpeg`. However, the image committed in the repository is named `fitness 1.jpeg` (containing a whitespace).
> 
> **Fix**: Rename the local asset from `fitness 1.jpeg` to `fitness1.jpeg` to ensure slides load successfully.

---

### 📱 Task 4: Responsive Landing Page (Media Queries)
A mobile-friendly adaptation of Task 1, implementing CSS Media Queries (`@media screen and (max-width: 480px)`) to collapse grid layouts into single-column structures and dynamically scale typography for mobile viewports.

---

## 🛠️ Tech Stack & Concepts Demonstrated

| Concept | Tool / Tech | Application in Repository |
| :--- | :--- | :--- |
| **Markup Language** | HTML5 | Semantics (`header`, `section`, `footer`, `form`), labels, and standard inputs. |
| **Styling Engine** | CSS3 | Responsive flex layouts, custom properties, and transitions. |
| **Responsive Design** | CSS Media Queries | Implement `@media` rules for viewport adaptations. |
| **Client Scripting** | ES6+ JavaScript | DOM manipulation, event listeners, conditional control logic, and system API hooks. |
| **CSS Framework** | Bootstrap 5 | Rapid CSS grid classes, carousel elements, cards, and custom accordion widgets. |

---

## 🚀 Local Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/akash02062005/COGNIFYZ_FEBRUARY-2025.git
cd COGNIFYZ_FEBRUARY-2025
```

### 2. Fix the Asset Space (Recommended)
Before running, rename the background image file to eliminate the trailing space so the slides load perfectly:
```bash
mv "fitness 1.jpeg" "fitness1.jpeg"
```

### 3. Open in Browser
Open any `.html` task file directly in your browser or run them using the VS Code **Live Server** extension.

---

## 📄 License
This repository is licensed under the MIT License - see the LICENSE file for details.
