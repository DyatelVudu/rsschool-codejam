function make(...make_args){
    let buffer = [];
    let buffer_func;

    if(typeof make_args[0] === 'function') buffer_func = make_args[0];
    else buffer = make_args;

    function calc(...calc_args){
        if (typeof calc_args[0] !== 'function') {
            buffer.push(...calc_args);
            return calc;
        } else return buffer.reduce(calc_args[0]);
    }

    calc.toString = function(){
        return (buffer_func === undefined) ? null : buffer.reduce(buffer_func);
    }

    return calc;
}

module.exports = { make: make }
