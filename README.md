# ACME Cultural Funding Analysis Website - User Guide

## Welcome

This guide will help you update and maintain the ACME Cultural Funding Analysis website directly in GitHub. No coding experience is needed - if you can use a web browser, you can update this website!

## What is This Website?

This website presents the analysis of community feedback about Austin's cultural funding programs. It shows:

- Survey response statistics
- Key themes from community feedback
- Information about each funding program
- Maps and charts visualizing the data

## Understanding the Website Files

Think of the website as a house:

- **index.html** - The main structure (walls, rooms, doors)
- **css/styles.css** - The decoration (paint colors, furniture styles)
- **js/data.js** - The content (what goes in each room) ← **YOU'LL MAINLY EDIT THIS FILE**
- **js/app.js** - The functionality (electricity, plumbing - how things work)

## Before You Start

### 1. Log into GitHub

1. Go to github.com
2. Click "Sign in" in the top right
3. Enter your username and password
4. Navigate to your repository (it will be something like github.com/yourorganization/acme-microsite)

### 2. Create a Backup Branch (Safety First!)

Before making any changes:

1. On your repository page, look for the branch dropdown (usually says "main" or "master")
2. Click it and type a new branch name like "backup-2025-01-31"
3. Click "Create branch: backup-2025-01-31"
4. Switch back to the main branch to make your edits

### 3. Understanding the GitHub Editor

When editing files in GitHub:

- Text between quotation marks " " - This is content you can change
- Numbers - These are values you can update
- Special characters like { } [ ] , : - These are important! Don't delete them
- GitHub will highlight your changes in green (additions) and red (deletions)

## How to Update Numbers in the Data

### Finding the Right File in GitHub

1. In your repository, click on the "microsite-static" folder
2. Click on the "js" folder
3. Click on "data.js" - This file contains ALL the numbers and text shown on the website
4. Click the pencil icon (✏️) in the top right to start editing

### Understanding data.js Structure

The file is organized into sections marked with comments like this:

```javascript
// ===== SECTION NAME =====
```

Main sections you'll work with:

- SUMMARY STATISTICS - Overall survey numbers
- TOP 10 THEMES - Community feedback themes
- PROGRAM DATA - Information about each funding program

### Using GitHub's Search Feature

While editing in GitHub:
- Press Ctrl+F (Windows) or Cmd+F (Mac) to search within the file
- Type what you're looking for (like "1244" or "Nexus")
- GitHub will highlight all matches

### Updating Survey Statistics

Find this section near the top:

```javascript
// ===== SUMMARY STATISTICS =====
```

To update the total survey responses from 1244 to 1500:

1. Use Ctrl+F to search for: `total_responses: 1244,`
2. Click on the number 1244
3. Delete it and type: 1500
4. Make sure to keep the comma at the end!
5. The line should now read: `total_responses: 1500,`

### Updating Theme Percentages

Find this section:

```javascript
// ===== TOP 10 THEMES =====
```

Each theme looks like this:

```javascript
{
  rank: 1,
  name: "Affordability and Cost Barriers",
  description: "High costs—including tickets...",
  frequency: 1800,
  percentage: 18.1,
  sentiment: "overwhelmingly negative",
  urgency: "critical"
}
```

To update:

- Change the percentage: Find `percentage: 18.1,` and change to `percentage: 19.5,`
- Change the frequency: Find `frequency: 1800,` and change to `frequency: 1950,`
- Update description: Change the text between the quotation marks

### Updating Program Information

Find this section:

```javascript
// ===== PROGRAM DATA =====
```

Each program has this structure:

```javascript
nexus: {
  program_name: "Nexus Grant Program",
  awareness_count: 622,
  awareness_percentage: 50.0,
  response_count: 59,
  strengths: [...],
  challenges: [...]
}
```

To update Nexus awareness from 50% to 55%:

1. Search for: "Nexus Grant Program"
2. Look a few lines down for: `awareness_percentage: 50.0,`
3. Change the 50.0 to 55.0
4. The line should now read: `awareness_percentage: 55.0,`

## Common Update Tasks

### Task 1: Update Total Survey Responses

**Scenario**: Survey responses increased from 1,244 to 1,350

