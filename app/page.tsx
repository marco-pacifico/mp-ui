import ListItem from "../components/ListItem";

export default function Page() {
  return (
    <section className="mx-auto my-6 max-w-xl">
      <h1 className="mb-7 pl-4 text-4xl font-semibold text-gray-200">
        List of things
      </h1>
      <ol>
        {DATA.map(({ title, description }, index) => (
          <ListItem key={index} title={title} description={description} />
        ))}
      </ol>
    </section>
  );
}

const DATA = [
  { title: "This is the title", description: "This is the description" },
  { title: "This is the title", description: "This is the description" },
  { title: "This is the title", description: "This is the description" },
  { title: "This is the title", description: "This is the description" },
  { title: "This is the title", description: "This is the description" },
  { title: "This is the title", description: "This is the description" },
  { title: "This is the title", description: "This is the description" },
  { title: "This is the title", description: "This is the description" },
  { title: "This is the title", description: "This is the description" },
  { title: "This is the title", description: "This is the description" },
  { title: "This is the title", description: "This is the description" },
  { title: "This is the title", description: "This is the description" },
  { title: "This is the title", description: "This is the description" },
];
