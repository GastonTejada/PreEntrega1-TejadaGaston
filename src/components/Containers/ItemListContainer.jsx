import styles from './ItemListContainer.module.css'

const ItemListContainer = ({ greeting }) => {

    return (
        <div className={styles['itemListContainer']}>            
            <h1 className="subtitulo"> {greeting} </h1>                    
        </div>
    );
}

export default ItemListContainer;

<ItemListContainer />