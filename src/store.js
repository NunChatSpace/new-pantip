import { writable } from "svelte/store";

export let PLATFORM_DESKTOP = "desktop";
export let PLATFORM_MOBILE = "mobile";
export let PLATFORM_TABLET = "tablet";
export const platform = writable("PLATFORM_DESKTOP");
