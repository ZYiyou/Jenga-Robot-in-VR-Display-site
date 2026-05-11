---
title: "Engineering Challenges - Jenga Bot in VR"
summary: "Summary of key engineering challenges and solutions."
date: 2026-05-11
type: landing

sections:
  - block: hero
    content:
      title: Engineering Challenges
      text: "Key technical constraints we faced and the concrete engineering decisions that made the MVP reliable and presentable."

  - block: markdown
    content:
      title: Challenge Breakdown
      subtitle: Problem -> Solution -> Impact
      text: |
        {{< cards >}}
          {{< card title="Robot Execution" icon="wrench-screwdriver" subtitle="Hard: fragile manipulation needs staged control, not direct grab. Solution: discrete approach/grip/extract/place/release/retreat pipeline. Impact: reliable manipulation and recoverable failures." >}}
          {{< card title="Physics Stability" icon="exclamation-triangle" subtitle="Hard: delayed collapse after movement. Solution: TowerCollapseDetector and post-placement checks. Impact: realistic physics consequences." >}}
          {{< card title="System Integration" icon="circle-stack" subtitle="Hard: unify VR input, AI turns, rules, robot control, and outcomes. Solution: GameManager-centered orchestration. Impact: cleaner debugging and consistent gameplay loop." >}}
          {{< card title="Scope Discipline" icon="shield-check" subtitle="Hard: avoid scope creep. Solution: prioritize stable end-to-end MVP. Impact: coherent and credible demo within course timeline." >}}
        {{< /cards >}}
---
