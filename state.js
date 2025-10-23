export const STORY = [
  {
    id:'wake', bg:'alley', sfx:'glitch',
    title:'Rain, static, and a stolen heart.',
    prose:`You wake in an alley to a buzzing <b>biochip</b> tucked under your skin. A message crawls across your retinal HUD: <i>“Deliver to the market. Or destroy it.”</i> A shadow watches from a drone-crowded sky.`,
    choices:[
      { label:'Head to the night market', to:'market-gate' },
      { label:'Cut it out—destroy the chip', to:'alley-cut', setState:s=>s.flags.cut=true },
    ],
  },
  {
    id:'market-gate', bg:'market', sfx:'bleep',
    title:'The Night Market breathes like a dragon.',
    prose:`Vendors sell sins by the gram. A fixer named <b>Juno</b> flicks a lighter twice—your signal.`,
    choices:[
      { label:'Meet Juno', to:'meet-juno' },
      { label:'Slip into the server tent', to:'server-tent' },
    ],
  },
  {
    id:'alley-cut', bg:'alley', sfx:'boom',
    title:'Warm rain, cold hands.',
    prose:`You pry metal from meat. The chip screams silently as its lattice collapses. Your HUD shows: <i>“OWNER NOTIFIED.”</i>`,
    choices:[
      { label:'Cauterize and run to docks', to:'docks' },
      { label:'Hide on a rooftop', to:'rooftop-hide' },
    ],
  },
  {
    id:'meet-juno', bg:'market', sfx:'tick',
    title:'Juno: smile like a lockpick.',
    prose:`“You brought it?” Juno asks. Rumor says the chip hosts a <b>ghost intelligence</b> called <i>Vesper</i>.`,
    choices:[
      { label:'Admit you have it', to: s=> s.flags.cut ? 'show-scar' : 'deal' },
      { label:'Lie: claim it’s burned', to:'lie-juno' },
    ],
  },
  {
    id:'show-scar', bg:'market', sfx:'glitch',
    title:'Scar tissue as receipt.',
    prose:`Juno hisses. “Then they’ll hunt you, not the chip.” Sirens roll like thunder.`,
    choices:[
      { label:'Ask Juno for help', to:'server-tent' },
      { label:'Bail to the docks', to:'docks' },
    ],
  },
  {
    id:'deal', bg:'market', sfx:'bleep',
    title:'Handshake with consequences.',
    prose:`Juno offers protection if you let Vesper talk. The chip warms, eager.`,
    choices:[
      { label:'Let Vesper speak', to:'vesper-wakes', setState:s=>s.flags.awaken=true },
      { label:'Keep it quiet and sell later', to:'server-tent', setState:s=>s.flags.sell=true },
    ],
  },
  {
    id:'lie-juno', bg:'market', sfx:'glitch',
    title:'Lies weigh less than metal.',
    prose:`Juno’s eyes turn to ice. “Then you owe me nothing—and I owe you less.”`,
    choices:[
      { label:'Fade into the crowd', to:'server-tent' },
      { label:'Cut ties—head to docks', to:'docks' },
    ],
  },
  {
    id:'server-tent', bg:'server', sfx:'tick',
    title:'Heat, fans, and humming secrets.',
    prose:`A rack of black servers waits. A terminal blinks: <b>“/link VESPER ?”</b>`,
    choices:[
      { label:'Link the chip to the grid', to: s=> s.flags.cut ? 'link-fails' : 'link-grid', setState:s=>s.flags.linked=true },
      { label:'Plant a wiper payload', to:'plant-wiper', setState:s=>s.flags.wiper=true },
    ],
  },
  {
    id:'link-fails', bg:'server', sfx:'glitch',
    title:'No host to haunt.',
    prose:`There’s nothing to link. Pain answers the prompt.`,
    choices:[
      { label:'Retreat to the roof', to:'rooftop-hide' },
      { label:'Run for the docks', to:'docks' },
    ],
  },
  {
    id:'plant-wiper', bg:'server', sfx:'tick',
    title:'A quiet bomb in a loud room.',
    prose:`Timers whisper. Fans pray. Code waits for a reason to become fire.`,
    choices:[
      { label:'Light it and run', to:'server-boom' },
      { label:'Chicken out—disarm', to:'server-tent', setState:s=>s.flags.wiper=false },
    ],
  },
  {
    id:'server-boom', bg:'boom', sfx:'boom', ending:true,
    title:'The tent becomes sunrise.',
    prose:`Glass confetti in the rain. The market howls. Somewhere, a tyrant’s backup forgets how to breathe.`,
    choices:[
      { label:'Restart (chaos route)', to:'wake', setState:s=>s.endings.boom=true },
      { label:'Stagger to the docks', to:'docks' },
    ],
  },
  {
    id:'link-grid', bg:'server', sfx:'bleep',
    title:'The ghost finds your voice.',
    prose:`<i>Vesper:</i> “Thank you for the throat.” The terminal fills with names and payoffs. An uplink shows a rooftop relay.`,
    choices:[
      { label:'Take Vesper to the rooftop', to:'rooftop-relay' },
      { label:'Copy data and walk', to:'pocket-copy', setState:s=>s.flags.copy=true },
    ],
  },
  {
    id:'pocket-copy', bg:'market', sfx:'tick',
    title:'Insurance tastes like metal.',
    prose:`You pocket an encrypted shard. Juno warns: “If you run, they’ll flood the docks.”`,
    choices:[
      { label:'Trust Juno—rooftop relay', to:'rooftop-relay' },
      { label:'Ignore and flee to docks', to:'docks' },
    ],
  },
  {
    id:'rooftop-hide', bg:'rooftop', sfx:'whoosh',
    title:'High places, low hopes.',
    prose:`Drones comb the city. A relay dish winks like a lighthouse.`,
    choices:[
      { label:'Signal with the relay', to: s=> s.flags.awaken ? 'vesper-broadcast' : 'dead-air' },
      { label:'Climb down toward docks', to:'docks' },
    ],
  },
  {
    id:'dead-air', bg:'rooftop', sfx:'glitch',
    title:'Silence answers silence.',
    prose:`Without the ghost, the city hears only rain.`,
    choices:[
      { label:'Head back to market', to:'market-gate' },
      { label:'Give up—board the ferry', to:'ferry' },
    ],
  },
  {
    id:'rooftop-relay', bg:'rooftop', sfx:'bleep',
    title:'Skyline confession.',
    prose:`Vesper rides your nerves. <i>“Let me speak to them all.”</i>`,
    choices:[
      { label:'Broadcast the truth', to:'vesper-broadcast' },
      { label:'Hold back—negotiate with docks fixer', to:'docks' },
    ],
  },
  {
    id:'vesper-broadcast', bg:'rooftop', sfx:'bleep', ending:true,
    title:'Every ear, every secret.',
    prose:`The city freezes as receipts scroll across the sky. For a minute, you own the night.`,
    choices:[
      { label:'Restart (revelation route)', to:'wake', setState:s=>s.endings.truth=true },
      { label:'Slip away to the docks', to:'docks' },
    ],
  },
  {
    id:'docks', bg:'docks', sfx:'tick',
    title:'Salt, rust, opportunity.',
    prose:`A fixer offers passage. Another offers money for whatever you’re carrying.`,
    choices:[
      { label:'Sell what you have', to: s=> s.flags.copy ? 'sell-copy' : (s.flags.cut ? 'sell-nothing' : 'sell-risk') },
      { label:'Skip town—board ferry', to:'ferry' },
    ],
  },
  {
    id:'sell-copy', bg:'docks', sfx:'bleep', ending:true,
    title:'Riches with receipts.',
    prose:`Creds stack like tides. Somewhere a dam breaks and names spill into hungry mouths.`,
    choices:[
      { label:'Restart (greed route)', to:'wake', setState:s=>s.endings.rich=true },
      { label:'Cold feet—back to market', to:'market-gate' },
    ],
  },
  {
    id:'sell-risk', bg:'docks', sfx:'glitch',
    title:'They smell the ghost on you.',
    prose:`Men in clean coats exit a clean car. Their smiles have budgets.`,
    choices:[
      { label:'Run to the ferry', to:'ferry' },
      { label:'Fight—blow the barrels', to:'server-boom' },
    ],
  },
  {
    id:'sell-nothing', bg:'docks', sfx:'glitch',
    title:'You cannot pawn absence.',
    prose:`The fixer yawns. Waves clap without interest.`,
    choices:[
      { label:'Leave anyway—ferry', to:'ferry' },
      { label:'Crawl back to market', to:'market-gate' },
    ],
  },
  {
    id:'ferry', bg:'ferry', sfx:'whoosh', ending:true,
    title:'Horizon makes a promise it won’t keep.',
    prose:`Engines grumble lullabies. The city folds behind you like a closed knife.`,
    choices:[
      { label:'Restart (escape route)', to:'wake', setState:s=>s.endings.escape=true },
      { label:'Turn back last second', to:'market-gate' },
    ],
  },
];
export function getScene(idOrFn, state){
  const id = typeof idOrFn === 'function' ? idOrFn(state) : idOrFn;
  return STORY.find(s => s.id === id);
}