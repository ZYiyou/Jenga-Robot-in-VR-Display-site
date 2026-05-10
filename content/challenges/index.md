---
title: "Engineering Challenges — Jenga Bot in VR"
summary: "Summary of key engineering challenges and solutions."
date: 2026-05-11
type: page
---

# Engineering Challenges

## Robot Execution Challenge
**Why it was hard:** Precise manipulation with a fragile tower required a staged robot arm workflow rather than a simple grab.

**Solution:** Decomposed operation into discrete approach, grip, extract, place, release, and retreat stages managed by RobotArmAIExecutor.

**Impact:** Achieved reliable block manipulation and allowed detection and correction of partial failures.


## Physics Challenge
**Why it was hard:** Block extraction and placement unpredictably affect tower stability, with delayed collapse.

**Solution:** Implemented TowerCollapseDetector to monitor post-placement stability and trigger resolution.

**Impact:** Realistic gameplay that reflects physics-based consequences beyond immediate release.


## Systems Integration Challenge
**Why it was hard:** VR inputs, robotic control, tower rules, AI turns, and outcome resolution had to form a seamless gameplay loop.

**Solution:** Centralized coordination through GameManager with clear subsystem boundaries.

**Impact:** Consistent gameplay and easier debugging, boosting team productivity.


## Scope Discipline Challenge
**Why it was hard:** Broad feature ideas risked scope creep and unfinished implementations.

**Solution:** Focused on a stable end-to-end MVP, consciously avoiding overclaiming or incomplete features.

**Impact:** Delivered a cohesive, credible demo-ready system within the project timeframe.
