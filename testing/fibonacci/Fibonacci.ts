"use strict";

export class Fibonacci {

    public fibonacci(n:number) {

        if (n < 1) return 0;
        n = (n > Number.MAX_SAFE_INTEGER)? Number.MAX_SAFE_INTEGER : n;
        let fib = [0,1];
        for ( let i = 2; i <= n+1; i++ ) {
            fib.push(fib[i-2] + fib[i-1]);
        }
        return fib[n];
    }

}
