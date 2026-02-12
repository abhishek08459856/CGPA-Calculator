# Deployment Guide - CGPA Calculator

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via GitHub

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CGPA Calculator"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Click "Deploy"

3. **Done!** 
   - Your app will be live at `https://your-project.vercel.app`
   - Get the URL and submit to the competition form

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## Environment Setup (Local Testing)

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

3. **Build for production (test)**
   ```bash
   npm run build
   npm start
   ```

## Pre-Deployment Checklist

- ✅ All features working correctly
- ✅ No console errors
- ✅ Build completes successfully (`npm run build`)
- ✅ Responsive on mobile, tablet, desktop
- ✅ CGPA calculations are accurate
- ✅ Both degree domains (DS & ES) working
- ✅ All three modes (Current, Ongoing, Future) functional
- ✅ Images loading correctly
- ✅ No TypeScript errors
- ✅ Clean code with no unused imports

## Post-Deployment Testing

Test your deployed app:
1. Open the Vercel URL
2. Test CGPA calculation with sample data
3. Check mobile responsiveness (use browser dev tools)
4. Test all three modes
5. Switch between DS and ES degrees
6. Verify all features work as expected

## Troubleshooting

### Build Fails
- Check `npm run build` locally first
- Fix any TypeScript errors
- Ensure all imports are correct

### Images Not Loading
- Verify images are in the `public` folder
- Check file names match exactly (case-sensitive)
- Use proper paths starting with `/`

### Styles Not Applying
- Ensure Tailwind CSS is properly configured
- Check `globals.css` is imported in layout.tsx
- Clear `.next` folder and rebuild

## Competition Submission

1. **Get your hosted URL** from Vercel dashboard
2. **Get your GitHub repository URL**
3. **Fill the submission form**: https://namdapha.iitmbs.org/go/techsubmission
   - Use your IITM student email
   - Submit both URLs
   - Submit before 13th February, 11:59 PM IST

## Support

For issues or questions:
- Check the main README.md
- Review Next.js documentation
- Contact through Namdapha House channels

---

**Good luck with your submission! 🎉**
