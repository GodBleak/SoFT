# So(lid) F(eathers) T(ypeScript) (SoFT)

## About

This is the template I use when I need the fine grained reactivity of [SolidJS](https://www.solidjs.com/) and the real-time capabilities of [FeathersJS](https://feathersjs.com/). I refer to the powerful duo (plus TypeScript) as the SoFT stack.

This template was created with the default options from `npm create feathers@latest SoFT` (Except uses Express rather than Koa), it also adapts [SolidJS-SSR-Vite](https://github.com/GodBleak/SolidJS-SSR-Vite) to integrate SolidJS streaming SSR and Vite HMR. And as with all my templates, this also has [TailwindCSS](https://tailwindcss.com/) added in.

_Find an example chat app using this template [here](https://github.com/GodBleak/SoFT-Chat)._

## Setup

_You probably don't need to be told this, but in case you forgot how to Node:_ <br /> Clone the repo (or use the "Use this template" button), and then run `npm install` to install the dependencies.

## Usage

### Development

- Run `npm run dev` to start the development server, your app will be available at http://localhost:3030.
- Make epic shit.

### Production

- Run `npm run build` to build your app for production. By default, the output will be in the `lib` folder.
- Run `npm start` to start the server in production mode.

### Clean up

- Run `npm run clean` to remove the `lib` folder.

## Notes

- `ts-node` (added by FeathersJS CLI) has been replaced with `tsx`
- Because this uses Rollup for production, the `compile` script was replaced by the `build` script
- Further deviating from the generated Feathers project, this uses ESM
- Because of the above, Rollup is configured to replace `__dirname` with `process.cwd()`
- Because of the optional dependencies of `knex`, `knex` is marked as an external dependency in the Rollup config, keep this in mind when deploying to prod.

## Supporting

If you find this template helpful, consider paying it forward and/or pet a cat. They're often more appreciative than users. 🐱
