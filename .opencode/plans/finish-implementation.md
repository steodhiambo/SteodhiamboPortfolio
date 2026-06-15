# Remaining Implementation Tasks

## 1. Fix App.test.js (Router nesting error)
- **File**: `src/App.test.js`
- **Change**: Remove the outer `MemoryRouter` wrapper — `App.js` already contains a `BrowserRouter`
- **Current code** wraps `<App />` inside `<MemoryRouter>` causing "cannot render Router inside Router" error
- **Fix**: Render `<App />` directly

## 2. Update bio in portfolio.json
- **File**: `src/data/portfolio.json`
- **User's new title/bio**:
  ```
  Innovative full-stack developer and backend expert specializing in Go, Ruby, and JavaScript.
  Passionate about AI engineering, data engineering, and data analytics.
  Skilled in building scalable software solutions and collaborating on impactful team projects.
  ```
- **Also add** the role title above bio

## 3. Verify build passes
```sh
npm run build
```

## 4. Run tests
```sh
npm test -- --watchAll=false
```
