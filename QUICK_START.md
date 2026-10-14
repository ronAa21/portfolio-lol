# ⚡ Quick Start Guide

Get your League of Legends portfolio running in 5 minutes!

## 🚀 Step 1: Start Development Server

```bash
npm run dev
```

Open your browser to: **http://localhost:3000**

You should see the League of Legends-inspired homepage! 🎮

---

## ✏️ Step 2: Add Your First Project

Open `src/data/projectsData.js` and edit the first project:

```javascript
{
  id: 1,
  title: "My Awesome Edit", // Change this
  category: "mid", // Keep or change: top, jungle, mid, bot, support
  thumbnail: "https://via.placeholder.com/300x200", // Replace with your image
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // Your video
  description: "This is my best work!", // Your description
  software: ["Premiere Pro", "After Effects"], // Your tools
  techniques: ["Color Grading", "Motion Graphics"], // Your techniques
  duration: "3:45", // Video length
  role: "Editor", // Your role
  client: "Client Name", // Who it was for
  featured: true // Show featured badge
}
```

**💡 Tip:** To get YouTube embed URL:
1. Go to your video
2. Click Share → Embed
3. Copy the URL from `src="https://www.youtube.com/embed/VIDEO_ID"`

---

## 👤 Step 3: Update Your Profile

Open `src/components/MainProfile.jsx` and find:

```jsx
<h2 className="summoner-name">VIDEO EDITOR</h2>
```

Change "VIDEO EDITOR" to your name or brand.

Find the bio paragraph and replace it with yours:

```jsx
<p className="bio">
  Your bio here. Keep it short and compelling!
</p>
```

---

## 📧 Step 4: Update Contact Links

Open `src/components/FriendsList.jsx` and edit:

```javascript
{ 
  name: 'Email', 
  link: 'mailto:YOUR_EMAIL@example.com', // ← Change this
  ...
},
{ 
  name: 'LinkedIn', 
  link: 'https://linkedin.com/in/YOUR_PROFILE', // ← Change this
  ...
},
```

---

## 🎨 Step 5: Test It Out

Back in your browser (http://localhost:3000):

1. ✅ Click the **PLAY** button
2. ✅ Wait for matchmaking (or skip it)
3. ✅ Click **ACCEPT**
4. ✅ Browse your projects
5. ✅ Select a project and click **LOCK IN**
6. ✅ Watch your video!

---

## 🚀 Step 6: Deploy (When Ready)

### Easiest Method - Netlify:

1. **Build your site:**
   ```bash
   npm run build
   ```

2. **Go to:** https://app.netlify.com/drop

3. **Drag the `dist` folder** onto the page

4. **Done!** You get a live URL instantly 🎉

### Alternative - Vercel:

```bash
npm run build
```

Then connect your GitHub repo at https://vercel.com

---

## 📋 What's Next?

Now that it's working, customize more:

### Essential:
- [ ] Add all your projects (copy/paste the first project template)
- [ ] Replace all placeholder images with your thumbnails
- [ ] Update software tools list
- [ ] Add your skills

### Optional:
- [ ] Integrate contact form with EmailJS
- [ ] Add your logo
- [ ] Customize colors
- [ ] Add Google Analytics
- [ ] Set up custom domain

---

## 📚 Need More Help?

Check these files:

- **README.md** - Full overview
- **CUSTOMIZATION_GUIDE.md** - Detailed instructions
- **DEPLOYMENT.md** - Deployment guides
- **PROJECT_SUMMARY.md** - Complete project info

---

## 🐛 Common Issues

### "Nothing shows up"
- Check browser console (F12) for errors
- Make sure `npm install` completed successfully
- Restart dev server: Ctrl+C, then `npm run dev`

### "Videos don't play"
- Use embed URLs: `youtube.com/embed/VIDEO_ID`
- NOT watch URLs: `youtube.com/watch?v=VIDEO_ID`
- Make sure video is public

### "Images don't load"
- Use full URLs for external images
- Or add images to `public` folder
- Check image URLs are valid

---

## 💡 Pro Tips

1. **Start Small**: Get 2-3 projects working first, then add more
2. **Test Often**: Check each change in the browser
3. **Use Placeholders**: Use placeholder images initially, replace later
4. **One Category at a Time**: Focus on one project category, then expand
5. **Deploy Early**: Deploy a basic version, iterate from there

---

## 🎮 The User Experience

When someone visits your portfolio:

```
Homepage → PLAY → Matchmaking → Match Found → 
Champion Select → Pick Project → Watch Video → 
Victory Screen → Explore More or Contact
```

It's designed to feel like entering a League of Legends game, 
but they're actually exploring your video editing work!

---

## ✨ Key Features to Highlight

When sharing your portfolio, mention:

- ✅ Interactive League of Legends-themed design
- ✅ Immersive matchmaking experience
- ✅ Projects organized by editing style
- ✅ Built with React and modern web technologies
- ✅ Fully responsive (works on phone/tablet/desktop)
- ✅ Fast, smooth, professional

---

## 🎯 Success Checklist

Before calling it "done":

- [ ] Homepage loads properly
- [ ] Profile info is accurate
- [ ] At least 3-5 projects added
- [ ] All videos play correctly
- [ ] Contact links work
- [ ] Tested on mobile device
- [ ] Deployed to production
- [ ] Shared on LinkedIn

---

## 🚀 Ready to Launch?

1. **Final check:** Test everything one more time
2. **Build:** `npm run build`
3. **Deploy:** Use Netlify or Vercel
4. **Share:** Post your portfolio URL!

---

**You've got this! Now go show the world your amazing work!** 🏆

Need help? Open an issue on GitHub or check the other documentation files.

---

*From zero to deployed in under an hour.* ⚡

*May your edits be smooth and your transitions be seamless.* 🎬
