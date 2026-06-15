# Portfolio Restructure — Systems-Focused Narrative

## Goal
Shift from **"I built X with Y tools"** (AI-replicable) to **"I make intentional system design decisions and own outcomes"** (differentiator).

## Current Flow (Feature-Focused)
```
Home → "Hello, my name is..." + bio + flat skills list
Projects → Card grid → "About This Project" + features + tech tags
Experience → Timeline with titles
```

## Target Flow (Systems-Focused)
```
Home → "I solve problems by designing systems..."
         + metrics strip (proof) + contextual skills (depth)
Projects → Card grid → Case study (Problem → Architecture → 
           Role → Challenges → Impact → Lessons → Features)
Experience → Timeline with impact-first language
```

## Changes Required

### 1. portfolio.json — New project fields
- `problem` — Specific problem, context, constraints
- `architecture` — Key architectural decisions with rationale
- `myRole` — What I specifically owned/led
- `challenges` — Array of hard problems and how solved
- `lessons` — What I'd do differently (growth mindset)

### 2. ProjectDisplay.jsx — Story-order layout
```
Problem → Architecture Decisions → My Role → Challenges →
Impact & Results → What I'd Do Differently → Key Features → Tech Stack → Links
```

### 3. ProjectDisplay.css — New section styles
- Challenge cards (callout boxes)
- Architecture decision block (quote-style)
- Role badge
- Lessons section (subtle highlight)

### 4. Home.jsx — Metrics strip + reframed tagline
- "By the Numbers" strip between hero and skills
- Contextual skills showing project counts
- Tagline reflecting systems thinking

### 5. Home.css — Metrics strip styles

### 6. Experience section — Rewrite achievements
- Lead with impact, not action
- Add ownership indicators
- Pull project-specific achievements up

## Implementation Order
1. portfolio.json data changes
2. ProjectDisplay.jsx layout rewrite
3. ProjectDisplay.css styles
4. Home.jsx tagline + metrics
5. Home.css styles
6. Experience achievements rewrite
