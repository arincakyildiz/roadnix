export const signCategories = [
  { id: 'all', label: 'All signs' },
  { id: 'warning', label: 'Warning signs' },
  { id: 'priority', label: 'Priority & control' },
  { id: 'mandatory', label: 'Mandatory signs' },
  { id: 'prohibition', label: 'Prohibitions' },
  { id: 'end', label: 'End of prohibition' },
  { id: 'directional', label: 'Directional signs' },
  { id: 'service', label: 'Services & facilities' },
  { id: 'pedestrian', label: 'Pedestrian & bicycle' },
  { id: 'speed', label: 'Speed limits' }
]

export const trafficSigns = [
  // warning signs
  {
    id: 'warn-slippery',
    category: 'warning',
    name: 'Slippery Road',
    description: 'Surface ahead becomes slippery when wet or icy. Reduce speed and avoid sudden maneuvers.',
    example: 'Bridge decks and forest corridors during rain.',
    icon: { variant: 'triangle', label: '〰' }
  },
  {
    id: 'warn-twoway',
    category: 'warning',
    name: 'Two-Way Traffic',
    description: 'One-way section ends; expect vehicles coming from the opposite direction.',
    example: 'Mountain tunnels and divided highways after a merge point.',
    icon: { variant: 'triangle', label: '⇅' }
  },
  {
    id: 'warn-ped',
    category: 'warning',
    name: 'Pedestrian Crossing',
    description: 'Yield to pedestrians crossing the roadway.',
    example: 'School zones and downtown main streets.',
    icon: { variant: 'triangle', label: '🚶' }
  },
  {
    id: 'warn-narrow',
    category: 'warning',
    name: 'Road Narrows',
    description: 'Lane width reduces ahead. Drive centrally and slow down.',
    example: 'Temporary contraflow sections near construction.',
    icon: { variant: 'triangle', label: '⇗⇖' }
  },
  {
    id: 'warn-curve-left',
    category: 'warning',
    name: 'Left Curve Ahead',
    description: 'Reduce speed and position for a sharp left-hand bend.',
    example: 'Forest roads with hidden curves.',
    icon: { variant: 'triangle', label: '↶' }
  },
  {
    id: 'warn-curve-right',
    category: 'warning',
    name: 'Right Curve Ahead',
    description: 'Prepare for a tight right-hand curve; slow down.',
    example: 'Country roads with reduced visibility.',
    icon: { variant: 'triangle', label: '↷' }
  },
  {
    id: 'warn-merge',
    category: 'warning',
    name: 'Traffic Merging',
    description: 'Another lane will merge; anticipate vehicles joining.',
    example: 'Urban ring roads with short on-ramps.',
    icon: { variant: 'triangle', label: '⇄|' }
  },
  {
    id: 'warn-bump',
    category: 'warning',
    name: 'Speed Bump',
    description: 'Raised bump or hump in the road—slow down.',
    example: 'Residential traffic-calming installations.',
    icon: { variant: 'triangle', label: '∩' }
  },
  {
    id: 'warn-traffic-light',
    category: 'warning',
    name: 'Traffic Signals Ahead',
    description: 'Prepare for a signalized junction; braking distance may be short.',
    example: 'Hidden intersections after fast sections.',
    icon: { variant: 'triangle', label: '🚦' }
  },
  {
    id: 'warn-roadwork',
    category: 'warning',
    name: 'Road Works',
    description: 'Temporary works ahead; lanes or surfaces may change.',
    example: 'Highway maintenance zones.',
    icon: { variant: 'triangle', label: '👷' }
  },
  {
    id: 'warn-fallingrocks',
    category: 'warning',
    name: 'Falling Rocks',
    description: 'Watch for debris and falling rocks from cliffs.',
    example: 'Mountain passes or seaside cliffs.',
    icon: { variant: 'triangle', label: '⛰' }
  },
  {
    id: 'warn-crosswind',
    category: 'warning',
    name: 'Crosswinds',
    description: 'Strong lateral winds likely; grip wheel firmly.',
    example: 'Bridge crossings and open plains.',
    icon: { variant: 'triangle', label: '⇀' }
  },
  {
    id: 'warn-animals',
    category: 'warning',
    name: 'Animals Crossing',
    description: 'Expect wild or domestic animals on the carriageway.',
    example: 'Rural highways near farms or forests.',
    icon: { variant: 'triangle', label: '🦌' }
  },
  {
    id: 'warn-railroad',
    category: 'warning',
    name: 'Railroad Crossing',
    description: 'Uncontrolled railway crossing ahead; prepare to stop.',
    example: 'Secondary roads intersecting with freight lines.',
    icon: { variant: 'triangle', label: '🚂' }
  },
  {
    id: 'warn-roundabout',
    category: 'warning',
    name: 'Roundabout Ahead',
    description: 'Circular junction ahead; reduce speed and yield.',
    example: 'Town entries or motorway exits.',
    icon: { variant: 'triangle', label: '⟳' }
  },
  // priority & control
  {
    id: 'priority-stop',
    category: 'priority',
    name: 'Stop',
    description: 'Come to a full stop and proceed only when clear.',
    example: 'Minor roads meeting priority highways.',
    icon: { variant: 'octagon-red', label: 'STOP' }
  },
  {
    id: 'priority-yield',
    category: 'priority',
    name: 'Yield',
    description: 'Give right of way to cross traffic; proceed when safe.',
    example: 'Roundabout entries and skewed intersections.',
    icon: { variant: 'triangle-inverted', label: 'YIELD' }
  },
  {
    id: 'priority-main-road',
    category: 'priority',
    name: 'Priority Road',
    description: 'You have priority at upcoming intersections until end sign.',
    example: 'Rural arterials crossing village streets.',
    icon: { variant: 'diamond-yellow', label: 'PR' }
  },
  {
    id: 'priority-end',
    category: 'priority',
    name: 'End of Priority',
    description: 'Priority status ends; expect to yield at next junction.',
    example: 'Approaching dense town grids.',
    icon: { variant: 'diamond-yellow', label: 'PR×' }
  },
  // mandatory actions
  {
    id: 'mandatory-right',
    category: 'mandatory',
    name: 'Turn Right',
    description: 'You must turn right at the next junction.',
    example: 'Downtown one-way grids and industrial exits.',
    icon: { variant: 'circle-blue', label: '↱' }
  },
  {
    id: 'mandatory-left',
    category: 'mandatory',
    name: 'Turn Left',
    description: 'Left turn is compulsory at the next intersection.',
    example: 'Signalized multi-lane junctions.',
    icon: { variant: 'circle-blue', label: '↰' }
  },
  {
    id: 'mandatory-straight',
    category: 'mandatory',
    name: 'Straight Ahead Only',
    description: 'Stay in lane and continue straight; no turns permitted.',
    example: 'Tunnel approaches or controlled intersections.',
    icon: { variant: 'circle-blue', label: '↑' }
  },
  {
    id: 'mandatory-keep-left',
    category: 'mandatory',
    name: 'Keep Left',
    description: 'Pass an obstruction on the left side.',
    example: 'Traffic islands or temporary works.',
    icon: { variant: 'circle-blue', label: '↺' }
  },
  {
    id: 'mandatory-keep-right',
    category: 'mandatory',
    name: 'Keep Right',
    description: 'Pass the obstacle to the right.',
    example: 'Median islands or refuge zones.',
    icon: { variant: 'circle-blue', label: '↻' }
  },
  {
    id: 'mandatory-pass-left',
    category: 'mandatory',
    name: 'Pass Left Side',
    description: 'Vehicles must keep to the left of the sign.',
    example: 'Separated cycle tracks or contraflow lanes.',
    icon: { variant: 'circle-blue', label: '⇐' }
  },
  {
    id: 'mandatory-pass-right',
    category: 'mandatory',
    name: 'Pass Right Side',
    description: 'Vehicles must pass to the right of the marker.',
    example: 'Raised curbs and traffic calming islands.',
    icon: { variant: 'circle-blue', label: '⇒' }
  },
  {
    id: 'mandatory-roundabout',
    category: 'mandatory',
    name: 'Mandatory Roundabout Direction',
    description: 'Enter the roundabout circulating the indicated way.',
    example: 'Mini roundabouts in city centers.',
    icon: { variant: 'circle-blue', label: '⟳' }
  },
  {
    id: 'mandatory-min-speed',
    category: 'mandatory',
    name: 'Minimum Speed 60',
    description: 'Maintain at least 60 km/h unless unsafe.',
    example: 'Express lanes or tunnel sections.',
    icon: { variant: 'circle-blue', label: '60' }
  },
  // prohibitions
  {
    id: 'prohibit-entry',
    category: 'prohibition',
    name: 'No Entry',
    description: 'Do not enter; traffic flows in the opposite direction.',
    example: 'End of one-way streets and emergency access roads.',
    icon: { variant: 'circle-red', label: '⛔' }
  },
  {
    id: 'prohibit-overtake',
    category: 'prohibition',
    name: 'No Overtaking',
    description: 'Passing is prohibited for all motor vehicles.',
    example: 'Curvy hillside roads with limited visibility.',
    icon: { variant: 'circle-red', label: '⇄' }
  },
  {
    id: 'prohibit-horn',
    category: 'prohibition',
    name: 'No Horn',
    description: 'Avoid using the horn unless in an emergency.',
    example: 'Hospital zones and wildlife protection areas.',
    icon: { variant: 'circle-red', label: '🔕' }
  },
  {
    id: 'prohibit-left',
    category: 'prohibition',
    name: 'No Left Turn',
    description: 'Left turns are prohibited beyond this sign.',
    example: 'Grid streets with transit priority lanes.',
    icon: { variant: 'circle-red', label: '↺' }
  },
  {
    id: 'prohibit-right',
    category: 'prohibition',
    name: 'No Right Turn',
    description: 'Right turns are not allowed at the junction ahead.',
    example: 'Cycling boulevards or tram corridors.',
    icon: { variant: 'circle-red', label: '↻' }
  },
  {
    id: 'prohibit-uturn',
    category: 'prohibition',
    name: 'No U-Turn',
    description: 'U-turns are strictly forbidden.',
    example: 'Median-separated avenues.',
    icon: { variant: 'circle-red', label: '⬄' }
  },
  {
    id: 'prohibit-trucks',
    category: 'prohibition',
    name: 'No Heavy Trucks',
    description: 'Vehicles exceeding truck classification may not enter.',
    example: 'Historic districts and weak bridges.',
    icon: { variant: 'circle-red', label: '🚛' }
  },
  {
    id: 'prohibit-motorcycles',
    category: 'prohibition',
    name: 'No Motorcycles',
    description: 'Motorcycles are prohibited beyond this point.',
    example: 'Pedestrian promenades and tunnels.',
    icon: { variant: 'circle-red', label: '🏍' }
  },
  {
    id: 'prohibit-height',
    category: 'prohibition',
    name: 'Height Limit 3.5 m',
    description: 'Vehicles taller than 3.5 m must not proceed.',
    example: 'Underpasses and tunnels with low clearance.',
    icon: { variant: 'circle-red', label: '3.5m' }
  },
  {
    id: 'prohibit-weight',
    category: 'prohibition',
    name: 'Weight Limit 10 t',
    description: 'Total vehicle weight cannot exceed 10 tons.',
    example: 'Bridges with limited structural capacity.',
    icon: { variant: 'circle-red', label: '10t' }
  },
  {
    id: 'prohibit-parking',
    category: 'prohibition',
    name: 'No Parking',
    description: 'Parking is not allowed; quick stops only.',
    example: 'Bus lanes or loading docks.',
    icon: { variant: 'circle-red', label: 'P̶' }
  },
  {
    id: 'prohibit-stopping',
    category: 'prohibition',
    name: 'No Stopping',
    description: 'Stopping and parking are both prohibited.',
    example: 'Narrow bridges and fire lanes.',
    icon: { variant: 'circle-red', label: '✕' }
  },
  // end of restrictions
  {
    id: 'end-speed',
    category: 'end',
    name: 'End of Restrictions',
    description: 'Previous speed or overtaking limits no longer apply.',
    example: 'Motorway ramps once road widens.',
    icon: { variant: 'circle-end', label: '//' }
  },
  {
    id: 'end-overtake',
    category: 'end',
    name: 'End of No Overtaking',
    description: 'Overtaking becomes legal once visibility improves.',
    example: 'Straight sections following narrow bridges.',
    icon: { variant: 'circle-end', label: '⇄' }
  },
  {
    id: 'end-general',
    category: 'end',
    name: 'End of All Prohibitions',
    description: 'All previous prohibitions end unless restated.',
    example: 'Leaving a controlled zone.',
    icon: { variant: 'circle-end', label: 'Ø' }
  },
  {
    id: 'end-min-speed',
    category: 'end',
    name: 'End of Minimum Speed',
    description: 'Minimum speed limit withdrawn; adjust to conditions.',
    example: 'After tunnel or steep descent.',
    icon: { variant: 'circle-end', label: '60' }
  },
  // directional
  {
    id: 'direction-hospital',
    category: 'directional',
    name: 'Hospital Direction',
    description: 'Route guidance to the nearest emergency facility.',
    example: 'Urban corridors and highway exits.',
    icon: { variant: 'rectangle-blue', label: 'H' }
  },
  {
    id: 'direction-city',
    category: 'directional',
    name: 'City Center',
    description: 'Indicates lanes heading to the downtown core.',
    example: 'Ring road diverges around metropolitan areas.',
    icon: { variant: 'rectangle-green', label: 'CITY' }
  },
  {
    id: 'direction-motorway',
    category: 'directional',
    name: 'Motorway Ahead',
    description: 'Shows entrance to motorway-standard highway.',
    example: 'Dual carriageway entry points.',
    icon: { variant: 'rectangle-green', label: 'M⊃' }
  },
  {
    id: 'direction-airport',
    category: 'directional',
    name: 'Airport Direction',
    description: 'Guides drivers toward the terminal complex.',
    example: 'Perimeter roads and bypass exits.',
    icon: { variant: 'rectangle-green', label: '✈' }
  },
  {
    id: 'direction-detour',
    category: 'directional',
    name: 'Detour Route',
    description: 'Temporary diversion path to bypass works.',
    example: 'Urban centers during maintenance projects.',
    icon: { variant: 'rectangle-green', label: 'DET' }
  },
  {
    id: 'direction-tourist',
    category: 'directional',
    name: 'Tourist Attraction',
    description: 'Brown tourist signage leading to attractions.',
    example: 'National parks, museums, monuments.',
    icon: { variant: 'rectangle-blue', label: '★' }
  },
  // services
  {
    id: 'service-fuel',
    category: 'service',
    name: 'Fuel Station',
    description: 'Fuel pumps available ahead.',
    example: 'Motorway rest areas.',
    icon: { variant: 'rectangle-blue', label: '⛽' }
  },
  {
    id: 'service-parking',
    category: 'service',
    name: 'Parking Area',
    description: 'Designated parking or park-and-ride.',
    example: 'Transit interchanges or scenic lookouts.',
    icon: { variant: 'rectangle-blue', label: 'P' }
  },
  {
    id: 'service-phone',
    category: 'service',
    name: 'Emergency Phone',
    description: 'Roadside emergency call box ahead.',
    example: 'Highway emergency lay-bys.',
    icon: { variant: 'rectangle-blue', label: '☎' }
  },
  {
    id: 'service-repair',
    category: 'service',
    name: 'Repair Workshop',
    description: 'Mechanical assistance or workshop available.',
    example: 'Rest complexes or industrial zones.',
    icon: { variant: 'rectangle-blue', label: '🔧' }
  },
  {
    id: 'service-food',
    category: 'service',
    name: 'Food & Café',
    description: 'Refreshments available ahead.',
    example: 'Service plazas or tourist sites.',
    icon: { variant: 'rectangle-blue', label: '🍽' }
  },
  // pedestrian & bicycle
  {
    id: 'ped-shared',
    category: 'pedestrian',
    name: 'Shared Path',
    description: 'Cyclists and pedestrians share the same path. Keep right and slow down.',
    example: 'Parks, sea fronts, and university campuses.',
    icon: { variant: 'circle-blue', label: '🚶‍♂️🚴' }
  },
  {
    id: 'ped-crossing',
    category: 'pedestrian',
    name: 'Bicycle Crossing',
    description: 'Expect bicycles entering the carriageway.',
    example: 'Protected intersections, greenways.',
    icon: { variant: 'circle-blue', label: '🚴' }
  },
  {
    id: 'ped-footpath',
    category: 'pedestrian',
    name: 'Pedestrians Only',
    description: 'Only pedestrians may use this path.',
    example: 'Promenades and plazas.',
    icon: { variant: 'circle-blue', label: '🚶' }
  },
  {
    id: 'ped-cycle-track',
    category: 'pedestrian',
    name: 'Dedicated Cycle Track',
    description: 'Exclusive lane for bicycles; keep vehicles out.',
    example: 'Urban protected bike networks.',
    icon: { variant: 'circle-blue', label: 'BIKE' }
  },
  {
    id: 'ped-underpass',
    category: 'pedestrian',
    name: 'Pedestrian Underpass',
    description: 'Stairs or ramp lead to underground crossing.',
    example: 'High-speed corridors through cities.',
    icon: { variant: 'circle-blue', label: '⇂' }
  },
  {
    id: 'ped-no-ped',
    category: 'pedestrian',
    name: 'No Pedestrians',
    description: 'Pedestrian access prohibited for safety.',
    example: 'Motorways or industrial sites.',
    icon: { variant: 'circle-red', label: '🚶̶' }
  },
  // speed limits
  {
    id: 'speed-20',
    category: 'speed',
    name: 'Speed Limit 20',
    description: 'Maximum permitted speed 20 km/h.',
    example: 'School forecourts and shared streets.',
    icon: { variant: 'circle-red-solid', label: '20' }
  },
  {
    id: 'speed-30',
    category: 'speed',
    name: 'Speed Limit 30',
    description: 'Maximum permitted speed 30 km/h.',
    example: 'Residential streets, playground zones.',
    icon: { variant: 'circle-red-solid', label: '30' }
  },
  {
    id: 'speed-50',
    category: 'speed',
    name: 'Speed Limit 50',
    description: 'Maximum permitted speed 50 km/h.',
    example: 'Urban arterials with pedestrian activity.',
    icon: { variant: 'circle-red-solid', label: '50' }
  },
  {
    id: 'speed-70',
    category: 'speed',
    name: 'Speed Limit 70',
    description: 'Maximum permitted speed 70 km/h.',
    example: 'Suburban ring roads.',
    icon: { variant: 'circle-red-solid', label: '70' }
  },
  {
    id: 'speed-90',
    category: 'speed',
    name: 'Speed Limit 90',
    description: 'Maximum permitted speed 90 km/h.',
    example: 'Rural highways.',
    icon: { variant: 'circle-red-solid', label: '90' }
  },
  {
    id: 'speed-110',
    category: 'speed',
    name: 'Speed Limit 110',
    description: 'Maximum permitted speed 110 km/h.',
    example: 'Motorways in moderate-density regions.',
    icon: { variant: 'circle-red-solid', label: '110' }
  },
  {
    id: 'speed-130',
    category: 'speed',
    name: 'Speed Limit 130',
    description: 'Maximum permitted speed 130 km/h.',
    example: 'Controlled-access highways.',
    icon: { variant: 'circle-red-solid', label: '130' }
  },
  {
    id: 'special-school',
    category: 'warning',
    name: 'School Zone',
    description: 'Children frequently crossing; increase attention.',
    example: 'Primary schools and sports complexes.',
    icon: { variant: 'triangle', label: '🏫' }
  }
]

