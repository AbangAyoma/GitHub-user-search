# GitHub User Search

A **GitHub User Search App** built with **React, TypeScript, and CSS**, allowing users to search for GitHub profiles and view relevant details.

## 🚀 Features

- **Search GitHub Users** by their username
- **Display User Information** including avatar, name, bio, location, Twitter handle, and more
- **Light/Dark Mode Toggle** for better UI experience
- **Responsive Design** optimized for various screen sizes
- **Error Handling** for invalid searches

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, CSS
- **API:** GitHub Users API (`https://api.github.com/users/{username}`)
- **Icons:** FontAwesome

## 📂 Project Structure

```
github-user-search/
│── public/
│── src/
│   ├── components/
│   │   ├── SearchBar.tsx  # Search input & button
│   │   ├── UserCard.tsx   # Displays user details
│   │   ├── ThemeToggle.tsx  # Light/Dark mode switch
│   ├── App.tsx  # Main app component
│   ├── App.css  # Global styles
│   ├── index.tsx  # App entry point
│── package.json  # Dependencies & scripts
│── tsconfig.json  # TypeScript configuration
│── README.md  # Project documentation
```

## 🔧 Installation & Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/github-user-search.git
   cd github-user-search
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm start
   ```

4. **Build for production:**

   ```sh
   npm run build
   ```

## 📌 Usage

- **Search:** Type a GitHub username and press "Search"
- **View Profile:** Displays avatar, username, bio, location, and social links
- **Toggle Theme:** Click the light/dark mode button to switch themes

## 🌍 API Reference

- **GitHub User API:** `https://api.github.com/users/{username}`
- **Example Response:**
  ```json
  {
    "login": "abangayoma",
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "html_url": "https://github.com/octocat",
    "name": "Abang Laz",
    "company": "@github",
    "location": "San Francisco",
    "twitter_username": "abangayoma",
    "public_repos": 8,
    "followers": 3938,
    "following": 9,
    "created_at": "2011-01-25T18:44:36Z"
  }
  ```

## ✨ Contributing

Contributions are welcome! Feel free to fork this repository, submit issues, or open pull requests.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

🚀 **Developed by [Abang Ayoma]**
