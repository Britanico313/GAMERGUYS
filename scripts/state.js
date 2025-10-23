
export function createInitialState(){
  return {
    current: 'alley-wake',
    flags: {},
    visited: {},
    endings: {},
    volume: 0.35,
  };
}
export function saveState(state){
  try{ localStorage.setItem('nightsplit.save', JSON.stringify(state)); }catch{}
}
export function loadState(){
  try{ return JSON.parse(localStorage.getItem('nightsplit.save')) || null; }catch{ return null; }
}
export function clearState(){
  try{ localStorage.removeItem('nightsplit.save'); }catch{}
}

