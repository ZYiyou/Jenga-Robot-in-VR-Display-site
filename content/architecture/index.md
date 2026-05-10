---
title: "System Architecture — Jenga Bot in VR"
summary: "Technical subsystem overview and architecture flow for VR Jenga MVP."
date: 2026-05-11
type: page
---

# System Architecture

This section overviews the core subsystems behind the Jenga Bot in VR.

## Subsystem Overview
- Player VR Input & Ray Selection handled by PlayerBlockSelector.
- Gameplay coordination managed by GameManager.
- Shared robotic execution pipeline via RobotArmAIExecutor.
- Physical manipulation through GripperBlockGrabber and RobotGripperController.
- Tower logic maintained by JengaTowerManager, JengaTowerState, and JengaMoveRules.
- Stability monitored by TowerCollapseDetector.
- Auxiliary voice command pathway: MicrophoneRecorder -> DirectWhisperClient -> RobotCommandParser -> VoiceCommandRobotBridge -> RobotArmAIExecutor.

## Architecture Flow Diagram
Architecture diagram placeholder.

Add the final system diagram here once `assets/media/diagrams/architecture-flow.png` is available.

## Single Turn Flow
A player selects a legal block using VR controllers -> GameManager validates and passes command to RobotArmAIExecutor -> Robot arm approaches and grips the block -> Tower state updated -> Tower stability assessed -> AI opponent determines next move.

## Robot Execution Stages
1. Approach block
2. Grip block
3. Extract block
4. Transport to top placement
5. Place block
6. Release and retreat

Each stage is managed carefully to handle physics stability and execution failures.
