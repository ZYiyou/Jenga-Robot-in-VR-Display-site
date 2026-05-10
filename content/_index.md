---
title: "Jenga Bot in VR — Home"
summary: "Unity-based VR Jenga MVP featuring staged robot arm execution and heuristic AI."
date: 2026-05-11
type: landing
---

- block: hero
  id: intro
  design:
    background:
      gradient:
        start: primary-800
        end: secondary-800
      gradient_mesh:
        enable: true
        style: orbs
        colors: ["primary-600/20", "secondary-600/20"]
        orb_count: 3
        animation: pulse
        intensity: bold
    text_color_light: true
    css_class: "relative overflow-hidden"
    spacing:
      padding: ["5rem", "0", "5rem", "0"]
  content:
    title: "Jenga Bot in VR"
    text: |
      Turn-Based VR Jenga with Robotic Execution Pipeline.<br/>
      A Nottingham COMP2002 software engineering MVP built for precise VR interaction and heuristic AI turns.
    primary_action:
      text: "Watch Demo"
      url: "/demo"
    secondary_action:
      text: "Explore Architecture"
      url: "/architecture"

- block: cta-card
  id: mvp-highlights
  design:
    background:
      color:
        light: "#f3f4f6"
        dark: "#0b1021"
    card:
      css_class: "glassmorphism-primary"
      overlay_opacity: 0.2
      text_color: "auto"
  content:
    title: "Final MVP Highlights"
    text: |
      - VR controller-based legal block targeting<br/>
      - Staged robot arm manipulation workflow<br/>
      - Tower state tracking and stability resolution<br/>
      - Heuristic AI opponent<br/>
      - Auxiliary voice commands using Whisper transcription
    button:
      text: "See Demo"
      url: "/demo"

- block: cta-image-paragraph
  id: problem-why
  content:
    items:
      - title: "Why this problem matters"
        text: |
          Controlled manipulation in VR simulates real-world robotics challenges, bridging human input and robotic execution for safe, precise interactions.
        image: "assets/media/screenshots/problem-context.png"
        features:
          - Simulates precise robotic control in a VR environment
          - Addresses complex stability challenges in block manipulation
          - Demonstrates software engineering integration in robotics workflows

      - title: "What we actually built"
        text: |
          An end-to-end VR Jenga MVP with staged robot execution and heuristic AI, balancing player input with system automation in a turn-based gameplay loop.
        image: "assets/media/screenshots/actual-build.png"
        features:
          - VR controller selection with enforced legal moves
          - Robot arm staging from approach to placement
          - AI opponent using heuristic scoring
          - Voice commands as auxiliary control
