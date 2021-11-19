interface BananasProps {
  BananaCount: number;
  handleAddBanana: any;
}

export default function Bananas(props: BananasProps): JSX.Element {
  return (
    <>
      <h2>Bananas: {props.BananaCount}</h2>
      <button onClick={props.handleAddBanana}>More Bananas</button>
    </>
  );
}
