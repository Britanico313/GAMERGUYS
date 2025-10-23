export class Engine{
    constructor({ getScene, onRender, onStart }){
      this.getScene = getScene;
      this.onRender = onRender;
      this.onStart = onStart;
      this.state = null;
    }
    start(state){
      this.state = state;
      this.state.visited[state.current] = true;
      const scene = this.getScene(state.current, this.state);
      this.onStart?.(scene, this.state);
      this.onRender(scene, this.state);
    }
    resume(saved){
      this.state = saved;
      const scene = this.getScene(this.state.current, this.state);
      this.onRender(scene, this.state);
    }
    goto(idOrFn){
      const scene = this.getScene(idOrFn, this.state);
      this.state.current = scene.id;
      this.state.visited[scene.id] = true;
      this.onRender(scene, this.state);
    }
    choose(index){
      const scene = this.getScene(this.state.current, this.state);
      const choice = scene.choices[index];
      if(!choice) return;
      const to = typeof choice.to === 'function' ? choice.to(this.state) : choice.to;
      choice.setState?.(this.state);
      this.goto(to);
    }
  }
  