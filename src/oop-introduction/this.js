export function make(numer, denom) {
  return {
    numer,
    denom,

    getNumer() {
      return this.numer
    },

    setNumer(numer) {
      this.numer = numer
    },

    getDenom() {
      return this.denom
    },

    setDenom(denom) {
      this.denom = denom
    },

    add(rational) {
      return make(
        this.getNumer() * rational.getDenom() + rational.getNumer() * this.getDenom(),
        this.getDenom() * rational.getDenom(),
      )
    },

    toString() {
      return `${this.numer}/${this.denom}`
    },
  }
}
