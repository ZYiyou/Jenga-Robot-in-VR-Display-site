---
title: Home
type: landing

sections:
  - block: hero
    content:
      title: Jenga Bot in VR
      text: |
        A polished university project showcase for our Unity-based VR Jenga MVP.
        We connect player input, robotic arm execution, AI turns, and physics-driven tower outcomes in one coherent interaction loop.
      primary_action:
        text: View Project
        url: /project/
      secondary_action:
        text: Watch Demo
        url: /demo/
    design:
      spacing:
        padding: ['6rem', '0', '5rem', '0']

  - block: markdown
    id: hero-visual
    content:
      text: |
        <div class="jenga-visual">
          <div class="jenga-visual-grid">
            <div class="jenga-panel">
              <strong>VR + Robot + Jenga</strong>
              <p>Immersive interaction meets staged robotic manipulation under real-time physics constraints.</p>
              <div class="signal-line"></div>
              <div class="tower-stack">
                <div class="tower-row"><div class="tower-block"></div><div class="tower-block"></div><div class="tower-block"></div></div>
                <div class="tower-row offset"><div class="tower-block"></div><div class="tower-block"></div><div class="tower-block"></div></div>
                <div class="tower-row"><div class="tower-block"></div><div class="tower-block"></div><div class="tower-block"></div></div>
              </div>
            </div>
            <div class="jenga-panel">
              <strong>Presentation Identity</strong>
              <p>Designed as a polished university showcase: technical depth, clear structure, and demo-ready storytelling.</p>
              <ul>
                <li>Legal move selection in VR</li>
                <li>Shared robot execution pipeline</li>
                <li>AI turn + stability resolution loop</li>
              </ul>
            </div>
          </div>
        </div>
    design:
      columns: "1"
      spacing:
        padding: ['0', '0', '1rem', '0']

  - block: markdown
    id: quick-actions
    content:
      title: Quick Access
      subtitle: Presentation Links
      text: |
        {{< cards >}}
          {{< card url="/project/" title="View Project" icon="rocket-launch" subtitle="Scope, goals, and implemented system" >}}
          {{< card url="/demo/" title="Watch Demo" icon="play-circle" subtitle="Workflow walkthrough and media placeholders" >}}
          {{< card url="/reports/" title="Read Report" icon="document-text" subtitle="Final report and supporting docs" >}}
          {{< card url="/slides/" title="View Slides" icon="presentation-chart-line" subtitle="Presentation summary and deck entry point" >}}
        {{< /cards >}}
    design:
      columns: "1"
      spacing:
        padding: ['1rem', '0', '2rem', '0']

  - block: markdown
    id: overview
    content:
      title: What We Actually Built
      subtitle: Final MVP Scope
      text: |
        - VR controller-based legal block selection
        - Shared robot execution pipeline for player and AI
        - Extraction, top placement, release, and retreat workflow
        - Tower stability and collapse resolution
        - Auxiliary voice-command pathway
    design:
      columns: "1"
      spacing:
        padding: ['1rem', '0', '1rem', '0']

  - block: markdown
    id: engineering-highlights
    content:
      title: Engineering Highlights
      subtitle: System-Level Focus
      text: |
        {{< cards >}}
          {{< card title="Shared Robot Pipeline" icon="cpu-chip" subtitle="Player and AI actions use the same execution path for consistency." >}}
          {{< card title="Rule-Aware Interaction" icon="scale" subtitle="Only legal blocks are selectable, preserving real Jenga constraints." >}}
          {{< card title="Physics Resolution" icon="exclamation-triangle" subtitle="Tower stability is tracked and collapse outcomes are handled explicitly." >}}
        {{< /cards >}}
    design:
      columns: "1"

  - block: markdown
    id: showcase-note
    content:
      title: Showcase Status
      subtitle: Ready for Project Presentation
      text: |
        > [!NOTE]
        > The website structure is presentation-ready. Remaining updates mainly involve replacing media/report/team placeholders with final deliverables.
    design:
      columns: "1"
---
