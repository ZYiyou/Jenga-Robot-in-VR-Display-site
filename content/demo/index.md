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
      title: Notes
      text: |
        A prerecorded demo is recommended for presentation reliability when live VR interaction is not feasible.
---
