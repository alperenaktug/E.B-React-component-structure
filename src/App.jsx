import "./App.css";
import Login from "./Login";
import { users } from "./Login";

function App() {
  console.log(users);
  return (
    <div>
      <Login />
      <hr />
      <Login />
      <hr />
      <Login />
      <hr />
    </div>
  );
}

export default App;

/*
Oluşturduğumuz componenti istediğimiz kadar başka yerde kullanabiliriz.

export default ile componentin içindeki herşeye erişiyoruz
export diyerek sadece o componente ait bir parçaya erişebiliyoruz.
vexport default ettiğimiz componenti normal yazarak sadece export ettiğimiz componenti ise süslü parantez içinde import etmemiz gerekir .


*/
