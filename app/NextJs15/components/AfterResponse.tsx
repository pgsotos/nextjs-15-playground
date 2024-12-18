import { unstable_after as after } from "next/server";
import { ReactNode } from "react";

export default function AfterResponse({ children }: { children: ReactNode }) {
  after(() => {
    console.log("tarea secundaria ejecutada después de la respuesta");
  });

  return (
    <div>
      <h2>unstable_after API</h2>
      <p>
        Este es un ejemplo de código que se ejecuta despues de que se envie la
        respuesta principal
      </p>
      {children}
    </div>
  );
}
