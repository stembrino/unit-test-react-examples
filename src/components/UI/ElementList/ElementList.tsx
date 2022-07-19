const ElementList = (props: { text: string; email: string }) => {
  return (
    <li aria-label="line">
      {props.text} | {props.email}
    </li>
  );
};

export default ElementList;
