import { Loader, LoadingOverlay } from "@mantine/core";

function Loading() {
  return (
    <LoadingOverlay
      visible
      loaderProps={{ children: <Loader type="bars" /> }}
    />
  );
}

export default Loading;
