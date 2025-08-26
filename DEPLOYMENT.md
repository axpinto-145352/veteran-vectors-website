# GitHub Pages Deployment Guide

## Quick Setup

1. **Create a new repository** on GitHub
2. **Push this code** to your repository
3. **Enable GitHub Pages** in repository settings
4. **Set source** to "GitHub Actions"

## Detailed Steps

### 1. Create GitHub Repository
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**

### 3. Automatic Deployment
- The GitHub Action will automatically run when you push to the `main` branch
- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
- Deployment typically takes 2-3 minutes

## File Structure for GitHub Pages

```
your-repo/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/                        # React source files
├── public/                     # Static assets
├── dist/                       # Built files (auto-generated)
├── index.html                  # Main HTML file
├── package.json               # Dependencies
├── vite.config.ts             # Build configuration
└── DEPLOYMENT.md              # This guide
```

## Important Notes

- **Base URL**: The `vite.config.ts` has been updated with `base: './'` for proper GitHub Pages routing
- **Static Files**: All images and assets in `/public/` will be served correctly
- **Custom Domain**: You can add a custom domain in GitHub Pages settings
- **HTTPS**: GitHub Pages automatically provides HTTPS
- **Updates**: Any push to `main` branch will trigger a new deployment

## Troubleshooting

### Build Fails
- Check the Actions tab in your GitHub repository
- Ensure all dependencies are listed in `package.json`
- Verify the build works locally with `npm run build`

### 404 Errors
- Ensure `base: './'` is set in `vite.config.ts`
- Check that all file paths are relative
- Verify static assets are in the `/public/` directory

### Custom Domain
1. Add a `CNAME` file to `/public/` with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## Commands Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME` once deployed!