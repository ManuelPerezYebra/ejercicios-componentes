const TotalPrice = ({price}) =>{
    return <h2>El precio del producto con IVA es {Number(price)+(Number(price)*0.21)}</h2>
}
export default TotalPrice