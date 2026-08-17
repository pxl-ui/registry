import examples from "~/lib/examples";

export default function ExampleRenderer({ src }: { src: string }) {
  const Component = examples.components.get(src);

  if (!Component) {
    return null;
  }

  return <Component />;
}
