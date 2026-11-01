# Tr3umphant Designs

The 2020 home of Trey Hope's freelance mobile app development brand. The `web/` folder is the live part of the repo: an Angular 8 portfolio site hosted on Firebase, with an about page, a "How It Works" process, a portfolio of Trey's apps, an interactive pricing estimator, a YouTube blog and a contact page with Calendly booking. The Flutter project at the root is still the default counter app and was never built out.

## Website (`web/`)

Routes are in `web/src/app/app-routing.module.ts`:

| Path | Page | What it shows |
| --- | --- | --- |
| `/about` | About | Trey's background (Trotwood, Ohio; CS at Northern Kentucky University) |
| `/service` | How It Works | the step-by-step process with a price for each step, starting with Plan ($25) and Design ($200) |
| `/portfolio` | Portfolio | apps Trey has built (Lit Pic, Hidden Gems, HEART, Camp Central, Critic and P2K), each with version and description |
| `/pricing` | Pricing | pick app features (sign-in, payments, Bluetooth and more) and see a running estimate (`pricing-page.component.ts`) |
| `/blog` | Blog | "Awesome Apps" YouTube episodes |
| `/contact` | Contact Me | email plus an inline Calendly widget for a 30-minute consultation |
| `**` | Not found | placeholder 404 |

The toolbar header ("Hello, I am Trey Hope, your friendly neighborhood mobile app developer") and footer are in `web/src/app/widgets/`.

### Tech stack

- Angular 8 (Angular CLI), Material Design for Bootstrap styling, Font Awesome
- Firebase Hosting (`firebase.json` serves `dist/web`), Firestore/Storage rules files, and a `functions/` folder with only the sample `helloWorld` function
- Firebase project: `tr3umphant-designs-bd77b` (`web/.firebaserc`)

### Run and deploy

```sh
cd web
npm install
npx ng serve                      # http://localhost:4200
npx ng build --prod               # output in dist/web
npx firebase deploy --only hosting
```

## Flutter app (root)

`lib/main.dart` is the unmodified Flutter counter template (Dart SDK `>=2.6.0 <3.0.0`). There's no app code here yet.
