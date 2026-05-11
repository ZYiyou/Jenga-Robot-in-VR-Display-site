---
title: "Testing & Reflection - Jenga Bot in VR"
summary: "Testing strategies, teamwork highlights, and project reflections."
date: 2026-05-11
type: landing
slug: testing

sections:
  - block: hero
    content:
      title: Testing & Reflection
      text: "How we validated behavior, coordinated development, and extracted practical engineering lessons from MVP delivery."

  - block: markdown
    content:
      title: Testing Strategy
      subtitle: Verification Focus
      text: |
        {{< cards >}}
          {{< card title="End-to-End Scenarios" icon="beaker" subtitle="Validate the full loop: legal selection, preparation, confirmation, execution, placement, stability check, and turn switch." >}}
          {{< card title="Subsystem Interfaces" icon="rectangle-group" subtitle="Check event boundaries between GameManager, RobotArmAIExecutor, JengaTowerState, GripperBlockGrabber, and TowerCollapseDetector." >}}
          {{< card title="Physics Regression" icon="exclamation-triangle" subtitle="Re-test gripping, extraction, top placement, release, and collapse monitoring after tuning robot or rigidbody settings." >}}
          {{< card title="Auxiliary Voice Path" icon="microphone" subtitle="Treat voice commands as an optional integration path: record, transcribe, parse, resolve a legal block, then execute." >}}
        {{< /cards >}}

  - block: markdown
    content:
      title: Evidence-Based Test Cases
      subtitle: Manual Validation Checklist
      text: |
        - Legal selection: top protected blocks, removed blocks, and untracked blocks should not be selectable.
        - Two-stage player turn: the robot should prepare to the selected block before full execution starts.
        - Grip and extraction: the gripper should close slowly, validate contact, hold the block, and detect separation from the tower.
        - Top placement: the executor should attempt to place the extracted block in a planned top slot and register the returned placement.
        - Stability resolution: the detector should wait for movement to settle, report collapse when non-bottom blocks reach the ground region, or treat timeout as stable.
        - AI turn: the AI should choose from legal candidates and reuse the same robot execution path as the player.
        - Voice command: a parsed layer and left/right/center command should resolve to a legal target before execution.

  - block: markdown
    content:
      title: Validation Limits
      subtitle: What We Should Not Overclaim
      text: |
        > [!NOTE]
        > The repository does not contain a formal automated test suite, quantified user study, or benchmark report.
        >
        > Testing should therefore be presented as scenario-based runtime validation supported by logs, videos, screenshots, and manual checks, not as statistically proven performance or usability evaluation.

  - block: markdown
    content:
      title: System Feedback and Validation
      subtitle: Stability Resolution Evidence
      text: |
        <div class="gif-showcase">
          {{< gif-card src="/uploads/gifs/stability-check.gif" title="Stability Check" label="System Feedback" desc="After each move, the system checks whether the tower remains stable and updates the game state." alt="Post-move tower stability validation and state update feedback loop" >}}
        </div>

  - block: markdown
    content:
      title: Team Collaboration
      subtitle: Delivery Process
      text: |
        - Coordinated ownership across gameplay orchestration, robot execution, tower mechanics, AI selection, voice pathway, UI, and presentation assets.
        - Integration work focused on subsystem boundaries: events, shared tower metadata, robot execution state, and stability resolution.
        - Refactoring large Unity behaviours into partial classes made the final implementation easier to explain, debug, and extend.

  - block: markdown
    content:
      title: Lessons Learned
      subtitle: Project Reflection
      text: |
        {{< cards >}}
          {{< card title="Shared Pipelines Help" icon="rectangle-group" subtitle="Player and AI moves became easier to reason about once they used the same executor." >}}
          {{< card title="Physics Needs Guardrails" icon="exclamation-triangle" subtitle="Stable demos required safeguards around friction, gravity, contact, release, and resolution timing." >}}
          {{< card title="Events Beat Polling" icon="arrows-right-left" subtitle="Preparation, execution, separation, collapse, and stability events gave the turn flow clearer boundaries." >}}
          {{< card title="Scope Control Matters" icon="shield-check" subtitle="Keeping voice auxiliary preserved time for the central VR-plus-robot Jenga loop." >}}
        {{< /cards >}}
---
