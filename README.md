This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Dynamic Web Application

This web application is designed and implemented based on Jsonplaceholder API The application consists of multiple pages, each serving a specific purpose. The development is divided into three levels, focusing on different aspects of functionality and best practices.


## Pages Developed

1. **Home Page (`/`):**
    - Placeholder for the home page.

2. **Sign Up Page (`/signup`):**
    - Implements sign-up functionality using Firebase.
    - Styled using Tailwind.

3. **Login Page (`/login`):**
    - Implements login functionality using Firebase.
    - Styled using Tailwind.

4. **All Posts Page (`/posts`):**
    - Requires authentication to access.
    - Fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) and displays 100 posts.

5. **Single Post Details Page (`/posts/:postID`):**
    - Requires authentication to access.
    - Fetches single post details from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts/1).


## Getting Started

First, clone the repository:

```bash
git clone https://github.com/vishnu-mouli-102408/Enitiate-Frontend
cd Enitiate-Frontend
```
Install the dependencies:

```bash
npm install
```

Configure the Environment Variables:
1. Create `.env.local` file in the root directory.
2. Add the following variables:

```bash
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
NEXT_PUBLIC_MEASUREMENT_ID=
UNSPLASH_ACCESS_KEY=
UNSPLASH_SECRET_KEY=
```
3. You can get these env variables by creating a project in Firebase console.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
