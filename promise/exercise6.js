const promise = Promise.reject(new Error("SECRET ERROR"));

promise.catch( console.log );