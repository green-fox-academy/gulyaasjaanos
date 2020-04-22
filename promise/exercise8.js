const attachTitle = (arg) => `DR. ${arg}`;

const promise = Promise.resolve("MANHATTAN");

promise
    .then(attachTitle)
    .then(console.log);
