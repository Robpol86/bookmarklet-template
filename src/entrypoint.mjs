/**
 * Entrypoint of the bookmarklet.
 */

import { Log } from "./log.mjs";
import { main } from "./main.mjs";

/**
 * Entrypoint function of the bookmarklet.
 */
function entrypoint() {
    const log = new Log(__FNAME_LINENO__);
    log.debug("Start");
    try {
        return main();
    } finally {
        log.debug("End");
    }
}

// Call immediately (required for Terser to produce IIFE).
entrypoint();
