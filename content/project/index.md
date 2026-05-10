---
title: "Project Overview — Jenga Bot in VR"
summary: "Complete project overview, MVP scope, features, tech stack, and links."
date: 2026-05-11
type: project
---

# Project Overview

## Context
This project is a University of Nottingham COMP2002 group effort focused on a Unity-based VR Jenga MVP built around a robotic arm execution pipeline.

## Final MVP Scope
- Turn-based VR Jenga gameplay between human and heuristic AI opponent.
- VR controller-based legal block selection.
- Staged robot arm workflow for extracting, placing, and handling blocks.
- Tower stability tracking, collapse detection, and resolution.
- Auxiliary voice command input via Whisper transcription.

## Implemented Features
- Legal block targeting enforced by gameplay rules.
- Gameplay coordination by GameManager.
- RobotArmAIExecutor for shared robotic control.
- Tower management with JengaTowerManager and JengaTowerState.
- Physics and stability monitoring via TowerCollapseDetector.
- Gripper control systems including GripperBlockGrabber.
- Heuristic AI providing computer opponent moves.
- Voice command pathway using DirectWhisperClient and RobotCommandParser.

## Non-claims and Scope Boundaries
- Not a full ROS2 robotics framework.
- Voice interaction is auxiliary, not primary.
- AI is heuristic, not adaptive or learning-based.
- Multiplayer functionality is limited to shared execution pattern, not full networking.

## Technology Stack
- Unity engine for VR interaction and physics.
- C# for game logic and robot control.
- Whisper transcription API for voice commands.
- Heuristic algorithms for AI decision-making.

## Key Screenshots
![VR Block Selection](assets/media/screenshots/vr-selection.png)
![Robot Arm Execution](assets/media/screenshots/robot-execution.png)

## Links
- [Source Code Repository](https://github.com/ZYiyou/Jenga-Robot-in-VR-Display-site)
- [Final Report (PDF)](/uploads/final-report.pdf)
