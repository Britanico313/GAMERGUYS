const BGs = {
    alley:'radial-gradient(800px 500px at 20% 20%, #102033 0, transparent 60%), radial-gradient(800px 500px at 80% 80%, #0f1a28 0, transparent 60%), linear-gradient(180deg,#0a0f16,#06080f)',
    market:'radial-gradient(900px 500px at 20% 10%, #2a0f2e 0, transparent 60%), radial-gradient(800px 500px at 80% 90%, #0f1a2e 0, transparent 60%), linear-gradient(180deg,#150818,#0a0c12)',
    server:'radial-gradient(800px 500px at 30% 30%, #0f2e2a 0, transparent 60%), radial-gradient(700px 500px at 70% 70%, #1d2e0f 0, transparent 60%), linear-gradient(180deg,#0a1410,#070b09)',
    rooftop:'radial-gradient(900px 500px at 50% 10%, #1e1140 0, transparent 60%), radial-gradient(700px 500px at 20% 90%, #0e2a3c 0, transparent 60%), linear-gradient(180deg,#0b0f18,#080b12)',
    boom:'radial-gradient(900px 500px at 40% 40%, #3a120f 0, transparent 60%), radial-gradient(700px 500px at 70% 70%, #40120f 0, transparent 60%), linear-gradient(180deg,#150a0a,#0f0707)',
    docks:'radial-gradient(900px 500px at 20% 10%, #0f2438 0, transparent 60%), radial-gradient(700px 500px at 80% 90%, #0a1a28 0, transparent 60%), linear-gradient(180deg,#0a1118,#060a0f)',
    lab:'radial-gradient(900px 500px at 30% 10%, #11321f 0, transparent 60%), radial-gradient(700px 500px at 70% 80%, #0b1e15 0, transparent 60%), linear-gradient(180deg,#0b1110,#070b09)',
    ferry:'radial-gradient(900px 500px at 20% 10%, #0f2b2b 0, transparent 60%), radial-gradient(700px 500px at 80% 90%, #0b1f1f 0, transparent 60%), linear-gradient(180deg,#0a1414,#070b0b)',
  };
  export function setBackground(bgEl, key){ bgEl.style.background = BGs[key] || BGs.alley; }
  export function setEndStyle(root, isEnd){ root.classList.toggle('end', !!isEnd); }
  
  export function renderScene({ titleEl, proseEl, scene }){
    titleEl.textContent = scene.title;
    document.getElementById('choices').innerHTML = '';
    proseEl.innerHTML = scene.prose;
    scene.choices.slice(0,2).forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.dataset.index = i;
      btn.innerHTML = `<span>${c.label}</span> <kbd>${i+1}</kbd>`;
      document.getElementById('choices').appendChild(btn);
    });
  }
  export function bindChoiceHandlers(choicesEl, scene, state, onPick){
    choicesEl.onclick = (e)=>{
      const btn = e.target.closest('.choice'); if(!btn) return;
      const idx = Number(btn.dataset.index);
      const raw = scene.choices[idx];
      const to = typeof raw.to === 'function' ? raw.to(state) : raw.to;
      onPick({ to, setState: raw.setState });
    };
  }
  export function shake(el){
    el.classList.remove('shake');
    void el.offsetWidth;
    el.classList.add('shake');
  }