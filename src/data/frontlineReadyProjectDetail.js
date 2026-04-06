/** Long-form copy for FrontlineReady — /projects/frontlineready (from MLH Cyberwave + Rice precollege context in site data) */
export const frontlineReadyDetailSections = [
  {
    heading: 'Why FrontlineReady exists',
    paragraphs: [
      'Roughly 70% of the American workforce is frontline-based—retail, hospitality, logistics, care—yet those roles are often last in line for polished workplace technology and structured upskilling. National frontline unemployment had recently jumped to about 4.5%, hiring managers face a persistent training and staffing gap, and tens of millions of workers use English as a second language while customers still report disappointing service experiences. The problem is not ambition; it is practice under pressure, clarity in the moment, and access to feedback that fits between shifts—not another generic language app behind a paywall.',
      'Major League Hacking’s Cyberwave (February 2026), with Reach Capital, framed the mandate explicitly: design AI learning experiences that uplevel and upskill the labor force rather than replace it, embedded in day-to-day workflows and usable on the job and on the go. Reach’s portfolio spans education, the future of work, and healthcare (including teams behind tools developers and educators already use), so the bar was a credible story plus something judges could imagine frontline staff actually opening between tasks.',
      'I built and pitched FrontlineReady with Evan Saran (Northview High School). The same “future of work” thread also showed up in my Rice University Precollege capstone—feedback and mentorship from AI architect Steven Greulich—so the narrative stayed grounded in both hackathon velocity and longer-form product thinking.',
    ],
  },
  {
    heading: 'What workers practice (AccentCoach story)',
    paragraphs: [
      'In our deck we used an AccentCoach storyline to make the stakes concrete: customer conversations drive safety, trust, tips, reviews, and advancement, and the hardest moments are staying clear and calm under stress—not reciting vocabulary in isolation.',
      'FrontlineReady targets private, low-cost rehearsal of realistic service scenarios instead of one-size language drills: specialized for retail-style frontline roles, an easy-to-read UI, and accessibility framed so we are not stacking subscriptions or paid APIs on people who are already stretched thin.',
      'Judges saw how the demo tied together scenario setup, playback of “customer” pressure, and coaching that reads as situational—so the product reads as job support, not homework.',
    ],
  },
  {
    heading: 'Technical approach (as shipped for the competition)',
    paragraphs: [
      'The weekend build was run like a product sprint: research and storyline in the morning, prototype and deck in parallel, then integration so the live path matched what we said on the slides.',
      'We showcased Google Gemini driving the interactive parts of the experience: real-time speech understanding so workers could speak naturally; dynamically generated “mistake” and friction scenarios so drills stayed varied; bite-sized personalized coaching so feedback felt actionable; customer-role impersonation so practice felt like the floor, not a textbook; and multimodal reasoning so tips stayed contextual to what had just been said and shown—not a generic lecture.',
    ],
    bullets: [
      'Speech-in / coaching-out loop: capture utterances, classify intent and clarity issues, and return short, specific coaching lines aligned to the active scenario.',
      'Scenario engine: prompt-backed generation of customer-facing situations (returns, complaints, rush-hour tone) so each session differs and maps to retail-adjacent stress patterns.',
      'Multimodal feedback: combine transcript signals with scenario metadata so Gemini can explain why a phrasing misfired and suggest a tighter alternative.',
      'UX constraints from the brief: readable type, minimal steps between “start practice” and “get feedback,” and a cost posture that assumes workers—not employers—might be the ones paying attention first.',
    ],
  },
  {
    heading: 'Recognition',
    paragraphs: [
      'Evan and I took 1st place at MLH Cyberwave (February 2026) with FrontlineReady—AccentCoach slides plus the Gemini-powered coaching demo—and received Logitech Brio 101 webcams as part of the win.',
      'The submission stayed aligned with Reach Capital’s partner prompt (introduced by Wai Chu): AI that supports frontline staff inside real workflows, not a replacement narrative.',
    ],
  },
  {
    heading: 'Design principles',
    paragraphs: [
      'Upskill, don’t sideline: every feature argument traced back to someone on a shift who needs confidence in the next conversation, not a dashboard only a manager sees.',
      'Honest about limits: we pitched rehearsal and coaching, not certification or legal advice—matching what a weekend prototype can responsibly claim.',
      'Accessibility as a product decision: low-cost, easy-to-read flows and avoiding a pile of paid APIs on workers were part of the story, not an afterthought.',
    ],
  },
]
