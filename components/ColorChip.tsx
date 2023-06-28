export default function ColorChip({
  color,
  shade,
  value,
}: {
  color: string;
  shade: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className=" h-24 w-24 rounded-xl border-[1px] border-gray-100/10"
        style={{ backgroundColor: value }}
      ></div>
      <div>
        <p className="font-semibold text-gray-200">{shade}</p>
        <p className="text-gray-300">{value}</p>
      </div>
    </div>
  );
}
