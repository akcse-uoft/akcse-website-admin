import { createApp } from "./app.js";
import { env } from "./env.js";

createApp().listen(env.PORT, () => {
  console.log(`Backend listening on http://localhost:${env.PORT}`);
});
