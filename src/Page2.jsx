import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>ページ２です。</h1>
      <Link to="/page2/100">URL Parameter Page</Link>
      <br />
      <Link to="/page2/100?name=hoge">Query Parameter Page</Link>
    </div>
  );
};
