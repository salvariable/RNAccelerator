type MyResponse = {
    status: string;
    data: number[];
}

async function fetchData(url: string): Promise<MyResponse> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "success") {
                resolve({
                    status: "success",
                    data: [1, 2, 3, 4, 5]
                }
                );
            } else {
                reject("Error fetching data");
            }
        }, 2000)
    })
}

async function processData(params: number[]): Promise<number[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(params.map(num => num * 2))
        }, 1000)
    })
}

async function displayData(params: number[]): Promise<void> {
    return new Promise((resolve, reject) => {
        resolve(console.log(params))
    })
}

async function fetchAndProcessData(url: string): Promise<void> {
    try {
        const fetched = await fetchData(url);
        const processed = await processData(fetched.data);
        await displayData(processed);
    } catch (error) {
        console.log(error);
    }
}

fetchAndProcessData('success');