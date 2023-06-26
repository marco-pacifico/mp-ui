import Icon from "./Icon";

export default function ListItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="px-4 py-2 rounded-xl bg-gray-950 list-none hover:bg-gray-900 group">
      <a href="/" className="flex gap-2 justify-between items-center">
        <div>
          <h1 className="text-gray-200 font-semibold group-hover:text-amber-300">
            {title}
          </h1>
          <p className="text-gray-400 group-hover:text-gray-300">{description}</p>
        </div>
        <Icon className="invisible group-hover:visible group-hover:animate-nudge fill-gray-900"/>
      </a>
    </li>
  );
}
