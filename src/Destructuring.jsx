/* eslint-disable react/prop-types */
export default function Destructuring(props) {
  const { f_name, l_name } = props;
  return (
    <div>
      Destructuring____________ <br />
      {f_name} {l_name}
    </div>
  );
}
