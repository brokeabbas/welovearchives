import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the public snapshot includes its documented entry points", async () => {
  const [app, entrypoint, readme] = await Promise.all([
    readFile(new URL("../App.tsx", import.meta.url), "utf8"),
    readFile(new URL("../main.tsx", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
  ]);

  assert.match(app, /const AppWrapper/);
  assert.match(entrypoint, /createRoot/);
  assert.match(readme, /selected frontend application snapshot/i);
  assert.match(readme, /complete production system/i);
});
