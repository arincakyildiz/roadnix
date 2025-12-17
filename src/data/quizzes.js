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
  },

  // ========== NEW EASY QUESTIONS (4) ==========
  {
    id: 'veh-39-fog-lights',
    difficulty: 'easy',
    question: 'When should fog lights be used?',
    answers: ['At night on well-lit roads', 'Only in fog or heavy rain with visibility below 100m', 'Whenever headlights are on', 'During daytime for visibility'],
    correctIndex: 1,
    explanation: 'Fog lights are designed for poor visibility conditions like fog or heavy rain. Using them unnecessarily can dazzle other drivers.'
  },
  {
    id: 'veh-40-vehicle-inspection',
    difficulty: 'easy',
    question: 'Why is regular vehicle inspection (MOT/roadworthiness test) important?',
    answers: ['To increase fuel efficiency', 'To ensure the vehicle meets safety standards', 'To improve vehicle speed', 'To reduce insurance costs'],
    correctIndex: 1,
    explanation: 'Regular inspections ensure brakes, lights, tires and other safety systems work properly, keeping you and others safe.'
  },
  {
    id: 'env-41-ped-crossing-stop',
    difficulty: 'easy',
    question: 'What must a driver do when a pedestrian is waiting at a zebra crossing?',
    answers: ['Honk to warn the pedestrian', 'Stop and let them cross', 'Flash headlights and continue', 'Speed up to pass quickly'],
    correctIndex: 1,
    explanation: 'Drivers must stop for pedestrians waiting at or crossing a zebra crossing. Pedestrians have priority.'
  },
  {
    id: 'veh-42-braking-distance',
    difficulty: 'easy',
    question: 'What factors affect braking distance?',
    answers: ['Only vehicle weight', 'Speed, road conditions, tire condition, and brake condition', 'Only weather conditions', 'Only driver reaction time'],
    correctIndex: 1,
    explanation: 'Braking distance depends on speed, road surface, tire grip, brake condition, and vehicle weight. Higher speed dramatically increases it.'
  },

  // ========== NEW MEDIUM QUESTIONS (20) ==========
  {
    id: 'hum-43-night-driving',
    difficulty: 'medium',
    question: 'What is the main danger of driving at night?',
    answers: ['Increased fuel consumption', 'Reduced visibility and increased fatigue', 'Higher traffic density', 'Louder road noise'],
    correctIndex: 1,
    explanation: 'Night driving limits your vision and increases drowsiness. Always use proper lighting and take breaks on long trips.'
  },
  {
    id: 'veh-44-rain-driving',
    difficulty: 'medium',
    question: 'How should you adjust your driving in heavy rain?',
    answers: ['Drive faster to get out of the rain', 'Reduce speed, increase following distance, use dipped headlights', 'Use full beam headlights', 'Drive as normal'],
    correctIndex: 1,
    explanation: 'Rain reduces grip and visibility. Slow down, keep more distance, and use dipped headlights so others can see you.'
  },
  {
    id: 'veh-45-emergency-braking',
    difficulty: 'medium',
    question: 'What happens if you brake suddenly without ABS on a slippery road?',
    answers: ['The car stops faster', 'Wheels may lock and you lose steering control', 'The car automatically stabilizes', 'Nothing unusual happens'],
    correctIndex: 1,
    explanation: 'Without ABS, hard braking can lock the wheels, causing a skid. You cannot steer a skidding vehicle effectively.'
  },
  {
    id: 'env-46-junction-priority',
    difficulty: 'medium',
    question: 'At an unmarked junction with equal roads, who has priority?',
    answers: ['The larger vehicle', 'Traffic coming from the right (in right-hand traffic countries)', 'The faster vehicle', 'Whoever arrives first'],
    correctIndex: 1,
    explanation: 'In most countries, when no signs exist, traffic from the right has priority at equal intersections.'
  },
  {
    id: 'env-47-roundabout-rules',
    difficulty: 'medium',
    question: 'When entering a roundabout, you should:',
    answers: ['Speed up to merge quickly', 'Give way to traffic already on the roundabout', 'Stop completely before entering', 'Flash your headlights to signal entry'],
    correctIndex: 1,
    explanation: 'Traffic already circulating on the roundabout has priority. Wait for a safe gap before entering.'
  },
  {
    id: 'veh-48-emergency-stop',
    difficulty: 'medium',
    question: 'If your vehicle breaks down on a highway, what should you do first?',
    answers: ['Stay in the vehicle and call for help', 'Move to the hard shoulder, turn on hazards, exit safely and stand behind barriers', 'Try to fix the vehicle immediately', 'Wave at other drivers for help'],
    correctIndex: 1,
    explanation: 'Pull over safely, activate hazard lights, place warning triangle, and move away from traffic behind a barrier if possible.'
  },
  {
    id: 'veh-49-tire-blowout',
    difficulty: 'medium',
    question: 'What should you do if a tire blows out while driving?',
    answers: ['Brake hard immediately', 'Hold the steering firmly, ease off the accelerator, and gradually slow down', 'Turn sharply to the side of the road', 'Accelerate to maintain control'],
    correctIndex: 1,
    explanation: 'Keep a firm grip on the steering wheel, do not brake suddenly. Let the car slow naturally while steering straight, then pull over safely.'
  },
  {
    id: 'veh-50-overheating',
    difficulty: 'medium',
    question: 'If your engine temperature gauge shows overheating, you should:',
    answers: ['Pour cold water on the engine immediately', 'Stop safely, turn off AC, let engine cool before checking coolant', 'Ignore it if the car still runs', 'Rev the engine to cool it down'],
    correctIndex: 1,
    explanation: 'Stop the car safely, turn off the AC, and wait for the engine to cool. Never open the radiator cap when hot.'
  },
  {
    id: 'veh-51-brake-fluid',
    difficulty: 'medium',
    question: 'How often should brake fluid be checked and replaced?',
    answers: ['Every 10 years', 'Check monthly, replace every 2-3 years or as recommended', 'Only when brakes feel soft', 'Never needs replacement'],
    correctIndex: 1,
    explanation: 'Brake fluid absorbs moisture over time, reducing effectiveness. Check regularly and replace per manufacturer guidelines.'
  },
  {
    id: 'veh-52-light-check',
    difficulty: 'medium',
    question: 'How often should you check your vehicle lights are working?',
    answers: ['Once a year', 'Weekly or before long journeys', 'Only at MOT time', 'Monthly'],
    correctIndex: 1,
    explanation: 'Check all lights weekly or before any long trip. Working lights are essential for safety and legal compliance.'
  },
  {
    id: 'hum-53-break-frequency',
    difficulty: 'medium',
    question: 'On a long journey, how often should you take a break?',
    answers: ['Every 4-5 hours', 'Every 2 hours or 100 miles', 'Only when you feel tired', 'Every 30 minutes'],
    correctIndex: 1,
    explanation: 'Take a 15-minute break at least every 2 hours or 100 miles. Fatigue builds gradually and affects reactions before you notice.'
  },
  {
    id: 'hum-54-alcohol-duration',
    difficulty: 'medium',
    question: 'How long does it take for alcohol to leave your system?',
    answers: ['1 hour per unit on average', 'Drinking coffee speeds it up', '30 minutes per drink', 'It depends on body weight only'],
    correctIndex: 0,
    explanation: 'The body processes about 1 unit of alcohol per hour. Coffee, food, or water do not speed up this process.'
  },
  {
    id: 'veh-55-cabin-air',
    difficulty: 'medium',
    question: 'Why is proper ventilation important when driving?',
    answers: ['To save fuel', 'To prevent drowsiness and maintain alertness', 'To keep the engine cool', 'To reduce noise'],
    correctIndex: 1,
    explanation: 'Fresh air helps prevent drowsiness. A stuffy cabin can make you sleepy, especially on long trips.'
  },
  {
    id: 'veh-56-parking-sensors',
    difficulty: 'medium',
    question: 'How do parking sensors help drivers?',
    answers: ['They automatically park the car', 'They detect obstacles and warn with audible signals', 'They lock the car when parked', 'They improve fuel efficiency'],
    correctIndex: 1,
    explanation: 'Parking sensors use ultrasonic waves to detect obstacles and alert the driver with beeps that increase as you get closer.'
  },
  {
    id: 'veh-57-reversing-camera',
    difficulty: 'medium',
    question: 'When using a reversing camera, you should:',
    answers: ['Rely only on the camera', 'Use it as an aid but also check mirrors and look around', 'Ignore it and use mirrors only', 'Use it only at night'],
    correctIndex: 1,
    explanation: 'Cameras have blind spots. Always combine camera view with mirror checks and physically looking around.'
  },
  {
    id: 'veh-58-cruise-control',
    difficulty: 'medium',
    question: 'When should you NOT use cruise control?',
    answers: ['On long straight highways', 'In rain, snow, heavy traffic, or winding roads', 'During daytime driving', 'When driving alone'],
    correctIndex: 1,
    explanation: 'Cruise control is unsafe in conditions requiring frequent speed adjustments. Use it only on clear, dry, uncongested roads.'
  },
  {
    id: 'veh-59-automatic-gears',
    difficulty: 'medium',
    question: 'In an automatic vehicle, what does "P" stand for?',
    answers: ['Power', 'Park - locks the transmission', 'Pause', 'Performance mode'],
    correctIndex: 1,
    explanation: 'P (Park) locks the transmission to prevent the car from rolling. Always engage P before leaving the vehicle.'
  },
  {
    id: 'veh-60-steering-lock',
    difficulty: 'medium',
    question: 'What is the purpose of a steering lock?',
    answers: ['To make parking easier', 'To prevent theft by locking the steering wheel', 'To improve steering response', 'To protect the steering wheel from damage'],
    correctIndex: 1,
    explanation: 'The steering lock engages when the ignition is off and the key removed, making it harder to steal the vehicle.'
  },
  {
    id: 'veh-61-immobilizer',
    difficulty: 'medium',
    question: 'What does an engine immobilizer do?',
    answers: ['Stops the engine at red lights', 'Prevents the engine from starting without the correct key/fob', 'Limits engine speed', 'Improves fuel efficiency'],
    correctIndex: 1,
    explanation: 'An immobilizer is an anti-theft device that only allows the engine to start when the correct transponder key is used.'
  },
  {
    id: 'hum-62-insurance-mandatory',
    difficulty: 'medium',
    question: 'Why is third-party vehicle insurance mandatory in most countries?',
    answers: ['To protect your own vehicle', 'To cover damage you cause to others and their property', 'To get cheaper repairs', 'To reduce fuel costs'],
    correctIndex: 1,
    explanation: 'Third-party insurance ensures victims of accidents you cause can receive compensation for injuries and property damage.'
  },

  // ========== NEW HARD QUESTIONS (28) ==========
  {
    id: 'hum-63-accident-procedure',
    difficulty: 'hard',
    question: 'What is the correct sequence of actions at an accident scene?',
    answers: [
      'Call police, move vehicles, exchange details',
      'Ensure safety, call emergency services, provide first aid if trained, gather information',
      'Take photos first, then call insurance',
      'Leave immediately to avoid involvement'
    ],
    correctIndex: 1,
    explanation: 'Safety first: secure the scene, call 112/999, help injured if safe and trained, then exchange details and document.'
  },
  {
    id: 'hum-64-first-aid-basics',
    difficulty: 'hard',
    question: 'If a person is unconscious but breathing after an accident, you should:',
    answers: ['Move them immediately', 'Place them in the recovery position and monitor breathing', 'Give them water', 'Shake them vigorously to wake them'],
    correctIndex: 1,
    explanation: 'The recovery position keeps the airway clear. Do not move them unless in immediate danger; wait for professionals.'
  },
  {
    id: 'hum-65-legal-responsibility',
    difficulty: 'hard',
    question: 'After a traffic accident with injuries, failing to stop and report can result in:',
    answers: ['A small fine only', 'Criminal charges, license suspension, and imprisonment', 'No consequences if you were not at fault', 'Insurance handling the matter'],
    correctIndex: 1,
    explanation: 'Hit-and-run is a serious criminal offense. You must stop, provide assistance, and report to police even if you were not at fault.'
  },
  {
    id: 'hum-66-drunk-driving-penalty',
    difficulty: 'hard',
    question: 'In most European countries, penalties for drunk driving typically include:',
    answers: ['Warning letter only', 'Fines, license suspension, possible imprisonment, and criminal record', 'Mandatory driving course only', 'Insurance premium increase only'],
    correctIndex: 1,
    explanation: 'Drunk driving carries severe penalties including heavy fines, license revocation, prison time, and a permanent criminal record.'
  },
  {
    id: 'hum-67-speeding-consequences',
    difficulty: 'hard',
    question: 'What is the relationship between speed and impact force in a collision?',
    answers: ['Impact force increases linearly with speed', 'Impact force increases with the square of speed (doubling speed = 4x force)', 'Speed does not affect impact force', 'Impact force only depends on vehicle weight'],
    correctIndex: 1,
    explanation: 'Kinetic energy = ½mv². Doubling your speed quadruples the impact force, making crashes at high speed exponentially more deadly.'
  },
  {
    id: 'env-68-red-light-consequences',
    difficulty: 'hard',
    question: 'Running a red light can result in:',
    answers: ['No penalty if no camera', 'Points on license, fines, and potential disqualification for repeat offenses', 'Warning only', 'Civil fine only'],
    correctIndex: 1,
    explanation: 'Red light violations carry points, fines, and repeated offenses can lead to driving bans. Cameras record violations automatically.'
  },
  {
    id: 'hum-69-seatbelt-penalty',
    difficulty: 'hard',
    question: 'What are the consequences of not wearing a seatbelt?',
    answers: ['No penalty for adults', 'Fines, penalty points, and the driver is responsible for passengers under 14', 'Warning only for first offense', 'Insurance covers any resulting injuries'],
    correctIndex: 1,
    explanation: 'Not wearing a seatbelt results in fines. Drivers are responsible for ensuring all passengers under 14 wear belts.'
  },
  {
    id: 'hum-70-phone-penalty',
    difficulty: 'hard',
    question: 'Using a handheld phone while driving typically results in:',
    answers: ['Small fine only', 'Significant fine, penalty points, and possible license suspension for new drivers', 'Warning only', 'No penalty if stopped at traffic lights'],
    correctIndex: 1,
    explanation: 'Phone use while driving carries heavy fines and points. New drivers may face immediate license suspension.'
  },
  {
    id: 'hum-71-accident-statistics',
    difficulty: 'hard',
    question: 'According to WHO statistics, approximately how many people die in road accidents globally each year?',
    answers: ['100,000', '500,000', '1.35 million', '5 million'],
    correctIndex: 2,
    explanation: 'Road traffic injuries kill approximately 1.35 million people annually and are the leading cause of death for those aged 5-29.'
  },
  {
    id: 'hum-72-young-driver-risk',
    difficulty: 'hard',
    question: 'Why are young drivers (17-25) at higher accident risk?',
    answers: ['They drive older cars', 'Less experience, overconfidence, and higher risk-taking behavior', 'They drive more miles', 'They have worse eyesight'],
    correctIndex: 1,
    explanation: 'Young drivers lack experience in hazard perception and are more likely to speed, drive at night, and take risks.'
  },
  {
    id: 'hum-73-elderly-challenges',
    difficulty: 'hard',
    question: 'What driving challenges may elderly drivers face?',
    answers: ['Only slower reaction times', 'Reduced vision, slower reactions, reduced flexibility for blind spot checks, medication effects', 'No significant challenges', 'Only hearing loss'],
    correctIndex: 1,
    explanation: 'Age can affect vision, reactions, flexibility, and cognitive function. Some medications also impair driving ability.'
  },
  {
    id: 'hum-74-night-accident-rate',
    difficulty: 'hard',
    question: 'What percentage of fatal accidents occur during nighttime hours despite less traffic?',
    answers: ['About 10%', 'About 25%', 'About 40-50%', 'About 80%'],
    correctIndex: 2,
    explanation: 'Despite less traffic, 40-50% of fatal crashes occur at night due to reduced visibility, fatigue, and alcohol involvement.'
  },
  {
    id: 'hum-75-weather-accidents',
    difficulty: 'hard',
    question: 'How much more likely are accidents on wet roads compared to dry roads?',
    answers: ['10% more likely', '2-3 times more likely', '10 times more likely', 'No significant difference'],
    correctIndex: 1,
    explanation: 'Wet roads double or triple accident risk due to reduced tire grip, longer stopping distances, and reduced visibility.'
  },
  {
    id: 'env-76-rural-vs-urban',
    difficulty: 'hard',
    question: 'Why are rural road accidents often more severe than urban accidents?',
    answers: ['More traffic in rural areas', 'Higher speeds, narrower roads, less lighting, and longer emergency response times', 'More pedestrians', 'Worse road surfaces'],
    correctIndex: 1,
    explanation: 'Rural roads have higher speed limits, no lighting, tighter curves, and emergency services take longer to arrive.'
  },
  {
    id: 'veh-77-vehicle-safety-rating',
    difficulty: 'hard',
    question: 'What does a 5-star Euro NCAP rating indicate?',
    answers: ['Fuel efficiency level', 'Highest level of crash protection and safety features', 'Emission standards', 'Reliability rating'],
    correctIndex: 1,
    explanation: 'Euro NCAP tests crash protection for adults, children, pedestrians, and safety assist features. 5 stars = excellent protection.'
  },
  {
    id: 'veh-78-aeb-system',
    difficulty: 'hard',
    question: 'How does Autonomous Emergency Braking (AEB) work?',
    answers: ['It replaces the driver completely', 'Sensors detect imminent collision and apply brakes if driver does not react', 'It only works when parked', 'It increases braking power'],
    correctIndex: 1,
    explanation: 'AEB uses cameras/radar to detect obstacles. If collision is imminent and driver does not brake, the system brakes automatically.'
  },
  {
    id: 'veh-79-lane-assist',
    difficulty: 'hard',
    question: 'What does a Lane Departure Warning system do?',
    answers: ['Automatically changes lanes', 'Alerts driver when unintentionally leaving the lane without signaling', 'Prevents all lane changes', 'Only works on highways'],
    correctIndex: 1,
    explanation: 'Lane departure systems use cameras to detect lane markings and warn (vibration/sound) when drifting without indicating.'
  },
  {
    id: 'veh-80-adaptive-cruise',
    difficulty: 'hard',
    question: 'How does Adaptive Cruise Control differ from standard cruise control?',
    answers: ['It uses less fuel', 'It automatically adjusts speed to maintain safe distance from vehicle ahead', 'It only works in cities', 'There is no difference'],
    correctIndex: 1,
    explanation: 'ACC uses radar/cameras to detect vehicles ahead and automatically slows down or speeds up to maintain a set following distance.'
  },
  {
    id: 'veh-81-blind-spot-monitor',
    difficulty: 'hard',
    question: 'How does a Blind Spot Monitoring system alert the driver?',
    answers: ['Audible alarm only', 'Visual warning in/near side mirrors, often with audible alert if indicating to change lanes', 'Automatic steering correction', 'Dashboard message only'],
    correctIndex: 1,
    explanation: 'BSM uses radar to detect vehicles in blind spots and shows a warning light in the mirror, intensifying if you signal to change lanes.'
  },
  {
    id: 'veh-82-auto-parking',
    difficulty: 'hard',
    question: 'What does an automatic parking system require from the driver?',
    answers: ['Nothing - fully autonomous', 'Driver controls throttle and brake while system steers, or supervises fully automatic parking', 'Driver must still steer', 'Only works in marked spaces'],
    correctIndex: 1,
    explanation: 'Most systems either steer while you control pedals, or park autonomously while driver supervises and can intervene.'
  },
  {
    id: 'veh-83-rear-collision-prevention',
    difficulty: 'hard',
    question: 'Rear Cross-Traffic Alert (RCTA) is most useful when:',
    answers: ['Driving forward', 'Reversing out of parking spaces with limited visibility', 'At traffic lights', 'On highways'],
    correctIndex: 1,
    explanation: 'RCTA warns of vehicles approaching from the sides when reversing, helpful in parking lots where visibility is blocked.'
  },
  {
    id: 'veh-84-drowsiness-detection',
    difficulty: 'hard',
    question: 'How do drowsiness detection systems work?',
    answers: ['They measure blood alcohol', 'They monitor steering patterns, eye movement, or facial features for signs of fatigue', 'They check heart rate only', 'They analyze voice patterns'],
    correctIndex: 1,
    explanation: 'These systems analyze steering behavior, eye closure, head position, or lane keeping to detect fatigue signs and suggest breaks.'
  },
  {
    id: 'veh-85-tsr-system',
    difficulty: 'hard',
    question: 'What does a Traffic Sign Recognition (TSR) system do?',
    answers: ['Automatically obeys all signs', 'Uses cameras to read road signs and display them to the driver', 'Controls traffic lights', 'Navigates to destinations'],
    correctIndex: 1,
    explanation: 'TSR cameras read speed limits and other signs, displaying them on the dashboard so drivers stay informed of current restrictions.'
  },
  {
    id: 'veh-86-night-vision',
    difficulty: 'hard',
    question: 'How do automotive night vision systems help drivers?',
    answers: ['They brighten headlights', 'They use infrared cameras to detect pedestrians and animals beyond headlight range', 'They only work in fog', 'They replace headlights'],
    correctIndex: 1,
    explanation: 'Night vision uses thermal or infrared imaging to spot warm objects like people or animals far beyond headlight range.'
  },
  {
    id: 'veh-87-360-camera',
    difficulty: 'hard',
    question: 'What is a 360-degree surround view camera system?',
    answers: ['A single rear camera', 'Multiple cameras combined to show a birds-eye view around the entire vehicle', 'A camera inside the car', 'A dashcam for recording'],
    correctIndex: 1,
    explanation: '360-degree systems combine 4+ cameras to create an overhead view of the car and surroundings, helping with tight parking.'
  },
  {
    id: 'veh-88-hud-display',
    difficulty: 'hard',
    question: 'What is the benefit of a Head-Up Display (HUD)?',
    answers: ['Entertainment purposes', 'Projects speed and navigation onto windshield so driver keeps eyes on road', 'Shows rear camera view', 'Displays advertisements'],
    correctIndex: 1,
    explanation: 'HUD projects key information onto the windshield, reducing the time drivers look away from the road to check instruments.'
  },
  {
    id: 'veh-89-keyless-security',
    difficulty: 'hard',
    question: 'What is a "relay attack" on keyless entry vehicles?',
    answers: ['Hacking the car radio', 'Thieves amplify key fob signal to unlock and start car without the real key', 'Breaking windows', 'Towing the vehicle'],
    correctIndex: 1,
    explanation: 'Criminals use relay devices to extend your key fob signal from inside your home to unlock and start your car. Store keys in signal-blocking pouches.'
  },
  {
    id: 'veh-90-ev-safety',
    difficulty: 'hard',
    question: 'What unique safety consideration applies to electric vehicles in accidents?',
    answers: ['They explode easily', 'High-voltage batteries require special handling by trained emergency responders', 'They are more flammable', 'No special considerations'],
    correctIndex: 1,
    explanation: 'EV batteries can pose electrocution risks. Emergency responders need EV-specific training. Orange cables indicate high voltage.'
  }
]

