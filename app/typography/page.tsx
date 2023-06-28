import {
  Title,
  Title1,
  Title2,
  Title3,
  Subheading,
} from "../../components/Typography";

export default function Page() {
  return (
    <section className="mx-auto my-6 flex max-w-xl flex-col gap-7">
      <Title as="h2" className="ml-[-12px]">
        Title
      </Title>
      <Title1 as="h2" className="ml-[-8px]">
        Title 1
      </Title1>
      <Title2 as="h2" className="ml-[-2px]">
        Title 2
      </Title2>
      <Title3 as="h2">Title 3</Title3>
      <Subheading as="h2">Subheading</Subheading>
    </section>
  );
}
