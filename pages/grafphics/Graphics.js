import styles from "../../styles/Graphics.module.css"

import Grafico from "../Grafico";


function Graphics(){
    

return (
    <>
    <h1>Graphics</h1>
    <Grafico />
    <div>
    <table className={styles.table}>
        <tr><th className={styles.th} colSpan={4}>
        <td width="20%"className={styles.th}>Temp</td>
        <td width="20%" className={styles.th}>Local</td>
        <td width="20%" className={styles.th}>Dia</td>
        <td width="20%" className={styles.th}>Mes</td>
        <td width="20%" className={styles.th}>Ano</td>
        </th></tr>
    </table>
  
        <tbody className={styles.tbody}>
    
        {temps.length >0 ? (
        temps.map((temps, index) => (
        <tr key = {index}>
        <td width="20%"className={styles.td}>{temps.temperatura}</td>
        <td width="20%"className={styles.td}>{temps.local}</td>
        <td width="20%"className={styles.td}>{temps.dia}</td>
        <td width="20%"className={styles.td}>{temps.mes}</td>
        <td width="20%"className={styles.td}>{temps.ano}</td></tr>
        )
        )) :(
            <p1>Não há itens na lista</p1>
        )}
       
        </tbody>
       
    </div>
    </>
)
    
}
export default Graphics