import { json } from "@sveltejs/kit";

export function GET() {
  const randomNumber = Math.random();
  return json(randomNumber);
}
