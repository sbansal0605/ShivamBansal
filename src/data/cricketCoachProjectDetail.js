/** Long-form copy for CricketCoach — /projects/cricketcoach */
export const cricketCoachDetailSections = [
  {
    heading: 'Why CricketCoach exists',
    paragraphs: [
      'Cricket is one of the most followed sports on the planet, yet in the United States it remains comparatively small—partly because structured, high-quality coaching is expensive and geographically concentrated. Many aspiring players cite cost and distance as the biggest barriers to improving. CricketCoach is a computer-vision pipeline built to narrow that gap: you upload a short clip from a phone or laptop and receive structured, personalized feedback on form and positioning without needing a coach physically in the room.',
      'I co-developed CricketCoach with Evan Saran (Northview High School). We both play school and club cricket and have represented Georgia at the interstate conference, so the product direction came from lived experience on how players actually train—and where feedback usually breaks down.',
    ],
  },
  {
    heading: 'What you do in the app',
    paragraphs: [
      'After signing in, a player uploads a roughly three- to eight-second clip and explicitly selects whether the camera was side-on or front-on. That choice is not cosmetic: many downstream metrics switch landmark sets and thresholds, and accuracy collapses if the system assumes the wrong geometry—there is no pro in the corner to correct the frame of reference for you.',
      'The interface is built to be legible under pressure: clear loading states, confidence and signal-quality callouts, and dashboards that work for beginners through advanced users. When analysis completes, a pose-overlay replay sketches the skeleton the model tracks frame by frame so athletes can see structure, not guess from blur alone.',
      'Coach tips highlight the biggest mechanical priorities for that clip. A color-coded Metrics Snapshot translates head stability, knee angle, stride, and alignment into coaching language instead of raw numbers. The Kinematic Sequence charts how power should move through the chain—pelvis, torso, shoulder, wrist—and surfaces timing issues when segments fire out of order.',
      'For bowling clips the system can flag biomechanical risk patterns such as mixed action (hips and shoulders fighting each other), which literature ties to stress on the lumbar spine. Warnings appear when portions of the video lack reliable pose data, nudging users toward cleaner capture next time. A download path supports sharing a report or emailing a coach who might be in another country.',
      'Profiles store the personalization context we collect at signup; the runs view lists each analyzed upload linked to an account. Benchmarks compare progress over time once at least five runs are linked, so improvement becomes visible instead of anecdotal.',
    ],
  },
  {
    heading: 'Real-world traction',
    paragraphs: [
      'We positioned CricketCoach as something that should stay free at the point of use and reachable with everyday devices. In presentations we described adoption across academy-style settings and Northview teammates who cannot access private coaching, and connected that usage to our silver-medal finish at the Georgia High School Cricket Tournament. The broader goal is to shrink the coaching gap for anyone limited by money, geography, or schedule.',
      'The project earned 1st place in Web & Mobile Applications at the Georgia Student Technology Competition (GASTC) in March 2026, where judges evaluated purposeful design, live demos, and the ability to explain engineering choices under scrutiny.',
    ],
  },
  {
    heading: 'System architecture (end to end)',
    paragraphs: [
      'The frontend is a Next.js application using React, TypeScript, and Tailwind, with file-based routing for flows such as analysis and saved reviews. Most UI runs client-side because the heavy lifting lives on the backend. A custom locale provider loads keyed translations (English and Hindi today) while dynamic coaching copy still originates from the analysis service in English.',
      'The backend is FastAPI with Python. Uploads arrive as multipart form data; the API persists video, runs the analyze_video pipeline, and returns JSON plus URLs for overlays and reports. Pydantic-typed responses keep the contract between services explicit. Session state on the client can cache recent results for snappy navigation.',
    ],
    bullets: [
      'Pose: Google MediaPipe Pose (pose landmarker) for 3D landmarks per frame; low-confidence frames are dropped, short gaps interpolated, and a signal-quality score surfaces uncertainty.',
      'Geometry: NumPy vector math and OpenCV for angles, distances, and displacements versus view-specific baselines (e.g., front-knee angle from hip–knee–ankle at key phases).',
      'Kinematics: segment angles over time → finite-difference angular velocity; ordering of pelvis → torso → shoulder → wrist peaks flags “power leak” style issues.',
      'Pro alignment: Dynamic Time Warping on joint-angle trajectories aligns a user clip to reference “pro” sequences; aligned landmarks drive a canvas ghost overlay on the user video.',
      'Mobile capture: getUserMedia plus MediaRecorder in the browser for short WebM captures, funneled through the same upload pipeline; responsive hooks tailor layouts on small screens.',
      'Persistence: videos, overlays, and JSON artifacts on disk; SQLite stores run metadata so sessions can be reopened, compared, and benchmarked.',
    ],
  },
  {
    heading: 'Design principles',
    paragraphs: [
      'We communicate limits honestly: disclaimers on the analyze screen, confidence metrics, and warnings when tracking fails. The product today assumes single-player clips, a constrained set of camera angles, and tuning derived from focused internal baselines—not a massive league-wide dataset—so we steer users toward high-quality uploads rather than over-promising.',
      'CricketCoach is meant to augment coaches, not pretend to replace them. It packages evidence—pose, timing, and risk cues—so humans can decide what to drill next, especially when the nearest expert is hours away.',
    ],
  },
]
