import "./App.css";
import Hello from "./Hello";
import Login from "./Login";
import { users } from "./Login";

function App() {
  console.log(users);
  return (
    <div>
      <Login />

      <Hello />
    </div>
  );
}

export default App;

/*
Oluşturduğumuz componenti istediğimiz kadar başka yerde kullanabiliriz.

export default ile componentin içindeki herşeye erişiyoruz
export diyerek sadece o componente ait bir parçaya erişebiliyoruz.
vexport default ettiğimiz componenti normal yazarak sadece export ettiğimiz componenti ise süslü parantez içinde import etmemiz gerekir .
-----------------------------------------------

Js-Jsx Arasındaki Fark :
jsx ile direk html in içinden javascript kodlarına erişip kolayca işlemimizi yaparken 
js ile yaptığımızda kök dizinde return React.createElement("div" , null , "Hello world") diyerk uğraşmamız gerek

*/
