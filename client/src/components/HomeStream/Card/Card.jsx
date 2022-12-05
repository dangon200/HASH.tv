import { useModal } from "../Modal/useModal";
import Modal from "../Modal/Modal";
import UpdateStream from "../UpdateStream/UpdateStream";
import styles from './Card.module.css'

const Card = ({stream}) => {

    console.log(stream, 'stream')

    const [isOpenModalEdid, openModalEdid, closeModalEdid] = useModal(false)

    return (
      <div className={styles.cardStream}>

        <div className={`${styles.card} ${styles.cardBoxUsers}`}>
          <div>
            <h2>{stream.title}</h2>
            <img className={styles.cardImage} src={stream.image} alt="image" />
          </div>
          <div>
            <div className={styles.title} >User <p className={styles.content}>{stream.user}</p></div>
            <div className={styles.title}>Name <p className={styles.content}>{stream.name}</p></div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardBoxContent}`}>
          <div className={`${styles.title} ${styles.titleMod}`}>Description <p className={styles.content}>{stream.description}</p> </div>
          <div className= {`${styles.title} ${styles.titleMod}`}>Categories <p className={styles.content}>{stream.category.join(',')}</p> </div>
        </div>

        <div className={`${styles.card} ${styles.cardBoxReglas}`}>
          <div className={`${styles.title} ${styles.titleMod}`}>Rules <p className={styles.content}>{stream.rules}</p> </div>
          <div className={`${styles.title} ${styles.titleMod}`}>Suscriptores <p className={styles.content}>{stream.suscriptores}</p> </div>
        </div>

        <div className={`${styles.card} ${styles.cardBoxCountry}`}>
          <div className={`${styles.title} ${styles.titleMod}`}>Language <p className={styles.content}>{stream.language.join('-')}</p> </div>
          <div className={`${styles.title} ${styles.titleMod}`}>Continent <p className={styles.content}>{stream.continent.join('-')}</p> </div>
        </div>

        <div className={`${styles.card} ${styles.cardBoxEdid}`}>
          <button onClick={openModalEdid} className={styles.edid}>Edid</button>
          <Modal isOpen={isOpenModalEdid} closeModal={closeModalEdid}>
            <UpdateStream id={stream._id}></UpdateStream>
          </Modal>
        </div>

        <div className={`${styles.card} ${styles.cardBoxStream}`}>
          <button className={styles.stream}>Iniciar Stream</button>
        </div>

      </div>
    );
}

export default Card
