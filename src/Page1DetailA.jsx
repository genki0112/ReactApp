import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const history = useHistory();
  console.log(history);
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>ページ１のディテールAです。</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
