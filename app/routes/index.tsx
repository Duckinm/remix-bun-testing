export default function Index() {
  return (
    <main>
      <h1>Hello, Bun!</h1>
      <p>
        This is a simple example of a{" "}
        <a href="https://remix.run/" target="_blank" rel="noopener noreferrer">
          Remix
        </a>{" "}
        application running on{" "}
        <a href="https://bun.sh/" target="_blank" rel="noopener noreferrer">
          Bun
        </a>
        .
      </p>
      <p>
        It's deployed to{" "}
        <a href="https://fly.io/" target="_blank" rel="noopener noreferrer">
          Fly.io
        </a>{" "}
        with a volume to store a SQLite DB.
      </p>
    </main>
  );
}
