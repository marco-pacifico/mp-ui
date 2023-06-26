import ListItem from "../components/ListItem";

export default function Page() {
  return (
    <section className="my-6 mx-auto max-w-xl">
      <h1 className="text-gray-200 font-semibold text-4xl mb-7 pl-4">List of things</h1>
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
