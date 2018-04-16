const checker = (store) => ( next ) => ( action ) => {
    if( action.type === ADD_TODO &&
        action.todo.name.toLowerCase().indexOf('fuck') !== -1 ){
        return alert('Shut up')
    }

    if( action.type === ADD_GOAL &&
        action.goal.name.toLowerCase().indexOf('fuck') !== -1 ){
        return alert('Shut up')
    }

    return next(action);
}

export default checker