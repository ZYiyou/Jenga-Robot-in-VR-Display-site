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
          {{< card title="Game Orchestration" icon="squares-2x2" subtitle="GameManager owns phases, turn switching, subscriptions, and delayed stability resolution." >}}
          {{< card title="VR Selection" icon="hand-raised" subtitle="PlayerBlockSelector raycasts, filters legal blocks, highlights hover state, and locks the target." >}}
          {{< card title="Robot Execution" icon="wrench-screwdriver" subtitle="RobotArmAIExecutor stages home, orbit, approach, grip, extraction, top placement, release, and retreat." >}}
          {{< card title="Tower Model" icon="square-3-stack-3d" subtitle="JengaTowerManager and JengaTowerState generate blocks, track layers, and register returned placements." >}}
          {{< card title="AI Turn" icon="cpu-chip" subtitle="RobotArmAI scores legal blocks by layer, edge position, tower-center distance, risk penalty, and random jitter." >}}
          {{< card title="Voice Input" icon="microphone" subtitle="MicrophoneRecorder, DirectWhisperClient, RobotCommandParser, and VoiceCommandRobotBridge provide an auxiliary command path." >}}
        {{< /cards >}}

  - block: markdown
    content:
      title: Single Turn Flow
      subtitle: End-to-End Runtime Sequence
      text: |
        {{% steps %}}
        ### Select and Lock
        The player targets a legal block. Illegal top-layer, removed, or untracked blocks are rejected before lock-in.

        ### Prepare Before Committing
        `GameManager` asks `RobotArmAIExecutor` to run a prepare-only move until the robot is positioned at pre-grip.

        ### Confirm and Execute
        A second player confirmation advances the same executor into full grip, extraction, top-placement, release, and retreat.

        ### Resolve and Switch Turn
        `TowerCollapseDetector` reports stable or collapsed. `GameManager` then switches to the AI or ends the game.
        {{% /steps %}}

  - block: markdown
    content:
      title: Phase and State Snapshot
      subtitle: Code-Level Runtime Model
      text: |
        The architecture is driven by two related state models:

        - `GamePhase`: `Setup`, `WaitingToStart`, `PlayerSelecting`, `PlayerRobotPositioning`, `PlayerWaitingSecondConfirm`, `PlayerExecutingMove`, `AITurn`, `CheckingTowerStability`, and `GameOver`.
        - `TurnOwner`: `Player`, `AI`, or `None`.
        - `AIExecutionState`: lower-level robot states such as `ReturnToHome`, `OrbitBaseToTargetFace`, `ApproachHorizontally`, `PreparedAwaitingConfirmation`, `CloseGripSlowly`, `PullBlockOut`, `LiftForTopPlacement`, `MoveToTopPlacementSlot`, `OpenGripToRelease`, and `RetreatAfterPlacement`.
        - `PlacementSequencePhase`: higher-level execution phases from `GripTargetBlock` through `RetreatAfterPlacement`.

        This split keeps gameplay decisions in `GameManager` while movement and manipulation details stay inside `RobotArmAIExecutor`.

  - block: markdown
    content:
      title: Code Evidence Map
      subtitle: Suggested Snippets for the Architecture Section
      text: |
        - `MVP/Assets/Scripts/TurnBasedGameState.cs`: paste the `TurnOwner` and `GamePhase` enums to show the game-level state model.
        - `MVP/Assets/Scripts/RobotMovement/RobotArmAIExecutor.cs`: paste the `AIExecutionState`, `ExecutionMode`, and `PlacementSequencePhase` enums to show the robot execution model.
        - `MVP/Assets/Scripts/GameManager.TurnFlow.cs`: paste `OnPlayerTargetLocked`, `OnRobotPreparationCompleted`, `OnPlayerTriggerPressedChanged`, and `OnRobotExecutionCompleted` to show the two-stage player flow.
        - `MVP/Assets/Scripts/JengaTowerManager.PlacementPlanning.cs`: paste `TryGetNextPlacementSlot`, `ChoosePlacementSlotIndex`, and `RegisterReturnedBlockPlacement` to show top-placement planning.
        - `MVP/Assets/Scripts/TowerCollapseDetector.cs`: paste `MonitorResolutionCoroutine`, `TryDetectCollapse`, and `IsTowerStable` to show stability and collapse resolution.
        - `MVP/Assets/Scripts/RobotMovement/RobotArmAI.cs`: paste `ScoreCandidates` and `ChooseCandidate` to show that the AI is heuristic rather than machine learning.

  - block: markdown
    content:
      title: Architecture Diagram
      subtitle: Visual Asset Placeholder
      text: |
        > [!NOTE]
        > Add final diagram image to `assets/media/diagrams/architecture-flow.png` and embed it here when available.
---
