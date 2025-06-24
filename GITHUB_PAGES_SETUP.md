# GitHub Pages Deployment Guide

## Quick Setup

Your Nim website is now configured for GitHub Pages deployment! Here's what has been set up:

### ✅ Configuration Complete
- **Next.js Static Export**: Configured in `next.config.mjs`
- **GitHub Actions Workflow**: Created at `.github/workflows/deploy.yml`
- **Static Assets**: Optimized for GitHub Pages
- **Base Path**: Set to `/web` (matching your repository name)
- **GitHub Username**: Set to `githubense`

### 🚀 Deployment Steps

1. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section in the left sidebar
   - Set "Source" to "GitHub Actions"

2. **Push Your Changes**:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

3. **Automatic Deployment**: The GitHub Action will automatically build and deploy your site.

### 🌐 Access Your Site

Once deployed, your site will be available at:
```
https://githubense.github.io/web/
```

### 🔧 Customization

#### Change Repository Name
If you want to use a different repository name (e.g., `portfolio` instead of `nim`):

1. Update `basePath` and `assetPrefix` in `next.config.mjs`:
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
   ```

2. Update the URLs in `app/layout.tsx` and `lib/constants.ts` accordingly.

#### Custom Domain
To use a custom domain:
1. Add a `CNAME` file to the `public/` directory with your domain name
2. Configure your domain's DNS settings
3. Update the URLs in the configuration files

### 🧪 Local Testing

Test your static build locally:
```bash
npm run build
npx serve out
```

### 📁 File Structure Added

```
.github/
  workflows/
    deploy.yml          # GitHub Actions workflow
public/
  .nojekyll            # Prevents Jekyll processing
```

### ⚡ Performance

The static build generates optimized files:
- **Total Size**: ~161KB first load
- **Static Pages**: All pages pre-rendered
- **Assets**: Optimized and compressed

### 🎨 Features Preserved

All original Nim features work with static deployment:
- ✅ Dark/Light theme switching
- ✅ Animated components with Motion-Primitives
- ✅ MDX blog posts
- ✅ Responsive design
- ✅ SEO metadata

### 🔍 Troubleshooting

**Build fails?**
- Check the GitHub Actions logs in the "Actions" tab of your repository

**Site not loading correctly?**
- Verify you've updated the GitHub username in the configuration files
- Ensure GitHub Pages is enabled in repository settings

**Assets not loading?**
- Confirm the `basePath` matches your repository name

### 📱 Mobile & Desktop

The site is fully responsive and works on all devices with the static deployment.

---

🎉 **Your Nim website is now ready for GitHub Pages!**
