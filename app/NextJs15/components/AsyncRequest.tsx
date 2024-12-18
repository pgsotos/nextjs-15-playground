import { cookies } from "next/headers";

export default async function AsyncRequest() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return (
    <div>
      <h2>Async Request Api</h2>
      <p>
        Este ejemplo muestra como utilizar la api de cookies en el modelo
        asincrono:
      </p>
      <pre className="bg-sky-950 p-4 rounded"></pre>
      <code>token actual: {token?.value || "no encontrado"}</code>
    </div>
  );
}
