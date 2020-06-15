export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => (
      location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    )
  )
}

export function navbar(location) {
  return location.pathname === "/"
}

export function angular7(location) {

  return prefix(location, 'angular-siete')
}
export function angular9(location) {

  return prefix(location, 'angular-nueve')
}

export function ngGenesisAngular9(location) {

  return prefix(location, 'ng-genesis-app')
}
export function react(location) {

  return prefix(location, 'react-hook')
}

export function vue(location) {

  return prefix(location, 'vue')
}