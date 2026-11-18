import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "../env.js";
import * as schema from "./schema.js";

// Required for Supabase's transaction pooler.
const client = postgres(env.DATABASE_URL, { prepare: false });

export const db = drizzle(client, { schema });
