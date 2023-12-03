import { SyncLoader } from "react-spinners";

export default function Spinner() {
  return (
	<div>
	<SyncLoader
	color={"#000000"}
	loading={true}
	// cssOverride={override}
	size={15}
	aria-label="Loading Spinner"
	data-testid="loader"
	/>
	</div>
  )
}
