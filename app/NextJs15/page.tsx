import AfterResponse from "./components/AfterResponse";
import AsyncRequest from "./components/AsyncRequest";
import CachingExample from "./components/CachingExample";
import FormNew from "./components/Form";

const NextJsPage = () => {
  return (
    <>
      <AfterResponse>
        <h2>Unstable After API CHILD</h2>
      </AfterResponse>
      <AsyncRequest />
      <CachingExample />
      <FormNew />
    </>
  );
};

export default NextJsPage;
