//import FunctionalComponent from "./compenents/LessonTwo/FunctionalComponent.tsx";
//import ClassComponent from "./compenents/LessonTwo/ClassComponent.tsx";
//import ArrowFunctionalComponent from "./compenents/LessonTwo/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./compenents/LessonThree/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./compenents/Layout.tsx";

// type PropsA = {
//   title: string,
//   description: string,
// }
//
// type PropsB = {
//   title: string,
//   description: string,
// }
//
// interface PropsTwo {
//   title: string,
//   description: string,
// }
//
// // UNION
// type Status = "Error" | "Info" | "Warning";
//
// // Tuples
// type Coordinates = [number, number];
//
// // Functions
// type ClickHandler = (event: MouseEvent) => void;
//
// INTERSECTION
// // type Props = PropsA & PropsB;
//
// interface PropsTwo {
//   price: number,
//   sort: number,
// }
// // PropsTwo = {title, description, price, sort}
//
// interface PropsThree extends PropsTwo {
//   image: string,
// }
// // PropsThree = {title, description, price, sort, image}

function App() {




  return (
    <>
      {/* LESSON TWO */}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<ClassComponent />*/}
      {/*<ArrowFunctionalComponent />*/}
        {/*<h2 className="cf-text" id="id"></h2> /!*  h2.cf-text#id  *!/*/}

        {/*Lorem ipsum dolor sit amet.*/}
        {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, recusandae.*/}
        {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur cumque dolor eius, fuga fugiat in inventore laborum maiores minus odit praesentium qui ullam voluptatem voluptatum? Delectus harum iste quaerat!*/}

        {/*/!*lorem  *!/*/}
        {/*/!*lorem10*!/*/}
        {/*/!*lorem100 + tab  *!/*/}

      {/* LESSON THREE */}
{/*      <ArrowFunctionalComponentWithProps title="Heading 1" />*/}
{/*      <ArrowFunctionalComponentWithProps*/}
{/*          title="Second Title"*/}
{/*          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consequuntur doloremque enim expedita molestias mollitia natus nesciunt quae quasi quia.*/}
{/*" />*/}

      <Layout>
          <ArrowFunctionalComponentWithProps
              title="Second Title"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consequuntur doloremque enim expedita molestias mollitia natus nesciunt quae quasi quia."
          />
          <p className="text-red-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, itaque?</p>
      </Layout>



    </>
  )
}

export default App
