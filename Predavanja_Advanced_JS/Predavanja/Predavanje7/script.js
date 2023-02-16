// function first(workTime) {
//     return new Promise((resolve, reject) => {
//         if (workTime <= 0) {
//             return reject("This work time is too short to work with !!! REJECTED");
//         }
//         setTimeout(() => {
//             resolve("The time is right this promise is RESOLVED !!!");
//         }, workTime)
//     });
// }

// function second() {
//     console.log("This is the second thing in the function");
// }
// console.log(first(0));
// console.log(first(1000));

// first(1000)
//     .then((data) => {
//         console.log(data);
//         second();
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// function complex() {
//     setTimeout(function () {
//         console.log("first");
//         setTimeout(function () {
//             console.log("second");
//         }, 2000)
//         setTimeout(function () {
//             console.log("third");
//         }, 2000)
//         setTimeout(function () {
//             console.log("fourth");
//         }, 2000)
//         setTimeout(function () {
//             console.log("fifth");
//         }, 2000)

//     }, 2000)
// };
// complex();

function showDocuments(documents) {
    if (!documents && typeof documents != "object") {
        throw new Error("")
    }
    if (documents.length === 0) {
        throw new Error("No documents!!!")
    }
    documents.forEach((doc) => {
        console.log(`${doc.name}.${doc.type} - [${doc.size}mb]`);
    })
}

function getDocumentsFetch() {
    return new Promise((resolve, reject) => {
        fetch(
            "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json",

        )
            .then((result) => {
                resolve(result.json());
            })
            .catch((error) => {
                reject(error + "fetch error message");
            });
    });
}
// function getDocumentsJQuery() {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json",
//             success: (response) => {
//                 resolve(JSON.parse(response));
//             },
//             error: (err) => {
//                 reject(err);
//             },
//         })
//     })
// }

// getDocumentsJQuery()
//     .then(data => {
//         console.log("THIS IS AN ASYNC OPERATION IN THE .THEN SECTION WITH RESOLVING THE getDocumentsJQuery PROMISE");
//         showDocuments(data);

//     })
//     .catch((error) => {
//         console.log(error + " from inside the catch of the getDocumentsJQuery functions");
//     });

getDocumentsFetch()
    .then(data => {
        console.log("We got the data and it's RESOLVED from the fetch !!!");
        showDocuments(data);
    })
    .catch(err => {
        console.log(err.message + "Error from the catch");
    })
    .finally(() => {
        console.log("Finally the end of this boring class !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    });

console.log("====================================");

//How we do it at work !

async function getAllDocuments() {
    let response = await fetch(
        "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
    let result = await response.json();

    return result;
}

async function printDocsAsync() {
    try{

    
    console.log("Inside the async function");
    let docs = await getAllDocuments();
    docs.forEach((doc) => {
        console.log(`${doc.name}.${doc.type} - [${doc.size}mb]`);

    });
}
catch(error){
    console.log(error + "ERROR IN THE TRY/CATCH BLOCK");
}
}
printDocsAsync();
console.log(getAllDocuments());