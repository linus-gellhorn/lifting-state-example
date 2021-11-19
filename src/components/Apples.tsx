interface ApplesProps {
  AppleCount: number;
  handleAddApple: any;
}

export default function Apples(props: ApplesProps): JSX.Element {
  return (
    <>
      <h2>Apples: {props.AppleCount}</h2>
      <button onClick={props.handleAddApple}>More Apples</button>
    </>
  );
}
