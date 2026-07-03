import dns from "node:dns";

// Force Node.js to use public DNS servers
dns.setServers([
  "1.1.1.1",
  "1.0.0.1",
]);

console.log("Using DNS Servers:", dns.getServers());