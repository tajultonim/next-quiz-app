import Answer from "../components/quiz component/Answer";
// import MiniPlayer from "../components/quiz component/MiniPlayer";
import ProgessBar from "../components/quiz component/ProgressBar";

import Nav from "../components/Nav";

const Quiz = () => {
  return (
    <>
      <Nav />
      
      <div className="mx-10">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold mt-4">
            Pick three of your favorite Star Wars Flims
          </h1>
          <h4 className="text-xl mt-2 font-semibold text-gray-600">
            Question can have multiple answers
          </h4>
        </div>

        <Answer />
        {/* <MiniPlayer /> */}
        <ProgessBar />
      </div>
    </>
  );
};

export default Quiz;
