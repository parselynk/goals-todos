const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The action: ')
    console.log(action)
    const result = next(action)
    console.log('The new state: ') 
    console.log(store.getState())
    console.groupEnd()
    return result
}

export default logger