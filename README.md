# 🏨 QuickStay - Modern Hotel & Room Booking Platform

🔗 ## 🌐 Live Demo* [quickstay-app.vercel.app](https://quick-stay-booking-app.vercel.app/)

A full-featured, responsive, and type-safe web application designed for booking rooms and managing property listings. **QuickStay** connects travelers looking for convenient accommodation with property owners offering seamlessly managed room options.

---

## ✨ Features

### 👤 For Guests
* **Dynamic Search & Browsing:** Filter available rooms by category, amenities, and pricing.
* **Seamless Authentication:** Secure sign-in and account management powered by **Clerk**.
* **Interactive Booking:** Effortlessly view booking details and manage reservations via *My Bookings*.
* **Responsive Design:** Optimized user interface across all screen sizes with smooth UI transitions and backdrop-blur navigation effects.

### 🔑 For Property Owners (Owner Dashboard)
* **Add & Edit Rooms:** Full control over adding room descriptions, amenities selection, dynamic pricing, and uploading multiple preview images.
* **Availability Toggle:** Instant real-time toggle to update room availability (`Available` / `Booked`).
* **Manage Listings:** Organized table view to track and manage all active listings easily.
  
---

## 🛠️ Tech Stack

- **[React.js] Component-based UI library 
- **Language:** [TypeScript] Static typing for robust error prevention and developer velocity
- **Vite:** Fast next-generation frontend tooling and build runner
- **Styling:** [Tailwind CSS] Utility-first CSS framework for custom responsive styling
- **Routing:** [React Router v6] To navigate between pages
- **Authentication:** [Clerk Auth] To verify user identity
- **Icons:** SVG Icons for fast website

<div align="center">
| 🏨 Guest Experience & Booking | 🔑 Owner Dashboard |
| :---: | :---: |
| <img src="./src/assets/preview.png" alt="Preview" width="100%"/> "
</div>



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
