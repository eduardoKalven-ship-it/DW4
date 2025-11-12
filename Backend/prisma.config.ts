import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
enum person type{
  fisica
  juridica
}


model Account {
id            string      @id @default(uuid())
usarname      string      @id.VarChar(120)
email         string      @unique
passwordhash  string      @map("password_hash")
persontype    persontype  @unique @db.VarChar(11)

}
