import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// useState, useMemo,useCallback,useEefect,useRef
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
      <NewHeader array={data}  >
       <NewHeader2/>
      </NewHeader>
    </>
  );
};

export default Header;


type NewHeaderProps = {
  array:Array<string>;
  children?:React.ReactNode
}
function NewHeader({array,children}:NewHeaderProps) {
  return (
    <div>
     array: {array.join(' ')}
      <br />
      children: {children}
    </div>
  );
}

function NewHeader2() {
  return (
    'Test'
  );
}