1. Navigate to microsite-static → js → data.js
2. Click the pencil icon to edit
3. Press Ctrl+F (or Cmd+F on Mac) and search for: 1244
4. You'll find several places:
   - `total_responses: 1244,`
   - `unique_participants: 1244,`
5. Change BOTH to 1350
6. Scroll to the bottom and click "Commit changes"
7. Add a message like "Updated survey responses to 1350"
8. Click "Commit changes" again

### Task 2: Update a Program's Key Challenges

**Scenario**: Add a new challenge to the Thrive program

1. Navigate to microsite-static → js → data.js and click edit
2. Search for: "Thrive Grant Program"
3. Find the challenges section that looks like:

```javascript
challenges: [
  {
    title: "Limited Funding Pool",
    description: "The number of organizations...",
    frequency: 11
  },
  {
    title: "Application Complexity",
    description: "The application process...",
    frequency: 8
  }
]
```

4. Click after the `}` of the last challenge (after frequency: 8)
5. Add a comma, press Enter, and type:

```javascript
{
  title: "Your New Challenge Title",
  description: "Your description here.",
  frequency: 5
}
```

6. Commit your changes with a message like "Added new challenge to Thrive program"

### Task 3: Update Theme Percentages

**Scenario**: Transportation theme increased from 7.1% to 8.5%

1. In data.js (while editing), search for: "Transportation, Parking"
2. Find: `percentage: 7.1,`
3. Change to: `percentage: 8.5,`
4. IMPORTANT: Also search for: `values: [18.1, 14.1, 13.1`
5. Find the 7.1 in that list and change to 8.5
6. Commit with message: "Updated transportation theme to 8.5%"

### Saving Your Changes in GitHub

Every time you make changes:

1. Scroll to the bottom of the edit page
2. In the "Commit changes" box, write a brief description of what you changed
3. Select "Commit directly to the main branch"
4. Click the green "Commit changes" button
5. Your changes are now saved!

## Important Rules to Follow

### 1. Quotation Marks

- Text must be inside quotation marks: "Like this"
- If your text contains a quotation mark, use a backslash: "She said \"Hello\""

### 2. Commas

- Every item in a list needs a comma EXCEPT the last one
- Wrong: `{title: "Example" frequency: 5}` (missing comma)
- Right: `{title: "Example", frequency: 5}`

### 3. Brackets and Braces

- Square brackets [ ] contain lists
- Curly braces { } contain grouped information
- ALWAYS make sure every opening bracket has a closing bracket

### 4. Numbers

- Whole numbers: Just type them (1244)
- Percentages: Can include decimals (50.0 or 50 or 50.5)
- Don't put quotation marks around numbers

## What NOT to Change

### Never Change These:

1. Variable names (text before the colon : )

   - Wrong: Change `awareness_count:` to `people_aware:`
   - Right: Only change the number after the colon
2. File references or technical code

   - Don't change things like: `getElementById`, `function`, `const`
3. Special syntax

   - Don't remove: { } [ ] , : ; ( )

### Safe to Change:

- Numbers (after colons)
- Text inside quotation marks
- Adding new items to lists (following the same pattern)

## Testing Your Changes

### Viewing Your Live Website

If your site is hosted on GitHub Pages:

1. After committing changes, wait 2-5 minutes
2. Visit your site at: https://[yourorganization].github.io/[repository-name]/
3. Refresh the page (Ctrl+F5 or Cmd+Shift+R) to see updates

### What to Check

- Do the numbers display correctly?
- Are all charts still showing?
- Does the navigation still work?
- Are there any error messages?

### If Something Looks Wrong

1. Go back to your repository on GitHub
2. Click on the file you just edited
3. Click "History" to see all changes
4. Click on a previous version to view it
5. If needed, click "Revert" to undo your changes

## Troubleshooting Common Problems

### Problem: Can't find the edit button

**Solution**: 
- Make sure you're logged into GitHub
- Check that you have permission to edit (ask your administrator)
- The pencil icon is in the top right of the file view

### Problem: Website shows a blank page

**Solution**: You likely have a syntax error

