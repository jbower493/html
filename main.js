const fred = "Fred";

function logBob() {
    const bob = "Bob";

    console.log("Bob: ", bob);
    console.log("Fred: ", fred);
}

logBob();

document.getElementById("button").addEventListener("click", () => {
    import("./modules/ken.js").then((module) => {
        console.log("Ken: ", module.ken);
    });
});
