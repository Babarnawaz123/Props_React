function Sample_table() {

const UserData = [
  {
    name: "Babar",
    age: 22,
    email: "nawab@gmail.com",
    id: 1
  },
  {
    name: "Hadi",
    age: 25,
    email: "hadi@gmail.com",
    id: 2
  },
  {
    name: "Tariq",
    age: 23,
    email: "tariq@gmail.com",
    id: 3
  }
  ,
  {
    name: "Hassan",
    age: 24,
    email: "hassan@gmail.com",
    id: 4
  }
];
return (
<div>
<h1>
  loop in jsx without Map Function
</h1>
<table border="1">
  <thead>
  <tr>
    <td>Name</td>
    <td>Age</td>
    <td>Email</td>
    <td>ID</td>
  </tr>
  </thead>
  <tbody>
    <tr>
    <td>Babar</td>
    <td>22</td>
    <td>nawab@gmail.com</td>
    <td>1</td>
  </tr>
    <tr>
    <td>Hadi</td>
    <td>25</td>
    <td>hadi@gmail.com</td>
    <td>2</td>
  </tr>
    <tr>
    <td>Tariq</td>
    <td>23</td>
    <td>tariq@gmail.com</td>
    <td>1</td>
  </tr>
    <tr>
    <td>hassan</td>
    <td>24</td>
    <td>hassan@gmail.com</td>
    <td>4</td>
  </tr>
  </tbody>
</table>
<h1>loop in jsx with Map Function</h1>
<table border="1">
  <thead>
      <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Email</td>
        <td>ID</td>
      </tr>
  </thead>
  <tbody>       {/*<Map Function> */}
    {UserData.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.email}</td>
        <td>{user.id}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>


)


}
export default Sample_table;