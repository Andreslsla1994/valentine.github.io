# Fix "There isn't a GitHub Pages site here"

**Most often this happens because GitHub Pages is not set to use the `gh-pages` branch.** Do step 3 below.

Follow these steps **in order**:

## 1. Push the workflow and trigger a deploy

Make sure the workflow file is in your repo and run a deploy:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deploy workflow"
git push origin main
```

(Use `master` instead of `main` if that’s your default branch.)

## 2. Create `gh-pages` if it doesn’t exist (optional)

If the Actions workflow hasn’t run yet or you prefer to deploy from your machine:

```bash
npm run build
npm run deploy
```

This pushes the contents of `dist` to the `gh-pages` branch.

## 3. Turn on GitHub Pages (this fixes “There isn’t a GitHub Pages site here”)

**You must set the source in the repo settings.** Otherwise GitHub shows “There isn’t a GitHub Pages site here”.

1. On GitHub, open your repo **valentines-day-page**.
2. Go to **Settings** (tab at the top) → **Pages** (left sidebar under “Code and automation”).
3. Under **Build and deployment**:
   - **Source**: choose **“Deploy from a branch”** (not “GitHub Actions”).
   - **Branch**: open the dropdown → choose **“gh-pages”**.
   - **Folder**: choose **“/ (root)”**.
4. Click **Save**. The page will show something like: “Your site is live at https://YOUR_USERNAME.github.io/valentines-day-page/”.

## 4. Open your site

After 1–2 minutes, open:

**https://YOUR_USERNAME.github.io/valentines-day-page/**

(Replace YOUR_USERNAME with your GitHub username.)

---

**If it still says “There isn’t a GitHub Pages site here”:**

- **Actions** tab: confirm the workflow **“Deploy to GitHub Pages”** ran and **succeeded** (green check). If it failed, fix the error and push again.
- **Branches**: confirm the **gh-pages** branch exists (after a successful workflow run). If it’s missing, run `npm run build` then `npm run deploy` locally and push, then repeat step 3 above.
- **Settings → Pages**: source must be **“Deploy from a branch”**, branch **gh-pages**, folder **/ (root)**.
