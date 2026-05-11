# FastRides Rentals Clone

Local Vite and Capacitor repo for a close FastRides Rentals website clone based on the public SiteSwan pages at `https://fastridesrentals.com/`.

## Tech Used

| Tool | Purpose in this repo |
| --- | --- |
| HTML | `index.html` defines the page shell and launch screen markup. |
| CSS | `src/styles.css` recreates the SiteSwan-style layout, responsive UI, slideshow, parallax backgrounds, and reveal animations. |
| JavaScript | `src/main.js` handles SPA routing, navigation, slideshow behavior, contact form feedback, launch fade, and native back-button logic. |
| Node.js | Runs the local dev/build toolchain. |
| npm | Installs packages and runs scripts. |
| Vite | Serves the web app and builds `dist/`. |
| Capacitor | Wraps the Vite web app in native Android/iOS containers. |
| `@capacitor/app` | Handles Android hardware back-button navigation and app exit. |
| TypeScript | `capacitor.config.ts` provides typed Capacitor configuration. |
| Gradle | Android project includes Gradle wrapper files in `android/`. |
| Android SDK / Android Studio | Needed locally to compile and run the Android app. |
| Xcode | Needed locally to generate/open/build the iOS app. |
| Swift | Capacitor iOS project shell uses Swift after `npx cap add ios`. |
| CocoaPods | Needed locally before adding/syncing iOS dependencies. |

## Local Web Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Capacitor Commands

```bash
npm run sync
npx cap open android
npx cap add ios
npx cap open ios
```

Android has already been generated and synced in `android/`.

iOS was not generated on this machine because CocoaPods is not installed and full Xcode is not selected. After installing Xcode and CocoaPods, run:

```bash
npx cap add ios
npx cap sync ios
```

## Native Toolchain Notes

The Android wrapper exists, but `./android/gradlew assembleDebug` requires a configured Java runtime plus Android SDK/Android Studio.

The current Mac reports Command Line Tools for `xcodebuild`, not full Xcode. Install/select Xcode with:

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

Then install CocoaPods using your preferred method and rerun the iOS Capacitor commands.
