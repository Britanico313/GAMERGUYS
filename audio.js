let ctx, masterGain, ambient;
export async function initAudio(){
  if(ctx) return ctx;
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = ctx.createGain();
  masterGain.gain.value = .35;
  masterGain.connect(ctx.destination);
  window.addEventListener('click', ()=>ctx?.resume?.(), { once:true });
  window.addEventListener('keydown', ()=>ctx?.resume?.(), { once:true });
  return ctx;
}
export function setMasterVolume(v){ if(masterGain) masterGain.gain.value = v; }
export function loopAmbient(){
  stopAmbient();
  if(!ctx) return;
  ambient = noirPad();
  ambient.connect(masterGain);
}
export function stopAmbient(){ try{ ambient?.disconnect(); ambient=null; }catch{} }
export async function playOneShot(kind='tick'){
  if(!ctx) return;
  const now = ctx.currentTime;
  const g = ctx.createGain(); g.connect(masterGain); g.gain.value = .7;
  if(kind==='boom'){
    const s = ctx.createBufferSource(); s.buffer = noiseBuffer();
    const f = ctx.createBiquadFilter(); f.type='lowpass'; f.frequency.value=800;
    s.connect(f); f.connect(g);
    g.gain.setValueAtTime(.9, now); g.gain.exponentialRampToValueAtTime(0.0001, now+1.2);
    s.start(); s.stop(now+1.25);
  }else if(kind==='bleep'){
    const o = ctx.createOscillator(); o.type='sine'; o.frequency.value=620; o.connect(g); o.start();
    g.gain.setValueAtTime(.6, now); g.gain.exponentialRampToValueAtTime(0.0001, now+.3); o.stop(now+.32);
  }else if(kind==='glitch'){
    const o = ctx.createOscillator(); o.type='square'; o.frequency.value=120; o.connect(g); o.start();
    o.frequency.exponentialRampToValueAtTime(1400, now+.08); g.gain.exponentialRampToValueAtTime(0.0001, now+.18); o.stop(now+.2);
  }else{
    const s = ctx.createBufferSource(); s.buffer = noiseBuffer();
    const f = ctx.createBiquadFilter(); f.type='bandpass'; f.frequency.value=900; f.Q.value=5;
    s.connect(f); f.connect(g);
    g.gain.setValueAtTime(.3, now); g.gain.exponentialRampToValueAtTime(0.0001, now+.18); s.start(); s.stop(now+.2);
  }
}
function noirPad(){
  const g = ctx.createGain(); g.gain.value=.15;
  const f = ctx.createBiquadFilter(); f.type='lowpass'; f.frequency.value=600;
  const lfo = ctx.createOscillator(); const lfoG = ctx.createGain(); lfo.type='sine'; lfo.frequency.value=0.06; lfoG.gain.value=280;
  lfo.connect(lfoG); lfoG.connect(f.frequency); lfo.start();
  const o1 = ctx.createOscillator(); const o2 = ctx.createOscillator(); o1.type='sawtooth'; o2.type='sawtooth'; o1.frequency.value=110; o2.frequency.value=111.2;
  o1.connect(f); o2.connect(f); f.connect(g); o1.start(); o2.start();
  g.connect = AudioNode.prototype.connect.bind(g); g.disconnect = AudioNode.prototype.disconnect.bind(g);
  return g;
}
function noiseBuffer(){
  const b = ctx.createBuffer(1, ctx.sampleRate*1.5, ctx.sampleRate);
  const d = b.getChannelData(0);
  for(let i=0;i<d.length;i++){ d[i] = (Math.random()*2-1) * (1 - i/d.length); }
  return b;
}