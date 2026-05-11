# FastRides Rentals

Static GitHub Pages mirror of `https://fastridesrentals.com/`, packaged with Vite and Capacitor.

The GitHub Pages publish folder is `docs/`, matching the setup used by `/Users/vankayalafamily/workspace/chroma-shades-site`.

## Local Preview

From this folder:

```bash
cd /Users/vankayalafamily/workspace/fastrides
npm install
npm run dev
```

Open the localhost URL printed by Vite.

To preview exactly what GitHub Pages will serve:

```bash
npm run build
rm -rf docs
cp -R dist docs
cp docs/index.html docs/404.html
python3 -m http.server 5173 -d docs
```

Then open:

```text
http://localhost:5173
```

## Publish on GitHub Pages

Push this repo to:

```text
git@github.com:venkat224156/fastrides.git
```

In GitHub repo settings:

1. Go to `Settings -> Pages`.
2. Under `Build and deployment`, set `Source` to `Deploy from a branch`.
3. Set `Branch` to `main`.
4. Set `Folder` to `/docs`.
5. Save.

GitHub Pages should publish from:

```text
https://venkat224156.github.io/fastrides/
```

## Custom Domain

If using:

```text
fastridesrentals.com
```

Add this file before rebuilding docs:

```bash
echo "fastridesrentals.com" > public/CNAME
npm run build
rm -rf docs
cp -R dist docs
cp docs/index.html docs/404.html
```

Then commit and push.

At the DNS provider, use:

```text
A     @      185.199.108.153
A     @      185.199.109.153
A     @      185.199.110.153
A     @      185.199.111.153
CNAME www    venkat224156.github.io
```

After DNS propagates, go to `Settings -> Pages` and enable `Enforce HTTPS`.

## Mobile App

The web app is also wrapped with Capacitor.

```bash
npm run sync
npx cap open android
```

iOS requires full Xcode and CocoaPods:

```bash
npx cap add ios
npx cap sync ios
```
