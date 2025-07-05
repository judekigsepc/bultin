 📌 Bultin — Structured Group Discussion Board for Students

**Bultin** is a real-time, structured bulletin board designed to help students collaborate more effectively in academic groups. It replaces the cluttered, fast-scrolling chaos of WhatsApp with topic-focused discussion threads, sticky-note style answers, voting, and real-time updates — all with a clean, intentional interface built for learning.

---

 ✨ Features

- 🔐 User registration & login with real name requirement
- 👥 Create or join study groups (with invite codes or join requests)
- ❓ Add and manage multiple academic questions per group
- 🗒️ Post answers in sticky-note format (text or image)
- ✅ Agree / ❌ Disagree (with reason) / 💬 Comment on answers
- 🔄 Real-time updates scoped to the question being viewed
- 📌 Smart sorting: unseen answers first, most-agreed answers rise
- 🧠 Image support for math, diagrams, and handwritten answers
- 🔔 Activity badges for questions with new content
- 🚫 Admins can close questions once consensus is reached

---

## 🎯 Use Case

Bultin is built specifically for **students and academic groups** who want to:

- Collaborate on questions in a more focused way
- Avoid message clutter and off-topic spam
- Build consensus through structured discussion
- Store answers for future review (asynchronous-friendly)

---

## 🧱 Tech Stack

| Layer        | Technology             |
|--------------|------------------------|
| Backend      | [NestJS](https://nestjs.com/) + WebSockets (Socket.IO) |
| Frontend     | React + Tailwind CSS (optional) |
| Database     | MongoDB (via Mongoose or Prisma) |
| File Uploads | Multer (for image-based answers) |
| Hosting      | Vercel (frontend), Render/Railway (backend) |

---

## 📁 Project Structure (Planned)



/bultin-backend
/src
/auth
/users
/groups
/questions
/answers
/comments
/gateway   <-- WebSocket gateway
/bultin-frontend
/components
/pages
/services
/utils

````



## 🚀 Getting Started (Coming Soon)

**Backend**

```bash
cd bultin-backend
npm install
npm run start:dev
````

**Frontend**

```bash
cd bultin-frontend
npm install
npm run dev
```

> You'll need to set up `.env` files for both frontend and backend. Instructions will be provided later.

---

## 🛡️ Planned Security & Moderation

* Role-based access (Admin vs Member)
* Approval for join requests (by Admins)
* Required reason for any "disagree" action
* Student name enforcement during signup

---

## 🧪 Roadmap

* [ ] Question closing + final answer locking
* [ ] Student ID or class list matching
* [ ] Push notifications or email alerts
* [ ] Threaded replies for comments
* [ ] Group-level search and filters

---

## 🤝 Contributing

This project is currently in active development for learning and practical use. If you're interested in contributing or testing it out, feel free to fork the repo and open a pull request.

---

## 📜 License

[MIT](LICENSE)

---

## 👨‍💻 Author

Built with purpose by [Kiggundu Jude](https://github.com/your-username), a full-stack developer passionate about building tools that improve learning and collaboration.

