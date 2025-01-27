<div align="center">
  <br />
    <a target="_blank">
      <img src="/public/images/banner-image.png" alt="Project Banner" />
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js" alt="next.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=red" alt="appwrite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  </div>

  <h3 align="center">Global Invex</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

Discover smart investing with this intuitive platform designed for financial growth and security. Gain access to expert insights, plan your investments wisely, and take control of your wealth with an easy-to-use interface. Enjoy seamless account access, professional guidance, and long-term financial strategies to help you achieve financial independence.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Appwrite
- TypeScript
- Shadcn
- Tailwind CSS

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/chetachiogbonna/globeinvex.git
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# APPWRITE
NEXT_APPWRITE_KEY=your_appwrite_key
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_appwrite_project
APPWRITE_DATABASE_ID=your-appwrite_database_id
APPWRITE_USERSCOLLECTION_ID=your_appwrite_user_collection_id 
APPWRITE_BUCKET_ID=your_appwrite_bucket_id
```

Replace the placeholder values with your actual Firebase credentials. You can obtain these credentials by signing up on the [Appwrite website](https://cloud.appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the code response.