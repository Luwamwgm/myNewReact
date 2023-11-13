//import "./styles.css";
/*export default function () {
  return (
<>
      <h1>Home</h1>
  
      
       <img src="/it's potty time_1.jpg" alt="It's potty time" />
        
      
    </>

  );
}*/

//import image1 from '/my-app/public/it's potty time_1.jpg';
//import image2 from '/my-app/public/lama lama ref pajama_1.jpg';


function Items(props) {
  return 
  <li> It is { props.type }</li>;
}

function getBooks() {
  //const books = [{id:1,name:'Pottytime'},{id:2, name: 'Peppapig'},{id:3, name:'llamallama'}];
  const books = [{id:1,name:'Pottytime'},{id:2, name: 'Peppapig'},{id:3, name:'llamallama'}];
  return (
    <>
     // <h1>Find our books?</h1>
      <h1>Books</h1>
  
      
  <img src="/it's potty time_1.jpg" alt="It's potty time" />
      <ul>
        {books.map((book) => <Items key={book.id} type={book.name} picture={book.image}/>)}
      </ul>
    </>
  );
}
export default getBooks;
//export default Garage;
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Garage />);
