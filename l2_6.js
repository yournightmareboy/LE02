function memoize(fn) {
    const cache = new Map();
    return function(...args) {const key = JSON.stringify(args);
        if (cache.has(key)) {console.log('Retornando do cache:', key);
            return cache.get(key);}
        const result = fn.apply(this, args);
        cache.set(key, result);
        
        console.log('Calculando e armazenando no cache:', key);
        return result;
    };
}