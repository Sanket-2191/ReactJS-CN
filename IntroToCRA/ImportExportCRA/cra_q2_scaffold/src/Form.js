// Complete the Form Component and export it

import { email, name } from "./HomePage";

const submitHandlerS = (e) => {
  e.preventDefault();
}

export const Form = () => (
  <>
    <div>
      <form>{/* Create a h3, 2 inputs and 1 button here */}
        <h3>Login Page</h3>
        <input type="text" placeholder="Name" value={name} />
        <input type="email" placeholder="Email" value={email} />
        <button type="submit" onSubmit={submitHandlerS}>Login</button>
      </form>
    </div>
  </>
);
