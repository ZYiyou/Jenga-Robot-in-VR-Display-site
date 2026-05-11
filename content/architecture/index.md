---
title: "System Architecture - Jenga Bot in VR"
summary: "Technical subsystem overview and architecture flow for VR Jenga MVP."
date: 2026-05-11
type: landing

sections:
  - block: hero
    content:
      title: System Architecture
      text: "A subsystem-level view of how VR input, robotic execution, tower logic, AI turns, and voice commands integrate into one gameplay loop."
      primary_action:
        text: View Project
        url: /project/
      secondary_action:
        text: View Demo
        url: /demo/

  - block: markdown
    content:
      title: Subsystem Overview
      subtitle: System Cards
      text: |
        {{< cards >}}
          {{< card title="Game Manager" icon="squares-2x2" subtitle="Orchestrates turn lifecycle, legality checks, and outcome flow." >}}
          {{< card title="VR Input" icon="hand-raised" subtitle="Controller ray selection and legal block targeting pipeline." >}}
          {{< card title="Speech Input" icon="microphone" subtitle="MicrophoneRecorder -> DirectWhisperClient -> RobotCommandParser." >}}
          {{< card title="Robot Arm Control" icon="wrench-screwdriver" subtitle="RobotArmAIExecutor executes staged extraction and top placement." >}}
          {{< card title="UI Feedback" icon="chat-bubble-left-right" subtitle="Player-facing state and interaction feedback throughout turns." >}}
          {{< card title="AI Turn" icon="cpu-chip" subtitle="Heuristic move planner integrated into the same execution pipeline." >}}
        {{< /cards >}}

  - block: markdown
    content:
      title: Single Turn Flow
      subtitle: End-to-End Runtime Sequence
      text: |
        {{% steps %}}
        ### Select
        Player chooses a legal block with VR controllers.

        ### Validate & Dispatch
        `GameManager` checks legality and dispatches execution request.

        ### Execute
        `RobotArmAIExecutor` performs approach, grip, extraction, transport, and placement.

        ### Resolve
        Tower state updates and `TowerCollapseDetector` evaluates stability outcome.
        {{% /steps %}}

  - block: markdown
    content:
      title: Architecture Diagram
      subtitle: Visual Asset Placeholder
      text: |
        > [!NOTE]
        > Add final diagram image to `assets/media/diagrams/architecture-flow.png` and embed it here when available.
---
