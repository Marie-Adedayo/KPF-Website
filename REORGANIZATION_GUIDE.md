# Directory Reorganization Guide

This document outlines the directory structure improvements made to the KPF-Website project.

## Changes Made

### ✅ Completed

1. **Created new folder structure:**
   - `frontend/src/components/` (plural) - renamed from `component`
   - `frontend/src/components/impact/` - renamed from `impactFolder`
   - Fixed typo: `VoacationalTab.tsx` → `VocationalTab.tsx`

2. **Moved payment pages:**
   - `component/payment-success.tsx` → `pages/PaymentSuccess.tsx`
   - `component/payment-failed.tsx` → `pages/PaymentFailed.tsx`

3. **Created proper Impact page:**
   - `pages/Impact.tsx` - properly implemented with all tabs

4. **Updated App.tsx:**
   - Added routes for `/impact`, `/payment-success`, and `/payment-failed`

### 📋 Remaining Tasks

#### 1. Copy Component Files
All files from `frontend/src/component/` need to be copied to `frontend/src/components/`:

**Files to copy:**
- `Header.tsx`
- `Footer.tsx`
- `Donation.tsx`
- `OurWork.tsx`
- `News/News.tsx`
- `News/NewsCard.tsx`
- `Testimonials.tsx`
- `ImpactSection.tsx`
- `FeaturedStories.tsx`
- `LeadershipCard.tsx`
- `OurJourney.tsx`
- `DonatePopup.tsx`
- `ResultsTable.tsx`
- `PayPalDonation.tsx` (may be unused now)

#### 2. Update All Import Statements

**Pattern to find:** `from '../component/` or `from '@/component/`
**Replace with:** `from '../components/` or `from '@/components/`

**Files that need import updates:**
- `pages/Home.tsx`
- `pages/About.tsx`
- `pages/Project.tsx`
- `pages/News.tsx`
- `pages/Result.tsx`
- `pages/Partnership.tsx`
- `pages/VolunteerPage.tsx`
- `context/DonatePopupContext.tsx`
- Any other files importing from `component/`

**Pattern to find:** `from '../component/impactFolder/` or `from '../component/impactFolder/VoacationalTab`
**Replace with:** `from '../components/impact/` or `from '../components/impact/VocationalTab`

#### 3. Backend Folder Naming

**Issue:** `backend/paypal backend/` has a space in the folder name
**Solution:** Rename to `backend/paypal-backend/` or `backend/paypal/`

**Steps:**
1. Rename the folder: `paypal backend` → `paypal-backend`
2. Update any imports/references to this folder

#### 4. Clean Up

**Files to delete after migration:**
- `frontend/src/pages/Impat.tsx` (typo, commented out, duplicate)
- `frontend/src/component/` folder (after copying all files)
- `frontend/src/component/impactFolder/` folder (after copying all files)
- `frontend/src/component/payment-success.tsx` (moved to pages)
- `frontend/src/component/payment-failed.tsx` (moved to pages)
- `frontend/src/verify.js` (should be moved to backend if needed, or deleted if unused)

#### 5. Verify.js File

The `verify.js` file in `frontend/src/` appears to be a backend function. 
- If it's used: Move it to `backend/paystack-server/` or appropriate backend location
- If unused: Delete it

## Recommended Final Structure

```
frontend/src/
├── components/          # ✅ Created (plural)
│   ├── impact/         # ✅ Created (renamed from impactFolder)
│   │   ├── VocationalTab.tsx  # ✅ Fixed typo
│   │   ├── HeroSection.tsx
│   │   ├── StatsSummary.tsx
│   │   ├── TabNavigation.tsx
│   │   ├── OverviewTab.tsx
│   │   ├── EducationTab.tsx
│   │   ├── HealthcareTab.tsx
│   │   └── StoriesTab.tsx
│   ├── News/
│   │   ├── News.tsx
│   │   └── NewsCard.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ... (other components)
├── pages/              # ✅ Updated
│   ├── Impact.tsx      # ✅ Created properly
│   ├── PaymentSuccess.tsx  # ✅ Moved
│   ├── PaymentFailed.tsx   # ✅ Moved
│   └── ... (other pages)
├── context/
├── lib/
└── types/

backend/
├── paypal-backend/     # ⚠️ Needs renaming (remove space)
│   ├── email.ts
│   ├── paypal.ts
│   └── server.ts
└── paystack-server/
    ├── googleSheets.js
    ├── index.js
    └── package.json
```

## Quick Migration Script

You can use find-and-replace in your IDE:

1. **Find:** `from ['"].*component/`
   **Replace:** `from ['"].*components/`

2. **Find:** `from ['"].*impactFolder/`
   **Replace:** `from ['"].*impact/`

3. **Find:** `VoacationalTab`
   **Replace:** `VocationalTab`

## Testing Checklist

After completing the migration:

- [ ] All imports resolve correctly
- [ ] No TypeScript/ESLint errors
- [ ] All pages load correctly
- [ ] Impact page works with all tabs
- [ ] Payment success/failed pages work
- [ ] All components render properly
- [ ] Build completes successfully (`npm run build`)

## Notes

- The `@/` alias in imports should point to `src/` directory
- Make sure `tsconfig.json` paths are configured correctly
- The `dist/` folder is build output and should not be modified manually

