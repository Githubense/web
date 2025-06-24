# 🔧 GitHub Pages Configuration Fix

## Problem
Your GitHub Pages is currently serving the README.md file instead of your Next.js site because it's configured to deploy from the main branch rather than using GitHub Actions.

## Solution

### Step 1: Configure GitHub Pages Source
1. Go to your repository on GitHub: `https://github.com/githubense/web`
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Save the settings

### Step 2: Trigger a New Deployment
After changing the source, trigger a new deployment by either:

**Option A: Push a small change**
```bash
# Make a small change to trigger rebuild
echo "# Trigger deployment" >> README.md
git add README.md
git commit -m "Trigger GitHub Pages deployment"
git push origin main
```

**Option B: Manually trigger workflow**
1. Go to the "Actions" tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Click the green "Run workflow" button

### Step 3: Monitor Deployment
1. Go to the "Actions" tab
2. Watch the "Deploy to GitHub Pages" workflow
3. Wait for it to complete (green checkmark)
4. Your site should then be available at: `https://githubense.github.io/web/`

## Expected Result
After following these steps, visiting `https://githubense.github.io/web/` should show your Next.js site instead of the README content.

## Troubleshooting
- If you still see the README, wait a few minutes as GitHub Pages can take time to update
- Clear your browser cache or try an incognito window
- Check that the workflow completed successfully in the Actions tab
- Verify that the "Environment" section in your repository shows a successful deployment

## Verification
Your site should display:
- ✅ Your personal website with dark/light theme toggle
- ✅ Animated components
- ✅ Blog section with MDX posts
- ✅ Responsive design

Instead of:
- ❌ GitHub's default README page with Jekyll styling
