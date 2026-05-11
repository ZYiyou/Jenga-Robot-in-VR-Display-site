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
        <script>
          (function () {
            var base = document.documentElement.getAttribute('data-hbb-relurl') || '/';
            if (!base.startsWith('/')) base = '/' + base;
            if (!base.endsWith('/')) base += '/';
            var cssHref = base + 'css/jenga-tech.css';
            var jsSrc = base + 'js/game-flow-control-room.js';

            if (!document.querySelector('link[data-jenga-tech-css]')) {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = cssHref;
              link.setAttribute('data-jenga-tech-css', '1');
              document.head.appendChild(link);
            }

            if (!document.querySelector('script[data-game-flow-js]')) {
              var script = document.createElement('script');
              script.src = jsSrc;
              script.defer = true;
              script.setAttribute('data-game-flow-js', '1');
              document.head.appendChild(script);
            }
          })();
        </script>
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
      title: Game Flow Control Room
      subtitle: Explore the key interaction and robot action videos from Jenga Bot in VR.
      text: |
        <p class="control-room-mini-label">Interactive Demo Area</p>
        <p>Click each stage to preview the main gameplay actions, including player selection, robot movement, voice control, full turn flow, and tower collapse feedback.</p>
        <div class="control-room" id="game-flow-control-room">
          <div class="control-steps" role="tablist" aria-label="Game flow steps">
            <button class="control-step-btn is-active" type="button" role="tab" aria-selected="true" aria-pressed="true" aria-controls="control-room-display" aria-label="Step 01 Full Process" data-step="01" data-icon="&#9679;" data-title="Full Process" data-desc="A complete gameplay sequence showing how selection, robot movement, placement, and game feedback work together." data-video="/uploads/game-flow/full-process.mp4">
              <span class="step-code">01</span><span class="step-name">Full Process</span>
            </button>
            <button class="control-step-btn" type="button" role="tab" aria-selected="false" aria-pressed="false" aria-controls="control-room-display" aria-label="Step 02 Select and Grip" data-step="02" data-icon="&#9654;" data-title="Select &amp; Grip" data-desc="The player selects a Jenga block, and the robot arm approaches and grips the selected block." data-video="/uploads/game-flow/select-and-grip.mp4">
              <span class="step-code">02</span><span class="step-name">Select &amp; Grip</span>
            </button>
            <button class="control-step-btn" type="button" role="tab" aria-selected="false" aria-pressed="false" aria-controls="control-room-display" aria-label="Step 03 Place to Top" data-step="03" data-icon="&#9998;" data-title="Place to Top" data-desc="The robot arm moves the extracted block to the top of the tower and places it to complete the turn." data-video="/uploads/game-flow/place-to-top.mp4">
              <span class="step-code">03</span><span class="step-name">Place to Top</span>
            </button>
            <button class="control-step-btn" type="button" role="tab" aria-selected="false" aria-pressed="false" aria-controls="control-room-display" aria-label="Step 04 Voice Control" data-step="04" data-icon="&#10003;" data-title="Voice Control" data-desc="Voice commands provide another way for the player to control the game alongside VR ray selection." data-video="/uploads/game-flow/voice-control-demo.mp4">
              <span class="step-code">04</span><span class="step-name">Voice Control</span>
            </button>
            <button class="control-step-btn" type="button" role="tab" aria-selected="false" aria-pressed="false" aria-controls="control-room-display" aria-label="Step 05 Tower Collapse Effect" data-step="05" data-icon="&#9881;" data-title="Tower Collapse Effect" data-desc="The tower collapse uses physics-based behaviour, so blocks fall naturally when the tower becomes unstable." data-video="/uploads/game-flow/tower-collapse.mp4">
              <span class="step-code">05</span><span class="step-name">Tower Collapse</span>
            </button>
          </div>

          <div class="control-display-panel" id="control-room-display">
            <div class="control-display-head">
              <span class="control-display-label">Gameplay Stage Preview</span>
              <h3 id="control-room-panel-title">Step 01 · Full Process</h3>
              <p id="control-room-panel-desc">A complete gameplay sequence showing how selection, robot movement, placement, and game feedback work together.</p>
            </div>
            <div class="control-display-shell">
              <video id="control-room-video" controls muted loop playsinline preload="metadata" aria-label="Game flow video for Full Process">
                <source id="control-room-video-source" src="/uploads/game-flow/full-process.mp4" type="video/mp4">
              </video>
              <div class="control-video-placeholder" id="control-room-placeholder" role="status" aria-live="polite">
                <strong>Video coming soon</strong>
                <span>Step 01 · Full Process</span>
              </div>
            </div>
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
          {{< video-card src="/uploads/game-flow/voice-control-demo.mp4" title="Voice Command Demo" label="Media Showcase" desc="Voice command demo video coming soon" alt="Voice command interaction demo video" >}}
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
            {{< video-card src="/uploads/game-flow/tower-collapse.mp4" title="Tower Collapse Effect" label="Physics" desc="Tower collapse effect demo video" alt="Tower collapse effect with physical gravity" >}}
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


