// “NIGHTSPLIT” — cyber-noir two-choice story
export const STORY = [
  {
    id:'alley-wake',
    title:'Rain. Neon. Gunfire far away.',
    bg:'alley',
    sfx:'whoosh',
    prose:`You come to in a narrow alley, cheek against wet asphalt. A datachip buzzes in your palm—the last thing <i>she</i> shoved at you before the blackout. Sirens comb the grid. Your comm blinks: <b>“Meet? / Burn it?”</b>`,
    choices:[
      { label:'Meet her at The Meridian', to:'club-door' },
      { label:'Burn the chip now', to:'burn-chip', setState: s => s.flags.burned = true }
    ],
  },
  {
    id:'club-door',
    title:'The Meridian, red pulse in the fog.',
    bg:'club',
    sfx:'tick',
    prose:`Bouncers scan the line with retinas like knives. You spot her silhouette on the balcony. The chip hums hotter, like it knows the door code.`,
    choices:[
      { label:'Bribe the bouncer', to:'club-bribe', setState: s => s.flags.bribed = true },
      { label:'Sneak through service corridor', to:'club-sneak' },
    ],
  },
  {
    id:'burn-chip',
    title:'Blue flame, green smoke.',
    bg:'alley',
    sfx:'glitch',
    prose:`The chip shrieks as its lattice collapses. Somewhere, a satellite sighs. Your comm vibrates: <i>“You just killed a city.”</i>`,
    choices:[
      { label:'Find her anyway', to:'club-door' },
      { label:'Run for the docks', to:'docks' },
    ],
  },
  {
    id:'club-bribe',
    title:'Grease buys time.',
    bg:'club',
    sfx:'tick',
    prose:`You pass a credstick. The bouncer’s expression doesn’t change, but the rope parts. Inside: bass like thunder on a leash.`,
    choices:[
      { label:'Head to balcony', to:'balcony' },
      { label:'Detour to back room', to:'back-room' },
    ],
  },
  {
    id:'club-sneak',
    title:'Vents and old secrets.',
    bg:'vent',
    sfx:'whoosh',
    prose:`You crawl through warm ducts until a grate opens above a back room humming with servers.`,
    choices:[
      { label:'Drop into the back room', to:'back-room' },
      { label:'Keep crawling to balcony', to:'balcony' },
    ],
  },
  {
    id:'back-room',
    title:'The server hum is a cathedral.',
    bg:'server',
    sfx:'bleep',
    prose:`Racks blink in slow heartbeats. A terminal waits, cursor like a held breath.`,
    choices:[
      { label:'Slot the chip', to: s => s.flags.burned ? 'slot-nothing' : 'slot-data' },
      { label:'Plant a logic bomb', to:'logic-bomb', setState: s => s.flags.bomb = true },
    ],
  },
  {
    id:'slot-nothing',
    title:'Ashes don’t compute.',
    bg:'server',
    sfx:'glitch',
    prose:`The port accepts nothing; the ghost of a chip warms your palm. You feel very, very alone.`,
    choices:[
      { label:'Go to balcony', to:'balcony' },
      { label:'Bail to alley', to:'alley-wake' },
    ],
  },
  {
    id:'slot-data',
    title:'The city whispers back.',
    bg:'server',
    sfx:'bleep',
    prose:`The chip sings in harmonics your bones understand. Names, payoffs, the city’s spine. A file labeled: <b>“MERIDIAN: HARVESTER”</b>.`,
    choices:[
      { label:'Expose them live from the club', to:'broadcast' },
      { label:'Copy and walk', to:'copy-walk', setState: s => s.flags.copy = true },
    ],
  },
  {
    id:'logic-bomb',
    title:'You set the fuse by faith.',
    bg:'server',
    sfx:'tick',
    prose:`Timers arm. Fans spin like nervous prayer wheels.`,
    choices:[
      { label:'Light it and run', to:'boom' },
      { label:'Chicken out and disarm', to:'back-room', setState: s => s.flags.bomb = false },
    ],
  },
  {
    id:'boom',
    title:'Birth of a new night.',
    bg:'boom',
    sfx:'boom',
    prose:`Heat blossoms. The Meridian exhales windows into the rain. Somewhere, a server dies happy.`,
    ending:true,
    choices:[
      { label:'Restart (another route?)', to:'alley-wake', setState: s => s.endings['boom']=true },
      { label:'Run to the docks', to:'docks' },
    ],
  },
  {
    id:'broadcast',
    title:'Mic check: citywide.',
    bg:'club',
    sfx:'bleep',
    prose:`You hijack the DJ’s line. For sixty seconds the city hears the truth. Then security hears you.`,
    choices:[
      { label:'Fight to the balcony', to:'balcony' },
      { label:'Blend into the crowd', to:'crowd' },
    ],
  },
  {
    id:'copy-walk',
    title:'Cold pockets, hot secrets.',
    bg:'club',
    sfx:'whoosh',
    prose:`You pocket the copy. Insurance tastes like metal.`,
    choices:[
      { label:'Meet her on the balcony', to:'balcony' },
      { label:'Sell it to the docks fixer', to:'docks' },
    ],
  },
  {
    id:'balcony',
    title:'She lights the city with a look.',
    bg:'balcony',
    sfx:'tick',
    prose:`“You kept it?” she asks. Rain threads neon between you. The ground far below hums with consequence.`,
    choices:[
      { label:'Tell her it’s gone', to: s => s.flags.burned ? 'confess' : 'lie' },
      { label:'Hand her the copy', to: s => s.flags.copy ? 'trade' : 'empty-hand' },
    ],
  },
  {
    id:'confess',
    title:'Honesty is a blade.',
    bg:'balcony',
    sfx:'glitch',
    prose:`Her eyes go winter. “Then there’s only one way to fix this.”`,
    choices:[
      { label:'Jump with her into the rain', to:'leap' },
      { label:'Run. Again.', to:'crowd' },
    ],
  },
  {
    id:'lie',
    title:'Lies skitter like roaches.',
    bg:'balcony',
    sfx:'glitch',
    prose:`“Safe,” you say. She smiles like a locked door.`,
    choices:[
      { label:'Kiss the locked door', to:'kiss' },
      { label:'Change the subject', to:'crowd' },
    ],
  },
  {
    id:'trade',
    title:'Her hand is a contract.',
    bg:'balcony',
    sfx:'bleep',
    prose:`“You just bought a revolution,” she says, sliding a number across your palm.`,
    ending:true,
    choices:[
      { label:'Restart (new angle?)', to:'alley-wake', setState: s => s.endings['revolution']=true },
      { label:'Head for the docks', to:'docks' },
    ],
  },
  {
    id:'empty-hand',
    title:'Promises weigh nothing.',
    bg:'balcony',
    sfx:'glitch',
    prose:`She waits. Your pockets answer with rain.`,
    choices:[
      { label:'Own it', to:'confess' },
      { label:'Bluff harder', to:'lie' },
    ],
  },
  {
    id:'kiss',
    title:'Static and salt.',
    bg:'balcony',
    sfx:'whoosh',
    prose:`For a second, the city blinks away. For a second, you believe in soft landings.`,
    choices:[
      { label:'Let go first', to:'crowd' },
      { label:'Let go second', to:'leap' },
    ],
  },
  {
    id:'leap',
    title:'Gravity signs the paperwork.',
    bg:'leap',
    sfx:'whoosh',
    prose:`You jump. For a moment, you are two comets arguing with the rain.`,
    ending:true,
    choices:[
      { label:'Restart (different fate)', to:'alley-wake', setState: s => s.endings['leap']=true },
      { label:'Wake at the docks', to:'docks' },
    ],
  },
  {
    id:'crowd',
    title:'Anonymous like a prayer.',
    bg:'club',
    sfx:'tick',
    prose:`You dissolve into bodies and bass. Security chases silhouettes that are not yours.`,
    choices:[
      { label:'Slip to the back room', to:'back-room' },
      { label:'Climb to the balcony', to:'balcony' },
    ],
  },
  {
    id:'docks',
    title:'Tide carries debts.',
    bg:'docks',
    sfx:'whoosh',
    prose:`The fixer’s shack glows temptingly corrupt.`,
    choices:[
      { label:'Sell everything', to: s => (s.flags.copy ? 'sell-copy' : (s.flags.burned ? 'sell-nothing' : 'sell-risk')) },
      { label:'Skip town', to:'ferry' },
    ],
  },
  {
    id:'sell-copy',
    title:'Wealth is a weather system.',
    bg:'docks',
    sfx:'bleep',
    prose:`The fixer smiles with too many teeth. Credits rain. Somewhere a dam breaks.`,
    ending:true,
    choices:[
      { label:'Restart (greed route done)', to:'alley-wake', setState: s => s.endings['rich']=true },
      { label:'Second thoughts', to:'club-door' },
    ],
  },
  {
    id:'sell-risk',
    title:'They smell the chip on you.',
    bg:'docks',
    sfx:'glitch',
    prose:`Men in clean coats step out of a clean car. Their smiles have budgets.`,
    choices:[
      { label:'Run', to:'ferry' },
      { label:'Fight', to:'boom' },
    ],
  },
  {
    id:'sell-nothing',
    title:'You can’t pawn a ghost.',
    bg:'docks',
    sfx:'glitch',
    prose:`The fixer yawns. The rain does not applaud.`,
    choices:[
      { label:'Board the ferry', to:'ferry' },
      { label:'Back to the club', to:'club-door' },
    ],
  },
  {
    id:'ferry',
    title:'Horizons don’t ask questions.',
    bg:'ferry',
    sfx:'whoosh',
    prose:`Engines grumble lullabies. The city folds itself behind you like a closed knife.`,
    ending:true,
    choices:[
      { label:'Restart (one more run)', to:'alley-wake', setState: s => s.endings['escape']=true },
      { label:'Turn back at the last second', to:'club-door' },
    ],
  },
];

export function getScene(idOrFn, state){
  const id = typeof idOrFn === 'function' ? idOrFn(state) : idOrFn;
  return STORY.find(s => s.id === id);
}