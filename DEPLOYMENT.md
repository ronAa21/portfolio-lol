# 🚀 Deployment Guide

Quick guide to deploy your League of Legends portfolio to various hosting platforms.

## 📦 Before Deployment

1. **Test locally**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 and test all features

2. **Build for production**
   ```bash
   npm run build
   ```
   This creates an optimized `dist` folder

3. **Preview production build**
   ```bash
   npm run preview
   ```
   Test the production build locally

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Method A: Drag & Drop (Fastest)**

1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder onto the page
4. Done! You get a live URL instantly

**Method B: GitHub Integration (Automatic Updates)**

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

**Custom Domain:**
- Site settings → Domain management → Add custom domain
- Follow DNS configuration instructions

---

### Option 2: Vercel (Great Performance)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

**Custom Domain:**
- Project settings → Domains → Add domain

---

### Option 3: GitHub Pages (Free Hosting)

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio-lol",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio-lol/' // Your repo name
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Repository → Settings → Pages
   - Source: gh-pages branch
   - Save

---

### Option 4: Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Initialize:
   ```bash
   firebase init hosting
   ```
   - Choose: Use existing project or create new
   - Public directory: `dist`
   - Single-page app: Yes
   - Don't overwrite dist/index.html

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

### Option 5: Custom Server (VPS/Cloud)

**Requirements:** Node.js server or static file hosting

**Option A: Static Files (Nginx/Apache)**

1. Build: `npm run build`
2. Upload `dist` folder contents to server
3. Configure web server to serve from that directory
4. Set up redirect rules for React Router

**Option B: Node.js Server**

```bash
npm install -g serve
serve -s dist -l 3000
```

---

## ⚙️ Environment Variables

If you use environment variables:

1. Create `.env` file (don't commit this):
   ```
   VITE_API_KEY=your_key_here
   VITE_EMAIL_SERVICE=your_service_id
   ```

2. Use in code:
   ```javascript
   const apiKey = import.meta.env.VITE_API_KEY;
   ```

3. Set in hosting platform:
   - **Netlify**: Site settings → Environment variables
   - **Vercel**: Project settings → Environment Variables
   - **Others**: Check their documentation

---

## 🔒 Security Checklist

Before deploying:

- [ ] Remove all test/placeholder data
- [ ] Update all personal information
- [ ] Verify all links work
- [ ] Check for console errors
- [ ] Remove sensitive information
- [ ] Set appropriate CORS headers if needed
- [ ] Enable HTTPS (most platforms do this automatically)

---

## 🎯 Post-Deployment

### 1. Test Everything

- [ ] Navigation works
- [ ] Videos play
- [ ] Images load
- [ ] Contact form works
- [ ] Responsive design works
- [ ] Links open correctly

### 2. Set Up Analytics (Optional)

**Google Analytics:**

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Performance Optimization

**After deployment:**

1. Test with [Google PageSpeed Insights](https://pagespeed.web.dev/)
2. Optimize images if needed
3. Consider adding a CDN for assets
4. Enable caching headers

---

## 📱 Share Your Portfolio

### Create Sharing Assets

**Open Graph Tags** (for social media previews)

Add to `index.html` in `<head>`:

```html
<meta property="og:title" content="Your Name - Video Editor Portfolio" />
<meta property="og:description" content="Interactive portfolio showcasing video editing work" />
<meta property="og:image" content="https://your-site.com/preview-image.jpg" />
<meta property="og:url" content="https://your-site.com" />
<meta name="twitter:card" content="summary_large_image" />
```

**Create a preview image:**
- Size: 1200x630px
- Screenshot of your homepage
- Add to `public` folder

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 Errors on Refresh

Add `_redirects` file to `public` folder:
```
/*    /index.html   200
```

Or for Netlify, in `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Videos Not Playing

- Check CORS settings
- Use embed URLs (not watch URLs)
- Verify video is public

### Slow Load Times

- Optimize images (use WebP)
- Use lazy loading
- Enable CDN
- Minify code (Vite does this)

---

## 🔄 Continuous Deployment

Once set up with GitHub integration:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update projects"
   git push origin main
   ```
3. Netlify/Vercel deploys automatically
4. Check your live site in ~1 minute

---

## 📊 Monitoring

Keep track of your portfolio:

- **Uptime**: Use [UptimeRobot](https://uptimerobot.com/) (free)
- **Analytics**: Google Analytics or Plausible
- **Performance**: Lighthouse in Chrome DevTools
- **Errors**: Check hosting platform logs

---

## 💰 Cost Comparison

| Platform | Free Tier | Custom Domain | Best For |
|----------|-----------|---------------|----------|
| **Netlify** | 100GB bandwidth | Yes (DNS setup) | Easiest setup |
| **Vercel** | Unlimited bandwidth | Yes | Best performance |
| **GitHub Pages** | Unlimited | Yes | GitHub users |
| **Firebase** | 10GB storage | Yes | Google ecosystem |

**Recommendation:** Start with Netlify or Vercel free tier. Upgrade if needed.

---

## 🎉 Launch Checklist

Final steps before announcing:

- [ ] Test on multiple devices
- [ ] Check spelling/grammar
- [ ] Verify all contact links
- [ ] Add custom domain (optional)
- [ ] Set up analytics
- [ ] Create social media preview
- [ ] Test portfolio speed
- [ ] Share on LinkedIn
- [ ] Update resume with portfolio link
- [ ] Add to email signature

---

## 🆘 Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **Vite Deployment**: https://vitejs.dev/guide/static-deploy.html

---

**Congratulations on deploying your portfolio!** 🎊

Now go land that dream job! 💼
