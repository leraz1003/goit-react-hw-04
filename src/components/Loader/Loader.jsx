import { Grid } from "react-loader-spinner";

const Loader = () => {
  return (
    <Grid
      visible={true}
      height="30"
      width="30"
      color="#8400ff"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15px",
      }}
    />
  );
};

export default Loader;
