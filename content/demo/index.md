---
title: "Demo - Jenga Bot in VR"
summary: "Demo video and step-by-step walkthrough for the Jenga Bot MVP."
date: 2026-05-11
type: landing

sections:
  - block: hero
    content:
      title: Demo
      text: "Demonstration of legal selection, robotic extraction, top placement, and stability resolution in the VR Jenga loop."
      primary_action:
        text: View Architecture
        url: /architecture/
      secondary_action:
        text: Read Testing Notes
        url: /testing/

  - block: markdown
    content:
      title: Demo Walkthrough
      subtitle: Presentation Flow
      text: |
        {{% steps %}}
        ### Select a legal block
        Player uses VR controllers to choose a valid block.

        ### Execute robotic extraction
        Robot arm approaches, grips, and extracts using staged control.

        ### Place at top
        Extracted block is transported and placed at the top of the tower.

        ### Resolve outcome
        Tower stability is monitored and collapse is handled if triggered.
        {{% /steps %}}

  - block: markdown
    content:
      title: Media Slots
      subtitle: Replace Placeholders with Final Assets
      text: |
        {{< cards >}}
          {{< card title="Demo Video" icon="video-camera" subtitle="Placeholder: add final prerecord or public embed URL." >}}
          {{< card title="Selection Screenshot" icon="photo" subtitle="Placeholder for VR targeting frame." >}}
          {{< card title="Extraction Screenshot" icon="photo" subtitle="Placeholder for robotic extraction stage." >}}
          {{< card title="Placement Screenshot" icon="photo" subtitle="Placeholder for top placement stage." >}}
        {{< /cards >}}

  - block: markdown
    content:
      title: Action Loop Showcase
      subtitle: Visual Execution Stages
      text: |
        <div class="gif-showcase gif-showcase-grid">
          {{< video-card src="/uploads/game-flow/select-and-grip.mp4" title="Robot Grasp" label="Robot Action" desc="After a block is selected, the robot arm approaches the target and grips it automatically." alt="Robot arm approaching and grasping selected Jenga block" >}}
          {{< video-card src="/uploads/game-flow/select-and-grip.mp4" title="Block Extraction" label="Jenga Action" desc="The robot carefully pulls the selected block out of the tower while maintaining the game flow." alt="Robot extracting a Jenga block from the tower" >}}
          {{< video-card src="/uploads/game-flow/place-to-top.mp4" title="Block Placement" label="Robot Action" desc="The extracted block is moved to the top of the tower and placed to complete the turn." alt="Robot placing extracted block on top layer of Jenga tower" >}}
          {{< video-card src="/uploads/game-flow/full-process.mp4" title="One Turn Flow" label="Full Interaction" desc="From player selection to robot movement, this loop shows how one complete turn is handled in the VR Jenga system." alt="Full turn workflow from user selection to robotic completion" >}}
        </div>

  - block: markdown
    content:
      title: Notes
      text: |
        A prerecorded demo is recommended for presentation reliability when live VR interaction is not feasible.
---

