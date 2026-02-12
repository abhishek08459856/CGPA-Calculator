# CGPA Calculator - Namdapha House

A modern, fully functional CGPA calculator built for IITM BS students to calculate current CGPA and predict future performance.

## 🎯 Features

### Core Functionality
- **Current CGPA Calculation**: Calculate CGPA based on completed subjects, credits, and grades
- **CGPA Prediction (Ongoing)**: Add ongoing subjects with expected grades to predict updated CGPA
- **Future CGPA Planning**: Plan hypothetical future subjects to see impact on CGPA
- **Dual Degree Support**: 
  - BS in Data Science and Applications
  - BS in Electronic Systems

### User Experience
- Clean, intuitive interface matching Namdapha House theme
- Fully responsive design (Mobile, Tablet, Desktop)
- Real-time CGPA calculations
- Performance meter with visual feedback
- Searchable subject dropdown
- Auto-filled credits from subject selection

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Logic**: 100% Client-side (No Backend/APIs/Databases)

## 📋 Requirements Met

✅ Next.js with TypeScript  
✅ Fully client-side logic  
✅ No backend, APIs, or databases  
✅ Both degree domains supported  
✅ Current CGPA calculation  
✅ Ongoing subjects prediction  
✅ Future CGPA planning  
✅ Responsive design  
✅ Namdapha House theme alignment  
✅ Clean code structure  

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cgpa-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page with hero section
│   ├── layout.tsx         # Root layout with footer
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── SearchableDropdown.tsx
│   └── layout/
│       └── footer.tsx     # Footer component
├── features/              # Feature-based modules
│   └── cgpa/
│       ├── CGPADashboard.tsx    # Main dashboard
│       ├── courseRow.tsx        # Course input row
│       ├── DegreeToggle.tsx     # Degree selector
│       ├── ModeTabs.tsx         # Mode switcher
│       ├── performancemeter.tsx # CGPA visualization
│       └── ResultPanel.tsx      # Results display
├── core/                  # Business logic
│   ├── cgpa.ts           # CGPA calculation logic
│   ├── gradeScale.ts     # Grade point mapping
│   └── types.ts          # TypeScript types
└── data/                 # Subject data
    ├── dssubjects.ts     # Data Science subjects
    └── essubjects.ts     # Electronic Systems subjects
```

## 🎨 Design Features

- **Color Scheme**: Dark theme with purple accents matching Namdapha House
- **Typography**: Clean, modern fonts with proper hierarchy
- **Components**: Glass-morphism effects, smooth transitions
- **Accessibility**: Proper contrast ratios and interactive states

## 📊 CGPA Calculation Logic

The calculator follows the official IITM grading system:

| Grade | Grade Points |
|-------|--------------|
| S     | 10          |
| A     | 9           |
| B     | 8           |
| C     | 7           |
| D     | 6           |
| E     | 4           |
| U     | 0           |

**Formula**: CGPA = Σ(Credits × Grade Points) / Σ(Credits)

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Next.js
4. Deploy with one click

### Other Platforms

The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🧪 Testing Checklist

- ✅ CGPA calculation accuracy
- ✅ Credit auto-population
- ✅ Mode switching (Current/Ongoing/Future)
- ✅ Degree switching (DS/ES)
- ✅ Subject search functionality
- ✅ Mobile responsiveness
- ✅ Tablet responsiveness
- ✅ Desktop responsiveness
- ✅ Edge cases (no subjects, invalid grades)

## 📝 Code Quality

- TypeScript for type safety
- Proper component structure
- Clean separation of concerns
- Reusable components
- No console errors
- ESLint compliant

## 🏆 Competition Compliance

Built specifically for Namdapha House WebOps Challenge:
- Submission deadline: 13th February 2026, 11:59 PM IST
- All requirements fulfilled
- Tech stack strictly followed
- No violations

## 👨‍💻 Development Notes

### Key Implementation Details

1. **State Management**: React hooks (useState, useEffect)
2. **Type Safety**: Full TypeScript coverage
3. **Performance**: Client-side only, no API calls
4. **UX**: Smooth transitions, intuitive flow
5. **Maintainability**: Clean code structure

## 📄 License

This project is built for educational purposes as part of the Namdapha House WebOps Challenge.

## 🤝 Contributing

This is a competition submission. For questions or suggestions, contact through official Namdapha House channels.

---

**Built with ❤️ for Namdapha House**
