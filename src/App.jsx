import Modal from "./components/UI/Modal/Modal";
import PageHome from "./pages/PageHome";

const App = () => {
  // выполняется после первой отрисовки комп. 
  // это асинхронный хук

  // useEffect(() => {
  //   console.log('useEffect go! 2');
  // }, [count])

  // useEffect(() => {
  //   // fetch('https://any.ru/api/v1/trains')
  //   // .then((res) => res.json())
  //   // .then(trains => console.log(trains))

  //   console.log('fetch');
  // }, [])

  // useEffect(() => {
  //   document.addEventListener('scroll', () => {
  //     console.log('scroll');
  //   })

  //   // 1 component destroy 
  //   // 2 масив зависимостей изменился
  //   return () => {
  //     document.removeEventListener('scroll', () => {
  //     console.log('scroll');
  //   })
  //   }
    
  // }, [])
  
  return (
    <>
      {/* <div className="container">
      <PageHome></PageHome>
      </div> */}
      <Modal>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, atque.
      </Modal>
    </>
  );
  
};

export default App;
