---
title: "Project Overview - Jenga Bot in VR"
summary: "Complete project overview, MVP scope, features, tech stack, and links."
date: 2026-05-11
type: landing

sections:
  - block: hero
    content:
      title: Project Overview
      text: "COMP2002 team project: a Unity VR Jenga MVP centered on robotic execution, legal move control, and physics-based outcomes."
      primary_action:
        text: View Architecture
        url: /architecture/
      secondary_action:
        text: Watch Demo
        url: /demo/
    design:
      spacing:
        padding: ['5rem', '0', '3rem', '0']

  - block: markdown
    content:
      title: Final MVP Scope
      subtitle: Core Showcase Features
      text: |
        {{< cards >}}
          {{< card title="VR Interaction" icon="cube-transparent" subtitle="Ray-based controller targeting with legal block filtering." >}}
          {{< card title="Robot Arm Execution" icon="wrench-screwdriver" subtitle="Approach, grip, extract, place, and retreat stages." >}}
          {{< card title="AI Opponent" icon="cpu-chip" subtitle="Heuristic turn logic operating under the same game rules." >}}
          {{< card title="Game Flow" icon="arrows-right-left" subtitle="Synchronized turn loop with tower-state and collapse checks." >}}
        {{< /cards >}}

  - block: markdown
    content:
      title: Implemented Features
      subtitle: System Components
      text: |
        - Legal block targeting enforced by gameplay rules.
        - Gameplay coordination by `GameManager`.
        - `RobotArmAIExecutor` for shared robotic control.
        - Tower management with `JengaTowerManager` and `JengaTowerState`.
        - Physics and stability monitoring via `TowerCollapseDetector`.
        - Gripper control systems including `GripperBlockGrabber`.
        - Heuristic AI for opponent move generation.
        - Voice command pathway using `DirectWhisperClient` and `RobotCommandParser`.

  - block: markdown
    content:
      title: Scope Boundaries
      subtitle: Non-Claims
      text: |
        > [!NOTE]
        > This MVP is intentionally scoped for course delivery and demo reliability.
        >
        > - Not a full ROS2 robotics framework.
        > - Voice interaction is auxiliary, not primary.
        > - AI is heuristic, not adaptive learning.
        > - Multiplayer is not full networking.

  - block: markdown
    content:
      title: Technology Stack
      subtitle: Core Technical Choices
      text: |
        {{< cards >}}
          {{< card title="Unity" icon="cube" subtitle="VR interaction, scene logic, and real-time physics." >}}
          {{< card title="C#" icon="code-bracket-square" subtitle="Gameplay orchestration and robotic behavior scripts." >}}
          {{< card title="Whisper API" icon="chat-bubble-left-ellipsis" subtitle="Speech-to-text for auxiliary command input." >}}
          {{< card title="Heuristic AI" icon="cpu-chip" subtitle="Rule-aware opponent move selection for turn-based play." >}}
        {{< /cards >}}

  - block: markdown
    content:
      title: Key Resources
      subtitle: Project Access
      text: |
        - [Source Code Repository](https://github.com/ZYiyou/Jenga-Robot-in-VR-Display-site)
        - Final report PDF placeholder
---
