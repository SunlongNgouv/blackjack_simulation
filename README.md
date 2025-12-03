# 🂡 Blackjack Simulation (Python + JavaScript)

Welcome to my Blackjack simulation project! This repository contains both a Python-based simulation and a JavaScript browser game interface.

This project was originally inspired while I was practicing a Kaggle exercise related to blackjack:
🔗 https://www.kaggle.com/code/sunlongngouv/exercise-working-with-external-libraries/edit

---

## 🎯 Project Purpose

- Simulate a complete Blackjack game between a human player and an automated dealer  
- Practice algorithmic thinking and randomization using Python  
- Build a functional static web version using HTML/CSS/JavaScript  
- Experiment with probability-driven decisions and dynamic Ace evaluation  
- Host and publish the game through GitHub Pages  

---

## 🃏 Game Rules

The following standard Blackjack rules apply:

- A deck contains 52 cards  
- Numbered cards = face value  
- J, Q, K = 10  
- Ace = 11 or 1 depending on total  
- Both player and dealer start with two cards  
- Player actions:
  - **Hit** → draw another card  
  - **Stand** → stop drawing  
- If total > 21 → **BUST**  
- Closest to 21 wins  
- Dealer wins if scores tie  

---

## 🤖 Dealer (AI) Logic

The dealer follows deterministic decision logic:

### Decision Rules
- If total < 17 → dealer **hits**  
- If total ≥ 17 → dealer **stands**  
- Aces are dynamically converted:
  - Count as 11 unless total exceeds 21  
  - Otherwise count as 1  

### Example Ace Logic
Hand: `{A, A, 9}`

- Ace (11) + Ace (1) + 9 = 21  
- Dealer stands  

---

### 🧩 Technical Implementation - Python Notebook for CLI Game
**Url:** https://github.com/SunlongNgouv/blackjack_simulation/blob/master/Blackjack%20Simulation.ipynb

**Local file:** Blackjack Simulation.ipynb

---

### 🚀 Deployment - UI JS Simulation
**Url:** https://sunlongngouv.github.io/blackjack_simulation/

**Local files:** index.html, style.css, script.js

---

## 🧠 Future Enhancements
- Deck memory (prevent card reuse)
- Display visible card history
- Add probabilistic recommendation (e.g., “Best move: Hit”)
- Basic card-counting logic
- Animated chip and bet system
- Multiplayer simulation
- Win-loss statistics tracking

---

## 🙌 Acknowledgments
This project was inspired by the blackjack exercise I practiced on Kaggle:
🔗 https://www.kaggle.com/code/sunlongngouv/exercise-working-with-external-libraries/edit

Thanks to the Kaggle community for motivating this deeper exploration into game logic and probabilistic modelling.

## 📩 Feedback & Contribution

Feel free to open issues or submit pull requests — feedback and collaboration are welcome!
