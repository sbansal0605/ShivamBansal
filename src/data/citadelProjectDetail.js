/** Long-form copy for The Citadel — /projects/the-citadel (SUMMET capstone, Colorado School of Mines, June 2026) */
export const citadelDetailSections = [
  {
    heading: 'Why The Citadel exists',
    paragraphs: [
      'Mine rescue operations carry extraordinary risk: for every rescue accident, the average death toll reaches six to seven people per incident, according to the National Institutes of Health. During SUMMET at the Colorado School of Mines, our team was tasked with identifying a key challenge in mine rescue and developing a solution aimed at improving emergency response, rescuer safety, and victim recovery.',
      'Through stakeholder interviews we asked rescue professionals a single question: “What is your biggest challenge in mine rescues?” The answer that surfaced again and again was access to necessary survival supplies: the resources trapped miners need to prolong possible rescue time while waiting for help underground.',
      'That research crystallized into our final problem statement: How might we improve access to necessities for trapped miners while they wait for rescue?',
    ],
  },
  {
    heading: 'The Citadel concept',
    paragraphs: [
      'The Citadel is a pre-positioned emergency supply station designed for underground mines, focused on protection, safety, and emergency planning. Rather than relying on rescuers to reach victims with gear in the critical first hours, The Citadel stations hardened survival resources at strategic points throughout a mine so trapped workers can access essentials immediately after an incident.',
      'Our Yellow Team (Asher, Shivam, Jose, and Sofiia) brainstormed multiple approaches before converging on The Citadel, including location beacon networks to pinpoint trapped miners, compact oxygen-delivery robots for collapsed passages, and waste-to-oxygen systems that could generate breathable air from mining byproducts.',
      'We selected The Citadel because it addressed the root constraint our research identified: miners need reliable, local access to survival necessities, not a single silver-bullet device, but a protected cache of life-extending supplies positioned where emergencies actually happen.',
    ],
  },
  {
    heading: 'Prototype and presentation',
    paragraphs: [
      'Over the week we moved from background research and decision-matrix scoring through prototyping, planning, and implementation workshops, including Arduino, 3D printing, electrical engineering, and soldering labs, before assembling a physical prototype for final presentations on June 4, 2026.',
      'The entire build was constructed from recycled materials (a cardboard enclosure, repurposed containers, and salvaged components), modeling how a mine-side emergency cache could be assembled affordably at scale. Inside we staged a yellow hard hat for head protection, a MEDKIT+ supply module, hydration storage, and the electronics stack that powers remote detection.',
      'We wired Arduinos programmed in C++ to IR sensors for remote detection, driving LEDs that signal when supplies are accessed or when motion is detected near the station, so rescuers and miners get a visible alert that someone has reached The Citadel. The electrical circuits were soldered by hand and powered by batteries, tying together the week’s mechanical, electrical, and programming workshops into one working demo.',
      'We presented The Citadel to Colorado School of Mines faculty and teaching assistants in the Green Center, walking through the problem framing, design alternatives, final solution, and live prototype as the culmination of SUMMET Session 1.',
    ],
    bullets: [
      'Arduino + C++ firmware with IR sensors for remote detection and LED status indicators.',
      'Hand-soldered electrical circuits on battery power.',
      'Recycled-material enclosure and supply staging (hard hat, medkit, hydration).',
      'Alternatives explored: location beacons, oxygen robots, and waste-to-oxygen conversion.',
    ],
  },
  {
    heading: 'SUMMET context',
    paragraphs: [
      'SUMMET (Summer Mines Engineering and Training) is a selective, fully expense-paid residential STEM program at Colorado School of Mines for rising high school seniors. Our session ran May 31 through June 5, 2026, combining departmental workshops, the Edgar Experimental Mine tour, team-building, and a week-long design project.',
      'The Citadel capstone tied together everything from mechanical and electrical engineering workshops to prototyping labs and presentation practice, translating classroom exposure into a mine-safety narrative we could defend in front of university faculty.',
    ],
  },
  {
    heading: 'Design principles',
    paragraphs: [
      'Survival time over spectacle: every design choice traced back to prolonging rescue windows for trapped miners, not showcasing technology for its own sake.',
      'Pre-positioned resilience: emergencies underground are unpredictable. The Citadel assumes supplies must already be where miners are, not delivered after the fact.',
      'Sustainable prototyping: we built the demo entirely from recycled materials to show the concept could be replicated without expensive fabrication, aligned with real-world constraints in remote mining environments.',
      'Team-driven engineering: research interviews, decision matrices, and prototyping were split across the Yellow Team so the final story reflected diverse perspectives and iterative critique.',
    ],
  },
]
