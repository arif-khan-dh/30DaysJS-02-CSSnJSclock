const states = {
    running: false,
    paused: false,
    setState: function(target, value) {
        this[target] = value
    },
    getState: function(target) {
        return this[target]
    }
}

console.log(states.running + ' ' + states.paused)
states.setState('running', true)
console.log(states.running + ' ' + states.paused)
states.setState('paused', true)
console.log(states.getState('running') + ' ' + states['paused'])