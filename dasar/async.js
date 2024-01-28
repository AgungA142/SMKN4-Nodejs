function samplePromise() {
    return Promise.resolve('samplePromise');
}

async function run() {
        
    const name = await samplePromise();
    console.info(name);
}

run();