1. Go to the file's History in GitHub
2. Look at what you changed in red/green
3. Common issues:
   - Missing comma between items
   - Missing closing bracket } or ]
   - Deleted a quotation mark
4. Revert to the previous version if needed

### Problem: Numbers aren't updating on the live site

**Solution**:

1. Wait 5 minutes - GitHub Pages can be slow
2. Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
3. Check the commit actually saved (look at file history)
4. Make sure you edited the right number

### Problem: GitHub shows an error when saving

**Solution**: 

1. Copy your changes to a notepad
2. Cancel the edit
3. Refresh the page and try again
4. Paste your changes back
5. If it still fails, contact technical support

### Problem: Charts disappeared

**Solution**: You may have broken the data structure

1. Look at your recent change in GitHub's diff view
2. Check for missing commas in number lists
3. Use the Revert button to undo the change
4. Try making the change again more carefully

## Publishing Your Changes

### Good News - It's Automatic!

When you edit files directly in GitHub and commit your changes:

1. GitHub automatically updates your repository
2. If using GitHub Pages, your website updates automatically
3. Changes usually appear within 2-5 minutes
4. No need to upload or transfer files!

### To Verify Your Site is Using GitHub Pages

1. In your repository, click "Settings"
2. Scroll down to "Pages" in the left sidebar
3. You should see: "Your site is published at https://..."
4. This is your live website address

### If Not Using GitHub Pages

Contact your IT team for the deployment process.

## Getting Help

### Before Asking for Help

1. Try using GitHub's History feature to see what changed
2. Check if reverting to a previous version fixes the issue
3. Write down:
   - What you were trying to change
   - What file you were editing
   - Any error messages you see

### When to Get Technical Help

- If you can't log into GitHub
- If you don't see the edit button
- If the website won't update after 30 minutes
- If you need to add new sections or features
- If you've tried twice and it's still not working

### How to Get Help

1. **For GitHub access issues**: Contact your IT administrator
2. **For content questions**: cultural.funding@austintexas.gov
3. **For technical support**: Share this guide and the file history link

### Helpful Information to Provide

When asking for help, share:
- Your repository URL
- The specific file you were editing
- A screenshot of any error messages
- The last successful commit ID (found in History)

## Quick Reference Cheat Sheet

### GitHub Navigation

- **Repository home**: Click repository name at top
- **Edit file**: Click file → Click pencil icon
- **Search in file**: Ctrl+F (Windows) or Cmd+F (Mac)
- **Save changes**: Scroll down → "Commit changes"
- **View history**: Click file → Click "History"
- **Undo changes**: History → Find version → "Revert"

### Making Changes

1. Navigate to microsite-static → js → data.js
2. Click pencil icon to edit
3. Find what to change (use Ctrl+F)
4. Make your change carefully
5. Write commit message
6. Click "Commit changes"
7. Wait 5 minutes and check live site

### Common Patterns

- Text: `"Your text here"`
- Number: `42` or `42.5`
- List of things: `["Item 1", "Item 2", "Item 3"]`
- Group of properties: `{name: "Example", value: 100}`

### Golden Rules

✅ DO:
- Make one small change at a time
- Write clear commit messages
- Check the live site after each change
- Use History if something goes wrong

❌ DON'T:
- Delete brackets, quotes, or commas
- Change variable names (text before colons)
- Edit multiple sections at once
- Panic - you can always revert!

## Glossary

**Branch**: A version of your files - like a saved copy you can switch between

**Commit**: Saving your changes with a description - like hitting "Save" with a note

**Commit message**: The note you write explaining what you changed

**Diff view**: Shows changes in red (deleted) and green (added)

**Fork**: Your own copy of someone else's repository

**History**: List of all past changes to a file

**Main/Master branch**: The primary version of your website

**Repository (Repo)**: Your project folder on GitHub

**Revert**: Undo changes by going back to a previous version

### Code Terms

**Array**: A list of items inside square brackets [ ]

**Comment**: Text that starts with // - these are notes that help you understand the code

**Key-value pair**: Information stored as name: value (like `total_responses: 1244`)

**Object**: A group of related information inside curly braces { }

**String**: Text inside quotation marks

---

Last updated: January 2025
Version: 2.0 - GitHub Edition
