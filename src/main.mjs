/**
 * The bookmarklet's main code.
 */

import { Log } from "./log.mjs";

/**
 * Main function.
 */
export function main() {
    const log = new Log("main()");

    // Show alert.
    alert("Hello World");
}
