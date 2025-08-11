function Wrapper({children}) {        //the Value of props is set to defualt
  return (
    <div style={{color:"green", border:"2px solid black", width:"300px", height:"50px" ,margin:"20px"}}>
      {children}
    </div>
  );

}
export default Wrapper;