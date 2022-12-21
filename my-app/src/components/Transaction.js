import Item from './Item';
import './Transaction.css'
import DataContext from './Data/DataContext';

const Transaction = (props) => {
    const {items} = props
    return(
    <div>
      <ul className='item-list'>
      {items.map((element)=> {
        return <Item {...element} key={element.id}/>
      })}
      </ul>
      {/* <p>
        <DataContext>

        </DataContext>
      </p> */}

    </div>



    );
  }

  export default Transaction