import "dotenv-load";
import { Application, Router } from "oak";

const app = new Application();
const router = new Router();

router.get("/", ({ response }) => {
  response.status = 200;
  response.body = {
    result: 'success',
    message: 'Hello World!',
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(`Listening on ${hostname}:${port}`);
});

await app.listen({ port: parseInt(Deno.env.get('PORT') || '8080') });