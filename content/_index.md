---
title: Home
type: landing

sections:
  - block: hero
    content:
      title: Jenga Bot in VR
      text: |
        A VR robotics Jenga game combining player input, voice control, game logic, and robot arm execution.

        `COMP2002 / Team 45 / University of Nottingham`
      primary_action:
        text: Project Overview
        url: /#overview
      secondary_action:
        text: Game Flow
        url: /#game-flow
    design:
      spacing:
        padding: ['6rem', '0', '4rem', '0']

  - block: markdown
    id: hero-visual
    content:
      text: |
        <div class="jenga-visual">
          <div class="jenga-visual-grid">
            <div class="jenga-panel hero-scene-panel">
              <span class="section-chip">VR + ROBOTICS + JENGA</span>
              <strong>Immersive Turn-Based Robotics Gameplay</strong>
              <p>The player interacts through VR ray and voice commands, while the robot arm executes physical Jenga actions under game-rule validation.</p>
              <div class="signal-line"></div>
              <div class="tower-stack">
                <div class="tower-row"><div class="tower-block"></div><div class="tower-block"></div><div class="tower-block"></div></div>
                <div class="tower-row offset"><div class="tower-block"></div><div class="tower-block"></div><div class="tower-block"></div></div>
                <div class="tower-row"><div class="tower-block"></div><div class="tower-block"></div><div class="tower-block"></div></div>
                <div class="tower-row offset"><div class="tower-block"></div><div class="tower-block"></div><div class="tower-block"></div></div>
              </div>
            </div>
            <div class="jenga-panel hero-cta-panel">
              <strong>Explore This Showcase</strong>
              <p>Use these quick links to jump between key project sections.</p>
              <div class="anchor-cta-grid">
                <a href="#overview">Project Overview</a>
                <a href="#game-flow">Game Flow</a>
                <a href="#turn-details">Turn Details</a>
                <a href="#voice-command">Voice Command Demo</a>
                <a href="#collapse-effect">Tower Collapse Effect</a>
                <a href="#team">Meet Our Team</a>
              </div>
            </div>
          </div>
        </div>
    design:
      columns: "1"
      spacing:
        padding: ['0', '0', '1.5rem', '0']

  - block: markdown
    id: overview
    content:
      title: Project Overview
      subtitle: Understand The System In Seconds
      text: |
        {{< cards >}}
          {{< card title="VR Interaction" icon="cursor-arrow-rays" subtitle="The player selects blocks using VR ray interaction." >}}
          {{< card title="Voice Command" icon="microphone" subtitle="The player can also use voice commands as another control method." >}}
          {{< card title="Robot Arm Execution" icon="cpu-chip" subtitle="The robot arm carries out the selected Jenga action." >}}
          {{< card title="AI Opponent" icon="sparkles" subtitle="The system supports turn-based gameplay with an AI opponent." >}}
        {{< /cards >}}
    design:
      columns: "1"

  - block: markdown
    id: game-flow
    content:
      title: Game Flow Overview
      subtitle: End-To-End Gameplay Pipeline
      text: |
        <div class="flow-grid">
          <article class="flow-card"><span class="flow-index">01</span><h3>Start Game</h3><p>Initialize scene, players, and game manager state.</p><span class="flow-tag">System</span></article>
          <article class="flow-card"><span class="flow-index">02</span><h3>Player Turn</h3><p>Activate player interaction mode for the current turn.</p><span class="flow-tag">Input</span></article>
          <article class="flow-card"><span class="flow-index">03</span><h3>Select or Voice Command</h3><p>Player chooses a block by VR ray or spoken command.</p><span class="flow-tag">Input</span></article>
          <article class="flow-card"><span class="flow-index">04</span><h3>Validate Block</h3><p>Game logic checks legal and protected block rules.</p><span class="flow-tag">System</span></article>
          <article class="flow-card"><span class="flow-index">05</span><h3>Robot Executes Move</h3><p>Robot arm performs grasp, extract, move, and place actions.</p><span class="flow-tag">Robot</span></article>
          <article class="flow-card"><span class="flow-index">06</span><h3>Stability Check</h3><p>Physics and rule checks determine whether the tower stays stable.</p><span class="flow-tag">Feedback</span></article>
          <article class="flow-card"><span class="flow-index">07</span><h3>AI Turn</h3><p>Control shifts to AI, which repeats the same execution pipeline.</p><span class="flow-tag">AI</span></article>
          <article class="flow-card"><span class="flow-index">08</span><h3>Game Over if Tower Collapses</h3><p>If instability is critical, the game ends with collapse feedback.</p><span class="flow-tag">Feedback</span></article>
        </div>
    design:
      columns: "1"

  - block: markdown
    id: turn-details
    content:
      title: Turn Details
      subtitle: Detailed Breakdown Of One Player Turn
      text: |
        <div class="turn-steps">
          <article class="turn-step-card"><h3>1. Player chooses a control method</h3><p>Choose between VR ray selection and voice command input.</p></article>
          <div class="gif-showcase-grid">
            {{< gif-card src="/uploads/gifs/vr-ray-selection.gif" title="VR Ray Selection" label="Input" desc="Player points to and selects a candidate block using VR ray interaction." alt="VR ray selecting a Jenga block" >}}
          </div>

          <article class="turn-step-card"><h3>2. The selected block is checked</h3><p>Valid blocks are highlighted while invalid or protected blocks are rejected.</p></article>

          <article class="turn-step-card"><h3>3. The selection is locked</h3><p>The confirmed action is sent to the game manager for execution.</p></article>

          <article class="turn-step-card"><h3>4. Robot arm movement sequence</h3><p>Approach, grip, extract, move to top, place, release, and retreat.</p></article>
          <div class="gif-showcase-grid">
            {{< gif-card src="/uploads/gifs/robot-grasp.gif" title="Robot Grasp" label="Robot" desc="Robot arm aligns and grips the selected block." alt="Robot arm grasping the selected Jenga block" >}}
            {{< gif-card src="/uploads/gifs/block-extraction.gif" title="Block Extraction" label="Robot" desc="The selected block is extracted from the tower with controlled motion." alt="Robot arm extracting a Jenga block" >}}
            {{< gif-card src="/uploads/gifs/block-placement.gif" title="Block Placement" label="Robot" desc="The block is moved to the top layer and placed for turn completion." alt="Robot arm placing a Jenga block on top" >}}
          </div>

          <article class="turn-step-card"><h3>5. Game state update</h3><p>Run stability check, update turn state, then switch to AI turn or trigger game over.</p></article>
          <div class="gif-showcase-grid">
            {{< gif-card src="/uploads/gifs/stability-check.gif" title="Stability Check" label="Feedback" desc="The system evaluates tower stability to determine next state." alt="Tower stability check after block placement" >}}
          </div>
        </div>
    design:
      columns: "1"

  - block: markdown
    id: voice-command
    content:
      title: Voice Command Demo
      subtitle: Spoken Input As An Alternative Control Channel
      text: |
        <div class="media-highlight">
          <div class="media-highlight-copy">
            <p>Voice input allows the user to control the game through spoken commands, supporting a more flexible interaction method alongside VR ray selection.</p>
            <div class="media-tag-row">
              <span class="flow-tag">Voice Input</span>
              <span class="flow-tag">Alternative Control</span>
              <span class="flow-tag">Player Interaction</span>
            </div>
          </div>
          {{< video-card src="/uploads/voice-command-demo.mp4" title="Voice Command Demo" label="Media Showcase" desc="Voice command demo video coming soon" alt="Voice command interaction demo video" >}}
        </div>
    design:
      columns: "1"

  - block: markdown
    id: collapse-effect
    content:
      title: Tower Collapse Effect
      subtitle: Showing Real Physical Gravity In The Jenga Tower.
      text: |
        <div class="collapse-layout">
          <div>
            {{< cards >}}
              {{< card title="Realistic Collapse" icon="bolt" subtitle="Blocks fall using physics instead of disappearing instantly." >}}
              {{< card title="Game Feedback" icon="exclamation-circle" subtitle="Collapse clearly shows that the move has failed." >}}
              {{< card title="Immersion" icon="cube-transparent" subtitle="Physical falling behavior makes VR Jenga feel more believable." >}}
            {{< /cards >}}
          </div>
          <div>
            {{< gif-card src="/uploads/gifs/tower-collapse-effect.gif" title="Tower Collapse Effect" label="Physics" desc="Tower collapse effect demo coming soon" alt="Tower collapse effect with physical gravity" >}}
          </div>
        </div>
    design:
      columns: "1"

  - block: markdown
    id: team
    content:
      title: Meet Our Team
      subtitle: Replace Placeholders With Final Member Details
      text: |
        <div class="team-grid">
          <article class="team-card"><h3>Name Placeholder</h3><p><strong>Role:</strong> Project Coordination</p><p><strong>Contribution:</strong> Task planning and integration management.</p></article>
          <article class="team-card"><h3>Name Placeholder</h3><p><strong>Role:</strong> VR Interaction</p><p><strong>Contribution:</strong> VR ray selection and interaction feedback design.</p></article>
          <article class="team-card"><h3>Name Placeholder</h3><p><strong>Role:</strong> Robot Arm Control</p><p><strong>Contribution:</strong> Robotic grasp, extraction, and placement sequence.</p></article>
          <article class="team-card"><h3>Name Placeholder</h3><p><strong>Role:</strong> Game Logic</p><p><strong>Contribution:</strong> Rules validation, turn state, and win/loss conditions.</p></article>
          <article class="team-card"><h3>Name Placeholder</h3><p><strong>Role:</strong> Speech Input</p><p><strong>Contribution:</strong> Voice command pathway and command parsing flow.</p></article>
          <article class="team-card"><h3>Name Placeholder</h3><p><strong>Role:</strong> Documentation and Presentation</p><p><strong>Contribution:</strong> Reporting, visuals, and final presentation content.</p></article>
        </div>
    design:
      columns: "1"

  - block: markdown
    id: closing
    content:
      title: Thank You
      text: |
        Thank you for exploring Jenga Bot in VR.

        A VR robotics game prototype combining interaction design, automation, and Jenga gameplay.
    design:
      columns: "1"
      spacing:
        padding: ['1rem', '0', '3rem', '0']
---
