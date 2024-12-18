"use client";

// import { useRouter } from "next/router";
// import { FormEvent, useEffect } from "react";

// interface FormProps {
//   action: string | (() => void);
//   [key: string]: any;
// }

// export default function FormExample(props: FormProps) {
//   const action = props.action;
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof action === "string") {
//       router.prefetch(action);
//     }
//   }, [action, router]);

//   function onSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     const data = new URLSearchParams();

//     for (const [name, value] of formData) {
//       data.append(name, value.toString());
//     }

//     router.push(`${action}?${data.toString()}`);
//   }

//   if (typeof action === "string") {
//     return <form onSubmit={onSubmit} {...props} />;
//   }

//   return <form {...props} />;
// }

//Siguiente código reemplaza el código anterior
import Form from "next/form";

export default function FormNew() {
  return (
    <Form action="/search">
      <label>
        búsqueda :
        <input
          type="text"
          name="query"
          className="border text-black rounded px-2 py-1"
        />
      </label>
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Buscar
      </button>
    </Form>
  );
}
