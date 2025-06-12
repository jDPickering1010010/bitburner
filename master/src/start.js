export async function main(ns) {
  if (ns.getHostname() !== "home") {
    throw new Exception("Run the script from home");
  }

  await ns.wget(https://github.com/jDPickering1010010/bitburner/master/src/initHacking.js?ts=${new Date().getTime()}`,
    "initHacking.js"
  );
  ns.spawn("initHacking.js", 1);
}
