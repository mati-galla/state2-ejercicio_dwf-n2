export const state = {
  data: {
    nombre: "",
    email: "",
    comida: "",
    opcion: "",
  },

  listeners: [],

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },

  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};
