import { Form, redirect, type ActionFunctionArgs } from "react-router";

export function action({ request }: ActionFunctionArgs) {
  const headers = new Headers(request.headers);
  return redirect("https://remix.run/", { headers });
}

export default function Test() {
  return (
    <Form method="post">
      <button type="submit">Redirect</button>
    </Form>
  );
}
