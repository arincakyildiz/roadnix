export const signQuestions = [
  {
    id: 'sign-1',
    question: 'What does this warning sign tell you?',
    answers: [
      'Road surface is damaged',
      'Surface can be slippery when wet',
      'Road narrows to one lane',
      'Loose gravel on shoulder'
    ],
    correctIndex: 1,
    explanation: 'The wavy tire marks communicate a slippery surface. Reduce speed, avoid sudden braking or steering.',
    visual: {
      type: 'sign',
      icon: { variant: 'triangle', label: '〰' },
      caption: 'Common near bridges and shaded curves.'
    }
  },
  {
    id: 'sign-2',
    question: 'You see this sign approaching an intersection. What maneuver is enforced?',
    answers: ['Left turn only', 'Right turn only', 'Keep straight', 'Roundabout ahead'],
    correctIndex: 1,
    explanation: 'Blue circular mandatory signs enforce an action. The arrow indicates you must turn right.',
    visual: {
      type: 'sign',
      icon: { variant: 'circle-blue', label: '↱' },
      caption: 'Mandatory movement'
    }
  },
  {
    id: 'sign-3',
    question: 'The following sign indicates you are leaving which restriction?',
    answers: ['Speed limit zone', 'No entry zone', 'No overtaking zone', 'Residential zone'],
    correctIndex: 2,
    explanation: 'Diagonal gray lines on a white circle mean the previous prohibition (commonly overtaking) has ended.',
    visual: {
      type: 'sign',
      icon: { variant: 'circle-end', label: '⇄' },
      caption: 'Restriction lifted'
    }
  },
  {
    id: 'sign-4',
    question: 'How should you adapt when this sign appears on a rural route?',
    answers: [
      'Accelerate and use cruise control',
      'Expect two-way traffic and keep right',
      'Stop immediately and turn around',
      'Use horn to warn others'
    ],
    correctIndex: 1,
    explanation: 'It warns that two-way traffic begins. Stay centered, reduce speed, and expect oncoming vehicles.',
    visual: {
      type: 'sign',
      icon: { variant: 'triangle', label: '⇅' },
      caption: 'Two-way traffic'
    }
  },
  {
    id: 'sign-5',
    question: 'What is required when you meet this red bordered sign?',
    answers: [
      'Maximum speed is 30 km/h',
      'Minimum speed is 30 km/h',
      'Stop for inspection',
      'Parking is restricted 30 m ahead'
    ],
    correctIndex: 0,
    explanation: 'Red bordered circles impose maximum speed. Here the limit is 30 km/h.',
    visual: {
      type: 'sign',
      icon: { variant: 'circle-red-solid', label: '30' },
      caption: 'Speed limit'
    }
  },
  {
    id: 'sign-6',
    question: 'What should drivers do when they reach this pedestrian symbol?',
    answers: [
      'Increase speed to clear the area',
      'Yield to people crossing and be ready to stop',
      'Use horn to warn pedestrians',
      'Switch to overtaking lane'
    ],
    correctIndex: 1,
    explanation: 'The triangular pedestrian sign warns of a crossing ahead. Prepare to stop.',
    visual: {
      type: 'sign',
      icon: { variant: 'triangle', label: '🚶' },
      caption: 'Pedestrian focus'
    }
  },
  {
    id: 'sign-7',
    question: 'What restriction does this red circle with a white bar communicate?',
    answers: ['No entry for all vehicles', 'Yield to buses', 'No parking zone', 'Weight limit applies'],
    correctIndex: 0,
    explanation: 'The classic no-entry symbol blocks all traffic from entering a lane or street.',
    visual: {
      type: 'sign',
      icon: { variant: 'circle-red', label: '⛔' },
      caption: 'Do not enter'
    }
  },
  {
    id: 'sign-8',
    question: 'You see this blue circular bicycle sign on a protected lane. What does it mean?',
    answers: [
      'Cyclists prohibited',
      'Mandatory path for bicycles',
      'Parking spaces for bikes',
      'Merge with car traffic'
    ],
    correctIndex: 1,
    explanation: 'Blue mandatory signs indicate the movement you must follow. Here only bicycles may use the lane.',
    visual: {
      type: 'sign',
      icon: { variant: 'circle-blue', label: '🚴' },
      caption: 'Cyclists only'
    }
  },
  {
    id: 'sign-9',
    question: 'When approaching this school zone sign, what is the safest behavior?',
    answers: [
      'Keep current speed but honk occasionally',
      'Reduce speed, scan for children and be ready to stop',
      'Pass other vehicles to clear the zone faster',
      'Turn on hazard lights while driving'
    ],
    correctIndex: 1,
    explanation: 'The triangular school icon warns of children crossing. Slow down and prepare to stop.',
    visual: {
      type: 'sign',
      icon: { variant: 'triangle', label: '🏫' },
      caption: 'School ahead'
    }
  },
  {
    id: 'sign-10',
    question: 'A large green rectangular sign reading “CITY” means…',
    answers: [
      'Only buses may proceed',
      'You are leaving the city',
      'Directional information for city center',
      'Mandatory stop ahead'
    ],
    correctIndex: 2,
    explanation: 'Green directional boards guide you toward city centers, highways or services.',
    visual: {
      type: 'sign',
      icon: { variant: 'rectangle-green', label: 'CITY' },
      caption: 'Directional signage'
    }
  }
]

