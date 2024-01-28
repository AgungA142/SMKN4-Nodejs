import process from "process";

process.addListener("exit", (exitCode) => {
    console.info("Node js Exit with code " + exitCode);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);

