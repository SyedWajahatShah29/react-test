import React, {
  useCallback,
  useMemo,
  useState
} from "react";

// useState, useMemo, useCallback, useEefect, useRef
const Header = () => {
  const [data, setdata] = useState(["test"]);

  const drivedData = useMemo(() => {
    return data.join(" ");
  }, [data]);

  const handleClick = useCallback((array: Array<string>) => {
    setTimeout(() => {
      setdata(array);
    }, 2500);
  }, []);

  return (
    <>
      {drivedData}
      <button onClick={() => handleClick(["test_1", "test_2"])}>
        change array
      </button>
      <NewHeader array={data}/>
    </>
  );
};

export default Header;

type NewHeaderProps = {
  array: Array<string>;
  children?: React.ReactNode;
};
function NewHeader({ array }: NewHeaderProps) {
  return (
    <div>
      array: {array.join(" ")}
    </div>
  );
}
