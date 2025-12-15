import { useEffect, useRef, useState } from 'react'
import signAssets from './data/signAssets.json'
import { signQuestions, knowledgeQuestions } from './data/quizzes'

const shuffleArray = (array) => {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

const navLinks = [
  { key: 'home', href: '#hero', type: 'anchor' },
  { key: 'rules', href: '#about', type: 'anchor' },
  { key: 'signs', href: '#sign-library', type: 'anchor' },
  { key: 'attention', href: '#attention', type: 'attention' },
  { key: 'signsQuiz', href: '#quiz', type: 'quiz', quizKey: 'signs' },
  { key: 'knowledgeQuiz', href: '#quiz', type: 'quiz', quizKey: 'knowledge' }
]

const navLabels = {
  en: {
    home: 'Home',
    rules: 'Rules & Info',
    signs: 'Traffic Signs Library',
    attention: 'Attention Test',
    signsQuiz: 'Signs Quiz',
    knowledgeQuiz: 'Traffic Knowledge Quiz'
  },
  tr: {
    home: 'Ana Sayfa',
    rules: 'Kurallar & Bilgiler',
    signs: 'Trafik Levhaları Kütüphanesi',
    attention: 'Dikkat Testi',
    signsQuiz: 'Levha Testi',
    knowledgeQuiz: 'Trafik Bilgisi Testi'
  }
}

const heroSubtitle = {
  en: [
    'Learn how vehicles, human behavior, and road environments work together in real traffic.',
    'Understand the science behind crashes, master traffic signs, and improve your decisions with interactive tools, quizzes, and visual explanations.'
  ],
  tr: [
    'Gerçek trafikte araçların, insan davranışının ve yol çevresinin nasıl birlikte çalıştığını öğren.',
    'Kaza biliminin temellerini, trafik levhalarını ve karar verme süreçlerini etkileşimli araçlar, quizler ve görsel açıklamalarla keşfet.'
  ]
}

const heroBadges = {
  en: [
    { icon: '🚗', title: 'Vehicle Systems', text: 'ABS · ESC · Tires' },
    { icon: '🧠', title: 'Human Factors', text: 'Attention · Fatigue · Focus' },
    { icon: '🛣️', title: 'Road Awareness', text: 'Signs · Weather · Surface' }
  ],
  tr: [
    { icon: '🚗', title: 'Araç Sistemleri', text: 'ABS · ESP · Lastikler' },
    { icon: '🧠', title: 'İnsan Faktörleri', text: 'Dikkat · Yorgunluk · Odak' },
    { icon: '🛣️', title: 'Yol Farkındalığı', text: 'Levhalar · Hava · Yol' }
  ]
}

const heroSignSlides = [
  ['🚦', '🛑', '⚠️', '🚧'],
  ['🚲', '🚸', '🚌', '🚒'],
  ['🏍️', '🚥', '🚨', '🏁'],
  ['🚛', '⛟', '🚏', '⛽'],
  ['🚳', '🅿️', '⚡', '🚔'],
  ['🚑', '🚜', '🛣️', '🚘']
]

const liveTrafficTips = {
  '🚦': 'Signal sync active',
  '🛑': 'Stop ahead - prepare to brake',
  '⚠️': 'Road work nearby',
  '🚧': 'Lane closures ahead',
  '🚲': 'Cyclist zone · give space',
  '🚸': 'School crossing · slow down',
  '🚌': 'Bus priority lane active',
  '🚒': 'Emergency response route',
  '🏍️': 'Motorcycle lane',
  '🚥': 'Adaptive lights in use',
  '🚨': 'Incident cleared · expect slow flow',
  '🏁': 'Checkpoint complete',
  '🚛': 'Heavy vehicles merging',
  '⛟': 'Hazmat convoy detected',
  '🚏': 'Transit stop ahead',
  '⛽': 'Next fuel stop 2 km',
  '🚳': 'Cycling restricted zone',
  '🅿️': 'Parking guidance active',
  '⚡': 'EV chargers available',
  '🚔': 'Police speed control',
  '🚑': 'Medical escort on route',
  '🚜': 'Slow machinery present',
  '🛣️': 'Two-way traffic section',
  '🚘': 'Express lane clear'
}

const marqueeItems = [
  { icon: '🚦', text: 'Adaptive Traffic Signals' },
  { icon: '🛑', text: 'Stop Sign Compliance' },
  { icon: '🪢', text: 'Seat Belt Effectiveness' },
  { icon: '🌧️', text: 'Hydroplaning Awareness' },
  { icon: '🚸', text: 'Pedestrian Priority Zones' },
  { icon: '⚠️', text: 'Road Work & Detours' },
  { icon: '🏍️', text: 'Motorcycle Visibility' },
  { icon: '🚧', text: 'Lane Closures Ahead' }
]

const aboutParagraph = [
  'This platform is designed to help you understand traffic safety in a clear and practical way.',
  'It is built around three main elements: the vehicle, the human, and the road environment. By exploring all three together, you will see how accidents really happen and how most of them can be prevented.'
]

const aboutBullets = [
  'Focus on real causes of traffic accidents, not just “rules to memorize”.',
  'Content inspired by academic traffic safety materials.',
  'Designed for students, new drivers, and anyone who wants to be safer on the road.'
]

const aboutIcons = ['🚦', '📘', '🛡️']

const whyParagraph =
  'Most traffic accidents happen not because of bad luck, but because of preventable human errors.\nResearch shows that 90-95% of crashes are caused by mistakes such as distraction, poor judgment, speeding, impaired driving, or not understanding road conditions. Learning traffic science (vehicles, people, and roads) can reduce risk for everyone.'

const whyStats = [
  { title: '90-95% of accidents are caused by human error.', icon: '⚠️' },
  { title: 'Seat belts can reduce the risk of death by about 50%.', icon: '🪢' },
  { title: 'Most accidents are preventable with better knowledge and habits.', icon: '✅' }
]

const pillars = [
  {
    title: 'Vehicle Safety & Maintenance',
    text:
      'Learn how ABS, ESC, tire condition, headlights, and engine care affect your safety on the road.\nUnderstand how your car behaves in emergencies and how maintenance prevents accidents.',
    icon: '🚗'
  },
  {
    title: 'Human Factors in Traffic',
    text:
      'Discover how distraction, alcohol, fatigue, and risky behavior harm your ability to drive safely.\nExplore the science behind attention, reaction time, and safe decision-making.',
    icon: '🧠'
  },
  {
    title: 'Traffic Signs & Road Environment',
    text:
      'Master the meaning of every major traffic sign and road condition.\nLearn how to interpret warnings, guidance signs, and hazardous situations before they happen.',
    icon: '🚦'
  }
]

const guideTopics = [
  {
    title: 'Vehicle Safety & Maintenance',
    icon: '🚗',
    cards: [
      {
        title: 'Anti-lock Braking System (ABS)',
        text:
          'ABS stops the wheels from locking up during hard braking. This allows you to keep steering control instead of sliding in a straight line, especially on wet or slippery roads.'
      },
      {
        title: 'Electronic Stability Control (ESC)',
        text:
          'ESC helps prevent skids and rollovers. It detects when the car is starting to slide or deviate from your intended path and automatically applies brakes to individual wheels and may reduce engine power to keep the car stable.'
      },
      {
        title: 'Tire Maintenance & Tread Depth',
        text:
          'Tires are your only contact with the road. Low pressure, overinflation, or worn tread reduce grip, increase stopping distance, and raise the risk of blowouts and hydroplaning. Regularly check pressure and tread depth to maintain safe handling.'
      },
      {
        title: 'Dashboard Warning Lights',
        text:
          'Warning lights are not decorations. A red brake warning light may signal low brake fluid, a serious system fault, or that the parking brake is still on. Ignoring it can lead to brake failure and loss of control.'
      },
      {
        title: 'Safe Following Distance',
        text:
          'Use at least a 2-3 second gap in normal conditions and more in poor weather. This gives you time to react if the vehicle in front brakes suddenly.'
      },
      {
        title: 'Engine Oil Maintenance',
        text:
          'Oil keeps the engine lubricated and cool. Skipping oil changes can cause overheating, wear, and even engine failure. Always follow the recommended service intervals.'
      },
      {
        title: 'Blind Spots & Mirrors',
        text:
          "Every vehicle has areas you can't see in mirrors. Proper mirror adjustment reduces blind spots, but never eliminates them - always glance over your shoulder before changing lanes."
      },
      {
        title: 'Headlight Usage',
        text:
          'Headlights are for seeing and being seen. Use them at night, in rain, fog, or any low-visibility situation to make yourself visible to others.'
      },
      {
        title: 'Crumple Zones',
        text:
          'Modern cars are designed to deform in a controlled way during a crash. Crumple zones absorb energy before it reaches the passenger compartment, reducing the forces on occupants.'
      },
      {
        title: 'Hydroplaning',
        text:
          'At higher speeds on wet roads, your tires can ride on a thin layer of water instead of the asphalt. This “floating” effect is hydroplaning, and it leads to total loss of steering and braking control. Slowing down and maintaining proper tread depth are key to preventing it.'
      }
    ]
  },
  {
    title: 'Human Factors in Traffic Safety',
    icon: '🧠',
    cards: [
      {
        title: 'Human Error as the Main Cause',
        text:
          'Studies show that human error is responsible for the vast majority of traffic accidents - around 90-95%. Poor decisions, inattention, and risky behavior are far more common causes than mechanical failures.'
      },
      {
        title: 'Mobile Phone Use & Distraction',
        text:
          'Using a phone while driving dramatically increases crash risk. Texting or browsing combines visual, manual, and cognitive distraction, taking your eyes, hands, and mind away from the road at the same time.'
      },
      {
        title: 'Alcohol Impairment',
        text:
          'Even at legal limits, alcohol affects judgment, reaction time, coordination, and vision. The safest choice is simple: if you drink, do not drive.'
      },
      {
        title: 'Seat Belt Effectiveness',
        text:
          'Seat belts are the single most effective safety device in a vehicle. They reduce the risk of death and serious injury by keeping occupants in place and spreading crash forces across stronger parts of the body.'
      },
      {
        title: 'Defensive Driving',
        text:
          'Defensive drivers constantly scan, anticipate, and prepare. They maintain safe following distances, avoid aggressive behavior, and assume that other road users might make mistakes.'
      },
      {
        title: 'Pedestrian Safety',
        text:
          'Pedestrians are among the most vulnerable road users. They should cross at marked crosswalks, make eye contact with drivers, and use bright or reflective clothing at night to be seen.'
      },
      {
        title: 'Driver Fatigue & Microsleep',
        text:
          'Driving while tired slows reaction time and may cause “microsleep” episodes lasting a few seconds. During this time, the vehicle is uncontrolled. Only real sleep solves fatigue; stimulants are temporary and unreliable.'
      },
      {
        title: 'Child Passenger Safety',
        text:
          'Children need special restraints: rear-facing seats, forward-facing seats, and boosters based on age and size. The back seat is the safest place for children under 13.'
      },
      {
        title: 'Walking on Roads Without Sidewalks',
        text:
          'When no sidewalk is available, pedestrians should walk facing oncoming traffic. This allows them to see approaching vehicles and react if necessary.'
      },
      {
        title: 'Types of Distracted Driving',
        text:
          'Distractions can be visual (eyes), manual (hands), or cognitive (mind). Activities like texting while driving combine all three and are extremely dangerous.'
      },
      {
        title: 'The Two-Second Rule',
        text:
          'The two-second rule is a simple way to maintain safe following distance. Pick a fixed point on the road; if you reach it less than two seconds after the car ahead, you are too close.'
      },
      {
        title: 'Passenger Risk Factors',
        text:
          'Unbelted passengers can not only be injured, but become projectiles that harm others in the car. Everyone should wear a seat belt, in every seat and on every trip.'
      }
    ]
  },
  {
    title: 'Road Environment & Traffic Signs',
    icon: '🛣️',
    cards: [
      {
        title: 'Warning Signs (Triangular, Red Border)',
        text:
          'Warning signs indicate hazards or dangerous conditions ahead: curves, intersections, pedestrian crossings, slippery roads, and more. Their triangular shape and red border are designed for quick recognition.'
      },
      {
        title: 'Mandatory Instruction Signs (Blue Circles)',
        text:
          'These signs show actions you must take, such as required directions or lane usage. They are regulatory but different from prohibitions.'
      },
      {
        title: 'Stop Sign (Red Octagon)',
        text:
          'The red octagonal STOP sign is unique and easily recognized worldwide. Drivers must come to a complete stop and proceed only when it is safe.'
      },
      {
        title: 'Yield / Give Way Sign (Inverted Triangle)',
        text:
          'This sign tells you to slow down and yield to traffic with the right of way. You may not need to stop completely, but you must be prepared to do so.'
      },
      {
        title: 'End of Prohibition Signs',
        text:
          'These signs indicate that a previous restriction, like a no-overtaking zone or specific speed limit, no longer applies.'
      },
      {
        title: 'Blue Information Signs',
        text:
          'Blue rectangular or square signs often provide directions, services, or lane information for drivers.'
      },
      {
        title: 'Warning Colors in Different Systems',
        text:
          'In some countries, warning signs use yellow diamonds instead of red triangles, but the meaning is similar: they signal caution and upcoming hazards.'
      },
      {
        title: 'No Overtaking Signs',
        text:
          'Typically show two cars side by side and indicate that passing is prohibited in that area.'
      },
      {
        title: 'General Danger Warning',
        text:
          'A sign with an exclamation mark warns of general danger when no specific sign exists. Additional plates often explain the exact hazard.'
      },
      {
        title: 'Speed Limit Signs',
        text:
          'Circular signs with a red border and a number inside show the maximum legal speed under ideal conditions.'
      },
      {
        title: 'Pedestrian Crossing Signs',
        text:
          'These signs indicate areas where pedestrians often cross. Drivers should slow down, watch carefully, and be ready to stop.'
      },
      {
        title: 'Slippery Road Warning',
        text:
          'A symbol of a car with skid marks indicates reduced traction due to water, ice, snow, or other conditions.'
      },
      {
        title: 'Directional Mandatory Signs',
        text:
          'Blue circular arrows indicate directions you must follow, such as “straight ahead only” or “turn right only.”'
      },
      {
        title: 'Bicycle Signs',
        text:
          'These signs mark bicycle lanes, crossings, or areas where cyclists are likely to be present.'
      },
      {
        title: 'Highway Information Signs (Green Panels)',
        text:
          'Green panels give information about directions, exits, and distances on high-speed roads.'
      },
      {
        title: 'Two-Way Traffic Signs',
        text:
          'These signs warn that you are entering or in a section of road with traffic moving in both directions.'
      }
    ]
  }
]

const guideTopicTitleTr = {
  'Vehicle Safety & Maintenance': 'Araç Güvenliği & Bakım',
  'Human Factors in Traffic Safety': 'Trafikte İnsan Faktörleri',
  'Road Environment & Traffic Signs': 'Yol Çevresi & Trafik Levhaları'
}

const guideCardTitleTr = {
  'Anti-lock Braking System (ABS)': 'Anti Blokaj Fren Sistemi (ABS)',
  'Electronic Stability Control (ESC)': 'Elektronik Denge Kontrolü (ESC)',
  'Tire Maintenance & Tread Depth': 'Lastik Bakımı & Diş Derinliği',
  'Dashboard Warning Lights': 'Gösterge Paneli Uyarı Işıkları',
  'Safe Following Distance': 'Güvenli Takip Mesafesi',
  'Engine Oil Maintenance': 'Motor Yağı Bakımı',
  'Blind Spots & Mirrors': 'Kör Noktalar & Aynalar',
  'Headlight Usage': 'Far Kullanımı',
  'Crumple Zones': 'Güvenlik Kafesi & Darbe Emici Bölgeler',
  Hydroplaning: 'Suda Kızaklama (Aquaplaning)',
  'Human Error as the Main Cause': 'Ana Neden Olarak İnsan Hatası',
  'Mobile Phone Use & Distraction': 'Cep Telefonu Kullanımı & Dikkat Dağınıklığı',
  'Alcohol Impairment': 'Alkolün Etkileri',
  'Seat Belt Effectiveness': 'Emniyet Kemerinin Etkinliği',
  'Defensive Driving': 'Defansif Sürüş',
  'Pedestrian Safety': 'Yaya Güvenliği',
  'Driver Fatigue & Microsleep': 'Sürücü Yorgunluğu & Mikrouyku',
  'Child Passenger Safety': 'Çocuk Yolcu Güvenliği',
  'Walking on Roads Without Sidewalks': 'Kaldırımsız Yollarda Yürüme',
  'Types of Distracted Driving': 'Dikkat Dağınıklığı Türleri',
  'The Two-Second Rule': 'İki Saniye Kuralı',
  'Passenger Risk Factors': 'Yolcu Risk Faktörleri',
  'Warning Signs (Triangular, Red Border)': 'Uyarı Levhaları (Üçgen, Kırmızı Kenarlı)',
  'Mandatory Instruction Signs (Blue Circles)': 'Zorunlu Yön/İşaret Levhaları (Mavi Daireler)',
  'Stop Sign (Red Octagon)': 'Dur Levhası (Kırmızı Sekizgen)',
  'Yield / Give Way Sign (Inverted Triangle)': 'Yol Ver Levhası (Ters Üçgen)',
  'End of Prohibition Signs': 'Yasakların Bitişi Levhaları',
  'Blue Information Signs': 'Mavi Bilgi Levhaları',
  'Warning Colors in Different Systems': 'Farklı Sistemlerde Uyarı Renkleri',
  'No Overtaking Signs': 'Sollama Yasak Levhaları',
  'General Danger Warning': 'Genel Tehlike Uyarısı',
  'Speed Limit Signs': 'Hız Sınırlama Levhaları',
  'Pedestrian Crossing Signs': 'Yaya Geçidi Levhaları',
  'Slippery Road Warning': 'Kaygan Yol Uyarısı',
  'Directional Mandatory Signs': 'Yön Zorunluluğu Gösteren Levhalar',
  'Bicycle Signs': 'Bisiklet Levhaları',
  'Highway Information Signs (Green Panels)': 'Otoyol Bilgi Levhaları (Yeşil Panolar)',
  'Two-Way Traffic Signs': 'İki Yönlü Trafik Levhaları'
}

const guideCardTextTr = {
  'Anti-lock Braking System (ABS)':
    'ABS, ani frenlemede tekerleklerin kilitlenmesini engeller. Böylece özellikle ıslak veya kaygan yollarda aracın yönünü koruyabilir, düz kaymak yerine direksiyon kontrolünü sürdürürsün.',
  'Electronic Stability Control (ESC)':
    'ESC, aracın savrulmasını ve devrilmesini önlemeye yardımcı olur. Araç sürücünün istediği yönün dışına kaymaya başladığında bunu algılar, belirli tekerleklere otomatik fren uygular ve gerekirse motor gücünü azaltarak dengeyi korur.',
  'Tire Maintenance & Tread Depth':
    'Lastikler, yol ile tek temas noktanızdır. Düşük basınç, aşırı şişirme veya aşınmış diş derinliği tutunmayı azaltır, fren mesafesini uzatır ve patlama ya da suda kızaklama riskini artırır. Düzenli basınç ve diş derinliği kontrolü güvenli sürüş için kritik önem taşır.',
  'Dashboard Warning Lights':
    'Gösterge panelindeki uyarı ışıkları süs değildir. Örneğin kırmızı fren uyarı ışığı; düşük fren hidroliği, ciddi bir sistem arızası veya el freninin çekili kalmış olmasına işaret edebilir. Bu uyarıyı görmezden gelmek fren kaybına ve kontrolün tamamen yitirilmesine neden olabilir.',
  'Safe Following Distance':
    'Normal koşullarda en az 2-3 saniyelik takip mesafesi bırak; kötü hava şartlarında bu mesafeyi artır. Böylece öndeki araç ani fren yaptığında tepki vermek ve durmak için yeterli zamanın olur.',
  'Engine Oil Maintenance':
    'Motor yağı, motorun iç parçalarını yağlar ve soğutur. Yağ değişimini aksatmak; aşırı ısınmaya, metal aşınmasına ve hatta motor arızasına yol açabilir. Üreticinin önerdiği bakım aralıklarına mutlaka uyulmalıdır.',
  'Blind Spots & Mirrors':
    'Her aracın aynalarla görülemeyen kör noktaları vardır. Aynalar doğru ayarlansa bile bu alanlar tamamen yok olmaz, sadece daralır. Şerit değiştirirken kör noktayı kontrol etmek için mutlaka omuz üzerinden kısa bir bakış atmak gerekir.',
  'Headlight Usage':
    'Farlar hem görmek hem de görünmek içindir. Gece, sis, yağmur, kar gibi görüşün azaldığı tüm durumlarda farlarını aç; böylece hem yolu daha iyi görür hem de diğer sürücüler tarafından fark edilirsin.',
  'Crumple Zones':
    'Modern araçlar, çarpışma anında kontrollü şekilde bükülüp enerjiyi emen gövde bölgeleriyle tasarlanır. Bu darbe emici bölgeler, enerjinin yolcu kabinine ulaşmadan önce sönümlenmesini sağlayarak yolcular üzerindeki kuvvetleri azaltır.',
  Hydroplaning:
    'Yüksek hızda ıslak zeminde ilerlerken, lastiklerin yolu değil ince bir su tabakasını “binmesi” sonucu suda kızaklama oluşur. Bu durumda direksiyon ve fren tamamen etkisiz hale gelebilir. Hızı düşürmek ve yeterli diş derinliğine sahip lastikler kullanmak suda kızaklama riskini azaltır.',
  'Human Error as the Main Cause':
    'Çalışmalar, trafik kazalarının çok büyük çoğunluğunda (%90-95) temel etkenin insan hatası olduğunu gösterir. Yanlış kararlar, dalgınlık ve riskli davranışlar; mekanik arızalardan çok daha sık kazaya yol açar.',
  'Mobile Phone Use & Distraction':
    'Sürüş sırasında telefon kullanmak kaza riskini katlar. Özellikle mesaj yazmak, hem gözünü, hem elini hem de zihnini yoldan uzaklaştırdığı için en tehlikeli dikkat dağınıklığı türlerinden biridir.',
  'Alcohol Impairment':
    'Yasal sınırlar içinde bile alkol; yargılama, reaksiyon süresi, koordinasyon ve görme yeteneğini bozar. En güvenli seçenek basittir: içtiysen araç kullanma.',
  'Seat Belt Effectiveness':
    'Emniyet kemeri, araçtaki en etkili güvenlik donanımıdır. Yolcuyu yerinde tutar, çarpma kuvvetlerini vücudun daha güçlü bölgelerine yayar ve ölüm/ ağır yaralanma riskini yaklaşık yarıya indirir.',
  'Defensive Driving':
    'Defansif sürüş; çevreyi sürekli tarayan, olası hataları öngören ve daima kaçış payı bırakan sürüş stilidir. Güvenli takip mesafesi bırakmayı, agresif manevralardan kaçınmayı ve diğer sürücülerin hata yapabileceğini varsaymayı içerir.',
  'Pedestrian Safety':
    'Yayalar, trafikte en korunmasız grup arasındadır. Belirlenmiş yaya geçitlerini kullanmalı, sürücüyle göz teması kurmalı ve özellikle gece, görünürlüklerini artırmak için açık ya da yansıtıcı giysiler tercih etmelidir.',
  'Driver Fatigue & Microsleep':
    'Yorgun halde araç kullanmak reaksiyon süresini yavaşlatır ve birkaç saniyelik “mikrouyku” ataklarına neden olabilir. Bu anlarda araç tamamen kontrolsüz kalır. Yorgunluğun tek çözümü uykudur; kahve ve enerji içeceği sadece geçici ve güvenilmez etkilere sahiptir.',
  'Child Passenger Safety':
    'Çocuklar için yaş ve kiloya uygun çocuk koltukları (arkaya dönük, öne dönük, yükseltici koltuk vb.) kullanılmalıdır. 13 yaş altı çocuklar için en güvenli yer arka koltuktur.',
  'Walking on Roads Without Sidewalks':
    'Kaldırım olmayan yollarda yayalar, araç trafiğine karşıdan gelecek şekilde yolun solundan yürümelidir. Böylece yaklaşan araçları görüp gerektiğinde kenara çekilme şansı artar.',
  'Types of Distracted Driving':
    'Dikkat dağınıklığı; görsel (göz), manuel (el) ve zihinsel (zihin) olmak üzere üçe ayrılır. Mesaj yazmak gibi bazı davranışlar bu üçünü aynı anda tetiklediği için son derece tehlikelidir.',
  'The Two-Second Rule':
    'İki saniye kuralı, güvenli takip mesafesini pratik bir şekilde ayarlamaya yardımcı olur. Yol kenarında sabit bir nokta seç; öndeki araç orayı geçtikten sonra sen aynı noktaya iki saniyeden kısa sürede ulaşıyorsan çok yakınsın demektir.',
  'Passenger Risk Factors':
    'Emniyet kemeri takmayan yolcular yalnızca kendileri için değil, çarpışma anında fırlayarak diğer yolcular için de ciddi risk oluşturur. Araçta herkes, her yolculukta kemer takmalıdır.',
  'Warning Signs (Triangular, Red Border)':
    'Kırmızı kenarlı üçgen uyarı levhaları; viraj, kavşak, yaya geçidi, kaygan zemin gibi tehlikelere önceden dikkat çeker. Şeklin ve kırmızı çerçevenin amacı, sürücünün bu levhaları hızlıca fark etmesini sağlamaktır.',
  'Mandatory Instruction Signs (Blue Circles)':
    'Mavi dairesel işaretler; gitmek zorunda olduğun yönler veya uyman gereken şerit kullanımı gibi zorunlu talimatları gösterir. Yasaklayıcı levhalardan farklı olarak “yapılması gerekeni” anlatırlar.',
  'Stop Sign (Red Octagon)':
    'Kırmızı sekizgen DUR levhası, dünya genelinde benzersiz ve kolay tanınır bir işarettir. Sürücü, çizgiye veya kavşağa gelmeden önce tam durmalı ve ancak güvenli olduğundan emin olduktan sonra devam etmelidir.',
  'Yield / Give Way Sign (Inverted Triangle)':
    'Ters üçgen Yol Ver levhası; yaklaşan kavşakta önceliğin sende olmadığını bildirir. Yavaşla, gerekirse durmaya hazır ol ve üstünlüğe sahip trafiğe yol ver.',
  'End of Prohibition Signs':
    'Bu levhalar; örneğin sollama yasağı veya belirli bir hız sınırı gibi daha önce konulmuş kısıtlamaların sona erdiğini gösterir.',
  'Blue Information Signs':
    'Mavi dikdörtgen ya da kare levhalar çoğunlukla sürücülere şerit düzeni, yön, hizmetler veya tesisler hakkında bilgi verir.',
  'Warning Colors in Different Systems':
    'Bazı ülkelerde uyarı levhaları kırmızı üçgen yerine sarı elmas şeklinde olabilir; ancak anlamı benzerdir: yaklaşan tehlikeye karşı dikkat.',
  'No Overtaking Signs':
    'Genellikle yan yana iki araç sembolüyle gösterilir ve belirli bir kesimde sollamanın yasak olduğunu belirtir.',
  'General Danger Warning':
    'Ünlem işareti içeren levha, özel bir sembolün olmadığı durumlarda genel bir tehlikeyi bildirir. Altındaki ek panolar tehlikenin türünü açıklar.',
  'Speed Limit Signs':
    'Kırmızı çerçeveli daire içinde rakamla gösterilen levhalar, ideal koşullar altında izin verilen azami hızı belirtir.',
  'Pedestrian Crossing Signs':
    'Bu levhalar, yayaların sık geçtiği bölgeleri gösterir. Sürücüler hızını düşürmeli, çevreyi dikkatle kontrol etmeli ve gerekirse durmaya hazır olmalıdır.',
  'Slippery Road Warning':
    'Arkası savrulan bir araç sembolü, zeminin su, buz, kar veya başka bir nedenle kaygan olabileceğini bildirir.',
  'Directional Mandatory Signs':
    'Mavi daire içindeki beyaz oklar; “sadece ileri”, “sadece sağa dön” gibi takip edilmesi zorunlu yönleri gösterir.',
  'Bicycle Signs':
    'Bisiklet sembollü levhalar; bisiklet yollarını, geçişlerini veya bisiklet trafiğinin yoğun olacağı alanları gösterir.',
  'Highway Information Signs (Green Panels)':
    'Yeşil panolar, otoyollarda güzergâh, çıkışlar ve mesafeler hakkında bilgi verir; uzun mesafe yönlendirmelerinde kullanılır.',
  'Two-Way Traffic Signs':
    'Bu levhalar, tek yönlü yoldan iki yönlü trafiğe girdiğini veya karşı yön trafiğinin bulunduğu bir kesimde olduğunu bildirir.'
}

const signSectionOrder = [
  { key: 'warning', title: 'Warning Signs' },
  { key: 'prohibitory', title: 'Prohibitory Signs' },
  { key: 'mandatory', title: 'Mandatory Signs' },
  { key: 'priority', title: 'Priority Signs' },
  { key: 'information', title: 'Information Signs' },
  { key: 'road-markings', title: 'Road Markings' },
  { key: 'additional', title: 'Additional Markings' },
  { key: 'signals', title: 'Signals by Authorised Persons' }
]

// Basit TR çevirileri - tam eşleşen etiketler için
const signLabelTrMap = {
  Children: 'Çocuklar',
  'Dangerous Bend': 'Tehlikeli Viraj',
  'Double Dangerous Bend': 'Çift Tehlikeli Viraj',
  'Domestic Animals': 'Evcil Hayvanlar',
  'Elderly Disabled Pedestrians': 'Yaşlı/Engelli Yayalar',
  'Electrified Overhead Cable': 'Elektrikli Üst Hat',
  'End Of Dual Carriageway': 'Çift Yönlü Yolun Sonu',
  'Falling Rocks': 'Düşen Kayalar',
  'Hump Bridge': 'Kasisli Köprü',
  'Junction On Bend': 'Viraj Üzerinde Kavşak',
  'Junction With Priority Right': 'Sağdan Gelenin Önceliği Olan Kavşak',
  'Junction With Secondary Road': 'İkincil Yol ile Kavşak',
  'Level Crossing With Barriers': 'Bariyerli Hemzemin Geçit',
  'Loose Road Surface': 'Gevşek Yol Zemini',
  'Low Flying Aircrafts': 'Alçaktan Uçan Uçaklar',
  'Low Flying Helicopters': 'Alçaktan Uçan Helikopterler',
  'Other Danger': 'Tehlike',
  'Pedal Cycle Route Crossing The Road': 'Yol Üzerinde Bisiklet Geçidi',
  'Stop': 'Dur',
  'Give Way': 'Yol Ver',
  'No Entry': 'Girilmez',
  'No Parking': 'Park Yasak',
  'No Overtaking': 'Sollama Yasak',
  'Speed Limit': 'Hız Sınırı',
  'Pedestrian Crossing': 'Yaya Geçidi',
  'Two Way Traffic': 'İki Yönlü Trafik',
  // Information / warning örnekleri
  Airport: 'Havaalanı',
  'Bus Stop': 'Otobüs Durağı',
  'Dead End Left': 'Soldan Çıkmaz Sokak',
  'Dead End Straight Ahead': 'İleride Çıkmaz Sokak',
  'Default Roundabout Lane': 'Dönel Kavşak Şerit Düzeni',
  'Go Ahead': 'İleri Git',
  Image: 'Görsel',
  'Direction Sign': 'Yön Levhası',
  'Emergency Phone': 'Acil Telefon',
  'First Aid': 'İlk Yardım',
  Highway: 'Otoyol',
  'One Way Street Left': 'Tek Yön (Sola)',
  'One Way Street': 'Tek Yönlü Yol',
  Parking: 'Otopark',
  'Petrol Station': 'Akaryakıt İstasyonu',
  'Recommended Speed': 'Önerilen Hız',
  'Residential Area': 'Yerleşim Bölgesi',
  'Taxi Parking': 'Taksi Durağı',
  Pedestrians: 'Yayalar',
  'Risk Of Grounding': 'Karaya Oturma Riski',
  'Risk Of Ice': 'Buzlanma Riski',
  'Road Hump': 'Kasis',
  'Road Narrows On Both Side': 'Yol Her İki Yandan Daralıyor',
  'Road Narrows On One Side': 'Yol Tek Taraftan Daralıyor',
  Roadworks: 'Yol Çalışması',
  Roundabout: 'Dönel Kavşak',
  'Side Winds': 'Yandan Esen Rüzgâr',
  'Slippery Road': 'Kaygan Yol',
  'Slow Moving Vehicles On Hill Ahead': 'Önde Yavaş Hareket Eden Araçlar',
  'Soft Verges Ahead': 'Yumuşak Banket',
  'Steep Ascent': 'Dik Yokuş (Çıkış)',
  'Steep Descent': 'Dik Yokuş (İniş)',
  'Swing Bridge': 'Açılır/Kapanır Köprü',
  'T Junction': 'T Kavşağı',
  'Traffic Merges Onto Main Carriageway': 'Trafik Ana Yola Katılıyor',
  'Traffic Queues': 'Trafik Kuyruğu',
  'Traffic Signals': 'Trafik Işıkları',
  Tramway: 'Tramvay Hattı',
  Tunnel: 'Tünel',
  'Two Way Traffic Crosses One Way Road': 'Tek Yönlü Yolu İki Yönlü Trafik Kesiyor',
  'Uneven Road': 'Kasisli Yol',
  'Warning Signs': 'Uyarı Levhaları',
  'Water Course Alongside Road': 'Yol Kenarında Su Kanalı',
  'Wild Animals': 'Yabani Hayvanlar',
  // Prohibitory & mandatory - özellikle "turn" içerenler
  'End Of All Restrictions': 'Tüm Kısıtlamaların Sonu',
  'End Of Maximum Speedlimit': 'Azami Hız Sınırının Sonu',
  'End Of No Overtaking': 'Sollama Yasağının Sonu',
  'End Of No Parkingzone': 'Park Yasağı Bölgesinin Sonu',
  'End Of Minimum Speed Limit': 'Asgari Hız Sınırının Sonu',
  'Maximum Speed': 'Azami Hız',
  'Maximum Weight': 'Azami Ağırlık',
  'Maximum Width': 'Azami Genişlik',
  'Minimum Safe Following Between Vehicles': 'Araçlar Arası Asgari Takip Mesafesi',
  'No Agricultural Vehicles': 'Tarım Araçları Giremez',
  'No Crossing Pedestrians': 'Yaya Geçişi Yasak',
  'No Cycling': 'Bisiklet Giremez',
  'No Entry Motorcycles': 'Motosiklet Giremez',
  'No Entry Mopeds': 'Moped Giremez',
  'No Heavy Goods Vehicles': 'Ağır Yük Taşıtı Giremez',
  'No Horns': 'Kor Klakson Çalmak Yasak',
  'No Horse Drawn Vehicles': 'At Arabası Giremez',
  'No Motor Vehicles Except Motorcycles': 'Motosiklet Hariç Motorlu Taşıt Giremez',
  'No Motor Vehicles': 'Motorlu Taşıt Giremez',
  'No Overtaking Heavy Vehicles': 'Ağır Taşıtlar Sollama Yapamaz',
  'No Parking On Even Dates': 'Çift Günlerde Park Yasak',
  'No Parking On Odd Dates': 'Tek Günlerde Park Yasak',
  'No Parking Or Waiting': 'Park Etmek ve Beklemek Yasak',
  'No Parking Zone': 'Park Yasağı Bölgesi',
  'No Right Turn': 'Sağa Dönüş Yasak',
  'No Stopping': 'Durmak Yasak',
  'No Vehicle Over Length Shown': 'Belirtilen Uzunluktan Fazla Araç Giremez',
  'No Vehicles Carrying Dangerous Water Pollutants': 'Su Kirletici Tehlikeli Madde Taşıyan Araç Giremez',
  'No Vehicles Carrying Explosives': 'Patlayıcı Madde Taşıyan Araç Giremez',
  'No Vehicles': 'Taşıt Giremez',
  'Stop Customs': 'Gümrük - Dur',
  'Stop Police': 'Polis - Dur',
  'Animal Riders Only': 'Yalnızca Hayvanlı Sürücüler',
  'Go Straight Ahead Only': 'Sadece İleri',
  'Go Straight Turn Right Ahead': 'İleride İleri ve Sağa Mecburi Yön',
  'Keep Left': 'Soldan Gidiniz',
  'Mandatory Snow Chains': 'Zincir Takmak Mecburidir',
  'Minimum Speed Limit': 'Asgari Hız Sınırı',
  'Pass On Either Side': 'Her İki Yandan Geçilebilir',
  'Pedestrians Only': 'Sadece Yayalar',
  'Turn Left Ahead': 'İleride Sola Dön',
  'Turn Left Or Right Ahead': 'İleride Sola veya Sağa Dön',
  'Turn Right': 'Sağa Dön',
  'Controlled Block': 'Kontrollü Geçiş',
  'End Of Priority Road': 'Öncelikli Yol Sonu',
  'Priority Road': 'Öncelikli Yol',
  'Priority To Oncoming Traffic': 'Karşıdan Gelenin Önceliği',
  'Priority Traffic': 'Öncelikli Trafik',
  'Priority Traffic Oncoming': 'Karşıdan Gelen Trafik Öncelikli',
  'Priority Traffic Opposite Direction': 'Öncelikli Trafik Karşı Yön',
  'Priority From Your Direction': 'Senin Yönünden Öncelik',
  'Stop Sign Warning': 'Dur Levhası Uyarısı',
  // Road markings
  'Directions Roundabout': 'Dönel Kavşak Yön Okları',
  'Entrances Exits Left Side': 'Giriş Çıkışlar (Sol Taraf)',
  'Give Way Traffic Mainroad': 'Ana Yola Yol Ver Çizgisi',
  'No Parking Waiting Overtaking': 'Park, Bekleme ve Sollama Yasak Çizgisi',
  'Overtaking Allowed From Right': 'Sağdan Sollama Serbest',
  'Overtaking Allowed': 'Sollama Serbest',
  'Side Line Carriageway No Parking Stopping': 'Yol Kenarı Çizgisi - Park ve Durmak Yasak',
  'Side Line Carriageway No Parking': 'Yol Kenarı Çizgisi - Park Yasak',
  'Stop Give Way': 'Dur - Yol Ver Çizgisi',
  // Additional plates
  'Distance Level Crossing': 'Hemzemin Geçide Uzaklık Levhası',
  'Obstacle Left': 'Engel Sol Tarafta',
  Obstacle: 'Engel',
  'Temporary Sharp Deviation': 'Geçici Keskin Sapma',
  // Signals by authorised persons
  'Stop All Traffic': 'Tüm Trafiği Durdur',
  'Stop Traffic Approaching Front And Behind': 'Önden ve Arkadan Gelen Trafiği Durdur',
  'Stop Traffic Behind': 'Arkadan Gelen Trafiği Durdur',
  'Stop Traffic From Front': 'Önden Gelen Trafiği Durdur',
  'Traffic Approaching From Behind': 'Arkadan Gelen Trafik',
  'Traffic Approaching From Front': 'Önden Gelen Trafik',
  'Traffic Approaching From Side': 'Yandan Gelen Trafik'
}

// Etiket tam eşleşmezse kelime bazlı yaklaşık çeviri
const translateSignLabel = (label, isTR) => {
  if (!isTR || !label) return label
  const direct = signLabelTrMap[label]
  if (direct) return direct

  const wordMap = {
    Road: 'Yol',
    Hump: 'Kasis',
    Narrows: 'Daralıyor',
    On: '',
    Both: 'Her İki',
    Side: 'Yandan',
    One: 'Bir',
    Pedestrians: 'Yayalar',
    Risk: 'Risk',
    Of: '',
    Ice: 'Buzlanma',
    Grounding: 'Karaya Oturma',
    Slippery: 'Kaygan',
    Bridge: 'Köprü',
    Roundabout: 'Dönel Kavşak',
    Winds: 'Rüzgârlar',
    Left: 'Sol',
    Right: 'Sağ',
    Steep: 'Dik',
    Ascent: 'Yokuş (Çıkış)',
    Descent: 'Yokuş (İniş)',
    Soft: 'Yumuşak',
    Verges: 'Banket',
    Vehicles: 'Araçlar',
    Hill: 'Yokuş',
    Ahead: 'İleride'
  }

  return label
    .split(' ')
    .map((w) => wordMap[w] || wordMap[w.toLowerCase()] || w)
    .join(' ')
}

// Trafik bilgi soruları için Türkçe metinler
const knowledgeQuestionTranslationsTr = {
  'veh-1-abs-purpose': {
    question: 'Modern araçlardaki ABS\'nin (kilitleme önleyici fren sistemi) temel amacı nedir?',
    answers: [
      'Aracın azami hızını artırmak',
      'Acil frenlemede tekerleklerin kilitlenmesini önlemek',
      'Yakıt tüketimini azaltmak',
      'Motor performansını artırmak'
    ],
    explanation:
      'ABS, sert fren yaptığınızda tekerleklerin kilitlenmesini önleyerek direksiyon hâkimiyetini korumanıza ve kaymadan aracı yönlendirmenize yardımcı olur.'
  },
  'veh-2-tyre-pressure': {
    question: 'Lastik hava basıncı genellikle hangi aralıklarla kontrol edilmelidir?',
    answers: ['Yılda bir kez', '6 ayda bir', 'En az ayda bir kez', 'Sadece lastik gözle inik görünüyorsa'],
    explanation:
      'Lastik basıncını en az ayda bir kontrol etmek, tutunmayı, fren mesafesini ve yakıt ekonomisini korumaya yardımcı olur.'
  },
  'veh-3-tread-depth': {
    question: 'Çoğu ülkede binek araç lastikleri için yasal minimum diş derinliği kaç mmdir?',
    answers: ['0,8 mm', '1,6 mm', '3,0 mm', '5,0 mm'],
    explanation:
      'Birçok ülkede yasal minimum diş derinliği yaklaşık 1,6 mmdir; bu seviyenin altında su tahliyesi azalır ve yol tutuşu ciddi şekilde düşer.'
  },
  'veh-4-warning-light': {
    question:
      'Aşağıdaki gösterge ışıklarından hangisi derhal müdahale gerektiren kritik bir soruna işaret eder?',
    answers: ['Düşük yakıt uyarısı', 'Fren sistemi uyarı ışığı (kırmızı)', 'Servis hatırlatma ışığı', 'Lastik basınç uyarı ışığı (sarı)'],
    explanation:
      'Kırmızı fren uyarı lambası, düşük fren hidroliği veya ciddi bir sistem arızası gösterebilir ve hemen kontrol edilmelidir.'
  },
  'veh-5-follow-distance': {
    question: 'Normal sürüş koşullarında önerilen takip mesafesi nedir?',
    answers: [
      'Öndeki aracı 1 saniye takip etmek',
      'Öndeki aracın en az 2-3 saniye gerisinde olmak',
      'Hızdan bağımsız her zaman 10 metre',
      'Trafiğin akması için mümkün olduğunca yakından takip etmek'
    ],
    explanation:
      '2-3 saniyelik kural, öndeki aracın yavaşlaması veya durması durumunda sizin tehlikeyi fark edip kontrollü fren yapmanız için zaman tanır.'
  },
  'veh-6-esc': {
    question: 'Elektronik Denge Kontrolü (ESC) sürücülere nasıl yardımcı olur?',
    answers: [
      'Hız aşıldığında otomatik fren yaparak',
      'Çekiş kaybını algılayıp azaltarak',
      'Yakıt verimliliğini artırarak',
      'Radyo sinyalini güçlendirerek'
    ],
    explanation:
      'ESC, aracın gidiş yönünü izler ve savrulma başladığında tekerleklere ayrı ayrı fren kuvveti uygulayarak aracı dengede tutmaya çalışır.'
  },
  'veh-7-oil-change': {
    question: 'Standart bir binek araçta motor yağı genellikle ne kadar sıklıkla değiştirilmelidir?',
    answers: [
      'Her 1.000 kmde veya ayda bir',
      'Her 5.000-10.000 kmde ya da üreticinin önerdiği aralıkta',
      'Her 25.000 kmde bir',
      'Sadece motordan ses gelmeye başladığında'
    ],
    explanation:
      'Çoğu üretici, motor tipine ve yağ kalitesine bağlı olarak motor yağının yaklaşık her 5.000-10.000 kmde bir değiştirilmesini önerir.'
  },
  'veh-8-blind-spot': {
    question: 'Bir aracın “kör noktası” neyi ifade eder?',
    answers: [
      'Aynalar ve doğrudan görüşle görülemeyen bölgeleri',
      'Kaputun hemen önündeki alanı',
      'Aracın altındaki alanı',
      'Gösterge paneli bölgesini'
    ],
    explanation:
      'Kör noktalar, aynalarda görünmeyen alanlardır; şerit değiştirmeden önce başınızı hafifçe çevirerek bu bölgeleri kontrol etmeniz gerekir.'
  },
  'veh-9-headlights': {
    question: 'Farlar ne zaman kullanılmalıdır?',
    answers: [
      'Sadece gece',
      'Alacakaranlıkta, gece, tünelde ve görüşün azaldığı tüm durumlarda',
      'Sadece tamamen karanlık olduğunda',
      'Sadece tünellerde'
    ],
    explanation:
      'Farlar hem görmek hem de görülmek içindir; sadece gece değil, yağmur, sis, alacakaranlık gibi görüşün azaldığı her durumda kullanılmalıdır.'
  },
  'veh-10-crumple-zone': {
    question: 'Bir aracın “çarpışma bölgesinin” (crumple zone) temel görevi nedir?',
    answers: [
      'Aracın ağırlığını azaltmak',
      'Çarpışma anındaki darbe enerjisini soğurmak',
      'Aerodinamiği iyileştirmek',
      'Bagaj hacmini güvenli biçimde artırmak'
    ],
    explanation:
      'Çarpışma bölgeleri, kaza anında kontrollü şekilde ezilerek enerjiyi emmek ve bu kuvvetin yolculara daha az aktarılmasını sağlamak için tasarlanmıştır.'
  },
  'veh-11-hydroplaning': {
    question: '“Su yastığına çıkma” (hydroplaning) durumu ne zaman ortaya çıkar?',
    answers: [
      'Araç bilerek derin su birikintisine sürüldüğünde',
      'Lastikler, su tabakası nedeniyle yol yüzeyiyle temasını kaybettiğinde',
      'Frenler ıslandığında',
      'Silecekler arızalandığında'
    ],
    explanation:
      'Su yastığına çıkmada lastikler asfalt yerine ince bir su tabakasının üzerinde kayar; bu da direksiyon ve fren kontrolünün neredeyse tamamen kaybolmasına yol açar.'
  },
  'veh-12-mirror': {
    question: 'İç dikiz aynasının doğru ayarı nasıl olmalıdır?',
    answers: [
      'Arka koltuğun tamamını görecek şekilde',
      'Araç içi mümkün olduğunca az görünecek şekilde arka camı çerçeveleyecek biçimde',
      'Kendi yüzünüzü net göreceğiniz şekilde',
      'Yolu görmek için aşağı doğru eğik şekilde'
    ],
    explanation:
      'İç dikiz aynası, mümkün olan en geniş arkayı görecek şekilde arka camı merkez alacak biçimde ayarlanmalıdır.'
  },
  'hum-13-main-cause': {
    question: 'Dünya genelinde trafik kazalarının başlıca nedeni nedir?',
    answers: ['Araçların mekanik arızaları', 'Kötü yol koşulları', 'İnsan hatası', 'Hava koşulları'],
    explanation:
      'Çalışmalar, kazaların yaklaşık %90-95inin dikkat dağınıklığı, aşırı hız ve yanlış kararlar gibi insan hatalarına bağlı olduğunu göstermektedir.'
  },
  'hum-14-phone-risk': {
    question: 'Seyir hâlindeyken cep telefonu kullanmak kaza riskini yaklaşık ne kadar artırır?',
    answers: ['%10', '%25', '%50', '%400'],
    explanation:
      'Araştırmalar, araç kullanırken aktif telefon kullanımının kaza riskini yaklaşık dört kat, yani %400 civarında artırabildiğini göstermektedir.'
  },
  'hum-15-bac': {
    question:
      'Çoğu ülkede sürücünün yasal olarak alkollü sayılması için kandaki alkol oranı (BAC) yaklaşık hangi aralıktadır?',
    answers: ['%0,02', '%0,05-0,08', '%0,15', '%0,20'],
    explanation:
      'Birçok ülkede yasal sınır yaklaşık %0,05-0,08 BAC civarındadır; daha düşük seviyeler bile tepki süresini ve yargıyı olumsuz etkiler.'
  },
  'hum-16-seatbelt': {
    question: 'Ön koltuk yolcuları için emniyet kemeri ölüm riskini yaklaşık ne kadar azaltır?',
    answers: ['%15', '%30', '%45', '%50'],
    explanation:
      'Emniyet kemerleri ciddi bir kazada ölüm riskini yaklaşık yarıya indirir; yolcuyu yerinde tutar ve çarpma kuvvetini vücuda yayar.'
  },
  'hum-17-defensive-driving': {
    question: '“Defansif sürüş” ne anlama gelir?',
    answers: [
      'Pozisyonunu korumak için agresif sürmek',
      'Olası tehlikeleri önceden görüp kazadan kaçınacak şekilde sürmek',
      'Her zaman asgari hız sınırında sürmek',
      'Tüm otoyollardan kaçınmak'
    ],
    explanation:
      'Defansif sürüş, çevreyi sürekli tarayıp diğer sürücülerin yapabileceği hataları öngörerek güvenli mesafe ve manevra alanı bırakmak demektir.'
  },
  'hum-18-ped-cross': {
    question: 'Yayalar yolu ne zaman geçmelidir?',
    answers: [
      'Trafikte herhangi bir boşluk gördüklerinde',
      'Uygun ve güvenli olduğunda, işaretli yaya geçitlerinde',
      'Hiç araç görünmediğinde',
      'İstedikleri noktadan koşarak'
    ],
    explanation:
      'Yayalar, sürücülerin beklediği işaretli geçitleri kullanmalı ve yalnızca güvenle geçebilecekleri yeterli zaman olduğunda yola adım atmalıdır.'
  },
  'hum-19-fatigue': {
    question: 'Sürücü yorgunluğu en çok neden tehlikelidir?',
    answers: [
      'Agresif sürüşe neden olduğu için',
      'Tepki süresini ve yargıyı bozup mikrouyku ataklarına yol açabildiği için',
      'Araç daha fazla yakıt tükettiği için',
      'Şanzımana zarar verdiği için'
    ],
    explanation:
      'Yorgunluk, refleksleri yavaşlatır ve birkaç saniyelik mikrouyku dönemlerine neden olabilir; bu sırada araç tamamen kontrolsüz kalır.'
  },
  'hum-20-child-seat': {
    question: '13 yaş altı çocuklar araçta en güvenli şekilde nerede oturmalıdır?',
    answers: ['Ön yolcu koltuğunda', 'Sürücünün hemen arkasında', 'Arkada, uygun çocuk koltuğu veya yükseltici ile', 'Bir yetişkinin kucağında'],
    explanation:
      '13 yaşından küçük çocuklar için en güvenli yer, arka koltuklardır; yaş ve boya uygun çocuk koltuğu veya yükseltici ile bağlanmalıdırlar.'
  },
  'hum-21-walking-no-sidewalk': {
    question: 'Kaldırım olmayan bir yolda yürüyen yayalar ne yapmalıdır?',
    answers: [
      'Trafiğin yönünde sağ taraftan yürümelidir',
      'Karşıdan gelen trafiğe bakacak şekilde sol taraftan yürümelidir',
      'Yolun ortasından yürümelidir',
      'En rahat buldukları yerden yürümelidir'
    ],
    explanation:
      'Karşıdan gelen trafiğe dönük yürümek, yayaların yaklaşan araçları görmesini ve gerekirse kenara çekilmesini sağlar.'
  },
  'hum-22-distracted': {
    question: 'Aşağıdakilerden hangisi “dikkati dağılmış sürüş”e ÖRNEK DEĞİLDİR?',
    answers: [
      'Araç kullanırken bir şeyler yemek',
      'Radyo veya multimedya ayarlarıyla oynamak',
      'Emniyet kemeri takılı yolcularla seyahat etmek',
      'Araç kullanırken mesaj yazmak'
    ],
    explanation:
      'Emniyet kemeri takılı yolcular normal bir durumdur; buna karşılık yemek yemek, cihazlarla oynamak veya mesaj yazmak dikkatinizi yoldan alır.'
  },
  'hum-23-two-second-rule': {
    question: '“İki saniye kuralı” nedir?',
    answers: [
      'Motoru çalıştırmak için gereken süre',
      'Güvenli takip mesafesini korumaya yarayan bir yöntem',
      'Aynalara bakmak için ayrılabilecek azami süre',
      'Emniyet kemerini takmak için gereken süre'
    ],
    explanation:
      'İki saniye kuralında, öndeki araç sabit bir noktayı geçtikten sonra aynı noktaya sizin en az iki saniye sonra ulaşmanız gerekir.'
  },
  'hum-24-passenger-risk': {
    question: 'Yolcular araç içinde en çok hangi durumda risk altındadır?',
    answers: [
      'Uzun yolculuklarda',
      'Emniyet kemeri veya uygun bağlama sistemleri olmadan seyahat ettiklerinde',
      'Arka koltukta oturduklarında',
      'Gündüz yolculuklarında'
    ],
    explanation:
      'Emniyetsiz yolcular, kaza anında fırlayarak hem kendilerine hem de diğer yolculara ciddi zarar verebilir; bu nedenle herkes kemer takmalıdır.'
  },
  'env-25-triangle-red': {
    question: 'Kırmızı çerçeveli üçgen bir trafik levhası genellikle neyi belirtir?',
    answers: ['Yasaklama', 'Tehlike/uyarı', 'Mecburi talimat', 'Bilgi'],
    explanation:
      'Birçok ülkede kırmızı çerçeveli üçgen levhalar, viraj, kavşak, yaya geçidi gibi tehlikelere karşı sürücüyü önceden uyaran uyarı levhalarıdır.'
  },
  'env-26-stop': {
    question: 'Kırmızı sekizgen “DUR” levhası ne anlama gelir?',
    answers: ['Trafiğe yol ver', 'Tam dur, sonra güvenliyse devam et', 'Girilmez', 'Hız limiti bölgesi'],
    explanation:
      'Dur levhası, dur çizgisinde veya kavşağa girmeden önce aracı tamamen durdurmanızı ve yalnızca güvenliyse ilerlemenizi zorunlu kılar.'
  },
  'env-27-yield': {
    question: 'Üçgen biçimli Yol Ver/Geçiş Hakkı Ver levhası neyi ifade eder?',
    answers: ['Tam durmayı', 'Diğer trafiğe yol vermeniz gerektiğini', 'Girilmez olduğunu', 'Tehlikeli inişi'],
    explanation:
      'Yol ver levhası, hızınızı düşürüp önceliği olan trafiğe geçiş hakkı vermenizi, gerekirse tamamen durmanızı ister.'
  },
  'env-28-blue-rect': {
    question: 'Mavi dikdörtgen veya kare trafik levhaları genellikle hangi tür bilgi verir?',
    answers: [
      'Tehlikeler hakkında uyarılar',
      'Yasaklamalar',
      'Mecburi yönler veya yol/servis bilgileri',
      'Geçici yol çalışması uyarıları'
    ],
    explanation:
      'Birçok sistemde mavi dikdörtgen levhalar yönlendirme, şerit bilgisi veya bazı zorunlu hareketler gibi bilgilendirici işaretler için kullanılır.'
  },
  'env-29-yellow-diamond': {
    question: 'Sarı elmas şeklindeki bir trafik levhası genellikle neyi ifade eder?',
    answers: ['Uyarı (ABD gibi bazı ülkelerde)', 'Okul bölgesi', 'Mecburi yön', 'Parkın serbest olduğu yer'],
    explanation:
      'Bazı ülkelerde sarı elmas levhalar, virajlar, kavşaklar veya geçitler gibi yaklaşan tehlikeler konusunda sürücüyü uyarır.'
  },
  'env-30-no-overtaking': {
    question: 'Yan yana iki araç figürü bulunan bir levha genellikle neyi gösterir?',
    answers: ['Sollama serbest', 'Sollama yasağı/Geçme yasağı', 'İki yönlü trafik', 'Yarış yapmak yasak'],
    explanation:
      'Genellikle biri kırmızı renkte iki araç sembolü, diğer araçları sollamanın yasak olduğu bir bölgeyi ifade eder.'
  },
  'env-31-general-danger': {
    question:
      'Kırmızı veya sarı üçgen içinde siyah ünlem işareti bulunan bir levha genellikle ne tür bir uyarı verir?',
    answers: [
      'Genel tehlike veya tanımlanmamış bir risk',
      'Yakında acil servisler olduğunu',
      'Yol adında ünlem işareti olduğunu',
      'Otoyolun bittiğini'
    ],
    explanation:
      'Ünlem işareti, özel bir sembolü olmayan tehlikeler için genel uyarı işareti olarak kullanılır; ek levha genellikle tehlikeyi açıklar.'
  },
  'env-32-speed-limit': {
    question: 'Kırmızı çerçeveli daire içinde “50” yazan levha neyi gösterir?',
    answers: ['Asgari hız 50 km/s', 'Azami hız 50 km/s', '50 metre sonra kavşak', 'Azami ağırlık 50 ton'],
    explanation:
      'Kırmızı çerçeveli daireler çoğunlukla azami sınırları gösterir; burada 50, ideal koşullarda yasal en yüksek hızın 50 km/s olduğunu belirtir.'
  },
  'env-33-ped-crossing': {
    question: 'Tipik bir yaya geçidi levhası neyi ifade eder?',
    answers: ['Yayalar giremez', 'Yaya geçidi/karşıdan karşıya geçiş noktası', 'Sadece yayalara açık bölge', 'Yayalar araçlara yol vermek zorunda'],
    explanation:
      'Yaya geçidi işaretleri, sürücülerin hızlarını azaltıp geçitten geçen yayalara yol vermeye hazır olmaları gerektiğini bildirir.'
  },
  'env-34-slippery-road': {
    question: 'Kayarak savrulan bir araç resmi içeren üçgen uyarı levhası ne anlama gelir?',
    answers: ['Yarış pisti', 'İleride kaygan yol koşulları', 'Keskin viraj', 'Spor araçlar için park alanı'],
    explanation:
      'Kaygan yol levhası, yağmur, buz, kar veya başka nedenlerle lastik tutuşunun azalabileceği bir yol kesimine yaklaştığınızı bildirir.'
  },
  'env-35-straight-only': {
    question: 'Yukarı yönlü beyaz ok bulunan mavi daire levhası neyi zorunlu kılar?',
    answers: ['İleride tek yönlü cadde', 'Yokuş yukarı yol', 'Sadece düz devam et (mecburi yön)', 'Gökyüzü izleme alanı'],
    explanation:
      'Mavi daire içindeki ok, mecburi hareketleri gösterir; yalnızca düz devam etmeniz gerektiğini, dönüş yapamayacağınızı belirtir.'
  },
  'env-36-bicycle': {
    question: 'Bisiklet sembolü taşıyan bir levha genellikle neyi gösterir?',
    answers: ['Bisiklet tamir atölyesi', 'Bisiklet yolu veya bisiklet geçidi', 'Bisiklet giremez', 'Bisiklet kiralama noktası'],
    explanation:
      'Bisiklet sembolü, çoğunlukla bisikletlilerin kullanacağı şeritleri, paylaşılan yolları veya geçitleri işaret eder.'
  },
  'env-37-green-panels': {
    question: 'Otoyollardaki büyük yeşil yön levhaları genellikle ne tür bilgiler verir?',
    answers: ['Sadece acil çıkışlar', 'Mesafeler, yönler ve varış noktaları', 'Çevre koruma bölgeleri', 'Sadece dinlenme tesisleri'],
    explanation:
      'Yeşil panolar genellikle güzergâh bilgisi, çıkışlar, şehir isimleri ve mesafeler gibi rota rehberliği için kullanılır.'
  },
  'env-38-two-way-traffic': {
    question: 'Biri yukarı, biri aşağı bakan iki ok içeren üçgen levha neyi belirtir?',
    answers: ['Asansör var', 'İleride iki yönlü trafik', 'Çift yönlü bisiklet yolu', 'Dikey geçiş yüksekliği bilgisi'],
    explanation:
      'Zıt yönlere bakan oklar, tek yönlü yoldan iki yönlü trafiğin olduğu bir kesime girdiğinizi veya böyle bir bölgeye yaklaştığınızı gösterir.'
  }
}

const signLibrarySections = signSectionOrder
  .map((section) => ({
    title: section.title,
    items: (signAssets[section.key] || []).map((item) => ({
      label: item.label,
      src: item.src
    }))
  }))
  .filter((section) => section.items.length > 0)

const allSignItems = Object.entries(signAssets).flatMap(([category, items]) =>
  (items || []).map((item, index) => ({
    ...item,
    category,
    _id: `${category}-${index}`
  }))
)

const generatedSignQuestions = allSignItems.map((sign, index) => {
  const difficultyByCategory =
    sign.category === 'information' || sign.category === 'priority'
      ? 'easy'
      : sign.category === 'mandatory' || sign.category === 'warning'
        ? 'medium'
        : 'hard'

  const pool = allSignItems.filter((s) => s._id !== sign._id)
  const wrongOptions = shuffleArray(pool).slice(0, 3)
  const optionObjects = shuffleArray([sign, ...wrongOptions])
  const correctIndex = optionObjects.findIndex((opt) => opt._id === sign._id)

  return {
    id: `auto-sign-${index}`,
    question: 'What does this traffic sign indicate?',
    answers: optionObjects.map((opt) => opt.label),
    correctIndex,
    explanation: 'Refer to the Traffic Signs Library section for full context and usage of this sign.',
    difficulty: difficultyByCategory,
    visual: {
      type: 'image',
      src: sign.src,
      caption: sign.label
    }
  }
})

const interactiveModules = [
  {
    title: 'Traffic Signs Library',
    text: 'Browse every major traffic sign, with visuals, explanations, categories, and real-world examples.',
    icon: '🛑'
  },
  {
    title: 'Attention Test (Alcohol Awareness Game)',
    text:
      'Try a fast-reaction game that simulates how impaired attention affects driving. Click the correct shape as fast as possible and see your reaction score and impairment level.',
    icon: '🎯'
  },
  {
    title: 'Signs Quiz',
    text:
      'Test your knowledge of warning signs, mandatory signs, speed limits, and more. Choose 10, 20, or 30 questions.',
    icon: '🧩'
  },
  {
    title: 'Traffic Knowledge Quiz',
    text:
      'Answer scenario-based questions about safe distances, human factors, rules, vehicle systems, and real-road logic.',
    icon: '📘'
  }
]

const timeline = [
  {
    title: 'Step 1 — Learn',
    text:
      'Start by reading the main sections on vehicle safety, human factors, and road signs. Each topic is broken into short, clear explanations.'
  },
  {
    title: 'Step 2 — Practice',
    text: 'Use quizzes and visual games to reinforce what you learned in an interactive way.'
  },
  {
    title: 'Step 3 — Improve',
    text: 'View your results, check your mistakes, and explore topics you need to understand better.'
  }
]

const safetyTips = [
  'Keep a 2-3 second following distance to allow enough reaction time.',
  'Put your phone away while driving—even a short glance can hide a critical moment.',
  'Slow down on wet roads to reduce the risk of hydroplaning.',
  'Check tire pressure and tread depth regularly to maintain grip and stability.',
  'Use headlights in low visibility or whenever wipers are on.',
  'Never drive when fatigued or after drinking alcohol.',
  'Wear your seat belt in every seat, on every trip.'
]

const learnersParagraph =
  'Whether you are preparing for a driving exam, studying traffic safety in school, or simply learning to be a safer driver, this platform gives you everything you need—clear explanations, interactive tools, and practical knowledge based on modern traffic science.'

const municipalSignSizes = [
  {
    key: 'warning-prohibitory',
    titleEn: 'Warning & Prohibitory Signs',
    titleTr: 'Uyarı ve Yasaklayıcı Levhalar',
    sizeEn: '70-90 cm side/diameter (urban), 90-120 cm (highway)',
    sizeTr: '70-90 cm kenar/çap (şehir içi), 90-120 cm (otoyol)',
    notesEn:
      'Equilateral triangle or circle on 1.2 mm galvanized sheet, Class 1/2 reflective foil. 2-3 mm border, 7-10 cm clearance between symbol and edge.',
    notesTr:
      'Eşkenar üçgen veya daire, 1.2 mm galvaniz saç, Sınıf 1/2 reflektif folyo. 2-3 mm çerçeve, sembol ile kenar arasında 7-10 cm boşluk.'
  },
  {
    key: 'mandatory-priority',
    titleEn: 'Mandatory & Priority Signs',
    titleTr: 'Zorunlu ve Öncelik Levhaları',
    sizeEn: '70-90 cm diameter (urban), 90-120 cm (highway)',
    sizeTr: '70-90 cm çap (şehir içi), 90-120 cm (otoyol)',
    notesEn:
      'Circular blue (mandatory) or octagon/triangle (priority) with Class 1/2 reflective. Use heavy-duty posts; minimum 60 mm pole diameter.',
    notesTr:
      'Mavi dairesel (zorunlu) veya sekizgen/üçgen (öncelik) Sınıf 1/2 reflektif. Dayanıklı direk; en az 60 mm direk çapı.'
  },
  {
    key: 'information-additional',
    titleEn: 'Information & Additional Plates',
    titleTr: 'Bilgi ve Ek Levhalar',
    sizeEn: '60-100 cm width depending on text length; 40-60 cm height common.',
    sizeTr: 'Metin uzunluğuna göre 60-100 cm genişlik; 40-60 cm yükseklik yaygın.',
    notesEn:
      'Rectangular panels, high-contrast text, Class 1 reflective minimum. Keep 10-15 cm padding around text/pictogram.',
    notesTr:
      'Dikdörtgen paneller, yüksek kontrastlı yazı, en az Sınıf 1 reflektif. Yazı/piktogram çevresinde 10-15 cm boşluk bırakın.'
  },
  {
    key: 'mounting-clearance',
    titleEn: 'Mounting Height & Clearance',
    titleTr: 'Montaj Yüksekliği ve Açıklık',
    sizeEn: 'Urban: bottom edge 2.2 m above pavement; Rural: 1.8 m minimum.',
    sizeTr: 'Şehir içi: alt kenar yol seviyesinden 2.2 m; kırsal: minimum 1.8 m.',
    notesEn:
      'Set back 50-200 cm from pavement edge; ensure 80-120 m visibility distance on approach.',
    notesTr:
      'Kaldırım kenarından 50-200 cm geride konumlayın; yaklaşımda 80-120 m görünürlük sağlayın.'
  }
]

const cyprusDocsKktc = [
  {
    key: 'id',
    labelEn: 'ID/Passport',
    labelTr: 'Kimlik/Pasaport',
    noteEn: 'Check KKTC entry rules; keep passport validity sufficient.',
    noteTr: 'KKTC giriş şartlarını kontrol edin; pasaport geçerliliği yeterli olsun.'
  },
  {
    key: 'license',
    labelEn: 'Driving Licence',
    labelTr: 'Sürücü Belgesi',
    noteEn: 'Turkish licence generally accepted; keep a copy/translation if asked.',
    noteTr: 'Türk ehliyeti genelde kabul edilir; istenirse fotokopi/tercüme bulundurun.'
  },
  {
    key: 'rental',
    labelEn: 'Registration / Rental Contract',
    labelTr: 'Ruhsat / Kiralama Sözleşmesi',
    noteEn: 'Registration and rental agreement in the car; plate/VIN must match.',
    noteTr: 'Ruhsat ve kiralama sözleşmesi araçta olsun; plaka/şasi numarası uysun.'
  },
  {
    key: 'insurance',
    labelEn: 'Insurance (Local/Green Card)',
    labelTr: 'Sigorta (Yerel/Yeşil Kart)',
    noteEn: 'Border insurance can be requested; keep printed policy.',
    noteTr: 'Sınırda ek sigorta istenebilir; poliçenin çıktısını saklayın.'
  },
  {
    key: 'safety',
    labelEn: 'Safety Kit',
    labelTr: 'Güvenlik Seti',
    noteEn: 'Triangle, reflective vest, spare tire/repair kit, basic first-aid.',
    noteTr: 'Üçgen, reflektörlü yelek, stepne/tamir kiti, temel ilk yardım.'
  }
]

const cyprusDocsSouth = [
  {
    key: 'passport',
    labelEn: 'Passport & Visa (if required)',
    labelTr: 'Pasaport ve Vize (gerekiyorsa)',
    noteEn: 'Check Republic of Cyprus visa policy before crossing south.',
    noteTr: 'Güney Kıbrıs vize politikasını geçişten önce kontrol edin.'
  },
  {
    key: 'license',
    labelEn: 'Driving Licence + Translation if needed',
    labelTr: 'Sürücü Belgesi + Gerekiyorsa Tercüme',
    noteEn: 'International licence/translation may be requested; keep originals.',
    noteTr: 'Uluslararası ehliyet/tercüme istenebilir; orijinaller yanınızda olsun.'
  },
  {
    key: 'insurance',
    labelEn: 'South Cyprus Insurance',
    labelTr: 'Güney Kıbrıs Sigortası',
    noteEn: 'Separate southern insurance is often mandatory; buy at crossing and keep receipt.',
    noteTr: 'Güney için ayrı sigorta genelde zorunlu; sınırda yaptırıp dekontu saklayın.'
  },
  {
    key: 'vehicle',
    labelEn: 'Vehicle Papers',
    labelTr: 'Araç Evrakları',
    noteEn: 'Registration, rental contract, plate/VIN match; some rentals restrict south crossings.',
    noteTr: 'Ruhsat, kiralama sözleşmesi, plaka/şasi uyumu; bazı kiralamalar güneye geçişi kısıtlar.'
  },
  {
    key: 'safety',
    labelEn: 'Safety Kit',
    labelTr: 'Güvenlik Seti',
    noteEn: 'Triangle, reflective vest, spare, first-aid; police may check.',
    noteTr: 'Üçgen, reflektörlü yelek, stepne, ilk yardım; polis kontrol edebilir.'
  }
]

const carHotspots = [
  {
    key: 'hood',
    labelEn: 'Hood & Engine Bay',
    labelTr: 'Kaput ve Motor Bölümü',
    descEn: 'Engine, coolant, oil level, battery, belts.',
    descTr: 'Motor, soğutma suyu, yağ seviyesi, akü, kayışlar.',
    top: '52%',
    left: '25%'
  },
  {
    key: 'front-lights',
    labelEn: 'Headlights & Signals',
    labelTr: 'Farlar ve Sinyaller',
    descEn: 'Low/high beam, DRL, turn indicators, fog lights.',
    descTr: 'Kısa/uzun far, GDL, sinyaller, sis farı.',
    top: '58%',
    left: '18%'
  },
  {
    key: 'wheels',
    labelEn: 'Tires & Brakes',
    labelTr: 'Lastikler ve Frenler',
    descEn: 'Tread depth, pressure (PSI/bar), brake discs/pads.',
    descTr: 'Diş derinliği, hava basıncı (PSI/bar), disk/balata durumu.',
    top: '72%',
    left: '28%'
  },
  {
    key: 'doors',
    labelEn: 'Doors & Airbags',
    labelTr: 'Kapılar ve Hava Yastıkları',
    descEn: 'Side airbags, child locks, seals, hinges.',
    descTr: 'Yan hava yastıkları, çocuk kilidi, fitil ve menteşeler.',
    top: '52%',
    left: '50%'
  },
  {
    key: 'cabin',
    labelEn: 'Cabin & Dashboard',
    labelTr: 'Kabin ve Gösterge Paneli',
    descEn: 'Seatbelts, warning lamps, HVAC, infotainment.',
    descTr: 'Emniyet kemerleri, uyarı lambaları, klima, multimedya.',
    top: '38%',
    left: '42%'
  },
  {
    key: 'rear',
    labelEn: 'Trunk & Spare',
    labelTr: 'Bagaj ve Yedek',
    descEn: 'Spare tire/kit, triangle, vest, tool kit.',
    descTr: 'Stepne/tamir kiti, reflektör üçgen, yelek, takım çantası.',
    top: '52%',
    left: '78%'
  },
  {
    key: 'rear-lights',
    labelEn: 'Tail Lights & Reverse',
    labelTr: 'Arka Stop ve Geri Vites',
    descEn: 'Brake lights, reverse lamp, rear fog, indicators.',
    descTr: 'Fren lambası, geri vites lambası, arka sis, sinyaller.',
    top: '58%',
    left: '82%'
  },
  {
    key: 'roof',
    labelEn: 'Roof & Glass',
    labelTr: 'Tavan ve Camlar',
    descEn: 'Sunroof seals, windshield, wipers, washer fluid.',
    descTr: 'Sunroof fitilleri, ön cam, silecekler, cam suyu.',
    top: '32%',
    left: '55%'
  }
]

// Araç parçaları rehberi - detaylı bilgiler
const carPartsGuide = [
  {
    key: 'engine',
    icon: '🔧',
    labelEn: 'Engine & Motor',
    labelTr: 'Motor',
    descEn: 'The heart of your vehicle that converts fuel into motion.',
    descTr: 'Yakıtı harekete dönüştüren aracınızın kalbi.',
    detailsEn: [
      'Check oil level every 2 weeks or before long trips',
      'Change oil every 5,000-10,000 km depending on oil type',
      'Listen for unusual noises: knocking, ticking, or grinding',
      'Watch for oil leaks under the car',
      'Never ignore the check engine light'
    ],
    detailsTr: [
      'Yağ seviyesini her 2 haftada veya uzun yolculuklardan önce kontrol edin',
      'Yağ türüne göre her 5.000-10.000 km\'de yağ değiştirin',
      'Olağandışı seslere dikkat edin: vuruntu, tıkırtı veya gıcırtı',
      'Araç altında yağ sızıntısı olup olmadığını kontrol edin',
      'Motor arıza lambasını asla görmezden gelmeyin'
    ],
    warningEn: 'Never open the radiator cap when the engine is hot!',
    warningTr: 'Motor sıcakken asla radyatör kapağını açmayın!'
  },
  {
    key: 'brakes',
    icon: '🛑',
    labelEn: 'Brake System',
    labelTr: 'Fren Sistemi',
    descEn: 'Critical safety system that stops your vehicle.',
    descTr: 'Aracınızı durduran kritik güvenlik sistemi.',
    detailsEn: [
      'Check brake fluid level monthly',
      'Replace brake pads every 30,000-70,000 km',
      'Listen for squealing or grinding sounds when braking',
      'If the brake pedal feels soft or spongy, have it checked immediately',
      'ABS warning light should turn off after starting the car'
    ],
    detailsTr: [
      'Fren hidroliği seviyesini aylık kontrol edin',
      'Fren balatalarını her 30.000-70.000 km\'de değiştirin',
      'Fren yaparken cızırtı veya sürtünme sesi olup olmadığını dinleyin',
      'Fren pedalı yumuşak veya süngerimsi hissediliyorsa hemen kontrol ettirin',
      'ABS uyarı lambası aracı çalıştırdıktan sonra sönmelidir'
    ],
    warningEn: 'Never drive with worn brake pads - this can cause brake failure!',
    warningTr: 'Aşınmış balatalarla asla sürüş yapmayın - fren arızasına yol açabilir!'
  },
  {
    key: 'tires',
    icon: '🛞',
    labelEn: 'Tires & Wheels',
    labelTr: 'Lastikler ve Jantlar',
    descEn: 'The only contact point between your car and the road.',
    descTr: 'Aracınız ile yol arasındaki tek temas noktası.',
    detailsEn: [
      'Check tire pressure at least once a month (when cold)',
      'Minimum tread depth: 1.6mm (use the coin test)',
      'Rotate tires every 10,000 km for even wear',
      'Check for cracks, bulges, or embedded objects',
      'Replace tires older than 6 years regardless of tread'
    ],
    detailsTr: [
      'Lastik basıncını ayda en az bir kez kontrol edin (soğukken)',
      'Minimum diş derinliği: 1.6mm (bozuk para testi yapın)',
      'Eşit aşınma için lastikleri her 10.000 km\'de yer değiştirin',
      'Çatlak, şişlik veya saplanmış nesne olup olmadığını kontrol edin',
      'Diş derinliğinden bağımsız 6 yıldan eski lastikleri değiştirin'
    ],
    warningEn: 'Underinflated tires increase fuel consumption and risk of blowouts!',
    warningTr: 'Düşük basınçlı lastikler yakıt tüketimini artırır ve patlama riskini yükseltir!'
  },
  {
    key: 'lights',
    icon: '💡',
    labelEn: 'Lights & Signals',
    labelTr: 'Farlar ve Sinyaller',
    descEn: 'Essential for visibility and communication with other drivers.',
    descTr: 'Görünürlük ve diğer sürücülerle iletişim için temel.',
    detailsEn: [
      'Check all lights weekly: headlights, tail lights, brake lights, indicators',
      'Clean headlight lenses regularly for maximum brightness',
      'Replace bulbs in pairs for even illumination',
      'Adjust headlight aim if carrying heavy loads',
      'Use fog lights only in fog or heavy rain'
    ],
    detailsTr: [
      'Tüm lambaları haftalık kontrol edin: far, stop, fren, sinyal',
      'Maksimum parlaklık için far camlarını düzenli temizleyin',
      'Eşit aydınlatma için ampulleri çift olarak değiştirin',
      'Ağır yük taşırken far ayarını düzeltin',
      'Sis farlarını sadece sis veya şiddetli yağmurda kullanın'
    ],
    warningEn: 'Driving with broken lights is illegal and extremely dangerous!',
    warningTr: 'Bozuk lambalarla sürüş yapmak yasadışı ve son derece tehlikelidir!'
  },
  {
    key: 'cooling',
    icon: '❄️',
    labelEn: 'Cooling System',
    labelTr: 'Soğutma Sistemi',
    descEn: 'Prevents the engine from overheating.',
    descTr: 'Motorun aşırı ısınmasını önler.',
    detailsEn: [
      'Check coolant level when engine is cold',
      'Use the correct coolant type (check owner\'s manual)',
      'Flush and replace coolant every 2-3 years',
      'Inspect hoses for cracks or soft spots',
      'Watch the temperature gauge while driving'
    ],
    detailsTr: [
      'Motor soğukken antifriz seviyesini kontrol edin',
      'Doğru antifriz türünü kullanın (kullanım kılavuzuna bakın)',
      'Antifrizi her 2-3 yılda boşaltıp değiştirin',
      'Hortumları çatlak veya yumuşak noktalar için inceleyin',
      'Sürüş sırasında sıcaklık göstergesini izleyin'
    ],
    warningEn: 'If the engine overheats, stop immediately and turn off the AC!',
    warningTr: 'Motor aşırı ısınırsa hemen durun ve klimayı kapatın!'
  },
  {
    key: 'electrical',
    icon: '🔋',
    labelEn: 'Electrical System',
    labelTr: 'Elektrik Sistemi',
    descEn: 'Powers all electronic components in your vehicle.',
    descTr: 'Aracınızdaki tüm elektronik bileşenlere güç sağlar.',
    detailsEn: [
      'Check battery terminals for corrosion (white/green buildup)',
      'Replace battery every 3-5 years',
      'Dim lights or slow cranking indicate a weak battery',
      'Turn off all accessories before starting the car',
      'Keep battery terminals clean and tight'
    ],
    detailsTr: [
      'Akü kutuplarını korozyon için kontrol edin (beyaz/yeşil birikim)',
      'Aküyü her 3-5 yılda değiştirin',
      'Sönük lambalar veya yavaş marş zayıf aküye işaret eder',
      'Aracı çalıştırmadan önce tüm aksesuarları kapatın',
      'Akü kutuplarını temiz ve sıkı tutun'
    ],
    warningEn: 'Never jump-start a frozen battery - it can explode!',
    warningTr: 'Donmuş bir aküye asla takviye yapmayın - patlayabilir!'
  },
  {
    key: 'steering',
    icon: '🎯',
    labelEn: 'Steering System',
    labelTr: 'Direksiyon Sistemi',
    descEn: 'Controls the direction of your vehicle.',
    descTr: 'Aracınızın yönünü kontrol eder.',
    detailsEn: [
      'Check power steering fluid level regularly',
      'Whining noise when turning may indicate low fluid',
      'Steering should not vibrate or pull to one side',
      'Get wheel alignment checked after hitting potholes',
      'Replace worn steering components immediately'
    ],
    detailsTr: [
      'Hidrolik direksiyon yağı seviyesini düzenli kontrol edin',
      'Dönerken cızırdama sesi düşük yağa işaret edebilir',
      'Direksiyon titremeli veya bir tarafa çekmemeli',
      'Çukurlara çarptıktan sonra rot ayarını kontrol ettirin',
      'Aşınmış direksiyon parçalarını hemen değiştirin'
    ],
    warningEn: 'Loose steering can cause loss of control at high speeds!',
    warningTr: 'Gevşek direksiyon yüksek hızlarda kontrolü kaybetmenize neden olabilir!'
  },
  {
    key: 'transmission',
    icon: '⚙️',
    labelEn: 'Transmission',
    labelTr: 'Şanzıman',
    descEn: 'Transfers power from engine to wheels.',
    descTr: 'Motordan tekerleklere güç aktarır.',
    detailsEn: [
      'Check transmission fluid level and color',
      'Fluid should be red/pink, not brown or black',
      'Harsh shifting or slipping indicates problems',
      'Change transmission fluid per manufacturer schedule',
      'Let the car warm up before driving in cold weather'
    ],
    detailsTr: [
      'Şanzıman yağı seviyesini ve rengini kontrol edin',
      'Yağ kırmızı/pembe olmalı, kahverengi veya siyah değil',
      'Sert vites değişimi veya kayma sorun işaret eder',
      'Şanzıman yağını üretici takvime göre değiştirin',
      'Soğuk havalarda sürüşten önce aracın ısınmasını bekleyin'
    ],
    warningEn: 'Never shift to reverse or park while the car is moving!',
    warningTr: 'Araç hareket halindeyken asla geri vitese veya parka geçmeyin!'
  },
  {
    key: 'suspension',
    icon: '🔩',
    labelEn: 'Suspension',
    labelTr: 'Süspansiyon',
    descEn: 'Absorbs road shocks and maintains tire contact.',
    descTr: 'Yol darbelerini emer ve lastik temasını korur.',
    detailsEn: [
      'Check for oil leaks on shock absorbers',
      'Bounce test: car should stop bouncing after 1-2 times',
      'Uneven tire wear indicates alignment/suspension issues',
      'Clunking sounds over bumps mean worn components',
      'Replace shocks every 80,000-100,000 km'
    ],
    detailsTr: [
      'Amortisörlerde yağ sızıntısı olup olmadığını kontrol edin',
      'Zıplatma testi: araç 1-2 zıplamadan sonra durmalı',
      'Düzensiz lastik aşınması rot/süspansiyon sorununa işaret eder',
      'Engeller üzerinde takırtı sesi aşınmış parçalara işaret eder',
      'Amortisörleri her 80.000-100.000 km\'de değiştirin'
    ],
    warningEn: 'Worn suspension increases braking distance and reduces control!',
    warningTr: 'Aşınmış süspansiyon fren mesafesini artırır ve kontrolü azaltır!'
  },
  {
    key: 'exhaust',
    icon: '💨',
    labelEn: 'Exhaust System',
    labelTr: 'Egzoz Sistemi',
    descEn: 'Removes exhaust gases and reduces noise.',
    descTr: 'Egzoz gazlarını atar ve gürültüyü azaltır.',
    detailsEn: [
      'Listen for unusual loud noises or rattling',
      'Check for rust or holes in exhaust pipes',
      'Black smoke indicates fuel problems, blue smoke oil burning',
      'Smell of exhaust inside car is very dangerous',
      'Replace catalytic converter if check engine light appears'
    ],
    detailsTr: [
      'Olağandışı yüksek sesler veya takırtı dinleyin',
      'Egzoz borularında pas veya delik olup olmadığını kontrol edin',
      'Siyah duman yakıt sorununa, mavi duman yağ yanmasına işaret eder',
      'Araç içinde egzoz kokusu çok tehlikelidir',
      'Motor arıza lambası yanarsa katalitik konvertörü değiştirin'
    ],
    warningEn: 'Exhaust fumes contain deadly carbon monoxide - never idle in closed spaces!',
    warningTr: 'Egzoz gazları ölümcül karbon monoksit içerir - kapalı alanlarda asla rölantide beklemeyin!'
  },
  {
    key: 'fuel',
    icon: '⛽',
    labelEn: 'Fuel System',
    labelTr: 'Yakıt Sistemi',
    descEn: 'Stores and delivers fuel to the engine.',
    descTr: 'Yakıtı depolar ve motora iletir.',
    detailsEn: [
      'Keep at least 1/4 tank to prevent fuel pump damage',
      'Use the correct fuel type for your vehicle',
      'Replace fuel filter every 30,000-50,000 km',
      'Smell of gasoline indicates a leak - check immediately',
      'Tighten fuel cap until it clicks to prevent evaporation'
    ],
    detailsTr: [
      'Yakıt pompası hasarını önlemek için en az 1/4 depo tutun',
      'Aracınız için doğru yakıt türünü kullanın',
      'Yakıt filtresini her 30.000-50.000 km\'de değiştirin',
      'Benzin kokusu sızıntıya işaret eder - hemen kontrol edin',
      'Buharlaşmayı önlemek için yakıt kapağını tık sesi gelene kadar sıkın'
    ],
    warningEn: 'Never smoke or use phone while refueling!',
    warningTr: 'Yakıt doldururken asla sigara içmeyin veya telefon kullanmayın!'
  },
  {
    key: 'safety',
    icon: '🛡️',
    labelEn: 'Safety Equipment',
    labelTr: 'Güvenlik Donanımı',
    descEn: 'Protects occupants in case of an accident.',
    descTr: 'Kaza durumunda yolcuları korur.',
    detailsEn: [
      'Always wear seatbelt - it saves lives',
      'Never disable airbags or place objects over them',
      'Check seatbelt webbing for fraying or damage',
      'Child seats must be properly installed and age-appropriate',
      'Airbag warning light should turn off after starting'
    ],
    detailsTr: [
      'Her zaman emniyet kemeri takın - hayat kurtarır',
      'Hava yastıklarını asla devre dışı bırakmayın veya üzerlerine nesne koymayın',
      'Emniyet kemeri kayışında yıpranma veya hasar olup olmadığını kontrol edin',
      'Çocuk koltukları düzgün kurulmalı ve yaşa uygun olmalı',
      'Hava yastığı uyarı lambası çalıştırmadan sonra sönmeli'
    ],
    warningEn: 'Seatbelts reduce death risk by 45% and serious injury by 50%!',
    warningTr: 'Emniyet kemerleri ölüm riskini %45, ciddi yaralanmayı %50 azaltır!'
  }
]

// Quiz için ek araç parçaları (görsel haritada yok ama test için kullanılır)
const extraCarParts = [
  {
    key: 'mirrors',
    labelEn: 'Mirrors',
    labelTr: 'Aynalar',
    descEn: 'Side mirrors, rear-view mirror, blind spot indicators.',
    descTr: 'Yan aynalar, dikiz aynası, kör nokta göstergeleri.'
  },
  {
    key: 'bumpers',
    labelEn: 'Bumpers',
    labelTr: 'Tamponlar',
    descEn: 'Front and rear bumpers, parking sensors, tow hook.',
    descTr: 'Ön ve arka tamponlar, park sensörleri, çeki kancası.'
  },
  {
    key: 'exhaust',
    labelEn: 'Exhaust System',
    labelTr: 'Egzoz Sistemi',
    descEn: 'Muffler, catalytic converter, exhaust pipe, emissions.',
    descTr: 'Susturucu, katalitik konvertör, egzoz borusu, emisyon.'
  },
  {
    key: 'fuel',
    labelEn: 'Fuel System',
    labelTr: 'Yakıt Sistemi',
    descEn: 'Fuel tank, fuel cap, fuel pump, fuel filter.',
    descTr: 'Yakıt deposu, depo kapağı, yakıt pompası, yakıt filtresi.'
  },
  {
    key: 'steering',
    labelEn: 'Steering Wheel',
    labelTr: 'Direksiyon',
    descEn: 'Power steering, horn, cruise control, airbag.',
    descTr: 'Hidrolik direksiyon, korna, hız sabitleme, hava yastığı.'
  },
  {
    key: 'pedals',
    labelEn: 'Pedals',
    labelTr: 'Pedallar',
    descEn: 'Accelerator, brake pedal, clutch (manual), dead pedal.',
    descTr: 'Gaz pedalı, fren pedalı, debriyaj (manuel), dinlenme pedalı.'
  },
  {
    key: 'transmission',
    labelEn: 'Transmission',
    labelTr: 'Şanzıman',
    descEn: 'Gearbox, gear lever, automatic/manual modes.',
    descTr: 'Vites kutusu, vites kolu, otomatik/manuel modlar.'
  },
  {
    key: 'suspension',
    labelEn: 'Suspension',
    labelTr: 'Süspansiyon',
    descEn: 'Shock absorbers, springs, struts, control arms.',
    descTr: 'Amortisörler, yaylar, kollar, salıncak kolları.'
  },
  {
    key: 'radiator',
    labelEn: 'Radiator',
    labelTr: 'Radyatör',
    descEn: 'Cooling system, coolant, thermostat, fan.',
    descTr: 'Soğutma sistemi, antifriz, termostat, fan.'
  },
  {
    key: 'battery',
    labelEn: 'Battery',
    labelTr: 'Akü',
    descEn: 'Car battery, terminals, voltage, charging system.',
    descTr: 'Araç aküsü, kutuplar, voltaj, şarj sistemi.'
  },
  {
    key: 'alternator',
    labelEn: 'Alternator',
    labelTr: 'Alternatör',
    descEn: 'Electrical generator, belt-driven, charges battery.',
    descTr: 'Elektrik jeneratörü, kayış tahrikli, aküyü şarj eder.'
  },
  {
    key: 'fenders',
    labelEn: 'Fenders',
    labelTr: 'Çamurluklar',
    descEn: 'Front and rear fenders, wheel arches, mud flaps.',
    descTr: 'Ön ve arka çamurluklar, tekerlek kavisleri, paçalıklar.'
  },
  {
    key: 'horn',
    labelEn: 'Horn',
    labelTr: 'Korna',
    descEn: 'Warning signal, located behind the front grille.',
    descTr: 'Uyarı sinyali, ön ızgaranın arkasında bulunur.'
  },
  {
    key: 'wipers',
    labelEn: 'Windshield Wipers',
    labelTr: 'Silecekler',
    descEn: 'Front and rear wipers, washer fluid, wiper blades.',
    descTr: 'Ön ve arka silecekler, cam suyu, silecek lastikleri.'
  },
  {
    key: 'seatbelts',
    labelEn: 'Seatbelts',
    labelTr: 'Emniyet Kemerleri',
    descEn: 'Three-point belt, pretensioners, buckle, retractor.',
    descTr: 'Üç noktalı kemer, ön gericiler, toka, makaralı sistem.'
  },
  {
    key: 'handbrake',
    labelEn: 'Handbrake',
    labelTr: 'El Freni',
    descEn: 'Parking brake, lever or electronic button, rear wheels.',
    descTr: 'Park freni, kol veya elektronik düğme, arka tekerlekler.'
  }
]

const finalCtaText =
  'This platform is your interactive guide to understanding vehicles, people, and roads in a safer, smarter way. Begin now and turn theory into real-world safe habits.'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navSolid, setNavSolid] = useState(false)
  const [matrixIndex, setMatrixIndex] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [lang, setLang] = useState('tr') // 'tr' | 'en'
  const [activeView, setActiveView] = useState('home') // 'home' | 'quiz' | 'attention'
  const [quizType, setQuizType] = useState('signs') // 'signs' | 'knowledge' | 'carparts'
  const [quizStage, setQuizStage] = useState('setup') // 'setup' | 'question' | 'result'
  const [difficulty, setDifficulty] = useState('easy') // 'easy' | 'medium' | 'hard'
  const [questionCount, setQuestionCount] = useState(10)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [answers, setAnswers] = useState([])
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)

  // Attention test state
  const [attentionStage, setAttentionStage] = useState('intro') // 'intro' | 'countdown' | 'running' | 'result'
  const [attentionDuration, setAttentionDuration] = useState(30)
  const [attentionDifficulty, setAttentionDifficulty] = useState('easy') // 'easy' | 'normal' | 'hard'
  const [attentionCountdown, setAttentionCountdown] = useState(3)
  const [attentionRemaining, setAttentionRemaining] = useState(0)
  const [stimulus, setStimulus] = useState(null) // { id, isTarget, color, shape }
  const [stimulusShownAt, setStimulusShownAt] = useState(null)
  const [stimulusClicked, setStimulusClicked] = useState(false)
  const [attentionStats, setAttentionStats] = useState({
    correctHits: 0,
    missedTargets: 0,
    wrongClicks: 0,
    reactionTimes: []
  })

  const attentionTimerRef = useRef(null)
  const attentionShapeTimerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setNavSolid(window.scrollY > 16)
      setShowBackToTop(window.scrollY > 320)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const total = heroSignSlides.length
    if (!total) return undefined

    const interval = setInterval(() => {
      setMatrixIndex((current) => (current + 1) % total)
    }, 3800)

    return () => clearInterval(interval)
  }, [])

  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  const handleNavItemClick = (link) => {
    if (link.type === 'quiz') {
      handleStartQuizView(link.quizKey)
      return
    }

    if (link.type === 'attention') {
      handleStartAttentionView()
      return
    }

    if (activeView === 'quiz' || activeView === 'attention') {
      setActiveView('home')
    }

    handleNavClick(link.href)
  }

  const handleStartQuizView = (type) => {
    setActiveView('quiz')
    if (type) {
      setQuizType(type)
    }
    setQuizStage('setup')
    setQuestionCount(10)
    setDifficulty('easy')
    setQuizQuestions([])
    setCurrentIndex(0)
    setSelectedIndex(null)
    setAnswers([])
    setStartTime(null)
    setEndTime(null)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Araç parçaları quizi için soru oluştur (30+ soru)
  const generateCarPartsQuestions = () => {
    const questions = []
    // Tüm parçaları birleştir
    const allParts = [...carHotspots, ...extraCarParts]

    allParts.forEach((part) => {
      // Diğer parçalardan yanlış şıklar için havuz
      const otherParts = allParts.filter((p) => p.key !== part.key)

      // Soru türü 1: Açıklamadan parça adını bul
      const wrongLabels1 = shuffleArray(otherParts).slice(0, 3)
      const correctLabel = isTR ? part.labelTr : part.labelEn
      const wrongLabelAnswers = wrongLabels1.map((p) => isTR ? p.labelTr : p.labelEn)
      const answers1 = shuffleArray([correctLabel, ...wrongLabelAnswers])

      questions.push({
        id: `carpart-name-${part.key}`,
        question: isTR
          ? `"${part.descTr}" - Bu aciklama hangi arac parcasina aittir?`
          : `"${part.descEn}" - Which car part does this description belong to?`,
        answers: answers1,
        correctIndex: answers1.indexOf(correctLabel),
        explanation: isTR
          ? `Dogru cevap: ${part.labelTr}. ${part.descTr}`
          : `Correct answer: ${part.labelEn}. ${part.descEn}`,
        difficulty: 'easy'
      })

      // Soru türü 2: Parça adından açıklamayı bul
      const wrongDescs = shuffleArray(otherParts).slice(0, 3)
      const correctDesc = isTR ? part.descTr : part.descEn
      const wrongDescAnswers = wrongDescs.map((p) => isTR ? p.descTr : p.descEn)
      const answers2 = shuffleArray([correctDesc, ...wrongDescAnswers])

      questions.push({
        id: `carpart-desc-${part.key}`,
        question: isTR
          ? `"${part.labelTr}" parcasinda neler bulunur?`
          : `What is found in the "${part.labelEn}" section?`,
        answers: answers2,
        correctIndex: answers2.indexOf(correctDesc),
        explanation: isTR
          ? `${part.labelTr}: ${part.descTr}`
          : `${part.labelEn}: ${part.descEn}`,
        difficulty: 'medium'
      })
    })

    return shuffleArray(questions)
  }

  const handleBeginQuizRun = () => {
    let sourcePool
    if (quizType === 'knowledge') {
      sourcePool = knowledgeQuestions
    } else if (quizType === 'carparts') {
      sourcePool = generateCarPartsQuestions()
    } else {
      sourcePool = generatedSignQuestions
    }

    const filteredByDifficulty = sourcePool.filter((q) => {
      if (!q.difficulty) return true
      return q.difficulty === difficulty
    })

    let basePool = sourcePool

    // Önce seçilen zorluk sorularını doldur, yetmezse diğerlerinden tamamla
    if (filteredByDifficulty.length >= questionCount) {
      basePool = filteredByDifficulty
    } else if (filteredByDifficulty.length > 0) {
      const rest = sourcePool.filter((q) => !filteredByDifficulty.includes(q))
      const mixed = [...filteredByDifficulty, ...shuffleArray(rest)]
      basePool = mixed.slice(0, Math.min(questionCount, mixed.length))
    }
    if (!basePool.length) return

    const shuffled = shuffleArray(basePool)
    const total = Math.min(questionCount, shuffled.length)
    const picked = shuffled.slice(0, total)

    // Dil ayarına göre soru metinlerini dönüştür
    const localized = picked.map((q) => {
      if (!isTR) return q

      // Trafik bilgi testi ise ID bazlı Türkçe çeviri kullan
      if (quizType === 'knowledge') {
        const tr = knowledgeQuestionTranslationsTr[q.id]
        if (!tr) return q
        return {
          ...q,
          question: tr.question,
          answers: tr.answers,
          explanation: tr.explanation
        }
      }

      // Levha testinde genel Türkçe soru + Türkçeleştirilmiş cevaplar
      if (quizType === 'signs') {
        return {
          ...q,
          question: 'Bu trafik levhası neyi ifade eder?',
          answers: q.answers.map((ans) => translateSignLabel(ans, true)),
          explanation:
            'Bu levhanın tam anlamını ve kullanımını görmek için Trafik Levhaları Kütüphanesi bölümüne bakabilirsin.'
        }
      }

      // carparts zaten dil bazlı oluşturuldu
      return q
    })

    setQuizQuestions(localized)
    setQuizStage('question')
    setCurrentIndex(0)
    setAnswers([])
    setSelectedIndex(null)
    const now = Date.now()
    setStartTime(now)
    setEndTime(null)
  }

  const handleAnswerNext = () => {
    if (selectedIndex === null || !quizQuestions.length) return

    const currentQuestion = quizQuestions[currentIndex]
    const record = {
      questionId: currentQuestion.id,
      selectedIndex,
      correctIndex: currentQuestion.correctIndex,
      correct: selectedIndex === currentQuestion.correctIndex
    }

    setAnswers((prev) => [...prev, record])

    const isLast = currentIndex === quizQuestions.length - 1
    if (isLast) {
      setEndTime(Date.now())
      setQuizStage('result')
      setSelectedIndex(null)
      return
    }

    setCurrentIndex((prev) => prev + 1)
    setSelectedIndex(null)
  }

  const handleExitQuiz = () => {
    setActiveView('home')
    setQuizStage('setup')
    setQuizQuestions([])
    setAnswers([])
    setSelectedIndex(null)
    setStartTime(null)
    setEndTime(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const formatDuration = (ms) => {
    if (!ms || ms <= 0) return '0:00'
    const totalSeconds = Math.round(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const renderLines = (text) =>
    text.split('\n').map((line, idx) => (
      <p key={`${line}-${idx}`}>{line}</p>
    ))

  const isQuizMode = activeView === 'quiz'
  const isAttentionMode = activeView === 'attention'

  let quizSummary = null
  if (isQuizMode && quizStage === 'result' && quizQuestions.length && startTime && endTime) {
    const total = quizQuestions.length
    const correctCount = answers.filter((ans) => ans.correct).length
    const incorrectCount = total - correctCount
    const durationMs = endTime - startTime

    quizSummary = {
      total,
      correctCount,
      incorrectCount,
      durationMs
    }
  }

  // Attention test helpers
  const resetAttentionState = () => {
    setAttentionStage('intro')
    setAttentionCountdown(3)
    setAttentionRemaining(0)
    setStimulus(null)
    setStimulusShownAt(null)
    setStimulusClicked(false)
    setAttentionStats({
      correctHits: 0,
      missedTargets: 0,
      wrongClicks: 0,
      reactionTimes: []
    })
    if (attentionTimerRef.current) {
      clearInterval(attentionTimerRef.current)
      attentionTimerRef.current = null
    }
    if (attentionShapeTimerRef.current) {
      clearInterval(attentionShapeTimerRef.current)
      attentionShapeTimerRef.current = null
    }
  }

  const handleStartAttentionView = () => {
    setActiveView('attention')
    resetAttentionState()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const startAttentionCountdown = () => {
    resetAttentionState()
    setAttentionStage('countdown')
    setAttentionCountdown(3)
  }

  const beginAttentionRun = () => {
    setAttentionStage('running')
    setAttentionRemaining(attentionDuration)
    setStimulus(null)
    setStimulusClicked(false)

    if (attentionTimerRef.current) {
      clearInterval(attentionTimerRef.current)
    }
    if (attentionShapeTimerRef.current) {
      clearInterval(attentionShapeTimerRef.current)
    }

    // Süre sayacı (her 1 saniyede bir)
    attentionTimerRef.current = setInterval(() => {
      setAttentionRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(attentionTimerRef.current)
          attentionTimerRef.current = null
          if (attentionShapeTimerRef.current) {
            clearInterval(attentionShapeTimerRef.current)
            attentionShapeTimerRef.current = null
          }
          setAttentionStage('result')
          setStimulus(null)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Şekil üretme hızı (zorluğa göre değişir)
    const shapeDelay =
      attentionDifficulty === 'easy' ? 1200 : attentionDifficulty === 'normal' ? 900 : 650

    attentionShapeTimerRef.current = setInterval(() => {
      setAttentionStats((prevStats) => {
        // Eğer önceki turda hedef vardı ve tıklanmadıysa kaçırılmış say
        if (stimulus && stimulus.isTarget && !stimulusClicked) {
          return {
            ...prevStats,
            missedTargets: prevStats.missedTargets + 1
          }
        }
        return prevStats
      })

      const difficultyFactor =
        attentionDifficulty === 'easy' ? 0.45 : attentionDifficulty === 'normal' ? 0.6 : 0.75

      const isTarget = Math.random() < difficultyFactor
      const shapes = ['circle', 'square', 'triangle']
      const nonCircleShapes = ['square', 'triangle']
      const colors = ['green', 'red', 'yellow', 'blue']
      const nonGreenColors = ['red', 'yellow', 'blue']
      const targetShape = 'circle'
      const targetColor = 'green'

      let shape = targetShape
      let color = targetColor

      if (!isTarget) {
        if (attentionDifficulty === 'easy') {
          // Kolay: renk ve şekil bariz farklı (örneğin kırmızı kare, sarı üçgen)
          shape = nonCircleShapes[Math.floor(Math.random() * nonCircleShapes.length)]
          color = nonGreenColors[Math.floor(Math.random() * nonGreenColors.length)]
        } else if (attentionDifficulty === 'normal') {
          // Normal: bazen sadece renk, bazen sadece şekil, bazen ikisi de farklı
          const variant = Math.floor(Math.random() * 3)
          if (variant === 0) {
            // Aynı renk, farklı şekil
            color = targetColor
            shape = nonCircleShapes[Math.floor(Math.random() * nonCircleShapes.length)]
          } else if (variant === 1) {
            // Aynı şekil, farklı renk
            shape = targetShape
            color = nonGreenColors[Math.floor(Math.random() * nonGreenColors.length)]
          } else {
            // Hem renk hem şekil farklı
            shape = nonCircleShapes[Math.floor(Math.random() * nonCircleShapes.length)]
            color = nonGreenColors[Math.floor(Math.random() * nonGreenColors.length)]
          }
        } else {
          // Zor: hepsi yeşil, sadece şekil farkı ile ayırt ediliyor
          color = targetColor
          shape = nonCircleShapes[Math.floor(Math.random() * nonCircleShapes.length)]
        }
      }

      const x = 20 + Math.random() * 60
      const y = 20 + Math.random() * 60

      setStimulus({
        id: Date.now(),
        isTarget,
        shape,
        color,
        x,
        y
      })
      setStimulusShownAt(Date.now())
      setStimulusClicked(false)
    }, shapeDelay)
  }

  const handleAttentionClick = () => {
    if (attentionStage !== 'running' || !stimulus || stimulusClicked) return

    const clickTime = Date.now()

    setStimulusClicked(true)
    setStimulus(null)
    setAttentionStats((prev) => {
      if (stimulus.isTarget && stimulusShownAt) {
        const reactionTime = clickTime - stimulusShownAt
        return {
          ...prev,
          correctHits: prev.correctHits + 1,
          reactionTimes: [...prev.reactionTimes, reactionTime]
        }
      }

      if (!stimulus.isTarget) {
        return {
          ...prev,
          wrongClicks: prev.wrongClicks + 1
        }
      }

      return prev
    })
  }

  // Countdown ilerlemesi
  useEffect(() => {
    if (attentionStage !== 'countdown') return undefined

    if (attentionCountdown <= 0) {
      beginAttentionRun()
      return undefined
    }

    const id = setTimeout(() => {
      setAttentionCountdown((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(id)
  }, [attentionStage, attentionCountdown])

  const isTR = lang === 'tr'

  return (
    <div className="homepage">
      <header className={`top-nav ${navSolid ? 'solid' : ''}`}>
        <div className="brand">
          <img src="/roadnix-logo.png" alt="roadnix logo" className="brand-logo" />
          <span>roadnix</span>
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <button key={link.key} type="button" onClick={() => handleNavItemClick(link)}>
              {navLabels[lang][link.key]}
            </button>
          ))}
        </nav>
        <div className="lang-toggle">
          <button
            type="button"
            className={lang === 'tr' ? 'active' : ''}
            onClick={() => setLang('tr')}
            aria-label="Türkçe"
          >
            <img src="/flags/tr.png" alt="Türkçe" className="flag-img" />
            <span className="lang-code">TR</span>
          </button>
          <span>/</span>
          <button
            type="button"
            className={lang === 'en' ? 'active' : ''}
            onClick={() => setLang('en')}
            aria-label="English"
          >
            <img src="/flags/eng.png" alt="English" className="flag-img" />
            <span className="lang-code">ENG</span>
          </button>
        </div>
        <button className="ghost-button mobile-menu" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      <main>
        {isQuizMode ? (
          <section className="quiz-page" id="quiz-page">
            <div className="quiz-page-header">
              <button type="button" className="link-button back-link" onClick={handleExitQuiz}>
                ← {isTR ? 'Ana sayfaya dön' : 'Back to home'}
              </button>
              <p className="eyebrow">{isTR ? 'Quiz modu' : 'Quiz mode'}</p>
              <h1>
                {quizType === 'knowledge'
                  ? isTR
                    ? 'Trafik Bilgisi Testi'
                    : 'Traffic Knowledge Quiz'
                  : quizType === 'carparts'
                    ? isTR
                      ? 'Araç Parçaları Testi'
                      : 'Car Parts Quiz'
                    : isTR
                      ? 'Trafik Levhaları Testi'
                      : 'Signs Quiz'}
              </h1>
              <p>
                {isTR
                  ? 'Çalışmak istediğin quiz türünü ve soru sayısını seç; sonra odaklı bir ortamda soruları çöz. Skorunu, detaylı açıklamaları ve toplam süreni görebilirsin.'
                  : 'Choose your quiz type and question count, then answer in a focused environment. See your score, detailed explanations, and total time spent.'}
              </p>
            </div>

            <div className="quiz-shell">
              <section className="quiz-card">
                {quizStage === 'setup' && (
                  <>
                    <h2>{isTR ? 'Quiz ayarları' : 'Quiz setup'}</h2>
                    <p>
                      {isTR
                        ? 'Hangi konuda pratik yapmak ve kaç soru çözmek istediğini seç.'
                        : "Select what you want to practice and how many questions you'd like to answer."}
                    </p>

                    <div className="quiz-toggle-group">
                      <p className="label">{isTR ? 'Quiz türü' : 'Quiz type'}</p>
                      <div className="toggle-row">
                        <button
                          type="button"
                          className={`toggle-chip ${quizType === 'signs' ? 'active' : ''}`}
                          onClick={() => setQuizType('signs')}
                        >
                          🚦 {isTR ? 'Trafik Levhaları Testi' : 'Signs Quiz'}
                        </button>
                        <button
                          type="button"
                          className={`toggle-chip ${quizType === 'knowledge' ? 'active' : ''}`}
                          onClick={() => setQuizType('knowledge')}
                        >
                          📘 {isTR ? 'Trafik Bilgisi Testi' : 'Traffic Knowledge Quiz'}
                        </button>
                        <button
                          type="button"
                          className={`toggle-chip ${quizType === 'carparts' ? 'active' : ''}`}
                          onClick={() => setQuizType('carparts')}
                        >
                          🚗 {isTR ? 'Araç Parçaları Testi' : 'Car Parts Quiz'}
                        </button>
                      </div>
                    </div>

                    <div className="quiz-toggle-group">
                      <p className="label">{isTR ? 'Zorluk seviyesi' : 'Difficulty'}</p>
                      <div className="toggle-row">
                        {['easy', 'medium', 'hard'].map((level) => (
                          <button
                            key={level}
                            type="button"
                            className={`toggle-chip ${difficulty === level ? 'active' : ''}`}
                            onClick={() => setDifficulty(level)}
                          >
                            {level === 'easy' && (isTR ? 'Kolay' : 'Easy')}
                            {level === 'medium' && (isTR ? 'Orta' : 'Medium')}
                            {level === 'hard' && (isTR ? 'Zor' : 'Hard')}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="quiz-toggle-group">
                      <p className="label">{isTR ? 'Soru sayısı' : 'Number of questions'}</p>
                      <div className="toggle-row">
                        {[10, 20, 30].map((count) => (
                          <button
                            key={count}
                            type="button"
                            className={`toggle-chip ${questionCount === count ? 'active' : ''}`}
                            onClick={() => setQuestionCount(count)}
                          >
                            {count}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button type="button" className="primary-button wide" onClick={handleBeginQuizRun}>
                      {isTR ? 'Quizi Başlat' : 'Start Quiz'}
                    </button>
                  </>
                )}

                {quizStage === 'question' && quizQuestions.length > 0 && (
                  <>
                    <div className="quiz-header-row">
                      <p className="eyebrow small">
                        {isTR ? 'Soru' : 'Question'} {currentIndex + 1} / {quizQuestions.length}
                      </p>
                      <p className="quiz-type-label">
                        {quizType === 'knowledge'
                          ? isTR
                            ? 'Trafik bilgisi testi'
                            : 'Traffic Knowledge quiz'
                          : quizType === 'carparts'
                            ? isTR
                              ? 'Araç parçaları testi'
                              : 'Car Parts quiz'
                            : isTR
                              ? 'Trafik levhaları testi'
                              : 'Signs quiz'}
                      </p>
                    </div>
                    <div className="quiz-progress-bar">
                      <div
                        className="quiz-progress-bar-fill"
                        style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
                      />
                    </div>
                    <h2 className="quiz-question-text">{quizQuestions[currentIndex].question}</h2>

                    {quizQuestions[currentIndex].visual && (
                      <div className="quiz-visual">
                        {quizQuestions[currentIndex].visual.type === 'sign' && (
                          <div className="quiz-sign-visual">
                            <span>{quizQuestions[currentIndex].visual.icon.label}</span>
                          </div>
                        )}
                        {quizQuestions[currentIndex].visual.type === 'image' && (
                          <div className="quiz-sign-visual">
                            <img
                              src={quizQuestions[currentIndex].visual.src}
                              alt={quizQuestions[currentIndex].visual.caption || 'Traffic sign'}
                              className="quiz-sign-image"
                            />
                          </div>
                        )}
                        {quizQuestions[currentIndex].visual.type === 'card' && (
                          <div className="quiz-info-visual">
                            <p className="title">{quizQuestions[currentIndex].visual.title}</p>
                            <p className="highlight">{quizQuestions[currentIndex].visual.highlight}</p>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="answer-options">
                      {quizQuestions[currentIndex].answers.map((answer, idx) => (
                        <button
                          key={answer}
                          type="button"
                          className={`answer-option ${selectedIndex === idx ? 'selected' : ''}`}
                          onClick={() => setSelectedIndex(idx)}
                        >
                          <span className="answer-index">{String.fromCharCode(65 + idx)}</span>
                          <span>{answer}</span>
                        </button>
                      ))}
                    </div>

                    <div className="quiz-footer-row">
                      <button
                        type="button"
                        className="primary-button"
                        onClick={handleAnswerNext}
                        disabled={selectedIndex === null}
                      >
                        {currentIndex === quizQuestions.length - 1 ? 'Finish quiz' : 'Next question'}
                      </button>
                    </div>
                  </>
                )}

                {quizStage === 'result' && quizSummary && (
                  <>
                    <h2>{isTR ? 'Sonuçlar' : 'Results'}</h2>
                    <p className="quiz-result-subtitle">
                      {isTR
                        ? 'Performansının özeti: doğru sayın, yaptığın hatalar ve geçen süre aşağıda.'
                        : 'Here is a breakdown of your performance, including correct answers and time spent.'}
                    </p>
                    <div className="quiz-result-summary">
                      <div>
                        <p className="label">{isTR ? 'Puan' : 'Score'}</p>
                        <p className="value">
                          {quizSummary.correctCount} / {quizSummary.total}
                        </p>
                      </div>
                      <div>
                        <p className="label">{isTR ? 'Doğru' : 'Correct'}</p>
                        <p className="value good">{quizSummary.correctCount}</p>
                      </div>
                      <div>
                        <p className="label">{isTR ? 'Yanlış' : 'Wrong'}</p>
                        <p className="value bad">{quizSummary.incorrectCount}</p>
                      </div>
                      <div>
                        <p className="label">{isTR ? 'Geçen süre' : 'Time spent'}</p>
                        <p className="value">{formatDuration(quizSummary.durationMs)}</p>
                      </div>
                    </div>

                    {quizSummary.incorrectCount > 0 && (
                      <div className="quiz-review">
                        <h3>{isTR ? 'Hatalarını gözden geçir' : 'Review your mistakes'}</h3>
                        <p>
                          {isTR
                            ? 'Hangi sorularda hata yaptığını ve doğru açıklamaları inceleyerek konuyu pekiştir.'
                            : 'Check which options were incorrect and read the explanations to learn from them.'}
                        </p>
                        <ul>
                          {answers
                            .filter((ans) => !ans.correct)
                            .map((ans) => {
                              const question = quizQuestions.find((q) => q.id === ans.questionId)
                              if (!question) return null
                              return (
                                <li key={ans.questionId}>
                                  <p className="question">{question.question}</p>
                                  <p className="detail">
                                    {isTR ? 'Senin cevabın: ' : 'Your answer: '}
                                    <span className="bad">
                                      {question.answers[ans.selectedIndex] || '—'}
                                    </span>
                                  </p>
                                  <p className="detail">
                                    {isTR ? 'Doğru cevap: ' : 'Correct answer: '}
                                    <span className="good">{question.answers[ans.correctIndex]}</span>
                                  </p>
                                  <p className="explanation">{question.explanation}</p>
                                </li>
                              )
                            })}
                        </ul>
                      </div>
                    )}

                    <div className="quiz-actions-row">
                      <button type="button" className="secondary-button" onClick={handleStartQuizView}>
                        {isTR ? 'Yeni bir quiz çöz' : 'Take another quiz'}
                      </button>
                      <button type="button" className="link-button" onClick={handleExitQuiz}>
                        {isTR ? 'Ana sayfaya dön' : 'Back to home'}
                      </button>
                    </div>
                  </>
                )}
              </section>

              <aside className="quiz-sidecard">
                <h3>{isTR ? 'Daha iyi sonuçlar için ipuçları' : 'Tips for better results'}</h3>
                <ul>
                  <li>
                    {isTR
                      ? 'Cevaplara bakmadan önce soruyu baştan sona dikkatlice oku.'
                      : 'Read each question carefully before looking at the answers.'}
                  </li>
                  <li>
                    {isTR
                      ? 'Bariz şekilde yanlış olan seçenekleri eleyerek şıkları daralt.'
                      : 'Eliminate clearly wrong options to narrow down your choice.'}
                  </li>
                  <li>
                    {isTR
                      ? 'Levha sorularında şekil, renk ve sembole birlikte odaklan.'
                      : 'For signs, focus on shape, color, and symbol together.'}
                  </li>
                  <li>
                    {isTR
                      ? 'Bilgi sorularında gerçek bir sürüş senaryosunu hayal etmeye çalış.'
                      : 'For knowledge questions, imagine the real-world driving scenario.'}
                  </li>
                  <li>
                    {isTR
                      ? 'Hata inceleme bölümünü kullanarak zayıf olduğun konuları tekrar et.'
                      : 'Use the review section to understand and fix weak areas.'}
                  </li>
                </ul>
              </aside>
            </div>
          </section>
        ) : isAttentionMode ? (
          <section className="attention-page" id="attention">
            <div className="attention-header">
              <button type="button" className="link-button back-link" onClick={() => setActiveView('home')}>
                ← {isTR ? 'Ana sayfaya dön' : 'Back to home'}
              </button>
              <p className="eyebrow">{isTR ? 'Dikkat testi' : 'Attention test'}</p>
              <h1>
                {isTR ? 'Dikkat Testi (Alkol Farkındalık Oyunu)' : 'Attention Test (Alcohol Awareness Game)'}
              </h1>
              <p>
                {isTR
                  ? 'Bu basit oyun, görsel bir hedefe ne kadar hızlı tepki verdiğini ve dikkat dağıtıcıları ne kadar iyi filtrelediğini gösterir. Gerçek hayatta alkol, yorgunluk ve telefon kullanımı bu tepkileri yavaşlatabilir—bu test yalnızca farkındalık içindir; gerçek bir alkol ölçümü, tıbbi ya da hukuki karar aracı değildir.'
                  : 'This simple game measures how fast you react to a visual target while ignoring distractions. Alcohol, fatigue, and phone use can slow these reactions in real life—this test is only for awareness, not for any medical or legal decision.'}
              </p>
            </div>

            <div className="attention-shell">
              <section className="attention-card">
                {attentionStage === 'intro' && (
                  <>
                    <h2>{isTR ? 'Nasıl çalışır?' : 'How it works'}</h2>
                    <p>
                      {isTR ? 'Ekranda bir ' : 'Whenever you see a '}
                      <strong>{isTR ? 'yeşil daire' : 'green circle'}</strong>
                      {isTR
                        ? ' gördüğünde, mümkün olduğunca hızlı tıkla. Diğer tüm renk ve şekilleri yok say.'
                        : ', click it as fast as you can. Ignore all other shapes and colors.'}
                    </p>

                    <div className="quiz-toggle-group">
                      <p className="label">{isTR ? 'Test süresi' : 'Test duration'}</p>
                      <div className="toggle-row">
                        {[30, 60].map((secs) => (
                          <button
                            key={secs}
                            type="button"
                            className={`toggle-chip ${attentionDuration === secs ? 'active' : ''}`}
                            onClick={() => setAttentionDuration(secs)}
                          >
                            {secs}s
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="quiz-toggle-group">
                      <p className="label">{isTR ? 'Zorluk seviyesi' : 'Difficulty'}</p>
                      <div className="toggle-row">
                        {['easy', 'normal', 'hard'].map((level) => (
                          <button
                            key={level}
                            type="button"
                            className={`toggle-chip ${attentionDifficulty === level ? 'active' : ''}`}
                            onClick={() => setAttentionDifficulty(level)}
                          >
                            {level === 'easy' && (isTR ? 'Kolay' : 'Easy')}
                            {level === 'normal' && (isTR ? 'Normal' : 'Normal')}
                            {level === 'hard' && (isTR ? 'Zor' : 'Hard')}
                          </button>
                        ))}
                      </div>
                      <p className="difficulty-hint">
                        {isTR
                          ? 'Kolay: renkler ve şekiller belirgin şekilde farklı • Normal: benzer renkler veya şekiller • Zor: hepsi yeşil, sadece şekil farkı.'
                          : 'Easy: different colors and shapes • Normal: similar colors or shapes • Hard: all green, only shape changes.'}
                      </p>
                    </div>

                    <button type="button" className="primary-button wide" onClick={startAttentionCountdown}>
                      {isTR ? 'Testi Başlat' : 'Start Test'}
                    </button>
                  </>
                )}

                {attentionStage === 'countdown' && (
                  <div className="attention-center">
                    <p className="label">{isTR ? 'Hazırlan' : 'Get ready'}</p>
                    <div className="attention-count">
                      {attentionCountdown > 0 ? attentionCountdown : isTR ? 'Başla' : 'GO'}
                    </div>
                  </div>
                )}

                {attentionStage === 'running' && (
                  <div className="attention-play">
                    <div className="attention-status-row">
                      <p className="eyebrow small">
                        {isTR ? 'Sadece yeşil daireye tıkla' : 'Tap the green circle only'}
                      </p>
                      <p className="attention-timer">
                        {isTR ? 'Kalan süre: ' : 'Time left: '}
                        <span>
                          {attentionRemaining}
                          s
                        </span>
                      </p>
                    </div>
                    <div className="attention-target-legend">
                      <span className="legend-label">{isTR ? 'Hedef:' : 'Target:'}</span>
                      <span className="legend-shape legend-target" />
                      <span>{isTR ? 'Yeşil daire' : 'Green circle'}</span>
                    </div>

                    <div className="attention-play-area">
                      {stimulus && (
                        <button
                          type="button"
                          key={stimulus.id}
                          className={`attention-shape attention-${stimulus.shape} attention-${stimulus.color}`}
                          style={{
                            left: `${stimulus.x}%`,
                            top: `${stimulus.y}%`,
                            transform: 'translate(-50%, -50%)'
                          }}
                          onClick={handleAttentionClick}
                          aria-label="Click the shape"
                        />
                      )}
                    </div>
                  </div>
                )}

                {attentionStage === 'result' && (
                  <div className="attention-result">
                    <h2>{isTR ? 'Dikkat puanın' : 'Your attention score'}</h2>
                    {(() => {
                      const totalHits = attentionStats.correctHits
                      const avgMs =
                        attentionStats.reactionTimes.length > 0
                          ? Math.round(
                              attentionStats.reactionTimes.reduce((sum, t) => sum + t, 0) /
                                attentionStats.reactionTimes.length
                            )
                          : null

                      // Dikkat seviyesi hesapla - doğru/yanlış oranına göre
                      const totalAttempts = attentionStats.correctHits + attentionStats.wrongClicks + attentionStats.missedTargets
                      const correctRatio = totalAttempts > 0 ? attentionStats.correctHits / totalAttempts : 0
                      const wrongRatio = totalAttempts > 0 ? attentionStats.wrongClicks / totalAttempts : 0

                      let attentionLevel = 'Medium'
                      
                      // Yüksek dikkat: %70+ doğru, %15'ten az yanlış
                      if (correctRatio >= 0.7 && wrongRatio < 0.15 && avgMs && avgMs < 600) {
                        attentionLevel = 'High'
                      }
                      // Düşük dikkat: %50'den az doğru VEYA %30'dan fazla yanlış
                      else if (correctRatio < 0.5 || wrongRatio > 0.3 || !avgMs || avgMs > 800) {
                        attentionLevel = 'Low'
                      }

                      const attentionLabel =
                        attentionLevel === 'High'
                          ? isTR
                            ? 'Yüksek'
                            : 'High'
                          : attentionLevel === 'Medium'
                            ? isTR
                              ? 'Orta'
                              : 'Medium'
                            : isTR
                              ? 'Düşük'
                              : 'Low'

                      return (
                        <>
                          <div className="attention-summary">
                            <div>
                              <p className="label">
                                {isTR ? 'Ortalama reaksiyon' : 'Average reaction'}
                              </p>
                              <p className="value">
                                {avgMs ? `${avgMs} ms` : isTR ? 'Vuruş yok' : 'No hits'}
                              </p>
                            </div>
                            <div>
                              <p className="label">{isTR ? 'Doğru vuruş' : 'Correct hits'}</p>
                              <p className="value">{totalHits}</p>
                            </div>
                            <div>
                              <p className="label">{isTR ? 'Kaçan hedef' : 'Missed targets'}</p>
                              <p className="value">{attentionStats.missedTargets}</p>
                            </div>
                            <div>
                              <p className="label">{isTR ? 'Yanlış tıklama' : 'Wrong clicks'}</p>
                              <p className="value">{attentionStats.wrongClicks}</p>
                            </div>
                            <div>
                              <p className="label">{isTR ? 'Dikkat seviyesi' : 'Attention level'}</p>
                              <p className={`value attention-${attentionLevel.toLowerCase()}`}>{attentionLabel}</p>
                            </div>
                          </div>

                          <p className="attention-warning">
                            {isTR
                              ? 'Bu yalnızca eğitim amaçlı bir dikkat testidir. Gerçek alkol seviyesini ölçemez ve gerçek bir alkol testi olarak kullanılmamalıdır.'
                              : 'This is an educational attention test. It cannot measure real alcohol level and must not be used as a real alcohol test.'}
                          </p>
                        </>
                      )
                    })()}

                    <div className="quiz-actions-row">
                      <button type="button" className="secondary-button" onClick={startAttentionCountdown}>
                        {isTR ? 'Testi tekrar çalıştır' : 'Run test again'}
                      </button>
                      <button type="button" className="link-button" onClick={() => setActiveView('home')}>
                        {isTR ? 'Ana sayfaya dön' : 'Back to home'}
                      </button>
                    </div>
                  </div>
                )}
              </section>

              <aside className="quiz-sidecard">
                <h3>{isTR ? 'Bu test neyi gösterir?' : 'What this test shows'}</h3>
                <ul>
                  <li>
                    {isTR
                      ? 'Doğru hedefe ne kadar tutarlı bir şekilde tepki verebildiğini.'
                      : 'How consistently you can react to the correct visual target.'}
                  </li>
                  <li>
                    {isTR
                      ? 'Dikkat dağıtıcı olduğunda tıklamaman gereken durumları ne sıklıkla tıkladığını.'
                      : 'How often you click when you should ignore a distractor.'}
                  </li>
                  <li>
                    {isTR
                      ? 'Alkol, telefon kullanımı veya yorgunluğun bu tür dikkat görevlerini neden zorlaştırdığını.'
                      : 'Why alcohol, phones or fatigue make these reaction tasks much harder.'}
                  </li>
                </ul>
              </aside>
            </div>
          </section>
        ) : (
          <>
            <section className="hero" id="hero">
              <div className="hero-content">
                <p className="eyebrow">{isTR ? 'roadnix trafik güvenliği' : 'roadnix traffic safety'}</p>
                <h1>{isTR ? 'Yolun Senin. Sorumluluk Senin.' : 'Your Road. Your Responsibility.'}</h1>
                {heroSubtitle[lang].map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <div className="hero-actions">
                  <button className="primary-button" onClick={() => handleNavClick('#about')}>
                    <span className="btn-icon">🎓</span>
                    <span>{isTR ? 'Öğrenmeye Başla' : 'Start Learning'}</span>
                  </button>
                  <button className="secondary-button" onClick={() => handleNavClick('#guide')}>
                    <span className="btn-icon">🚦</span>
                    <span>{isTR ? 'Trafik Levhalarını Keşfet' : 'Explore Traffic Signs'}</span>
                  </button>
                </div>
                <p className="hero-support">
                  {isTR
                    ? 'Üniversite düzeyindeki modern trafik güvenliği prensiplerine dayalı etkileşimli bir platform.'
                    : 'Based on modern traffic safety principles used in university-level courses.'}
                </p>
                <div className="hero-badges">
                  {heroBadges[lang].map((badge) => (
                    <article key={badge.title}>
                      <span className="badge-icon">{badge.icon}</span>
                      <div>
                        <p className="badge-title">{badge.title}</p>
                        <p className="badge-text">{badge.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="hero-visual">
                <div className="hero-dashboard matrix">
                  <div className="dashboard-header">
                    <p>Smart Traffic Dashboard</p>
                    <span className="live-pill">LIVE</span>
                  </div>
                  <div className="matrix-wrapper">
                    <div key={matrixIndex} className="matrix-grid matrix-grid-anim">
                      {heroSignSlides[matrixIndex].map((icon, idx) => (
                        <span
                          key={`${icon}-${matrixIndex}-${idx}`}
                          className="matrix-icon"
                          data-tip={liveTrafficTips[icon]}
                        >
                          {icon}
                        </span>
                      ))}
                    </div>
                    <div className="matrix-dots">
                      {heroSignSlides.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`matrix-dot ${matrixIndex === index ? 'active' : ''}`}
                          onClick={() => setMatrixIndex(index)}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section about" id="about">
              <div className="section-header">
                <p className="eyebrow">
                  {isTR ? 'Bu platform hakkında' : 'About this platform'}
                </p>
                <h2>{isTR ? 'Bu Platform Ne Hakkında?' : 'What Is This Platform About?'}</h2>
              </div>
              <div className="section-body">
                {isTR ? (
                  <>
                    <p>
                      Bu platform, trafik güvenliğini ezber kurallardan çıkarıp; araçlar, insanlar ve yol çevresi
                      arasındaki gerçek ilişkiler üzerinden anlatmak için tasarlandı.
                    </p>
                    <p>
                      Konular; araç güvenliği, insan faktörleri ve trafik ortamı başlıklarında kısa, anlaşılır ve
                      görselle desteklenmiş bloklara ayrıldı.
                    </p>
                  </>
                ) : (
                  aboutParagraph.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                )}
              </div>
              <div className="about-bullets">
                {(isTR
                  ? [
                      'Trafik kazalarının gerçek nedenlerine odaklanır; sadece ezber kurallara değil.',
                      'İçerik, modern trafik güvenliği kaynaklarından ve akademik materyallerden esinlenilerek hazırlanmıştır.',
                      'Öğrenciler, yeni sürücüler ve daha güvenli olmak isteyen herkes için tasarlanmıştır.'
                    ]
                  : aboutBullets
                ).map((text, index) => (
                  <article key={text}>
                    <span className="bullet-icon">{aboutIcons[index]}</span>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section why" id="why">
              <div className="why-grid">
                <div className="why-text">
                  <p className="eyebrow">{isTR ? 'Etkisi' : 'Impact'}</p>
                  <h2>{isTR ? 'Trafik Güvenliği Neden Önemli?' : 'Why Traffic Safety Matters'}</h2>
                  {isTR ? (
                    renderLines(
                      'Çoğu trafik kazası "şanssızlık"tan değil, önlenebilir insan hatalarından kaynaklanır.\nAraştırmalar, kazaların %90-95inin dikkat dağınıklığı, yanlış hız seçimi, alkol etkisi, yorgunluk ya da yol koşullarını yanlış değerlendirme gibi hatalarla ilişkili olduğunu gösteriyor. Doğru trafik bilgisi ve alışkanlıkları, bu risklerin büyük kısmını azaltabilir.'
                    )
                  ) : (
                    renderLines(whyParagraph)
                  )}
                </div>
                <div className="stats-grid">
                  {(isTR
                    ? [
                        { title: 'Kazaların %90-95i insan hatasından kaynaklanır.', icon: '⚠️' },
                        { title: 'Emniyet kemeri, ölüm riskini yaklaşık %50 azaltabilir.', icon: '🪢' },
                        {
                          title: 'Birçok kaza, daha iyi bilgi ve alışkanlıklarla tamamen önlenebilir.',
                          icon: '✅'
                        }
                      ]
                    : whyStats
                  ).map((stat) => (
                    <article key={stat.title}>
                      <span>{stat.icon}</span>
                      <p>{stat.title}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="section pillars" id="learn">
              <div className="section-header">
                <p className="eyebrow">{isTR ? 'Müfredat sütunları' : 'Curriculum pillars'}</p>
                <h2>{isTR ? 'Neleri Öğreneceksin?' : 'What You Will Learn'}</h2>
              </div>
              <div className="pillars-grid">
                {(isTR
                  ? [
                      {
                        title: 'Araç Güvenliği & Bakım',
                        text:
                          'ABS, ESP, lastik durumu, far ayarı ve motor bakımı gibi unsurların güvenli sürüşe etkisini öğren.\nAracının acil durumlarda nasıl davrandığını ve bakımın kazaları nasıl önleyebileceğini keşfet.',
                        icon: '🚗'
                      },
                      {
                        title: 'İnsan Faktörleri',
                        text:
                          'Dikkat dağınıklığı, alkol, yorgunluk ve riskli davranışların sürüşe etkisini keşfet.\nDikkat, reaksiyon süresi ve güvenli karar verme süreçlerinin arkasındaki bilimi incele.',
                        icon: '🧠'
                      },
                      {
                        title: 'Trafik Levhaları & Yol Çevresi',
                        text:
                          'Temel trafik levhalarının ve yol işaretlerinin anlamlarını öğren.\nUyarıları, yönlendirme levhalarını ve tehlikeli durumları önceden fark etmeyi öğren.',
                        icon: '🚦'
                      }
                    ]
                  : pillars
                ).map((pillar) => (
                  <article key={pillar.title}>
                    <span className="pillar-icon">{pillar.icon}</span>
                    <h3>{pillar.title}</h3>
                    {renderLines(pillar.text)}
                  </article>
                ))}
              </div>
            </section>

            <section className="section guide" id="guide">
              <div className="section-header">
                <p className="eyebrow">
                  {isTR ? 'Kapsamlı referans' : 'Comprehensive reference'}
                </p>
                <h2>{isTR ? 'Trafik Güvenliği Rehberinden' : 'From the Traffic Safety Guide'}</h2>
              </div>
              {guideTopics.map((topic) => (
                <div key={topic.title} className="guide-topic">
                  <div className="guide-topic-header">
                    <span>{topic.icon}</span>
                    <h3>{isTR ? guideTopicTitleTr[topic.title] || topic.title : topic.title}</h3>
                  </div>
                  <div className="guide-cards">
                    {topic.cards.map((card) => (
                      <article key={card.title} className="guide-card">
                        <h4>{isTR ? guideCardTitleTr[card.title] || card.title : card.title}</h4>
                        <p>{isTR ? guideCardTextTr[card.title] || card.text : card.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="section sign-library" id="sign-library">
              <div className="section-header">
                <p className="eyebrow">{isTR ? 'Görsel arşiv' : 'Visual archive'}</p>
                <h2>{isTR ? 'Trafik Levhaları Kütüphanesi' : 'Traffic Signs Library'}</h2>
              </div>
              {signLibrarySections.map((section) => (
                <div key={section.title} className="guide-category">
                  <div className="guide-category-header">
                    <h3>
                      {isTR
                        ? {
                            'Warning Signs': 'Uyarı Levhaları',
                            'Prohibitory Signs': 'Yasaklayıcı Levhalar',
                            'Mandatory Signs': 'Zorunlu Levhalar',
                            'Priority Signs': 'Öncelik Levhaları',
                            'Information Signs': 'Bilgi Levhaları',
                            'Road Markings': 'Yol Çizgileri',
                            'Additional Markings': 'Ek Levhalar',
                            'Signals by Authorised Persons': 'Yetkili Kişi İşaretleri'
                          }[section.title] || section.title
                        : section.title}
                    </h3>
                  </div>
                  <div className="sign-gallery-grid">
                    {section.items.map((item) => (
                      <article key={item.src}>
                        <img src={item.src} alt={item.label} loading="lazy" />
                        <p>{translateSignLabel(item.label, isTR)}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="section municipal" id="municipal-info">
              <div className="section-header">
                <p className="eyebrow">{isTR ? 'Saha ekipleri için' : 'For field teams'}</p>
                <h2>{isTR ? 'Levha Ölçüleri ve Kıbrıs Evrakları' : 'Sign Sizes and Cyprus Documents'}</h2>
                <p className="section-lead">
                  {isTR
                    ? 'Belediye ekipleri için temel levha boyutları ve Kıbrıs’ta trafiğe çıkmadan önce gereken evrak listesi.'
                    : 'Quick reference for municipal teams on sign dimensions and documents needed before driving in Cyprus.'}
                </p>
              </div>

              <div className="municipal-grid">
                {municipalSignSizes.map((item) => (
                  <article key={item.key} className="municipal-card">
                    <p className="eyebrow small">{isTR ? 'Levha ölçüsü' : 'Sign sizing'}</p>
                    <h3>{isTR ? item.titleTr : item.titleEn}</h3>
                    <p className="municipal-size">{isTR ? item.sizeTr : item.sizeEn}</p>
                    <p className="municipal-notes">{isTR ? item.notesTr : item.notesEn}</p>
                  </article>
                ))}
              </div>

              <div className="municipal-grid two-cols">
                <article className="municipal-card">
                  <p className="eyebrow small">{isTR ? 'KKTC için evraklar' : 'Docs for TRNC (North)'}</p>
                  <h3>{isTR ? 'Kuzey (KKTC) tarafı' : 'Northern side'}</h3>
                  <ul className="municipal-list">
                    {cyprusDocsKktc.map((doc) => (
                      <li key={doc.key}>
                        <strong>{isTR ? doc.labelTr : doc.labelEn}</strong>
                        <span>{isTR ? doc.noteTr : doc.noteEn}</span>
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="municipal-card">
                  <p className="eyebrow small">{isTR ? 'Güney için evraklar' : 'Docs for South Cyprus'}</p>
                  <h3>{isTR ? 'Güney Kıbrıs tarafı' : 'Southern side'}</h3>
                  <ul className="municipal-list">
                    {cyprusDocsSouth.map((doc) => (
                      <li key={doc.key}>
                        <strong>{isTR ? doc.labelTr : doc.labelEn}</strong>
                        <span>{isTR ? doc.noteTr : doc.noteEn}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>

            <section className="section car-map" id="car-map">
              <div className="section-header">
                <p className="eyebrow">{isTR ? 'Araç anatomisi' : 'Vehicle anatomy'}</p>
                <h2>{isTR ? 'Aracın Bölümlerini Tanıyın' : 'Know Your Vehicle Parts'}</h2>
                <p className="section-lead">
                  {isTR
                    ? 'Araba görseli üzerinde gezerek kaput, far, lastik, kabin ve bagaj gibi kısımların ne işe yaradığını görün.'
                    : 'Hover over the car to see what each area does: hood, lights, tires, cabin, trunk and more.'}
                </p>
              </div>
              <div className="car-visual">
                {carHotspots.map((spot) => (
                  <button
                    key={spot.key}
                    className="car-hotspot"
                    style={{ top: spot.top, left: spot.left }}
                    aria-label={isTR ? spot.labelTr : spot.labelEn}
                  >
                    <span className="car-dot" />
                    <span className="car-tooltip">
                      <strong>{isTR ? spot.labelTr : spot.labelEn}</strong>
                      <span>{isTR ? spot.descTr : spot.descEn}</span>
                    </span>
                  </button>
                ))}
                <div className="car-shape" aria-hidden="true">
                  <span className="wheel-front" />
                  <span className="wheel-rear" />
                  <span className="rear-window" />
                </div>
              </div>
            </section>

            <section className="section car-parts-guide" id="car-parts-guide">
              <div className="section-header">
                <p className="eyebrow">{isTR ? 'Detayli rehber' : 'Detailed guide'}</p>
                <h2>{isTR ? 'Araç Parçaları Rehberi' : 'Car Parts Guide'}</h2>
                <p className="section-lead">
                  {isTR
                    ? 'Her arac parcasi hakkinda detayli bilgi, bakim ipuclari ve guvenlik uyarilari.'
                    : 'Detailed information, maintenance tips and safety warnings for each car part.'}
                </p>
              </div>
              <div className="car-parts-grid">
                {carPartsGuide.map((part) => (
                  <article key={part.key} className="car-part-card">
                    <div className="car-part-header">
                      <span className="car-part-icon">{part.icon}</span>
                      <h3>{isTR ? part.labelTr : part.labelEn}</h3>
                    </div>
                    <p className="car-part-desc">{isTR ? part.descTr : part.descEn}</p>
                    <ul className="car-part-tips">
                      {(isTR ? part.detailsTr : part.detailsEn).map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                    <div className="car-part-warning">
                      <span className="warning-icon">⚠️</span>
                      <span>{isTR ? part.warningTr : part.warningEn}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="section modules" id="modules">
              <div className="section-header">
                <p className="eyebrow">{isTR ? 'Uygulamalı pratik' : 'Hands-on practice'}</p>
                <h2>{isTR ? 'Etkileşimli Öğrenme Modülleri' : 'Interactive Learning Modules'}</h2>
              </div>
              <div className="modules-grid">
                {(isTR
                  ? [
                      {
                        title: 'Trafik Levhaları Kütüphanesi',
                        text:
                          'Tüm temel trafik levhalarını görselleri, açıklamaları, kategorileri ve gerçek hayattan örnekleriyle incele.',
                        icon: '🛑'
                      },
                      {
                        title: 'Dikkat Testi (Alkol Farkındalık Oyunu)',
                        text:
                          'Dikkatin azaldığında reflekslerinin nasıl yavaşladığını görmek için hızlı tepki oyununu dene. Doğru şekle olabildiğince hızlı tıkla ve skorunu gör.',
                        icon: '🎯'
                      },
                      {
                        title: 'Levha Testi',
                        text:
                          'Uyarı levhaları, zorunlu levhalar, hız sınırları ve daha fazlası hakkında bilginizi test edin. 10, 20 veya 30 soru seç.',
                        icon: '🧩'
                      },
                      {
                        title: 'Trafik Bilgisi Testi',
                        text:
                          'Takip mesafesi, insan faktörleri, kurallar, araç sistemleri ve gerçek yol senaryolarına dayalı soruları yanıtla.',
                        icon: '📘'
                      }
                    ]
                  : interactiveModules
                ).map((module) => (
                  <article key={module.title}>
                    <span className="module-icon">{module.icon}</span>
                    <h3>{module.title}</h3>
                    <p>{module.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section quiz-hub" id="quiz">
              <div className="section-header">
                <p className="eyebrow">{isTR ? 'Quiz merkezi' : 'Quiz hub'}</p>
                <h2>{isTR ? 'Mücadeleni seç' : 'Choose your challenge'}</h2>
                <p>
                  {isTR
                    ? 'Aşağıdaki kartlardan doğrudan levha veya trafik bilgisi testlerine geçebilirsin.'
                    : 'Jump directly to signs or knowledge quizzes via dedicated cards.'}
                </p>
              </div>
              <div className="quiz-cta-grid">
                <button
                  type="button"
                  className="quiz-cta-card"
                  onClick={() => handleStartQuizView('signs')}
                >
                  <span>🚦</span>
                  <div>
                    <h3>{isTR ? 'Levha Testini Başlat' : 'Launch Signs Quiz'}</h3>
                    <p>
                      {isTR
                        ? 'Uyarı, zorunlu, öncelik ve hız sınırı levhalarını ne kadar iyi bildiğini test et.'
                        : 'Identify warning, mandatory and speed-limit signs.'}
                    </p>
                  </div>
                </button>
                <button
                  type="button"
                  className="quiz-cta-card"
                  onClick={() => handleStartQuizView('knowledge')}
                >
                  <span>📘</span>
                  <div>
                    <h3>{isTR ? 'Trafik Bilgisi Testini Başlat' : 'Launch Knowledge Quiz'}</h3>
                    <p>
                      {isTR
                        ? 'Senaryo temelli sorularla trafik kuralları ve güvenli sürüş bilgisini ölç.'
                        : 'Scenario-based driving theory and road science.'}
                    </p>
                  </div>
                </button>
              </div>
            </section>

            <section className="section timeline" id="how">
              <div className="section-header">
                <p className="eyebrow">{isTR ? 'Yöntem' : 'Method'}</p>
                <h2>{isTR ? 'Bu Platform Nasıl Çalışır?' : 'How This Platform Works'}</h2>
              </div>
              <div className="timeline-steps">
                {(isTR
                  ? [
                      {
                        title: 'Adım 1 — Öğren',
                        text:
                          'Araç güvenliği, insan faktörleri ve trafik levhalarıyla ilgili ana bölümleri oku. Her konu kısa ve anlaşılır parçalara ayrılmıştır.'
                      },
                      {
                        title: 'Adım 2 — Pratik Yap',
                        text:
                          'Quizler ve görsel oyunlar ile öğrendiklerini etkileşimli bir şekilde pekiştir.'
                      },
                      {
                        title: 'Adım 3 — Geliştir',
                        text:
                          'Sonuçlarını incele, hatalarını gör ve eksik olduğun konulara yeniden dön.'
                      }
                    ]
                  : timeline
                ).map((step, index) => (
                  <article key={step.title}>
                    <span className="step-index">{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
              <button className="primary-button ghosted" onClick={() => handleNavClick('#hero')}>
                {isTR ? 'Eğitimine Başla' : 'Start Your Training'}
              </button>
            </section>

            <section className="section tips" id="tips">
              <div className="section-header">
                <p className="eyebrow">{isTR ? 'Temel bilgiler' : 'Essentials'}</p>
                <h2>
                  {isTR ? 'Her Yol Kullanıcısı İçin Hızlı Güvenlik İpuçları' : 'Quick Safety Tips for Every Road User'}
                </h2>
              </div>
              <ul className="tips-list">
                {(isTR
                  ? [
                      'Reaksiyon süren için en az 2-3 saniyelik takip mesafesi bırak.',
                      'Sürüş sırasında telefonu elinden ve gözünden uzak tut; kısa bir bakış bile kritik anı kaçırabilir.',
                      'Islak zeminde hızını düşür; suda kızaklama riskini azaltırsın.',
                      'Lastik basıncını ve diş derinliğini düzenli kontrol et; yol tutuşu ve fren mesafeni etkiler.',
                      'Görüş azalınca veya silecekler çalışıyorsa farlarını mutlaka aç.',
                      'Yorgunken veya alkol aldıktan sonra asla direksiyona geçme.',
                      'Her koltukta ve her yolculukta emniyet kemeri tak.'
                    ]
                  : safetyTips
                ).map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>

            <section className="section learners" id="learners">
              <div className="section-header">
                <p className="eyebrow">{isTR ? 'Öğrenenler' : 'Learners'}</p>
                <h2>
                  {isTR
                    ? 'Öğrenciler, Sürücü Adayları ve Yeni Sürücüler İçin Tasarlandı'
                    : 'Built for Learners, Students, and New Drivers'}
                </h2>
              </div>
              <p>
                {isTR
                  ? 'Sürücü sınavına hazırlanıyor, okulda trafik güvenliği dersi görüyorsan ya da sadece daha güvenli bir sürücü olmak istiyorsan; bu platform sana net açıklamalar, etkileşimli araçlar ve modern trafik bilimine dayalı pratik bilgiler sunar.'
                  : learnersParagraph}
              </p>
            </section>

            <section className="section cta" id="cta">
              <div className="cta-content">
                <p className="eyebrow">
                  {isTR ? 'Son adım' : 'Final step'} <span className="cta-eyebrow-icon">🏁</span>
                </p>
                <h2>
                  {isTR
                    ? 'Trafik Güvenliği Yolculuğuna Başlamaya Hazır mısın?'
                    : 'Ready to Start Your Traffic Safety Journey?'}
                </h2>
                <p>
                  {isTR
                    ? 'Bu platform; araçları, insanları ve yolları daha güvenli ve akıllı bir şekilde anlaman için etkileşimli rehberin. Şimdi başla ve teoriyi gerçek hayattaki güvenli alışkanlıklara dönüştür.'
                    : finalCtaText}
                </p>
                <button className="primary-button cta-button" onClick={() => handleNavClick('#hero')}>
                  {isTR ? 'Hemen Öğrenmeye Başla' : 'Start Learning Now'}
                </button>
              </div>
              <div className="cta-visual">
                <div className="cta-road">
                  <div className="cta-finish-flag" />
                  <div className="cta-car">
                    <span className="cta-car-body" />
                  </div>
                  <div className="cta-ghost-illustration" />
                </div>
                <div className="cta-light">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {showBackToTop && (
        <button
          type="button"
          className="back-to-top"
          onClick={() => handleNavClick('#hero')}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <footer>
        <div className="brand">
          <img src="/roadnix-logo.png" alt="roadnix logo" className="brand-logo" />
          <span>roadnix</span>
        </div>

        <nav className="footer-links">
          <button type="button" onClick={() => handleNavClick('#hero')}>
            {isTR ? 'Ana Sayfa' : 'Home'}
          </button>
          <button type="button" onClick={() => handleNavClick('#sign-library')}>
            {isTR ? 'Trafik Levhaları' : 'Traffic Signs Library'}
          </button>
          <button type="button" onClick={() => handleNavClick('#quiz')}>
            {isTR ? 'Quizler' : 'Quizzes'}
          </button>
        </nav>

        <div className="footer-meta">
          <p className="footer-note">
            {isTR
              ? 'Eğitim amaçlı trafik güvenliği içeriği • Resmî bir sürücü kursu veya kurum değildir.'
              : 'Educational traffic safety content • Not an official driving authority.'}
          </p>
          <p className="footer-credit">
            © {new Date().getFullYear()} roadnix • {isTR ? 'Geliştiren: ' : 'Built by '}
            <span className="footer-author">Ahmet Arınç Akyıldız</span> •{' '}
            <a href="mailto:arinc060606@gmail.com" className="footer-link">
              arinc060606@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