export const knowledgeQuestions = [
  // Section 1 — Vehicles
  {
    id: 'veh-1-abs-purpose',
    difficulty: 'easy',
    question: 'What is the primary purpose of the Anti-lock Braking System (ABS) in modern vehicles?',
    answers: [
      'To increase the vehicle’s maximum speed',
      'To prevent wheels from locking during emergency braking',
      'To reduce fuel consumption',
      'To improve engine performance'
    ],
    correctIndex: 1,
    explanation:
      'ABS prevents the wheels from locking when you brake hard, so the driver can still steer and keep control instead of sliding.'
  },
  {
    id: 'veh-2-tyre-pressure',
    difficulty: 'easy',
    question: 'At what intervals should tire pressure typically be checked?',
    answers: ['Once a year', 'Every 6 months', 'At least once a month', 'Only when the tire looks flat'],
    correctIndex: 2,
    explanation: 'Checking tire pressure at least once a month helps maintain grip, braking performance and fuel economy.'
  },
  {
    id: 'veh-3-tread-depth',
    difficulty: 'easy',
    question: 'What is the minimum legal tread depth for car tires in most countries?',
    answers: ['0.8 mm', '1.6 mm', '3.0 mm', '5.0 mm'],
    correctIndex: 1,
    explanation:
      'Most countries set the legal minimum tread depth at around 1.6 mm; below this water cannot escape and grip drops sharply.'
  },
  {
    id: 'veh-4-warning-light',
    difficulty: 'medium',
    question: 'Which of the following dashboard warning lights indicates a critical issue requiring immediate attention?',
    answers: ['Low fuel warning', 'Brake system warning (red)', 'Service reminder', 'Tire pressure monitoring (yellow)'],
    correctIndex: 1,
    explanation:
      'A red brake warning light can indicate low brake fluid or serious system failure and must be investigated immediately.'
  },
  {
    id: 'veh-5-follow-distance',
    difficulty: 'easy',
    question: 'What is the recommended following distance in ideal driving conditions?',
    answers: [
      '1 second behind the vehicle ahead',
      'At least 2–3 seconds behind the vehicle ahead',
      '10 meters regardless of speed',
      'As close as possible to improve traffic flow'
    ],
    correctIndex: 1,
    explanation:
      'The 2–3 second rule gives you enough time to notice danger and brake smoothly if the vehicle ahead slows or stops.'
  },
  {
    id: 'veh-6-esc',
    difficulty: 'medium',
    question: 'Electronic Stability Control (ESC) helps drivers by:',
    answers: [
      'Automatically applying brakes when speeding',
      'Detecting and reducing loss of traction',
      'Improving fuel efficiency',
      'Enhancing radio signal reception'
    ],
    correctIndex: 1,
    explanation:
      'ESC monitors the vehicle’s direction and applies brake force to individual wheels to correct skids and keep the car stable.'
  },
  {
    id: 'veh-7-oil-change',
    difficulty: 'medium',
    question: 'How often should engine oil typically be changed in a standard passenger vehicle?',
    answers: [
      'Every 1,000 km or 1 month',
      'Every 5,000–10,000 km or as per manufacturer’s recommendation',
      'Every 25,000 km',
      'Only when the engine makes noise'
    ],
    correctIndex: 1,
    explanation:
      'Most manufacturers recommend an oil change roughly every 5,000–10,000 km, depending on engine, oil type and usage.'
  },
  {
    id: 'veh-8-blind-spot',
    difficulty: 'easy',
    question: 'What does the vehicle’s blind spot refer to?',
    answers: [
      'Areas not visible through mirrors and direct vision',
      'The area directly in front of the hood',
      'The area under the vehicle',
      'The dashboard area'
    ],
    correctIndex: 0,
    explanation:
      'Blind spots are areas around the vehicle you cannot see in mirrors; you must briefly turn your head to check them.'
  },
  {
    id: 'veh-9-headlights',
    difficulty: 'easy',
    question: 'When should headlights be used?',
    answers: ['Only at night', 'During dawn, dusk, night, and poor visibility conditions', 'Only when it’s completely dark', 'Only in tunnels'],
    correctIndex: 1,
    explanation:
      'Headlights are for seeing and being seen; use them whenever visibility is reduced, not just at full night.'
  },
  {
    id: 'veh-10-crumple-zone',
    difficulty: 'easy',
    question: 'What is the primary function of a vehicle’s crumple zone?',
    answers: ['To reduce vehicle weight', 'To absorb impact energy during a collision', 'To improve aerodynamics', 'To store luggage safely'],
    correctIndex: 1,
    explanation:
      'Crumple zones are designed to deform in a crash, absorbing energy before it reaches the passenger compartment.'
  },
  {
    id: 'veh-11-hydroplaning',
    difficulty: 'medium',
    question: 'Hydroplaning occurs when:',
    answers: [
      'The vehicle is driven through deep water intentionally',
      'Tires lose contact with the road surface due to water buildup',
      'The brakes get wet',
      'The windshield wipers fail'
    ],
    correctIndex: 1,
    explanation:
      'In hydroplaning the tires ride on a layer of water instead of the road, causing a total loss of steering and braking.'
  },
  {
    id: 'veh-12-mirror',
    difficulty: 'easy',
    question: 'What is the correct position for adjusting your rearview mirror?',
    answers: [
      'To see the entire back seat',
      'To frame the rear window with minimal vehicle interior visible',
      'To see your own face clearly',
      'Tilted downward to see the road behind'
    ],
    correctIndex: 1,
    explanation:
      'The interior mirror should be adjusted so that you mostly see the rear window, giving the widest possible view behind.'
  },

  // Section 2 — People (drivers, pedestrians, passengers)
  {
    id: 'hum-13-main-cause',
    difficulty: 'easy',
    question: 'What is the leading cause of traffic accidents worldwide?',
    answers: ['Vehicle mechanical failure', 'Poor road conditions', 'Human error', 'Weather conditions'],
    correctIndex: 2,
    explanation:
      'Studies show that 90–95% of crashes are linked to human error such as distraction, speeding or poor decisions.'
  },
  {
    id: 'hum-14-phone-risk',
    difficulty: 'hard',
    question: 'Using a mobile phone while driving increases crash risk by approximately:',
    answers: ['10%', '25%', '50%', '400%'],
    correctIndex: 3,
    explanation:
      'Research suggests that active phone use while driving can raise crash risk by around four times (≈400%).'
  },
  {
    id: 'hum-15-bac',
    difficulty: 'hard',
    question:
      'At what Blood Alcohol Concentration (BAC) level is a driver considered legally impaired in most countries?',
    answers: ['0.02%', '0.05–0.08%', '0.15%', '0.20%'],
    correctIndex: 1,
    explanation:
      'Many countries set legal impairment around 0.05%–0.08% BAC; even lower levels already reduce reaction and judgment.'
  },
  {
    id: 'hum-16-seatbelt',
    difficulty: 'easy',
    question: 'Seat belts reduce the risk of death for front-seat passengers by approximately:',
    answers: ['15%', '30%', '45%', '50%'],
    correctIndex: 3,
    explanation:
      'Seat belts roughly halve the risk of death in a serious crash by keeping occupants restrained and spreading forces.'
  },
  {
    id: 'hum-17-defensive-driving',
    difficulty: 'easy',
    question: 'What is “defensive driving”?',
    answers: [
      'Driving aggressively to protect your position',
      'Anticipating potential hazards and driving to avoid accidents',
      'Always driving at the minimum speed limit',
      'Avoiding all highways'
    ],
    correctIndex: 1,
    explanation:
      'Defensive driving means constantly scanning, predicting what others might do, and leaving space to avoid collisions.'
  },
  {
    id: 'hum-18-ped-cross',
    difficulty: 'easy',
    question: 'When should a pedestrian cross the street?',
    answers: [
      'Whenever there’s a gap in traffic',
      'At designated crosswalks when safe',
      'Only when no vehicles are visible',
      'Running quickly at any point'
    ],
    correctIndex: 1,
    explanation:
      'Pedestrians should use marked crossings where drivers expect them and only cross when they have time to do so safely.'
  },
  {
    id: 'hum-19-fatigue',
    difficulty: 'medium',
    question: 'Driver fatigue is most dangerous because it:',
    answers: [
      'Causes aggressive driving',
      'Impairs reaction time, judgment, and can cause microsleep',
      'Makes the vehicle use more fuel',
      'Damages the vehicle’s transmission'
    ],
    correctIndex: 1,
    explanation:
      'Fatigue slows reactions and can lead to short “microsleeps” where the driver is effectively unconscious for seconds.'
  },
  {
    id: 'hum-20-child-seat',
    difficulty: 'easy',
    question: 'Where is the safest place for children under 13 years old to sit in a vehicle?',
    answers: ['Front passenger seat', 'Behind the driver', 'Back seat with appropriate restraints', 'On an adult’s lap'],
    correctIndex: 2,
    explanation:
      'Children under 13 are safest in the rear seats using age-appropriate child restraints or booster seats.'
  },
  {
    id: 'hum-21-walking-no-sidewalk',
    difficulty: 'easy',
    question: 'What should pedestrians do when walking along a road with no sidewalk?',
    answers: [
      'Walk on the right side in the direction of traffic',
      'Walk on the left side facing oncoming traffic',
      'Walk in the middle of the road',
      'Walk wherever is most convenient'
    ],
    correctIndex: 1,
    explanation:
      'Walking facing traffic lets pedestrians see approaching vehicles and react if a driver comes too close.'
  },
  {
    id: 'hum-22-distracted',
    difficulty: 'medium',
    question: 'Distracted driving includes all of the following EXCEPT:',
    answers: ['Eating while driving', 'Adjusting the radio', 'Having properly secured passengers', 'Texting while driving'],
    correctIndex: 2,
    explanation:
      'Properly secured passengers are normal; activities like eating, fiddling with controls or texting take attention away.'
  },
  {
    id: 'hum-23-two-second-rule',
    difficulty: 'easy',
    question: 'What is the “two-second rule”?',
    answers: [
      'The time it takes to start the engine',
      'A method to maintain safe following distance',
      'The maximum time to check mirrors',
      'The time needed to fasten a seatbelt'
    ],
    correctIndex: 1,
    explanation:
      'The two-second rule helps you keep enough distance: the same roadside point should pass two seconds after the car ahead.'
  },
  {
    id: 'hum-24-passenger-risk',
    difficulty: 'easy',
    question: 'When are passengers most at risk in a vehicle?',
    answers: ['During long trips', 'When not wearing seatbelts or proper restraints', 'When sitting in the back seat', 'During daytime driving'],
    correctIndex: 1,
    explanation:
      'Unrestrained passengers can be thrown around or even become projectiles that injure others in a crash.'
  },

  // Section 3 — Road environment and traffic signs
  {
    id: 'env-25-triangle-red',
    difficulty: 'easy',
    question: 'A triangular sign with a red border typically indicates:',
    answers: ['Prohibition', 'Warning', 'Mandatory instruction', 'Information'],
    correctIndex: 1,
    explanation: 'In many countries red-bordered triangles are warning signs that alert drivers to hazards ahead.'
  },
  {
    id: 'env-26-stop',
    difficulty: 'easy',
    question: 'What does a typical red octagonal STOP sign mean?',
    answers: ['Yield to traffic', 'Stop completely', 'No entry', 'Speed limit zone'],
    correctIndex: 1,
    explanation:
      'The stop sign requires a full stop at the stop line or before entering the junction, then proceed only when safe.'
  },
  {
    id: 'env-27-yield',
    difficulty: 'easy',
    question: 'What does a triangular Yield/Give Way sign indicate?',
    answers: ['Stop completely', 'Yield/Give way to other traffic', 'No entry', 'Dangerous descent'],
    correctIndex: 1,
    explanation:
      'A yield sign tells you to slow down, give way to traffic with priority, and stop if necessary to avoid conflict.'
  },
  {
    id: 'env-28-blue-rect',
    difficulty: 'easy',
    question: 'Blue rectangular or square traffic signs generally provide:',
    answers: ['Warnings about hazards', 'Prohibitions', 'Mandatory instructions or information', 'Temporary road work notices'],
    correctIndex: 2,
    explanation:
      'Blue rectangular signs are often used for information, guidance and in some systems for certain mandatory instructions.'
  },
  {
    id: 'env-29-yellow-diamond',
    difficulty: 'easy',
    question: 'A yellow diamond-shaped traffic sign typically indicates:',
    answers: ['Warning (in some countries like the USA)', 'School zone', 'Mandatory direction', 'Parking allowed'],
    correctIndex: 0,
    explanation:
      'In countries such as the USA, yellow diamond signs warn of hazards like curves, junctions or crossings ahead.'
  },
  {
    id: 'env-30-no-overtaking',
    difficulty: 'medium',
    question: 'What does a sign showing two cars side-by-side with one overtaking usually indicate?',
    answers: ['Overtaking allowed', 'No overtaking/No passing', 'Two-way traffic', 'Racing prohibited'],
    correctIndex: 1,
    explanation:
      'Two cars side-by-side, often with one red, indicate a no-overtaking zone where passing other vehicles is prohibited.'
  },
  {
    id: 'env-31-general-danger',
    difficulty: 'medium',
    question: 'A sign with a black exclamation mark in a red or yellow triangle warns of:',
    answers: ['General danger or hazard ahead', 'Emergency services nearby', 'Exclamation point in road name', 'End of highway'],
    correctIndex: 0,
    explanation:
      'The exclamation mark is used as a general warning where no specific symbol exists; a plate may explain the hazard.'
  },
  {
    id: 'env-32-speed-limit',
    difficulty: 'easy',
    question: 'What does a circular sign with a red border showing the number “50” indicate?',
    answers: ['Minimum speed 50 km/h', 'Maximum speed 50 km/h', '50 meters to next junction', 'Weight limit 50 tons'],
    correctIndex: 1,
    explanation:
      'Red-bordered circles usually impose maximum limits; “50” means the maximum legal speed is 50 km/h in normal conditions.'
  },
  {
    id: 'env-33-ped-crossing',
    difficulty: 'easy',
    question: 'What does a typical pedestrian crossing sign indicate?',
    answers: ['No pedestrians allowed', 'Pedestrian crossing ahead', 'Pedestrian-only zone', 'Pedestrians must yield'],
    correctIndex: 1,
    explanation:
      'Pedestrian crossing signs warn drivers to slow down and be ready to stop for people using a crosswalk.'
  },
  {
    id: 'env-34-slippery-road',
    difficulty: 'medium',
    question: 'What does a triangular warning sign with a drawing of a car skidding mean?',
    answers: ['Racing track ahead', 'Slippery road conditions ahead', 'Sharp turn ahead', 'Parking area for sports cars'],
    correctIndex: 1,
    explanation:
      'The skidding car symbol warns that the surface may be slippery due to rain, ice, snow or other contaminants.'
  },
  {
    id: 'env-35-straight-only',
    difficulty: 'medium',
    question: 'A blue circular sign with a white arrow pointing upward means:',
    answers: ['One-way street ahead', 'Uphill ahead', 'Proceed straight only (mandatory direction)', 'Sky viewing area'],
    correctIndex: 2,
    explanation:
      'Blue circular signs often show mandatory movements; an upward arrow requires drivers to continue straight ahead only.'
  },
  {
    id: 'env-36-bicycle',
    difficulty: 'easy',
    question: 'What does a sign showing a bicycle usually indicate?',
    answers: ['Bicycle repair shop', 'Bicycle lane or bicycle crossing ahead', 'Bicycles prohibited', 'Bicycle rental nearby'],
    correctIndex: 1,
    explanation:
      'A bicycle symbol on a sign typically marks a cycle lane, shared path or crossing where cyclists are expected.'
  },
  {
    id: 'env-37-green-panels',
    difficulty: 'easy',
    question: 'Green signs on highways typically provide information about:',
    answers: ['Emergency exits only', 'Distances, directions, and destinations', 'Environmental zones', 'Rest areas only'],
    correctIndex: 1,
    explanation:
      'Large green panels are generally used for route guidance, giving distances, destinations and exit information.'
  },
  {
    id: 'env-38-two-way-traffic',
    difficulty: 'easy',
    question: 'What does a triangular sign with two arrows (one pointing up, one pointing down) indicate?',
    answers: ['Elevator ahead', 'Two-way traffic ahead', 'Bidirectional cycling path', 'Vertical clearance information'],
    correctIndex: 1,
    explanation:
      'The opposing arrows warn that you are entering or are on a section of road with traffic in both directions.'
  }
]

