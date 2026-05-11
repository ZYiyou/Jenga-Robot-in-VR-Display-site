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
          {{< card title="Two-Stage VR Selection" icon="cube-transparent" subtitle="The player locks a legal target first, then confirms after the robot reaches pre-grip position." >}}
          {{< card title="Shared Robot Pipeline" icon="wrench-screwdriver" subtitle="Player, AI, and voice-triggered moves reuse the same staged execution component." >}}
          {{< card title="Top Placement Planning" icon="square-3-stack-3d" subtitle="Extracted blocks are routed toward legal top-layer slots instead of being simply discarded." >}}
          {{< card title="Physics Resolution" icon="arrows-right-left" subtitle="After each move, the system waits for the tower to stabilize or collapse before switching turns." >}}
        {{< /cards >}}

  - block: markdown
    content:
      title: Implemented Runtime Loop
      subtitle: From Player Intent to Game Outcome
      text: |
        {{% steps %}}
        ### Select
        `PlayerBlockSelector` raycasts from the VR controller, filters illegal blocks, and locks a target block for the turn.

        ### Prepare
        `GameManager` asks `RobotArmAIExecutor` to move the robot into a pre-grip pose without extracting yet.

        ### Confirm
        The player gives a second confirmation after preparation, reducing accidental execution.

        ### Execute
        `RobotArmAIExecutor` performs staged grip, extraction, top-placement, release, and retreat.

        ### Resolve
        `TowerCollapseDetector` monitors rigidbody motion and collapse heuristics before the turn passes to the next owner.
        {{% /steps %}}

  - block: markdown
    content:
      title: Interaction Methods
      subtitle: Player Input and System Response
      text: |
        <div class="gif-showcase gif-showcase-grid">
          {{< gif-card src="/uploads/gifs/vr-ray-selection.gif" title="VR Ray Selection" label="Player Input" desc="The player points at the tower with a VR ray, and the system highlights valid blocks for selection." alt="VR ray selecting valid Jenga blocks with highlight feedback" >}}
          {{< gif-card src="/uploads/gifs/voice-command-input.gif" title="Voice Command Input" label="Alternative Input" desc="Voice commands provide another way to interact with the game and support hands-free control." alt="Voice command transcription driving block interaction in VR Jenga" >}}
          {{< gif-card src="/uploads/gifs/ai-turn.gif" title="AI Turn" label="Opponent Move" desc="The AI opponent selects a move and the robot executes it as part of the turn-based gameplay." alt="AI selecting and executing a robotic move during its turn" >}}
        </div>

  - block: markdown
    content:
      title: Implemented Features
      subtitle: Object Responsibilities
      text: |
        - `GameManager`: coordinating gameplay phases, turn ownership, event subscriptions, and outcome flow.
        - `PlayerBlockSelector`: handling VR ray targeting, hover feedback, legal block filtering, and target locking.
        - `JengaMoveRules`: enforcing practical Jenga legality rules, including protected top-layer filtering.
        - `RobotArmAIExecutor`: running the shared prepare, grip, extract, place, release, and retreat pipeline.
        - `JengaTowerManager`: generating the tower and planning the next legal top-placement slot.
        - `JengaTowerState`: tracking active blocks, removed blocks, returned blocks, layers, and metadata.
        - `GripperBlockGrabber`: validating finger contact, holding blocks, detecting separation, and releasing safely.
        - `RobotArmAI`: selecting AI targets with a weighted heuristic over legal candidate blocks.
        - `TowerCollapseDetector`: resolving stability or collapse using velocity thresholds and ground-region heuristics.
        - `DirectWhisperClient`: sending recorded speech for transcription in the auxiliary voice-command pathway.
        - `RobotCommandParser`: converting transcribed commands into intent, layer, and horizontal-position data.

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
