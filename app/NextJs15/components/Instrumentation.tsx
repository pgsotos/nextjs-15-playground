export async function register() {
  // init your favorite observability provider SDK
  console.log("Instrumentation registered");
}

export async function onRequestError(err: Error) {
  console.error("Request error", err);
}
