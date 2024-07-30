function good(name) {
    console.log(`Hey, ${name}!`);
}

good("rahul");


// Asynchronous with callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "rahul", age: 23 };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log("Received:", data);
});


// Creating a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "rahul", age: 22 };
            resolve(data);
        }, 2000);
    });
}

// Consuming a Promise
fetchData()
    .then((data) => {
        console.log("Received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    // Using async/await
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "rahul", age: 25 };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log("Received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();




