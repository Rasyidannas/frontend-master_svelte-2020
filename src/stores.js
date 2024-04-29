import { readable, derived } from "svelte/store";

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

const start = new Date();

//derived for create a store whose value is based on other stores
export const elapsed = derived(time, ($time) =>
  Math.round(($time - start) / 1000)
);
