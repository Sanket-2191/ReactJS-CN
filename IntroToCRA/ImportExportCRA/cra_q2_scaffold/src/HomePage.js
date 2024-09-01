// Complete the HomePage Component and export it

import { Form } from "./Form";
export let name = "sanket";
export let email = "san@gmail.com"
export function HomePage() {
  return (
    <div className="Homepage">
      {/* Create a h1 tag and render Form Component here */}
      <h1>HomePage</h1>
      <Form />
    </div>
  );
}
