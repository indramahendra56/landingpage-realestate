"use client";
const Button = (props) => {
  console.log(props);
  return (
    <button className="text-black bg-blue font-bold py-2 px-4 rounded">
      {props.children}
    </button>
  );
};

export default Button;
