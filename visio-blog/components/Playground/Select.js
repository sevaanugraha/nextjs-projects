import Select from "react-select";
import p5Collection, { pickUIByP5Id } from "ui/src/p5";

const P5Select = ({ value, onChange }) => {
  const valueData = pickUIByP5Id(value);

  return (
    <Select
      className="mt-3 min-w-[200px]"
      placeholder="Choose Playground"
      value={
        valueData
          ? {
              label: valueData.label,
              value: valueData.id,
            }
          : undefined
      }
      options={Object.keys(p5Collection).filter((key) => key === 'interactions').map((key) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1),
        options: p5Collection[key].map((item) => ({
          value: item.id,
          label: item.label,
        })),
      }))}
      onChange={(values) => onChange(values?.value)}
      styles={{
        option: (styles, {isSelected}) => ({
            ...styles,
            color: isSelected ? '#fff' : '#000'
        })
      }}
    />
  );
};

export default P5Select;
