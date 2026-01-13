# AI-Powered App Rescue Template


Fix your messy "vibe-coded" app with the same 1-2-3 workflow. Works on half-built projects.

## When to Use This

- Code works... kinda

- Missing structure/tests

- Bugs in key flows (login, forms, database)

- "It was faster to just write it" → now it's a mess

- Need professional polish fast

## 1. DIAGNOSE (Find What's Broken)


Goal: Map the mess before fixing it.


	Tell AI: "Analyze my codebase and create a DIAGNOSTIC REPORT with:
	
	🔴 CRITICAL: Blocks core use (login fails, crashes)
	🟡 WARNING: Works but ugly/broken edge cases
	🟢 GOOD: What's actually working
	? UNKNOWN: Need to test
	
	For each issue: Priority | Symptoms | Likely cause | Fix estimate"

AI delivers: 1-page report + issue priority list

You review: "Yes these are the problems"

Time: 10 minutes

Example Output:


	🔴 CRITICAL: Login fails 50% time
	   Symptoms: "Invalid credentials" randomly
	   Cause: Race condition in auth
	   Fix: 45 min
	
	🟡 WARNING: Mobile buttons too small
	   Fix: 15 min

## 2. RESTRUCTURE (Add Framework)


Goal: Wrap chaos in professional structure.


	Tell AI: "Convert my app to the professional framework:
	
	1. Extract logic → app.js (classes)
	2. Add app.test.js (cover critical paths)
	3. Fix styles.css (mobile-first, themes)
	4. Add CLAUDE.md (future-proof rules)
	5. Create OpenSpec proposals for remaining work"

AI delivers: Refactored files + tests + 6-8 cleanup proposals

You test: Core flows now reliable?

Time: 45 minutes

## 3. FIX → PRIORITIZE → POLISH (The Recovery Loop)


For each critical issue:


	"Create branch: fix-[issue-name] (ex: fix-login-race-condition)"
	
	AI fixes → Tests pass → You verify → Merge
	
	Priority order:
	1. 🔴 Critical blockers
	2. 🟡 UX/polish issues  
	3. 🟢 New features

Time per fix: 20-40 minutes

After 3 fixes: Stable core

After 8 fixes: Production ready

## Quick Start Commands (Broken App Edition)

	1. "Analyze my code → DIAGNOSTIC REPORT"
	2. "Restructure to professional framework + tests"
	3. "Create branch: fix-[top-critical-issue]"
	4. "Test results? Any regressions?"
	5. "Merge and tag v0.9.0-fixed"

Example: "Login + Database Mess"

	YOUR PROBLEM:
	- Sign-in works 70% time
	- Forms lose data
	- No error messages
	- Desktop only
	
	AI RESCUE (3 hours total):
	1. Diagnostic: "3 critical, 4 warnings"
	2. Restructure: Classes + tests + mobile CSS
	3. Fix #1: Login race condition → 95% success
	4. Fix #2: Form validation + error UI
	5. Fix #3: Database retry logic
	6. Tag v1.0.0-stable

Your Role vs AI Role (Rescue Mode)

You Do	AI Does
"This button doesn't work"	Diagnose root cause
Test after each fix	Refactor + write tests
"Prioritize login first"	Fix systematically
Approve merges	Handle git branches

## Pro Tips (Broken Code Special)

1. Start with DIAGNOSTIC – don't fix random stuff

2. Test before/after – prove you didn't break more

3. Fix critical first – get to "it works" fast

4. Merge often – create save points

5. "Show me before/after" – understand changes


	Broken → Diagnose → Restructure → Fix 1 → Fix 2 → Stable → Launch
	Total time: 3-6 hours vs. rewrite from scratch

Works for: Buggy apps • Half-built projects • "It worked yesterday" disasters

Success rate: 90%+ (if you follow priority order)

Vibe code forgiven. Professional structure enforced. Launch guaranteed.
