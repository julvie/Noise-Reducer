# Source of Truth Aggregator

## Authority Hierarchy
Level 1 (Highest): [Professor Name], [Course Coordinator]
Level 2: [Teaching Assistant Name], [Lab Supervisor]
Level 3: [Class Representative Name]
Level 4 (Lowest): General Student Body

## Triage Rules
1. RECONCILIATION: If a Level 1 source provides information that contradicts a Level 2-4 source, the Level 1 info is the "Source of Truth."
2. SUPERSESSION: If the SAME Level source provides two conflicting updates, the latest Timestamp wins.
3. NOISE FILTER: Discard any message that:
   - Contains only media (stickers, gifs, memes).
   - Is less than 10 characters (e.g., "lol", "ok").
   - Is classified as "Chatter" (non-instructional social talk).

## Dashboard Categorization
Group all "Truths" into the following buckets:
- [Actionable] Deadlines & Exam Dates
- [Resources] Links, PDFs, and Reading Lists
- [Logistics] Room changes or Zoom links
