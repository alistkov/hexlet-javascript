function getGcd(a, b) {
  return (a % b) ? getGcd(b, a % b) : Math.abs(b)
}

export function makeRational(numer, denom) {
  const gcd = getGcd(numer, denom)
  return {
    numer: numer / gcd,
    denom: denom / gcd,
  }
}

export function getNumer(rational) {
  return rational.numer
}

export function getDenom(rational) {
  return rational.denom
}

export function add(rational1, rational2) {
  const numer = getNumer(rational1) * getDenom(rational2) + getNumer(rational2) * getDenom(rational1)
  const denom = getDenom(rational1) * getDenom(rational2)
  return makeRational(numer, denom)
}

export function sub(rational1, rational2) {
  const numer = getNumer(rational1) * getDenom(rational2) - getNumer(rational2) * getDenom(rational1)
  const denom = getDenom(rational1) * getDenom(rational2)
  return makeRational(numer, denom)
}

export function ratToString(rational) {
  return `${getNumer(rational)}/${getDenom(rational)}`
}
