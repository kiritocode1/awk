import figlet from "npm:figlet";
//! to run locally use ```deno run -A main.ts  --tuah```



//! to compile this run ```deno compile --allow-read=. -o awk  main.ts```
if (Deno.args.includes("--tuah")) {

    const text = await figlet("SPIT ON THAT String");

    console.log(text);
}