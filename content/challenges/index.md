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
          {{< card title="Staged Robot Manipulation" icon="wrench-screwdriver" subtitle="Problem: direct grab-and-move behavior was too fragile. Solution: split motion into home, orbit, staging, approach, slow grip, extraction, placement, release, and retreat. Impact: easier debugging and safer execution." >}}
          {{< card title="Physics Stability" icon="exclamation-triangle" subtitle="Problem: Unity rigidbodies can jitter, overreact, or settle late. Solution: low-friction overrides, gravity suspension, collider management, slow grip, and monitored resolution windows. Impact: more controlled tower outcomes." >}}
          {{< card title="Asynchronous Turn Flow" icon="arrows-right-left" subtitle="Problem: robot completion, block separation, and tower stability do not happen in one clean frame. Solution: event-driven GameManager phases with fallback stability checks. Impact: fewer race conditions in turn switching." >}}
          {{< card title="Legal Top Placement" icon="square-3-stack-3d" subtitle="Problem: after extraction, the block needs a believable destination. Solution: JengaTowerManager plans occupied top slots, prefers center when available, then sides or a new layer. Impact: gameplay feels closer to Jenga." >}}
          {{< card title="Reliable Gripping" icon="hand-raised" subtitle="Problem: touching a block is not the same as securely holding it. Solution: finger-contact validation, repeated grab attempts, hold-follow behavior, and separation detection. Impact: less accidental release or false pickup." >}}
          {{< card title="Scope Discipline" icon="shield-check" subtitle="Problem: VR, robotics, AI, NLP, and physics could easily become too broad. Solution: keep voice auxiliary and focus on a stable shared execution pipeline. Impact: a coherent MVP instead of disconnected demos." >}}
        {{< /cards >}}

  - block: markdown
    content:
      title: Most Important Tradeoff
      subtitle: Reliability Over Maximum Realism
      text: |
        The project deliberately favors controlled interaction over fully unconstrained physics realism. During extraction and placement, the robot executor can temporarily adjust friction, gravity, and collider behavior so the system remains playable and demonstrable.

        This is a practical engineering tradeoff: the game still uses physics for tower outcomes, but the manipulation pipeline adds safeguards where raw rigidbody behavior would make the demo unreliable.
---
