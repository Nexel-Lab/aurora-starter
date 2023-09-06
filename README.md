<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://aurora.theiceji.com/logo_white.svg">
        <img width="140" alt="Logo for A1" src="https://aurora.theiceji.com/logo_black.svg">
    </picture>
</p>

<h1 align="center">
  Built with <a href="https://aurora.theiceji.com">AURORA App</a>
</h1>

<h2 id="about">About this boilerplate</h2>

This boilerplate is made up from AURORA App with SEO, PWA, and deploy-ready for you next Web-App.


<h2 id="overview">The AURORA App</h2>

The _"AURORA App"_ is a modern web development stack made by [TheIceJi](https://theiceji.com) focused on **modularity**, **scalability**, and **full-stack typesafety**. It consists of:

- [TypeScript](https://typescriptlang.org)
- [Next.js](https://nextjs.org) (App directory)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Prisma](https://prisma.io)
- [MongoDB](https://www.mongodb.com/)
- [NextAuth.js](https://next-auth.js.org)
- [AWS-S3](https://aws.amazon.com/s3/)

optionals
- [Framer Motion](https://www.framer.com/motion/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Redis](https://redis.io/)

<h2 id="note">Note!</h2>

- This boilerplate was tested on Node v18
- S3 was turned off by default for preventing errors while creating s3 client without env variables. You can turn on by going to `/aurora/libs/s3/index.ts` and remove the 2 line comments (`export`)
- You can change default SEO metadata, and contact config in `/global/config`
- 3 folders for working are `app` (your page), `global` (store, env, config, layout), and `server` (contain all about back-end).
- You can sneak on `aurora` folder for what are we provide.

<h2 id="note">Get start</h2>

- Git clone this repo
- Rename `.env-example` to `.env`
- Add required env `MONGODB_URI` (other env variables are optionals)
- Run `yarn db:generate` and `yarn db:push`
- Start dev server with `yarn dev` (running on http://localhost:8080)
- Deploy production with `yarn deploy`