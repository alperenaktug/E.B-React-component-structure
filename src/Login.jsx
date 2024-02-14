export const users = [
  {
    username: "John",
    password: "1",
  },
  {
    username: "Jeff",
    password: "2",
  },
];

function Login() {
  return (
    <div>
      <div>
        <p>Kullanıcı Adınız :</p>
        <input type="text" />
      </div>
      <div>
        <p>Kullanıcı Şifreniz :</p>
        <input type="text" />
      </div>

      <button>Girişi Yap</button>
    </div>
  );
}

export default Login;

/*
return ile bir şeyi geri dönerken ana elemente geniş kapsamlı bir dive ihtiyaç vardır . Zorunludur (must)

Fragment : Kapsayıcı div olarak kullanılabilir.
<>
</>



*/
